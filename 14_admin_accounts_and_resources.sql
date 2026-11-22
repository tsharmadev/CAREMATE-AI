-- Platform admin permissions, resource catalog and immutable audit records.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS admin_resources (
  resource_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  resource_key VARCHAR(100) NOT NULL,
  resource_name VARCHAR(180) NOT NULL,
  description TEXT NULL,
  PRIMARY KEY (resource_id),
  UNIQUE KEY uq_admin_resources_key (resource_key)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS admin_role_permissions (
  role_id BIGINT UNSIGNED NOT NULL,
  resource_id BIGINT UNSIGNED NOT NULL,
  permission_key VARCHAR(40) NOT NULL COMMENT 'READ, CREATE, UPDATE, DELETE, APPROVE, EXPORT',
  PRIMARY KEY (role_id, resource_id, permission_key),
  CONSTRAINT fk_admin_role_permissions_role FOREIGN KEY (role_id) REFERENCES app_roles(role_id) ON DELETE CASCADE,
  CONSTRAINT fk_admin_role_permissions_resource FOREIGN KEY (resource_id) REFERENCES admin_resources(resource_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS admin_user_scopes (
  admin_scope_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  scope_type VARCHAR(40) NOT NULL,
  scope_id BIGINT UNSIGNED NULL,
  granted_by_user_id BIGINT UNSIGNED NULL,
  starts_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME NULL,
  PRIMARY KEY (admin_scope_id),
  KEY idx_admin_user_scopes_user (user_id, expires_at),
  CONSTRAINT fk_admin_user_scopes_user FOREIGN KEY (user_id) REFERENCES app_users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_admin_user_scopes_granter FOREIGN KEY (granted_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS admin_audit_log (
  audit_log_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  actor_user_id BIGINT UNSIGNED NULL,
  action_key VARCHAR(100) NOT NULL,
  entity_type VARCHAR(100) NOT NULL,
  entity_id BIGINT UNSIGNED NULL,
  outcome VARCHAR(24) NOT NULL DEFAULT 'SUCCESS',
  reason TEXT NULL,
  metadata JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (audit_log_id),
  KEY idx_admin_audit_actor_time (actor_user_id, created_at),
  KEY idx_admin_audit_entity (entity_type, entity_id, created_at),
  CONSTRAINT fk_admin_audit_actor FOREIGN KEY (actor_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

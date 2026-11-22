-- Institution-level admin memberships and managed resource inventory.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS institutional_admin_memberships (
  membership_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  institutional_role VARCHAR(80) NOT NULL,
  membership_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  approved_by_user_id BIGINT UNSIGNED NULL,
  approved_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (membership_id),
  UNIQUE KEY uq_institutional_admin_membership (institution_id, user_id),
  KEY idx_institutional_admin_status (institution_id, membership_status),
  CONSTRAINT fk_institutional_admin_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id),
  CONSTRAINT fk_institutional_admin_user FOREIGN KEY (user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_institutional_admin_approver FOREIGN KEY (approved_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS institutional_resources (
  institutional_resource_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  resource_type VARCHAR(80) NOT NULL,
  resource_name VARCHAR(180) NOT NULL,
  quantity INT UNSIGNED NULL,
  capacity INT UNSIGNED NULL,
  service_status VARCHAR(24) NOT NULL DEFAULT 'ACTIVE',
  source_or_evidence_key VARCHAR(500) NULL,
  last_confirmed_at DATETIME NULL,
  updated_by_user_id BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (institutional_resource_id),
  KEY idx_institutional_resources_institution (institution_id, resource_type),
  CONSTRAINT fk_institutional_resources_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id),
  CONSTRAINT fk_institutional_resources_updater FOREIGN KEY (updated_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS institutional_resource_change_log (
  change_log_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institutional_resource_id BIGINT UNSIGNED NOT NULL,
  changed_by_user_id BIGINT UNSIGNED NULL,
  change_summary TEXT NULL,
  old_values JSON NULL,
  new_values JSON NULL,
  changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (change_log_id),
  KEY idx_institutional_resource_change (institutional_resource_id, changed_at),
  CONSTRAINT fk_institutional_resource_change_resource FOREIGN KEY (institutional_resource_id) REFERENCES institutional_resources(institutional_resource_id),
  CONSTRAINT fk_institutional_resource_change_user FOREIGN KEY (changed_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

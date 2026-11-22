-- Assistance case intake, assignment, notes and secure attachment metadata.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS assistance_cases (
  assistance_case_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  case_reference VARCHAR(80) NOT NULL,
  patient_profile_id BIGINT UNSIGNED NULL,
  opened_by_user_id BIGINT UNSIGNED NOT NULL,
  assigned_to_user_id BIGINT UNSIGNED NULL,
  assistance_type VARCHAR(60) NOT NULL,
  source_module VARCHAR(80) NULL,
  subject VARCHAR(220) NOT NULL,
  summary TEXT NOT NULL,
  priority VARCHAR(24) NOT NULL DEFAULT 'NORMAL',
  case_status VARCHAR(24) NOT NULL DEFAULT 'OPEN',
  opened_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  closed_at DATETIME NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (assistance_case_id),
  UNIQUE KEY uq_assistance_case_reference (case_reference),
  KEY idx_assistance_case_queue (case_status, priority, opened_at),
  KEY idx_assistance_case_assignee (assigned_to_user_id, case_status),
  CONSTRAINT fk_assistance_case_patient FOREIGN KEY (patient_profile_id) REFERENCES patient_profiles(patient_profile_id) ON DELETE SET NULL,
  CONSTRAINT fk_assistance_case_opener FOREIGN KEY (opened_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_assistance_case_assignee FOREIGN KEY (assigned_to_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS assistance_case_updates (
  case_update_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  assistance_case_id BIGINT UNSIGNED NOT NULL,
  author_user_id BIGINT UNSIGNED NOT NULL,
  update_type VARCHAR(40) NOT NULL DEFAULT 'NOTE',
  update_text TEXT NOT NULL,
  visibility VARCHAR(24) NOT NULL DEFAULT 'INTERNAL',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (case_update_id),
  KEY idx_assistance_case_updates_case (assistance_case_id, created_at),
  CONSTRAINT fk_assistance_case_updates_case FOREIGN KEY (assistance_case_id) REFERENCES assistance_cases(assistance_case_id) ON DELETE CASCADE,
  CONSTRAINT fk_assistance_case_updates_author FOREIGN KEY (author_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS assistance_case_attachments (
  case_attachment_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  assistance_case_id BIGINT UNSIGNED NOT NULL,
  uploaded_by_user_id BIGINT UNSIGNED NOT NULL,
  attachment_type VARCHAR(100) NOT NULL,
  object_key VARCHAR(500) NOT NULL COMMENT 'Private object-storage key; enforce authorization on download',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (case_attachment_id),
  KEY idx_assistance_case_attachments_case (assistance_case_id),
  CONSTRAINT fk_assistance_case_attachments_case FOREIGN KEY (assistance_case_id) REFERENCES assistance_cases(assistance_case_id) ON DELETE CASCADE,
  CONSTRAINT fk_assistance_case_attachments_user FOREIGN KEY (uploaded_by_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

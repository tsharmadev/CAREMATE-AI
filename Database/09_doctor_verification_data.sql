-- Doctor credential applications, document metadata and council audit trail.
-- Never store OTP codes or uploaded file bytes in these tables.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS doctor_verification_applications (
  verification_application_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  doctor_id BIGINT UNSIGNED NOT NULL,
  submitted_by_user_id BIGINT UNSIGNED NULL,
  application_status VARCHAR(32) NOT NULL DEFAULT 'DRAFT',
  submitted_at DATETIME NULL,
  assigned_reviewer_user_id BIGINT UNSIGNED NULL,
  reviewed_at DATETIME NULL,
  decision_reason TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (verification_application_id),
  KEY idx_doctor_verification_status (application_status, submitted_at),
  KEY idx_doctor_verification_reviewer (assigned_reviewer_user_id, application_status),
  CONSTRAINT fk_doctor_verification_doctor FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
  CONSTRAINT fk_doctor_verification_submitter FOREIGN KEY (submitted_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL,
  CONSTRAINT fk_doctor_verification_reviewer FOREIGN KEY (assigned_reviewer_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS doctor_verification_documents (
  verification_document_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  verification_application_id BIGINT UNSIGNED NOT NULL,
  document_type VARCHAR(100) NOT NULL,
  object_key VARCHAR(500) NOT NULL COMMENT 'Private object-storage key, not a public URL',
  checksum_sha256 CHAR(64) NULL,
  uploaded_by_user_id BIGINT UNSIGNED NOT NULL,
  review_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  reviewed_by_user_id BIGINT UNSIGNED NULL,
  reviewed_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (verification_document_id),
  KEY idx_doctor_verification_docs_app (verification_application_id, review_status),
  CONSTRAINT fk_doctor_verification_docs_app FOREIGN KEY (verification_application_id) REFERENCES doctor_verification_applications(verification_application_id) ON DELETE CASCADE,
  CONSTRAINT fk_doctor_verification_docs_uploader FOREIGN KEY (uploaded_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_doctor_verification_docs_reviewer FOREIGN KEY (reviewed_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS doctor_council_checks (
  council_check_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  verification_application_id BIGINT UNSIGNED NOT NULL,
  council_name VARCHAR(180) NOT NULL,
  registration_number VARCHAR(100) NOT NULL,
  check_source VARCHAR(300) NULL,
  check_outcome VARCHAR(32) NOT NULL,
  checked_by_user_id BIGINT UNSIGNED NULL,
  checked_at DATETIME NOT NULL,
  reviewer_notes TEXT NULL,
  PRIMARY KEY (council_check_id),
  KEY idx_doctor_council_checks_app (verification_application_id, checked_at),
  CONSTRAINT fk_doctor_council_checks_app FOREIGN KEY (verification_application_id) REFERENCES doctor_verification_applications(verification_application_id) ON DELETE CASCADE,
  CONSTRAINT fk_doctor_council_checks_user FOREIGN KEY (checked_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS doctor_identity_verification_events (
  identity_event_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  verification_application_id BIGINT UNSIGNED NOT NULL,
  channel VARCHAR(24) NOT NULL,
  destination_masked VARCHAR(100) NULL,
  provider_reference VARCHAR(180) NULL,
  event_status VARCHAR(24) NOT NULL,
  requested_at DATETIME NOT NULL,
  verified_at DATETIME NULL,
  attempt_count SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (identity_event_id),
  KEY idx_doctor_identity_events_app (verification_application_id, requested_at),
  CONSTRAINT fk_doctor_identity_events_app FOREIGN KEY (verification_application_id) REFERENCES doctor_verification_applications(verification_application_id) ON DELETE CASCADE
) ENGINE=InnoDB;

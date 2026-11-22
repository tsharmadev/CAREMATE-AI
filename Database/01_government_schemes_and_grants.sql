-- Government schemes, financial grants, eligibility screening and application tracking.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS government_schemes (
  scheme_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  scheme_code VARCHAR(80) NOT NULL,
  scheme_name VARCHAR(240) NOT NULL,
  administering_body VARCHAR(220) NULL,
  scheme_level VARCHAR(24) NOT NULL,
  state_id BIGINT UNSIGNED NULL,
  summary TEXT NULL,
  eligibility_rules JSON NULL,
  benefit_description TEXT NULL,
  max_benefit_amount DECIMAL(14,2) NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  official_url VARCHAR(500) NULL,
  helpline VARCHAR(80) NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  last_verified_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (scheme_id),
  UNIQUE KEY uq_government_schemes_code (scheme_code),
  KEY idx_government_schemes_state (state_id, is_active),
  CONSTRAINT fk_government_schemes_state FOREIGN KEY (state_id) REFERENCES states(state_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS scheme_required_documents (
  required_document_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  scheme_id BIGINT UNSIGNED NOT NULL,
  document_name VARCHAR(180) NOT NULL,
  instructions TEXT NULL,
  is_mandatory BOOLEAN NOT NULL DEFAULT TRUE,
  display_order SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (required_document_id),
  KEY idx_scheme_required_documents_scheme (scheme_id),
  CONSTRAINT fk_scheme_required_documents_scheme FOREIGN KEY (scheme_id) REFERENCES government_schemes(scheme_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS scheme_applications (
  scheme_application_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  scheme_id BIGINT UNSIGNED NOT NULL,
  patient_profile_id BIGINT UNSIGNED NOT NULL,
  submitted_by_user_id BIGINT UNSIGNED NOT NULL,
  application_reference VARCHAR(120) NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'DRAFT',
  requested_amount DECIMAL(14,2) NULL,
  approved_amount DECIMAL(14,2) NULL,
  submitted_at DATETIME NULL,
  decision_at DATETIME NULL,
  case_notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (scheme_application_id),
  KEY idx_scheme_applications_patient (patient_profile_id, status),
  KEY idx_scheme_applications_scheme (scheme_id, status),
  CONSTRAINT fk_scheme_applications_scheme FOREIGN KEY (scheme_id) REFERENCES government_schemes(scheme_id),
  CONSTRAINT fk_scheme_applications_patient FOREIGN KEY (patient_profile_id) REFERENCES patient_profiles(patient_profile_id),
  CONSTRAINT fk_scheme_applications_submitter FOREIGN KEY (submitted_by_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS scheme_application_documents (
  document_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  scheme_application_id BIGINT UNSIGNED NOT NULL,
  document_type VARCHAR(100) NOT NULL,
  object_key VARCHAR(500) NOT NULL COMMENT 'Private object-storage key; do not store file bytes here',
  uploaded_by_user_id BIGINT UNSIGNED NOT NULL,
  review_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (document_id),
  KEY idx_scheme_application_documents_app (scheme_application_id, review_status),
  CONSTRAINT fk_scheme_application_documents_app FOREIGN KEY (scheme_application_id) REFERENCES scheme_applications(scheme_application_id) ON DELETE CASCADE,
  CONSTRAINT fk_scheme_application_documents_uploader FOREIGN KEY (uploaded_by_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

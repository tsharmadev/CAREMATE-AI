-- Doctor/specialist directory. Credential workflow is in 09_doctor_verification.sql.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS doctors (
  doctor_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NULL,
  full_name VARCHAR(180) NOT NULL,
  primary_specialty VARCHAR(140) NOT NULL,
  subspecialty VARCHAR(180) NULL,
  registration_council VARCHAR(160) NULL,
  registration_number VARCHAR(100) NULL,
  years_experience SMALLINT UNSIGNED NULL,
  public_bio TEXT NULL,
  profile_visibility VARCHAR(20) NOT NULL DEFAULT 'PRIVATE',
  directory_status VARCHAR(24) NOT NULL DEFAULT 'PENDING_VERIFICATION',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (doctor_id),
  UNIQUE KEY uq_doctors_user (user_id),
  UNIQUE KEY uq_doctors_registration (registration_council, registration_number),
  KEY idx_doctors_specialty (primary_specialty, directory_status),
  KEY idx_doctors_name (full_name),
  CONSTRAINT fk_doctors_user FOREIGN KEY (user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS doctor_institution_affiliations (
  affiliation_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  doctor_id BIGINT UNSIGNED NOT NULL,
  institution_id BIGINT UNSIGNED NOT NULL,
  position_title VARCHAR(140) NULL,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  started_on DATE NULL,
  ended_on DATE NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (affiliation_id),
  UNIQUE KEY uq_doctor_institution_affiliation (doctor_id, institution_id),
  KEY idx_doctor_affiliations_institution (institution_id),
  CONSTRAINT fk_doctor_affiliations_doctor FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id) ON DELETE CASCADE,
  CONSTRAINT fk_doctor_affiliations_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

-- Hospital/cancer-centre directory and hospital-to-scheme empanelments.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS hospitals (
  hospital_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  hospital_category VARCHAR(80) NULL,
  total_beds INT UNSIGNED NULL,
  linac_units SMALLINT UNSIGNED NULL,
  pet_ct_units SMALLINT UNSIGNED NULL,
  has_pet_ct BOOLEAN NOT NULL DEFAULT FALSE,
  has_emergency_oncology BOOLEAN NOT NULL DEFAULT FALSE,
  referral_notes TEXT NULL,
  source_checked_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (hospital_id),
  UNIQUE KEY uq_hospitals_institution (institution_id),
  CONSTRAINT fk_hospitals_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hospital_scheme_empanelments (
  hospital_id BIGINT UNSIGNED NOT NULL,
  scheme_id BIGINT UNSIGNED NOT NULL,
  empanelment_reference VARCHAR(120) NULL,
  status VARCHAR(24) NOT NULL DEFAULT 'ACTIVE',
  verified_at DATETIME NULL,
  PRIMARY KEY (hospital_id, scheme_id),
  CONSTRAINT fk_hospital_scheme_hospital FOREIGN KEY (hospital_id) REFERENCES hospitals(hospital_id) ON DELETE CASCADE,
  CONSTRAINT fk_hospital_scheme_scheme FOREIGN KEY (scheme_id) REFERENCES government_schemes(scheme_id)
) ENGINE=InnoDB;

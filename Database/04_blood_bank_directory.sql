-- Blood-bank and apheresis directory.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS blood_banks (
  blood_bank_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  license_number VARCHAR(120) NULL,
  offers_apheresis BOOLEAN NOT NULL DEFAULT FALSE,
  offers_sdp BOOLEAN NOT NULL DEFAULT FALSE,
  emergency_phone VARCHAR(30) NULL,
  operating_hours JSON NULL,
  service_notes TEXT NULL,
  source_checked_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (blood_bank_id),
  UNIQUE KEY uq_blood_banks_institution (institution_id),
  KEY idx_blood_banks_apheresis (offers_apheresis, offers_sdp),
  CONSTRAINT fk_blood_banks_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS blood_bank_services (
  service_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  blood_bank_id BIGINT UNSIGNED NOT NULL,
  component_code VARCHAR(40) NOT NULL,
  service_status VARCHAR(24) NOT NULL DEFAULT 'AVAILABLE',
  public_contact_instructions TEXT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (service_id),
  UNIQUE KEY uq_blood_bank_component (blood_bank_id, component_code),
  CONSTRAINT fk_blood_bank_services_bank FOREIGN KEY (blood_bank_id) REFERENCES blood_banks(blood_bank_id) ON DELETE CASCADE
) ENGINE=InnoDB;

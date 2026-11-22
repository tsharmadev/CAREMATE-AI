-- NGO, patient-support and charitable-organization directory.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS support_organizations (
  support_organization_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  registration_authority VARCHAR(160) NULL,
  registration_number VARCHAR(120) NULL,
  support_categories JSON NULL,
  service_area_description TEXT NULL,
  languages_supported JSON NULL,
  intake_phone VARCHAR(30) NULL,
  intake_email VARCHAR(254) NULL,
  referral_required BOOLEAN NOT NULL DEFAULT FALSE,
  verification_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (support_organization_id),
  UNIQUE KEY uq_support_organizations_institution (institution_id),
  KEY idx_support_organizations_verification (verification_status),
  CONSTRAINT fk_support_organizations_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

-- Cancer screening centres and services.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS screening_centres (
  screening_centre_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  centre_type VARCHAR(80) NULL,
  appointment_phone VARCHAR(30) NULL,
  appointment_url VARCHAR(500) NULL,
  eligibility_notes TEXT NULL,
  source_checked_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (screening_centre_id),
  UNIQUE KEY uq_screening_centre_institution (institution_id),
  CONSTRAINT fk_screening_centres_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS screening_services (
  screening_service_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  screening_centre_id BIGINT UNSIGNED NOT NULL,
  cancer_site VARCHAR(100) NOT NULL,
  service_name VARCHAR(180) NOT NULL,
  cost_amount DECIMAL(12,2) NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  requires_referral BOOLEAN NOT NULL DEFAULT FALSE,
  service_notes TEXT NULL,
  PRIMARY KEY (screening_service_id),
  KEY idx_screening_services_site (cancer_site),
  CONSTRAINT fk_screening_services_centre FOREIGN KEY (screening_centre_id) REFERENCES screening_centres(screening_centre_id) ON DELETE CASCADE
) ENGINE=InnoDB;

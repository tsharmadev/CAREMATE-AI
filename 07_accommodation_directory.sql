-- Patient/caregiver accommodation and dharamshala directory.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS accommodations (
  accommodation_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  accommodation_type VARCHAR(80) NOT NULL,
  room_count SMALLINT UNSIGNED NULL,
  bed_capacity SMALLINT UNSIGNED NULL,
  approximate_distance_km DECIMAL(7,2) NULL,
  nightly_price_min DECIMAL(12,2) NULL,
  nightly_price_max DECIMAL(12,2) NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  wheelchair_accessible BOOLEAN NOT NULL DEFAULT FALSE,
  patient_eligibility_notes TEXT NULL,
  booking_phone VARCHAR(30) NULL,
  booking_url VARCHAR(500) NULL,
  source_checked_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (accommodation_id),
  UNIQUE KEY uq_accommodations_institution (institution_id),
  KEY idx_accommodations_type (accommodation_type),
  CONSTRAINT fk_accommodations_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

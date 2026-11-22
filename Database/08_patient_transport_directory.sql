-- Patient transport, wheelchair vehicles and volunteer shuttle directory.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS transport_providers (
  transport_provider_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_id BIGINT UNSIGNED NOT NULL,
  provider_type VARCHAR(80) NOT NULL,
  wheelchair_accessible BOOLEAN NOT NULL DEFAULT FALSE,
  oxygen_support BOOLEAN NOT NULL DEFAULT FALSE,
  vehicle_count SMALLINT UNSIGNED NULL,
  service_area JSON NULL,
  booking_phone VARCHAR(30) NULL,
  booking_url VARCHAR(500) NULL,
  pricing_notes TEXT NULL,
  verification_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (transport_provider_id),
  UNIQUE KEY uq_transport_providers_institution (institution_id),
  KEY idx_transport_providers_accessible (wheelchair_accessible, oxygen_support),
  CONSTRAINT fk_transport_providers_institution FOREIGN KEY (institution_id) REFERENCES institutions(institution_id)
) ENGINE=InnoDB;

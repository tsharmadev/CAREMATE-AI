-- Community help requests, volunteer offers and matches.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS community_help_requests (
  help_request_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_code VARCHAR(80) NOT NULL,
  patient_profile_id BIGINT UNSIGNED NOT NULL,
  created_by_user_id BIGINT UNSIGNED NOT NULL,
  request_category VARCHAR(32) NOT NULL COMMENT 'BLOOD_PLATELET, TRANSPORT, ACCOMMODATION, VOLUNTEER, FINANCIAL',
  title VARCHAR(240) NOT NULL,
  public_description TEXT NOT NULL,
  urgency VARCHAR(24) NOT NULL DEFAULT 'NORMAL',
  district_id BIGINT UNSIGNED NULL,
  preferred_institution_id BIGINT UNSIGNED NULL,
  blood_group VARCHAR(8) NULL,
  units_needed SMALLINT UNSIGNED NULL,
  needed_by DATETIME NULL,
  request_status VARCHAR(24) NOT NULL DEFAULT 'OPEN',
  is_public BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (help_request_id),
  UNIQUE KEY uq_community_help_request_code (request_code),
  KEY idx_community_help_search (request_category, request_status, urgency, needed_by),
  KEY idx_community_help_district (district_id, request_status),
  CONSTRAINT fk_community_help_patient FOREIGN KEY (patient_profile_id) REFERENCES patient_profiles(patient_profile_id),
  CONSTRAINT fk_community_help_creator FOREIGN KEY (created_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_community_help_district FOREIGN KEY (district_id) REFERENCES districts(district_id) ON DELETE SET NULL,
  CONSTRAINT fk_community_help_institution FOREIGN KEY (preferred_institution_id) REFERENCES institutions(institution_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS community_help_offers (
  offer_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  help_request_id BIGINT UNSIGNED NOT NULL,
  offered_by_user_id BIGINT UNSIGNED NULL,
  offering_institution_id BIGINT UNSIGNED NULL,
  offer_description TEXT NULL,
  offer_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (offer_id),
  KEY idx_community_help_offers_request (help_request_id, offer_status),
  CONSTRAINT fk_community_help_offers_request FOREIGN KEY (help_request_id) REFERENCES community_help_requests(help_request_id) ON DELETE CASCADE,
  CONSTRAINT fk_community_help_offers_user FOREIGN KEY (offered_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL,
  CONSTRAINT fk_community_help_offers_institution FOREIGN KEY (offering_institution_id) REFERENCES institutions(institution_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS community_help_matches (
  match_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  help_request_id BIGINT UNSIGNED NOT NULL,
  offer_id BIGINT UNSIGNED NOT NULL,
  matched_by_user_id BIGINT UNSIGNED NULL,
  match_status VARCHAR(24) NOT NULL DEFAULT 'PROPOSED',
  matched_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME NULL,
  outcome_notes TEXT NULL,
  PRIMARY KEY (match_id),
  UNIQUE KEY uq_community_help_match_offer (offer_id),
  KEY idx_community_help_matches_request (help_request_id, match_status),
  CONSTRAINT fk_community_help_matches_request FOREIGN KEY (help_request_id) REFERENCES community_help_requests(help_request_id),
  CONSTRAINT fk_community_help_matches_offer FOREIGN KEY (offer_id) REFERENCES community_help_offers(offer_id),
  CONSTRAINT fk_community_help_matches_user FOREIGN KEY (matched_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

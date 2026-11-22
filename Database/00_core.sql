-- CancerCare Grid shared foundation; MySQL 8.0+
-- Run this first. All other files use this same database.
CREATE DATABASE IF NOT EXISTS cancercare_grid
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS app_users (
  user_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  auth_provider VARCHAR(40) NOT NULL DEFAULT 'external',
  auth_subject VARCHAR(191) NOT NULL,
  email VARCHAR(254) NULL,
  phone_e164 VARCHAR(20) NULL,
  account_status VARCHAR(24) NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  UNIQUE KEY uq_app_users_auth (auth_provider, auth_subject),
  UNIQUE KEY uq_app_users_email (email),
  KEY idx_app_users_status (account_status)
) ENGINE=InnoDB;

-- Store role assignments here; do not store plaintext passwords in this schema.
CREATE TABLE IF NOT EXISTS app_roles (
  role_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  role_key VARCHAR(64) NOT NULL,
  role_name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (role_id),
  UNIQUE KEY uq_app_roles_key (role_key)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS app_user_roles (
  user_id BIGINT UNSIGNED NOT NULL,
  role_id BIGINT UNSIGNED NOT NULL,
  granted_by_user_id BIGINT UNSIGNED NULL,
  granted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  CONSTRAINT fk_app_user_roles_user FOREIGN KEY (user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_app_user_roles_role FOREIGN KEY (role_id) REFERENCES app_roles(role_id),
  CONSTRAINT fk_app_user_roles_granter FOREIGN KEY (granted_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS states (
  state_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  country_code CHAR(2) NOT NULL DEFAULT 'IN',
  state_code VARCHAR(12) NOT NULL,
  state_name VARCHAR(120) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (state_id),
  UNIQUE KEY uq_states_country_code (country_code, state_code),
  UNIQUE KEY uq_states_country_name (country_code, state_name)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS districts (
  district_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  state_id BIGINT UNSIGNED NOT NULL,
  district_name VARCHAR(140) NOT NULL,
  population BIGINT UNSIGNED NULL,
  latitude DECIMAL(9,6) NULL,
  longitude DECIMAL(9,6) NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (district_id),
  UNIQUE KEY uq_district_state_name (state_id, district_name),
  KEY idx_districts_state (state_id),
  CONSTRAINT fk_districts_state FOREIGN KEY (state_id) REFERENCES states(state_id)
) ENGINE=InnoDB;

-- Common organization/location record used by the separate directory modules.
CREATE TABLE IF NOT EXISTS institutions (
  institution_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  institution_type VARCHAR(40) NOT NULL,
  institution_name VARCHAR(220) NOT NULL,
  legal_name VARCHAR(220) NULL,
  registration_number VARCHAR(100) NULL,
  district_id BIGINT UNSIGNED NULL,
  locality VARCHAR(160) NULL,
  address_line VARCHAR(500) NULL,
  postal_code VARCHAR(12) NULL,
  phone_e164 VARCHAR(20) NULL,
  email VARCHAR(254) NULL,
  website_url VARCHAR(500) NULL,
  latitude DECIMAL(9,6) NULL,
  longitude DECIMAL(9,6) NULL,
  verification_status VARCHAR(24) NOT NULL DEFAULT 'UNVERIFIED',
  source_url VARCHAR(500) NULL,
  is_public BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (institution_id),
  KEY idx_institutions_type (institution_type),
  KEY idx_institutions_district (district_id),
  KEY idx_institutions_public (is_public, verification_status),
  CONSTRAINT fk_institutions_district FOREIGN KEY (district_id) REFERENCES districts(district_id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Minimal reference only. Keep diagnosis and identity documents out of this shared profile.
CREATE TABLE IF NOT EXISTS patient_profiles (
  patient_profile_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  owner_user_id BIGINT UNSIGNED NULL,
  public_alias VARCHAR(160) NOT NULL,
  is_minor BOOLEAN NOT NULL DEFAULT FALSE,
  profile_status VARCHAR(24) NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (patient_profile_id),
  KEY idx_patient_profiles_owner (owner_user_id),
  KEY idx_patient_profiles_status (profile_status),
  CONSTRAINT fk_patient_profiles_owner FOREIGN KEY (owner_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

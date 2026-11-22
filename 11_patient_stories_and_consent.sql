-- Patient story submissions, media metadata, explicit channel consent and revocation.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS patient_stories (
  story_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  patient_profile_id BIGINT UNSIGNED NOT NULL,
  submitted_by_user_id BIGINT UNSIGNED NOT NULL,
  title VARCHAR(240) NOT NULL,
  story_text TEXT NULL,
  public_health_summary TEXT NULL,
  story_status VARCHAR(24) NOT NULL DEFAULT 'PENDING_REVIEW',
  privacy_level VARCHAR(24) NOT NULL DEFAULT 'RESTRICTED',
  approved_by_user_id BIGINT UNSIGNED NULL,
  approved_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (story_id),
  KEY idx_patient_stories_status (story_status, created_at),
  CONSTRAINT fk_patient_stories_patient FOREIGN KEY (patient_profile_id) REFERENCES patient_profiles(patient_profile_id),
  CONSTRAINT fk_patient_stories_submitter FOREIGN KEY (submitted_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_patient_stories_approver FOREIGN KEY (approved_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS patient_story_media (
  story_media_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  story_id BIGINT UNSIGNED NOT NULL,
  media_type VARCHAR(24) NOT NULL,
  object_key VARCHAR(500) NOT NULL COMMENT 'Private object-storage key; authorize downloads in application',
  duration_seconds INT UNSIGNED NULL,
  content_hash CHAR(64) NULL,
  moderation_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (story_media_id),
  KEY idx_patient_story_media_story (story_id, moderation_status),
  CONSTRAINT fk_patient_story_media_story FOREIGN KEY (story_id) REFERENCES patient_stories(story_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS patient_story_consents (
  consent_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  story_id BIGINT UNSIGNED NOT NULL,
  granted_by_user_id BIGINT UNSIGNED NOT NULL,
  channel VARCHAR(60) NOT NULL,
  purpose VARCHAR(180) NOT NULL,
  consent_version VARCHAR(40) NOT NULL,
  evidence_object_key VARCHAR(500) NULL,
  granted_at DATETIME NOT NULL,
  revoked_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (consent_id),
  KEY idx_patient_story_consents_story (story_id, revoked_at),
  CONSTRAINT fk_patient_story_consents_story FOREIGN KEY (story_id) REFERENCES patient_stories(story_id) ON DELETE CASCADE,
  CONSTRAINT fk_patient_story_consents_grantor FOREIGN KEY (granted_by_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS patient_story_updates (
  story_update_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  story_id BIGINT UNSIGNED NOT NULL,
  update_text TEXT NOT NULL,
  visibility VARCHAR(24) NOT NULL DEFAULT 'PUBLIC',
  created_by_user_id BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (story_update_id),
  KEY idx_patient_story_updates_story (story_id, created_at),
  CONSTRAINT fk_patient_story_updates_story FOREIGN KEY (story_id) REFERENCES patient_stories(story_id) ON DELETE CASCADE,
  CONSTRAINT fk_patient_story_updates_author FOREIGN KEY (created_by_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

-- Doctor reviews, automated triage evidence and human moderation decisions.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS doctor_reviews (
  review_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  doctor_id BIGINT UNSIGNED NOT NULL,
  author_user_id BIGINT UNSIGNED NULL,
  author_display_name VARCHAR(160) NULL,
  reviewer_type VARCHAR(24) NULL COMMENT 'PATIENT, CAREGIVER, OTHER',
  rating TINYINT UNSIGNED NOT NULL,
  review_text TEXT NOT NULL,
  visit_verified BOOLEAN NOT NULL DEFAULT FALSE,
  review_status VARCHAR(24) NOT NULL DEFAULT 'PENDING_TRIAGE',
  submitted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME NULL,
  PRIMARY KEY (review_id),
  KEY idx_doctor_reviews_public (doctor_id, review_status, published_at),
  KEY idx_doctor_reviews_submitted (submitted_at),
  CONSTRAINT fk_doctor_reviews_doctor FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
  CONSTRAINT fk_doctor_reviews_author FOREIGN KEY (author_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS review_triage_events (
  triage_event_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  review_id BIGINT UNSIGNED NOT NULL,
  engine_name VARCHAR(100) NOT NULL,
  engine_version VARCHAR(60) NULL,
  risk_score DECIMAL(6,5) NULL,
  flags JSON NULL,
  triage_result VARCHAR(24) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (triage_event_id),
  KEY idx_review_triage_review (review_id, created_at),
  CONSTRAINT fk_review_triage_review FOREIGN KEY (review_id) REFERENCES doctor_reviews(review_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS review_moderation_actions (
  moderation_action_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  review_id BIGINT UNSIGNED NOT NULL,
  moderator_user_id BIGINT UNSIGNED NOT NULL,
  action VARCHAR(24) NOT NULL,
  reason TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (moderation_action_id),
  KEY idx_review_moderation_review (review_id, created_at),
  CONSTRAINT fk_review_moderation_review FOREIGN KEY (review_id) REFERENCES doctor_reviews(review_id),
  CONSTRAINT fk_review_moderation_user FOREIGN KEY (moderator_user_id) REFERENCES app_users(user_id)
) ENGINE=InnoDB;

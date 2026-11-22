-- Medical crowdfunding campaigns, contributions and disbursement ledger.
-- Store only payment-provider references; never store card or bank credentials.
USE cancercare_grid;

CREATE TABLE IF NOT EXISTS crowdfunding_campaigns (
  campaign_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  patient_profile_id BIGINT UNSIGNED NOT NULL,
  hospital_id BIGINT UNSIGNED NOT NULL,
  created_by_user_id BIGINT UNSIGNED NOT NULL,
  campaign_slug VARCHAR(180) NOT NULL,
  title VARCHAR(240) NOT NULL,
  public_medical_summary TEXT NOT NULL,
  target_amount DECIMAL(14,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  raised_amount_cached DECIMAL(14,2) NOT NULL DEFAULT 0,
  campaign_status VARCHAR(24) NOT NULL DEFAULT 'PENDING_REVIEW',
  starts_at DATETIME NULL,
  ends_at DATETIME NULL,
  approved_by_user_id BIGINT UNSIGNED NULL,
  approved_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (campaign_id),
  UNIQUE KEY uq_crowdfunding_slug (campaign_slug),
  KEY idx_crowdfunding_status (campaign_status, ends_at),
  KEY idx_crowdfunding_patient (patient_profile_id),
  CONSTRAINT fk_crowdfunding_patient FOREIGN KEY (patient_profile_id) REFERENCES patient_profiles(patient_profile_id),
  CONSTRAINT fk_crowdfunding_hospital FOREIGN KEY (hospital_id) REFERENCES hospitals(hospital_id),
  CONSTRAINT fk_crowdfunding_creator FOREIGN KEY (created_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_crowdfunding_approver FOREIGN KEY (approved_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS crowdfunding_evidence_documents (
  evidence_document_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  campaign_id BIGINT UNSIGNED NOT NULL,
  document_type VARCHAR(100) NOT NULL,
  object_key VARCHAR(500) NOT NULL COMMENT 'Private object-storage key',
  uploaded_by_user_id BIGINT UNSIGNED NOT NULL,
  review_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  reviewed_by_user_id BIGINT UNSIGNED NULL,
  reviewed_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (evidence_document_id),
  KEY idx_crowdfunding_evidence_campaign (campaign_id, review_status),
  CONSTRAINT fk_crowdfunding_evidence_campaign FOREIGN KEY (campaign_id) REFERENCES crowdfunding_campaigns(campaign_id) ON DELETE CASCADE,
  CONSTRAINT fk_crowdfunding_evidence_uploader FOREIGN KEY (uploaded_by_user_id) REFERENCES app_users(user_id),
  CONSTRAINT fk_crowdfunding_evidence_reviewer FOREIGN KEY (reviewed_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS crowdfunding_contributions (
  contribution_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  campaign_id BIGINT UNSIGNED NOT NULL,
  donor_user_id BIGINT UNSIGNED NULL,
  donor_display_name VARCHAR(160) NULL,
  amount DECIMAL(14,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  payment_provider VARCHAR(80) NOT NULL,
  provider_payment_reference VARCHAR(220) NOT NULL,
  contribution_status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
  receipt_reference VARCHAR(120) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (contribution_id),
  UNIQUE KEY uq_contribution_provider_ref (payment_provider, provider_payment_reference),
  KEY idx_contributions_campaign (campaign_id, contribution_status),
  CONSTRAINT fk_contributions_campaign FOREIGN KEY (campaign_id) REFERENCES crowdfunding_campaigns(campaign_id),
  CONSTRAINT fk_contributions_donor FOREIGN KEY (donor_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS crowdfunding_disbursements (
  disbursement_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  campaign_id BIGINT UNSIGNED NOT NULL,
  hospital_id BIGINT UNSIGNED NOT NULL,
  amount DECIMAL(14,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  status VARCHAR(24) NOT NULL DEFAULT 'PENDING',
  payment_provider_reference VARCHAR(220) NULL,
  approved_by_user_id BIGINT UNSIGNED NULL,
  approved_at DATETIME NULL,
  disbursed_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (disbursement_id),
  KEY idx_disbursements_campaign (campaign_id, status),
  CONSTRAINT fk_disbursements_campaign FOREIGN KEY (campaign_id) REFERENCES crowdfunding_campaigns(campaign_id),
  CONSTRAINT fk_disbursements_hospital FOREIGN KEY (hospital_id) REFERENCES hospitals(hospital_id),
  CONSTRAINT fk_disbursements_approver FOREIGN KEY (approved_by_user_id) REFERENCES app_users(user_id) ON DELETE SET NULL
) ENGINE=InnoDB;

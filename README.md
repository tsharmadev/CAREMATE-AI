# 🎗️ CancerCare Grid — National Oncology Support & Resource Network

> **EPICS (Engineering Projects in Community Service) / B.Tech Capstone Project**  
> An integrated platform bridging cancer patients, verified oncology specialists, government financial schemes, hospital visit preparation, district accessibility data analysis, and community mutual aid across India.

---

## 🌟 Core Implemented Modules

### 1. 👨‍⚕️ Doctor Registration & Verification System
- **Mandatory Credential Fields:** Full Name, Medical Registration Number, State Medical Council (13 Indian State Councils supported), MBBS Certificate, PG/Specialization Certificate (MD/MS/DM/MCh in Oncology), Government ID, Hospital Affiliation, Email, Mobile.
- **Two-Stage Verification Pipeline:**
  $$\text{Doctor Registration} \rightarrow \text{Upload Documents} \rightarrow \text{Email + Phone 2FA OTP} \rightarrow \text{Admin Medical Board Audit} \rightarrow \text{NMC Council Checked} \rightarrow \text{APPROVED} \rightarrow \text{Verified Doctor Badge}$$
- **Architectural Principle:** Mobile and email OTP verification confirms *identity and contact ownership*, while medical qualifications are independently cross-checked against the **National Medical Commission (NMC)** registry before the badge is awarded.

### 2. 🏥 Cancer Healthcare & Support Database
- Comprehensive, filterable directory with dedicated category views:
  - **Comprehensive Cancer Centres & Regional Cancer Centres (RCCs):** Tata Memorial Hospital, AIIMS IRCH, Kidwai KMIO, Adyar Cancer Institute, HBCHRC Varanasi, BBCI Guwahati, Rajiv Gandhi Cancer Institute.
  - **Oncologists & Specialists:** Filter by Medical, Surgical, Radiation, Hemato-Oncology, and Pediatric subspecialties.
  - **Blood Banks & 24/7 Apheresis Units:** Live inventory status for rare blood groups ($O^-, B^-, AB^-$) and Single Donor Platelets (SDP).
  - **Voluntary Blood & Platelet Donors:** Filter by blood group and apheresis eligibility.
  - **Cancer Support NGOs:** CanKids, Indian Cancer Society, V Care Foundation, Sanjeevani.
  - **Cancer Screening Centres & Mobile Mammography Camps.**
  - **Patient & Caregiver Accommodation:** Subsidized charitable dharamshalas near apex hospitals.
  - **Patient Transportation:** Free railway station-to-hospital shuttles and non-emergency ambulances.

### 3. 📋 “Prepare for Your Hospital Visit” Assistant
- Interactive wizard tailoring preparation checklists based on:
  - Visit nature (First Consultation, Second Opinion, Chemotherapy Cycle, Pre-Surgery Workup)
  - Hospital context (New Hospital vs. Existing Patient File)
  - Cancer site (Breast, Lung, Oral/Head & Neck, GI/Colon, Hematology, Gynecologic)
  - Payment channel (Ayushman Bharat PM-JAY, State Scheme, Private TPA, Out-of-pocket)
- Generates dynamic, categorized checklists with interactive tick boxes and progress meter:
  1. Mandatory Medical Records & Pathology Slides/Tissue Blocks
  2. Government ID, Hospital File & Scheme Pre-Authorizations
  3. Physical Comfort Essentials (Warm shawls for AC chemo rooms, caregiver notepad)
  4. Curated Questions to Ask Your Oncologist (derived from Tata Memorial patient education protocols)
- Supports custom item addition and clean PDF/print export.

### 4. 🗺️ District Cancer Facility Score / CancerCare Index (DCARI)
- Rigorous data science resource accessibility index ($0 - 100$) evaluated across 6 weighted dimensions:
  $$\text{Score} = (H_{\text{hospitals}} \times 0.25) + (S_{\text{specialists}} \times 0.20) + (D_{\text{screening}} \times 0.15) + (B_{\text{blood}} \times 0.15) + (F_{\text{financial}} \times 0.15) + (T_{\text{transit}} \times 0.10)$$
- **Interactive Map:** Color-coded India district nodes:
  - 🟢 **High Accessibility ($\ge 70$):** Metro hubs (Mumbai, Delhi, Chennai, Bengaluru, Ernakulam).
  - 🟡 **Moderate Accessibility ($45 - 69$):** Tier-2 regional hubs (Varanasi, Guwahati, Patna, Wardha).
  - 🔴 **Underserved / Critical Gaps ($< 45$):** Remote/rural districts (Cachar Silchar, Kalahandi Odisha, Barmer Rajasthan).
- Detailed gap analysis (e.g. lack of Linear Accelerators within 120km, missing apheresis units) and recommended policy interventions.
- **Side-by-Side District Disparity Comparison Tool.**

### 5. 💰 Financial Support & Government Schemes
- Detailed repository of central & state cancer funds:
  - Ayushman Bharat PM-JAY (Cashless up to ₹5,00,000)
  - Rashtriya Arogya Nidhi (RAN) — Health Minister's Cancer Patient Fund (Up to ₹15,00,000)
  - State Schemes: MJPJAY (Maharashtra), Karunya (Kerala), CMCHIS (Tamil Nadu)
  - Indian Railways Cancer Patient Concession (Up to 100% fare waiver for patient + 75% for escort)
- **Direct Official Portal Redirects:** Transparent links to official `.gov.in` and `.nic.in` domains.
- **Personalized Scheme Discovery Screener:** Returns *"Potentially Relevant Schemes"* with confidence heuristics and clear non-guaranteed advisories.

### 6. 🤲 Verified Patient Crowdfunding
- Anti-fraud community fundraising for high-cost procedures (Bone marrow transplants, Whipple surgeries, immunotherapy).
- Financial transparency bar: **Target, Raised, and Remaining** metrics with itemized cost estimation audits.
- Direct hospital bank escrow disbursal ensuring zero personal fund diversion.
- 80G tax benefit calculation and instant simulated donor receipts.
- "Start a Funding Request" multi-step submission requiring hospital quotation and pathology reports.

### 7. 📱 Patient Stories & Consent-Based Social Media Fundraising
- Inspiring patient recovery narratives and audio/video journey previews.
- **Granular Multi-Channel Consent Management:**
  - ☑ CancerCare Grid Website Only
  - ☑ Instagram Partner Reels
  - ☑ Twitter / LinkedIn Community Channels
  - ☐ Do Not Promote Publicly (Private link only)
- Built-in privacy safeguards (facial feature blurring, pseudonym support, and revocation rights).

### 8. ⭐ Doctor Reviews & 🤖 Fake/Bot Review Detection Engine
- Discover oncologists with patient feedback on bedside manner and clinical explanations.
- **Automated Heuristic Anomaly Triage:**
  - Detects duplicate/repeated text patterns, burst submission velocity, miracle cure claims, and unverified phone solicitations.
  - **Zero-Delete Triage:** Reviews are never silently erased; clean reviews are published immediately, while suspicious reviews are held in the **Flagged Review Moderation Queue** for human admin review.
  - Interactive preset testing buttons for evaluators (*"Load Miracle Cure Spam"*, *"Load Duplicate Bot Hate"*, *"Load Genuine Review"*).

### 9. 🔎 Community Help & Need Matching Grid
- Verified mutual aid board for urgent needs:
  - Emergency O-negative platelet apheresis
  - Wheelchair-accessible hospital transit
  - Subsidized caregiver accommodation
  - Volunteer language translators / patient escorts
  - Emergency co-pay grants
- Verified by hospital staff reference codes with direct volunteer match acceptance.

### 10. 🔐 Comprehensive Admin Dashboard
- Centralized governance console:
  - **Doctor Credential Queue:** Inspect degree scans, verify Council registration, and issue the Verified Doctor Badge.
  - **Crowdfunding Queue:** Audit hospital cost estimate letters and bank escrow credentials.
  - **Flagged Review Investigation:** Investigate bot anomalies with override and dismiss actions.
  - **Community Mutual Aid Moderation.**
  - **Platform Analytics Overview.**

### 11. 🤖 AI Cancer Information & Navigation Assistant
- Context-aware navigation guide adhering strictly to evidence-backed consensus literature.
- **Non-Diagnostic Policy:** Clearly structured to answer terminology, documentation prep, and scheme queries with verified citations (National Cancer Grid, ICMR, WHO, TMH) without making uncertified medical prescriptions.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 18 with Vite (ES Modules)
- **Styling:** Tailwind CSS (Custom healthcare medical palette: Deep Navy, Compassionate Teal, Awareness Ribbon Rose)
- **Icons:** Lucide React
- **Architecture:** Modular component hierarchy, responsive grid system, client-side state persistence, and accessible semantic markup.

---

## 🚀 Running the Project

### Development Server:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build:
```bash
npm run build
npm run preview
```

---

## 🛡️ Academic & Community Service Note
Developed as an **Engineering Projects in Community Service (EPICS)** system to address real oncology accessibility gaps, empower families with verified clinical data, and prevent fraud in medical fundraising.

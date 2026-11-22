// Verified Patient Crowdfunding & Social Media Campaigns
// Mandatory admin verification of medical cost estimate, pathology, and bank accounts

export const CROWDFUNDING_CAMPAIGNS = [
  {
    id: 'camp-1',
    patientName: 'Aarav Sharma (7 years)',
    diagnosedCondition: 'B-Cell Acute Lymphoblastic Leukemia (High Risk Relapse)',
    treatingHospital: 'Tata Memorial Hospital (ACTREC Navi Mumbai)',
    treatingDoctor: 'Dr. Suresh H. Advani / Pediatric BMT Unit',
    location: 'Navi Mumbai, Maharashtra',
    targetAmount: 1800000,
    raisedAmount: 1245000,
    donorsCount: 412,
    daysLeft: 18,
    storySummary: 'Aarav was diagnosed with B-ALL at age 5. After initial remission, the leukemia relapsed in April 2026. The multidisciplinary pediatric oncology tumor board has recommended an urgent Haploidentical Allogeneic Bone Marrow Transplant.',
    fullStory: 'Aarav\'s father is a daily-wage transport coordinator who has already exhausted all family savings and small loans during the 18 months of intensive induction chemotherapy. The hospital has provided an itemized pre-transplant estimate of ₹18,00,000 covering stem cell apheresis, high-dose conditioning chemotherapy, post-transplant ICU isolation, and antiviral CMV prophylaxis.',
    costBreakdown: [
      { item: 'Stem Cell Harvesting & Conditioning Protocol', amount: 480000 },
      { item: 'Specialized HEPA Filter Bone Marrow ICU Stay (35 days)', amount: 560000 },
      { item: 'Anti-Thymocyte Globulin (ATG) & Targeted Immunosuppressants', amount: 390000 },
      { item: 'Post-Transplant Chimerism & Molecular Testing', amount: 170000 },
      { item: 'Emergency Blood & Platelet Apheresis Reserves', amount: 200000 }
    ],
    verifiedDocuments: [
      'Bone Marrow Biopsy & Flow Cytometry Report (TMH Laboratory No: 26-B-491)',
      'Official Institutional Cost Estimate signed by Medical Superintendent',
      'Father\'s Income Certificate (Annual Income: ₹85,000)',
      'Aadhaar Card of Patient & Legal Guardian'
    ],
    adminApprovalDetails: {
      verifiedBy: 'Admin-Finance-Desk-04',
      approvalDate: '2026-10-18',
      hospitalBankEscrowVerified: true,
      directHospitalDisbursal: true
    },
    socialMediaPromotion: {
      userConsentGiven: true,
      channelsAllowed: ['Website only', 'Instagram partner reels', 'Twitter/LinkedIn community'],
      consentTimestamp: '2026-10-17 19:30 IST',
      patientIdentityPreference: 'Show full name with parent permission for maximum awareness',
      videoStoryAvailable: true,
      videoDuration: '1m 45s'
    },
    updates: [
      {
        date: '2026-11-10',
        title: 'Pre-transplant dental & organ clearance completed',
        note: 'Aarav has successfully cleared the pre-BMT cardiac and pulmonary evaluations. Donor screening for father completed with 5/10 HLA match.'
      },
      {
        date: '2026-10-25',
        title: 'Campaign launched following verified clinical audit',
        note: 'First ₹5 Lakhs milestone achieved through generous community contributors.'
      }
    ]
  },
  {
    id: 'camp-2',
    patientName: 'Sunita Devi (43 years)',
    diagnosedCondition: 'Stage IIIB Triple Negative Breast Cancer (TNBC)',
    treatingHospital: 'Homi Bhabha Cancer Hospital, Varanasi',
    treatingDoctor: 'Dr. Anita Ramesh (Consultant Panel)',
    location: 'Mirzapur / Varanasi, Uttar Pradesh',
    targetAmount: 650000,
    raisedAmount: 480000,
    donorsCount: 228,
    daysLeft: 12,
    storySummary: 'Sunita Devi is a weaver from rural Mirzapur diagnosed with locally advanced aggressive TNBC requiring 8 cycles of dose-dense AC-T chemotherapy followed by modified radical mastectomy and radiation.',
    fullStory: 'While surgical and basic generic chemotherapy costs are partially covered under state scheme, Sunita urgently requires adjuvant immunotherapy and high-dose supportive G-CSF injections to sustain safe white blood cell levels without life-threatening febrile neutropenia.',
    costBreakdown: [
      { item: 'Dose-dense Chemotherapy & Supportive Pegfilgrastim', amount: 220000 },
      { item: 'Surgical Resection & Axillary Node Dissection', amount: 150000 },
      { item: 'Linear Accelerator Radiotherapy (25 Fractions)', amount: 180000 },
      { item: 'Nutritional Support & Blood Transfusions', amount: 100000 }
    ],
    verifiedDocuments: [
      'Core Needle Biopsy Report (ER/PR/HER2-neu Negative)',
      'Ayushman Bharat Partial Empanelment Statement',
      'Hospital Estimate Letter HBCH-VNS-2026-891',
      'Panchayat Income Certificate'
    ],
    adminApprovalDetails: {
      verifiedBy: 'Admin-Finance-Desk-02',
      approvalDate: '2026-10-29',
      hospitalBankEscrowVerified: true,
      directHospitalDisbursal: true
    },
    socialMediaPromotion: {
      userConsentGiven: true,
      channelsAllowed: ['Website only'],
      consentTimestamp: '2026-10-28 11:20 IST',
      patientIdentityPreference: 'Website only (Caregiver requested no public Instagram promotion for privacy)',
      videoStoryAvailable: false,
      videoDuration: null
    },
    updates: [
      {
        date: '2026-11-05',
        title: 'Cycle 3 chemotherapy successfully administered',
        note: 'Tumor clinical regression noted by 35% on clinical palpation. Patient tolerating regimen with anti-emetic support.'
      }
    ]
  },
  {
    id: 'camp-3',
    patientName: 'Subir Mukherjee (56 years)',
    diagnosedCondition: 'Resectable Periampullary Adenocarcinoma',
    treatingHospital: 'Tata Memorial Hospital, Mumbai',
    treatingDoctor: 'Dr. Shailesh V. Shrikhande',
    location: 'Kolkata / Mumbai Outstation',
    targetAmount: 500000,
    raisedAmount: 215000,
    donorsCount: 165,
    daysLeft: 24,
    storySummary: 'Subir is a retired school clerk from West Bengal traveling to Mumbai for a curative Whipple pancreaticoduodenectomy procedure by the expert HPB surgery team.',
    fullStory: 'Subir traveled over 1,900 km by train to reach Tata Memorial Hospital. The surgical tumor board evaluated his scan and declared the tumor resectable with curative intent, provided surgery is performed within the next 4 weeks before local vascular encasement progresses.',
    costBreakdown: [
      { item: 'Whipple Pancreaticoduodenectomy Surgical Package', amount: 285000 },
      { item: 'Post-Operative Surgical ICU Stay (5 days)', amount: 110000 },
      { item: 'Histopathology Margin Mapping & Molecular Profiling', amount: 55000 },
      { item: 'Specialized Total Parenteral Nutrition (TPN)', amount: 50000 }
    ],
    verifiedDocuments: [
      'Triphasic Pancreatic CT Scan Report & Endoscopic Ultrasound Biopsy',
      'TMH Inpatient Booking Form & Pre-Op Quotation',
      'BPL Certification & Pension Statement',
      'Voter ID & Aadhaar'
    ],
    adminApprovalDetails: {
      verifiedBy: 'Admin-Finance-Desk-01',
      approvalDate: '2026-11-01',
      hospitalBankEscrowVerified: true,
      directHospitalDisbursal: true
    },
    socialMediaPromotion: {
      userConsentGiven: true,
      channelsAllowed: ['Website only', 'Instagram partner reels'],
      consentTimestamp: '2026-10-31 16:45 IST',
      patientIdentityPreference: 'Show story with blurred family photos',
      videoStoryAvailable: true,
      videoDuration: '2m 10s'
    },
    updates: [
      {
        date: '2026-11-12',
        title: 'Pre-operative biliary stenting successful',
        note: 'Serum bilirubin levels dropped from 14 mg/dL to 3.2 mg/dL. Surgery tentatively scheduled for next week.'
      }
    ]
  }
];

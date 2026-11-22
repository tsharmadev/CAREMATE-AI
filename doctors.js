// Oncologists & Specialists Directory
// Contains verified doctor profiles, credentials, council registrations, and review records

export const DOCTORS = [
  {
    id: 'doc-1',
    name: 'Dr. Suresh H. Advani',
    degree: 'MBBS, MD (Medicine), FICP, FNAMS',
    specialization: 'Medical Oncology & Hemato-Oncology',
    subSpecialties: ['Bone Marrow Transplant', 'Leukemia & Lymphoma', 'Targeted Immunotherapy'],
    registrationNumber: 'MCI-1972-04821',
    medicalCouncil: 'Maharashtra Medical Council',
    experienceYears: 42,
    hospitalAffiliation: 'Tata Memorial Hospital (Honorary) & Sushrut Hospital',
    city: 'Mumbai',
    state: 'Maharashtra',
    verifiedDoctorBadge: true,
    verificationDate: '2025-01-15',
    verifiedByAdmin: 'Admin-Medical-Board-01',
    credentialsVerified: ['MBBS Degree (Grant Medical College)', 'MD Certificate', 'MCI Registration', 'Govt Aadhaar ID'],
    rating: 4.95,
    totalReviews: 248,
    consultationFee: '₹1,500 (Subsidized slots available)',
    availableForTeleconsult: true,
    languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
    bio: 'Pioneer of hematopoietic stem cell transplantation in India. Padmashri & Padma Bhushan awardee. Committed to affordable protocol-driven cancer treatment.',
    reviews: [
      {
        id: 'rev-101',
        patientName: 'Sunil Gokhale (Caregiver)',
        patientStatus: 'Verified Hospital Visit',
        rating: 5,
        date: '2026-10-14',
        comment: 'Dr. Advani patiently explained my mother\'s lymphoma staging and laid out an affordable biosimilar protocol. No unnecessary tests.',
        verifiedReview: true,
        suspiciousFlag: false
      },
      {
        id: 'rev-102',
        patientName: 'Meenakshi Iyer',
        patientStatus: 'Verified Patient',
        rating: 5,
        date: '2026-09-22',
        comment: 'Compassionate and immensely experienced. Even at his seniority, he answered every question on side effect management.',
        verifiedReview: true,
        suspiciousFlag: false
      }
    ]
  },
  {
    id: 'doc-2',
    name: 'Dr. Vinod Raina',
    degree: 'MBBS, MD, DM (Medical Oncology), MRCP (UK)',
    specialization: 'Medical Oncology',
    subSpecialties: ['Breast Cancer', 'Lung Cancer', 'GI Malignancies'],
    registrationNumber: 'DMC-1984-2190',
    medicalCouncil: 'Delhi Medical Council',
    experienceYears: 36,
    hospitalAffiliation: 'Former Head of Medical Oncology, AIIMS New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    verifiedDoctorBadge: true,
    verificationDate: '2025-02-10',
    verifiedByAdmin: 'Admin-Medical-Board-02',
    credentialsVerified: ['MBBS (AIIMS)', 'DM Medical Oncology (AIIMS)', 'DMC Registration', 'Passport Verification'],
    rating: 4.88,
    totalReviews: 194,
    consultationFee: '₹1,800 (Govt quota ₹0 at AIIMS clinic)',
    availableForTeleconsult: true,
    languages: ['English', 'Hindi', 'Kashmiri'],
    bio: 'Performed India\'s first high-dose chemotherapy peripheral blood stem cell transplant. Former professor and head at AIIMS IRCH.',
    reviews: [
      {
        id: 'rev-201',
        patientName: 'Rajeev Srivastava',
        patientStatus: 'Verified Patient',
        rating: 5,
        date: '2026-10-02',
        comment: 'Very objective guidance. When another hospital advised immediate surgery, Dr. Raina correctly suggested neoadjuvant chemotherapy first.',
        verifiedReview: true,
        suspiciousFlag: false
      }
    ]
  },
  {
    id: 'doc-3',
    name: 'Dr. Radheshyam Naik',
    degree: 'MBBS, MD, DM (Medical Oncology), Fellow (NY Roswell Park)',
    specialization: 'Hemato-Oncology & Stem Cell Transplant',
    subSpecialties: ['Multiple Myeloma', 'CAR-T Cell Therapy', 'Pediatric Leukemia'],
    registrationNumber: 'KMC-1991-34981',
    medicalCouncil: 'Karnataka Medical Council',
    experienceYears: 28,
    hospitalAffiliation: 'Kidwai Memorial Institute of Oncology (Visiting) & HCG Bangalore',
    city: 'Bengaluru',
    state: 'Karnataka',
    verifiedDoctorBadge: true,
    verificationDate: '2025-03-01',
    verifiedByAdmin: 'Admin-Medical-Board-01',
    credentialsVerified: ['MBBS', 'DM Medical Oncology', 'KMC Registration Certificate', 'Voter ID'],
    rating: 4.82,
    totalReviews: 142,
    consultationFee: '₹1,200',
    availableForTeleconsult: true,
    languages: ['English', 'Kannada', 'Hindi', 'Tamil'],
    bio: 'Academic oncologist with extensive experience in bone marrow transplantation and modern targeted cell therapy protocols.',
    reviews: [
      {
        id: 'rev-301',
        patientName: 'Ananya Hegde',
        patientStatus: 'Verified Caregiver',
        rating: 5,
        date: '2026-08-19',
        comment: 'Guided us through my nephew’s ALL remission protocol. Very supportive team and clear transparent documentation.',
        verifiedReview: true,
        suspiciousFlag: false
      }
    ]
  },
  {
    id: 'doc-4',
    name: 'Dr. Shailesh V. Shrikhande',
    degree: 'MBBS, MS (Gen Surgery), MD (Heidelberg), FRCS (Hon)',
    specialization: 'Surgical Oncology (GI & HPB Surgery)',
    subSpecialties: ['Pancreatic Resection (Whipple)', 'Liver Tumors', 'Esophageal Cancer'],
    registrationNumber: 'MMC-1997-08-3122',
    medicalCouncil: 'Maharashtra Medical Council',
    experienceYears: 26,
    hospitalAffiliation: 'Tata Memorial Centre, Mumbai (Deputy Director & Head of Surgery)',
    city: 'Mumbai',
    state: 'Maharashtra',
    verifiedDoctorBadge: true,
    verificationDate: '2025-01-20',
    verifiedByAdmin: 'Admin-Medical-Board-01',
    credentialsVerified: ['MBBS (KEM Mumbai)', 'MS Gen Surgery', 'MMC Registration', 'Govt Aadhaar ID'],
    rating: 4.96,
    totalReviews: 310,
    consultationFee: '₹1,000 (Govt TMH Subsidized Rates)',
    availableForTeleconsult: false,
    languages: ['English', 'Hindi', 'Marathi', 'German'],
    bio: 'Internationally recognized pancreas and liver surgical oncologist. Performed over 1,500 Whipple procedures with peer-reviewed lowest mortality benchmarks.',
    reviews: [
      {
        id: 'rev-401',
        patientName: 'Vikram Joshi',
        patientStatus: 'Verified Patient (Post-Op)',
        rating: 5,
        date: '2026-09-11',
        comment: 'World class surgeon with human warmth. Successfully operated my father’s complex periampullary tumor.',
        verifiedReview: true,
        suspiciousFlag: false
      }
    ]
  },
  {
    id: 'doc-5',
    name: 'Dr. Anita Ramesh',
    degree: 'MBBS, MD, DM (Medical Oncology), DNB, MSc Oncology (UK)',
    specialization: 'Medical Oncology & Preventive Oncology',
    subSpecialties: ['Breast Cancer', 'Ovarian Malignancy', 'Genetic Counseling'],
    registrationNumber: 'TNMC-1995-58190',
    medicalCouncil: 'Tamil Nadu Medical Council',
    experienceYears: 24,
    hospitalAffiliation: 'Cancer Institute Adyar (Honorary) & Apollo Speciality',
    city: 'Chennai',
    state: 'Tamil Nadu',
    verifiedDoctorBadge: true,
    verificationDate: '2025-04-12',
    verifiedByAdmin: 'Admin-Medical-Board-03',
    credentialsVerified: ['MBBS', 'DM Medical Oncology (Adyar)', 'TNMC Certificate', 'Govt ID'],
    rating: 4.85,
    totalReviews: 178,
    consultationFee: '₹1,400',
    availableForTeleconsult: true,
    languages: ['English', 'Tamil', 'Telugu', 'Hindi'],
    bio: 'Dedicated to women’s cancers, early screening, and genetic counseling for BRCA1/BRCA2 mutation carriers across South India.',
    reviews: [
      {
        id: 'rev-501',
        patientName: 'Kavitha S.',
        patientStatus: 'Verified Patient',
        rating: 5,
        date: '2026-10-09',
        comment: 'Dr. Anita took time to explain the difference between hormone positive and triple negative treatments.',
        verifiedReview: true,
        suspiciousFlag: false
      }
    ]
  }
];

// Sample flagged reviews for testing the Bot/Fake Review Detection System
export const SAMPLE_FLAGGED_REVIEWS = [
  {
    id: 'rev-flag-1',
    doctorId: 'doc-1',
    doctorName: 'Dr. Suresh H. Advani',
    author: 'BestCureOnline99',
    ipSubnet: '192.168.1.104',
    rating: 5,
    text: 'BEST DOCTOR IN THE WORLD!! 100% CANCER CURED IN 3 DAYS WITH MIRACLE TREATMENT CONTACT 9876543210 FOR HERBAL REMEDY!!!',
    flagReasons: [
      'Linguistic anomaly: Extreme promotional vocabulary & miracle cure claim',
      'Unverified patient identifier / External contact solicitation',
      'Rating clustering anomaly'
    ],
    status: 'HELD_IN_QUEUE',
    submittedAt: '2026-11-18 14:22'
  },
  {
    id: 'rev-flag-2',
    doctorId: 'doc-3',
    doctorName: 'Dr. Radheshyam Naik',
    author: 'quick_review_bot_44',
    ipSubnet: '45.112.88.21',
    rating: 1,
    text: 'Worst service worst hospital very bad experience do not go there totally useless bad bad bad.',
    flagReasons: [
      'Duplicate phrase match: 94% similarity to 12 reviews submitted within 10 minutes across different profiles',
      'Velocity trigger: 8 reviews in under 180 seconds from matching subnet',
      'Absence of clinical consultation context or record'
    ],
    status: 'HELD_IN_QUEUE',
    submittedAt: '2026-11-19 09:15'
  }
];

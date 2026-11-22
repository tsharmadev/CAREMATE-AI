// Central and State Government Financial Schemes & Assistance Programs
// Exhaustive information with eligibility, financial caps, required documents, and verified official government links

export const GOVERNMENT_SCHEMES = [
  {
    id: 'scheme-pmjay',
    name: 'Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    level: 'Central Government (National)',
    authority: 'National Health Authority (NHA), MoHFW',
    coverageAmount: 'Up to ₹5,00,000 per family per year',
    treatmentCovered: 'Surgical oncology, chemotherapy cycles, radiotherapy, immunotherapy packages, pre and post-hospitalization costs.',
    applicableStates: 'All India (except NCT of Delhi & West Bengal which have parallel state frameworks)',
    eligibilityCriteria: [
      'Identified under SECC 2011 database as deprived rural household or identified urban occupational category',
      'Families holding active Ayushman Bharat Golden Card / PMJAY e-Card',
      'Senior citizens aged 70+ now eligible for dedicated ₹5 Lakh top-up irrespective of income'
    ],
    requiredDocuments: [
      'Aadhaar Card (Mandatory for biometric authentication)',
      'Ration Card / PM-JAY Letter / Family ID Proof',
      'Government Hospital Cancer Diagnosis & Staging Summary',
      'Treating Hospital Empanelment Pre-authorization request'
    ],
    applicationProcess: [
      'Step 1: Verify eligibility at your nearest Ayushman Mitra kiosk in an empaneled public or private hospital.',
      'Step 2: Present Aadhaar and Ration Card to generate or print your Ayushman Card.',
      'Step 3: Hospital Ayushman Mitra submits treatment package pre-authorization to the State Health Agency online.',
      'Step 4: Approval is typically processed within 24-48 hours; cashless treatment begins immediately with ₹0 out-of-pocket charges for approved packages.'
    ],
    officialLink: 'https://pmjay.gov.in',
    portalLabel: 'Official PM-JAY National Portal',
    tollFreeHelpline: '14555 / 1800 111 565'
  },
  {
    id: 'scheme-ran',
    name: 'Rashtriya Arogya Nidhi (RAN) — Health Minister’s Cancer Patient Fund (HMCPF)',
    level: 'Central Government',
    authority: 'Ministry of Health and Family Welfare (MoHFW)',
    coverageAmount: 'Up to ₹15,00,000 one-time financial grant',
    treatmentCovered: 'High-cost oncology surgeries, expensive targeted medications, bone marrow transplants, complex radiation treatments at 27 Regional Cancer Centres (RCCs).',
    applicableStates: 'All Indian States & UTs',
    eligibilityCriteria: [
      'Patients living below poverty line (BPL) suffering from life-threatening cancer diseases',
      'Must be receiving treatment in one of the 27 designated Regional Cancer Centres (RCCs) or Central Institutes (AIIMS, TMH, PGIMER, etc.)',
      'Income certificate issued by District Revenue Authority certifying BPL status'
    ],
    requiredDocuments: [
      'Official Application Form duly countersigned by Treating Oncologist & Medical Superintendent of RCC',
      'BPL Ration Card or Income Certificate from Tehsildar / District Magistrate',
      'Detailed Hospital Cost Estimate Breakdown on official institutional letterhead',
      'Aadhaar Card copy & 2 passport-sized photographs'
    ],
    applicationProcess: [
      'Step 1: Obtain the HMCPF application form from the Medical Superintendent office or Social Welfare Department of the RCC.',
      'Step 2: Have your treating oncologist fill Section B detailing disease stage, histology, and itemized cost projection.',
      'Step 3: Submit application with BPL certificate to the hospital social work department for verification.',
      'Step 4: Funds are directly disbursed to the revolving fund of the treating hospital, crediting patient account.'
    ],
    officialLink: 'https://main.mohfw.gov.in/major-programmes/poor-patients-financial-support/rashtriya-arogya-nidhi-ran',
    portalLabel: 'MoHFW Official RAN / HMCPF Page',
    tollFreeHelpline: '011-2306 3410'
  },
  {
    id: 'scheme-mjpjay',
    name: 'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)',
    level: 'State Government',
    authority: 'State Health Assurance Society, Govt of Maharashtra',
    coverageAmount: 'Up to ₹5,00,000 per family per year',
    treatmentCovered: 'Comprehensive cancer surgeries, chemotherapy regimens, radiation therapy (IMRT, 3DCRT), pediatric oncology, and histopathology testing.',
    applicableStates: 'Maharashtra',
    eligibilityCriteria: [
      'Families holding Yellow or Orange Ration Cards issued by Maharashtra Food & Civil Supplies Department',
      'Antyodaya Anna Yojana (AAY) or Annapurna card holders',
      'Farmers from 14 agrarian distress districts holding White Ration cards + 7/12 extract'
    ],
    requiredDocuments: [
      'Valid Yellow / Orange Ration Card',
      'Aadhaar Card of patient & family head',
      'Cancer Diagnostic Report (Histopathology / Biopsy / IHC)',
      'Referral slip from District Civil Hospital or direct walk-in to empaneled hospital Arogyamitra'
    ],
    applicationProcess: [
      'Step 1: Approach the MJPJAY Arogyamitra counter at empaneled hospitals (e.g. Tata Memorial, KEM, Sassoon Pune).',
      'Step 2: Arogyamitra initiates e-preauthorization with diagnostic reports.',
      'Step 3: Dedicated medical specialist desk approves package within 12 hours.',
      'Step 4: Complete cashless hospitalization including medicines and post-discharge consultations.'
    ],
    officialLink: 'https://www.jeevandayee.gov.in',
    portalLabel: 'Official Maharashtra MJPJAY Portal',
    tollFreeHelpline: '155388 / 1800 233 2200'
  },
  {
    id: 'scheme-karunya',
    name: 'Karunya Benevolent Fund & KASP (Kerala)',
    level: 'State Government',
    authority: 'State Health Agency (SHA), Govt of Kerala',
    coverageAmount: 'Up to ₹3,00,000 - ₹5,00,000 assistance',
    treatmentCovered: 'Cancer treatments, chemotherapy medicines, targeted biological drugs, and surgical resections in government medical colleges and empaneled private centres.',
    applicableStates: 'Kerala',
    eligibilityCriteria: [
      'BPL ration card holders of Kerala (Pink & Yellow cards)',
      'Families with annual family income below ₹3 Lakhs under special medical distress assessment'
    ],
    requiredDocuments: [
      'Kerala Ration Card',
      'Aadhaar Card',
      'Income Certificate from Village Officer',
      'Detailed Medical Report from Govt Medical College Oncologist'
    ],
    applicationProcess: [
      'Step 1: Submit application via the treating Medical College / Regional Cancer Centre (RCC Trivandrum).',
      'Step 2: Verification conducted by District Lottery Officer / Karunya Committee.',
      'Step 3: Sanction letter issued directly to hospital pharmacy for free dispensing.'
    ],
    officialLink: 'https://sha.kerala.gov.in',
    portalLabel: 'Official Kerala State Health Agency',
    tollFreeHelpline: '1056 (DISHA Kerala)'
  },
  {
    id: 'scheme-cmchis',
    name: 'Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS)',
    level: 'State Government',
    authority: 'Department of Health & Family Welfare, Govt of Tamil Nadu',
    coverageAmount: 'Up to ₹5,00,000 per family per year',
    treatmentCovered: 'Comprehensive oncology management including surgical onco packages, chemotherapy, radiation therapy (including CyberKnife and Linear Accelerator), and bone marrow transplant.',
    applicableStates: 'Tamil Nadu',
    eligibilityCriteria: [
      'Residents of Tamil Nadu with annual family income less than ₹1,20,000 as certified by VAO/Tahsildar',
      'CMCHIS Smart Card holders'
    ],
    requiredDocuments: [
      'CMCHIS Smart Card',
      'Family Ration Card / Aadhaar Card',
      'Income Certificate',
      'Oncologist clinical summary from empaneled institute (e.g. Adyar Cancer Institute)'
    ],
    applicationProcess: [
      'Step 1: Present CMCHIS Card at any empaneled hospital helpdesk.',
      'Step 2: Liaison Officer uploads clinical history for pre-authorization.',
      'Step 3: Approval received online within 24 hours for cashless admission.'
    ],
    officialLink: 'https://www.cmchistn.com',
    portalLabel: 'Official Tamil Nadu CMCHIS Portal',
    tollFreeHelpline: '1800 425 3993'
  },
  {
    id: 'scheme-railway',
    name: 'Indian Railways Cancer Patient Travel Concession',
    level: 'Central Ministry',
    authority: 'Ministry of Railways, Govt of India',
    coverageAmount: 'Up to 100% fare concession for patient + 75% for one escort/caregiver',
    treatmentCovered: 'Train travel fare discount for traveling from home station to recognized cancer hospital and back for periodic treatment, chemotherapy, radiation, or review.',
    applicableStates: 'All India',
    eligibilityCriteria: [
      'Any cancer patient traveling for periodic medical check-up, treatment, or return journey',
      '100% concession in Sleeper and 3AC; 75% in 2AC/1AC; 75% for 1 traveling escort in Sleeper/3AC'
    ],
    requiredDocuments: [
      'Official Railway Concession Certificate (Form Annexure-B) signed and stamped by the Officer-in-Charge / Medical Superintendent of recognized cancer hospital',
      'Original OPD Card / Hospital Registration Slip',
      'Valid Government Photo ID proof of patient and escort'
    ],
    applicationProcess: [
      'Step 1: Have the treating cancer hospital administrative desk sign and stamp the Railway Concession Certificate.',
      'Step 2: Present the stamped certificate and photocopies at the PRS Reservation Counter at any railway station.',
      'Step 3: Concessional journey ticket is issued immediately for patient and escort.'
    ],
    officialLink: 'https://indianrailways.gov.in',
    portalLabel: 'Official Indian Railways Concession Guidelines',
    tollFreeHelpline: '139'
  }
];

// Helper screener to match user inputs to potentially relevant schemes
export function screenSchemes({ state, annualIncome, hospitalType, hasBplCard }) {
  const matches = [];

  // Check PM-JAY
  if (state !== 'Delhi' && state !== 'West Bengal') {
    if (hasBplCard || annualIncome <= 250000) {
      matches.push({
        schemeId: 'scheme-pmjay',
        matchReason: 'Your income / BPL status qualifies you for the nationwide ₹5 Lakh PM-JAY hospital coverage.',
        relevanceConfidence: 'High'
      });
    }
  }

  // Check RAN - HMCPF
  if (hasBplCard || annualIncome <= 180000) {
    if (hospitalType === 'Government / RCC' || hospitalType === 'Apex Central Institute') {
      matches.push({
        schemeId: 'scheme-ran',
        matchReason: 'As a BPL/low-income patient treated at a public Regional Cancer Centre, you can apply for up to ₹15 Lakhs one-time grant under HMCPF.',
        relevanceConfidence: 'High'
      });
    }
  }

  // State specific
  if (state === 'Maharashtra') {
    matches.push({
      schemeId: 'scheme-mjpjay',
      matchReason: 'Maharashtra residents with Yellow/Orange ration cards qualify for ₹5 Lakhs cashless treatment under MJPJAY.',
      relevanceConfidence: 'High'
    });
  }

  if (state === 'Kerala') {
    matches.push({
      schemeId: 'scheme-karunya',
      matchReason: 'Kerala residents can apply for Karunya Benevolent Fund and KASP coverage.',
      relevanceConfidence: 'High'
    });
  }

  if (state === 'Tamil Nadu') {
    matches.push({
      schemeId: 'scheme-cmchis',
      matchReason: 'Tamil Nadu residents with annual income below ₹1.2 Lakhs are eligible for CMCHIS cashless coverage.',
      relevanceConfidence: 'High'
    });
  }

  // Railways always applicable for travel
  matches.push({
    schemeId: 'scheme-railway',
    matchReason: 'All confirmed cancer patients in India are entitled to up to 100% rail travel concession for treatment visits.',
    relevanceConfidence: 'Universal'
  });

  return matches;
}

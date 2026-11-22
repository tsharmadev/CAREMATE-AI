// District Cancer Facility Score / CancerCare Accessibility Index Dataset
// Rigorous resource and accessibility scoring across 6 key evaluation dimensions

export const DISTRICT_SCORES = [
  {
    id: 'dist-1',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    zone: 'West',
    populationTotal: '9,356,962',
    tier: 'Metro',
    overallScore: 88,
    statusCategory: 'Good Accessibility', // 70-100
    colorCode: 'green',
    parameters: {
      cancerHospitals: 92,     // 92%
      specialistAccess: 90,    // 90%
      screeningFacilities: 84, // 84%
      bloodSupport: 88,        // 88%
      financialSupport: 89,    // 89%
      geographicAccess: 85     // 85%
    },
    metrics: {
      cancerCentresCount: 14,
      specialistsCount: 185,
      linearAccelerators: 18,
      petCtScanners: 11,
      bloodBanksCount: 38,
      bloodBanksWithApheresis: 22,
      ngoSupportUnits: 16,
      pmjayEmpaneledCentres: 12
    },
    keyGapsIdentified: [
      'High outstation patient influx causing OPD wait times > 4 days',
      'Affordable transit caregiver accommodation shortage near Parel corridor'
    ],
    recommendedAction: 'Decentralize routine chemotherapy cycles to peripheral day-care centres in Thane and Navi Mumbai.'
  },
  {
    id: 'dist-2',
    district: 'New Delhi',
    state: 'Delhi',
    zone: 'North',
    populationTotal: '1,420,000 (Central/South Hub)',
    tier: 'Metro',
    overallScore: 91,
    statusCategory: 'Good Accessibility',
    colorCode: 'green',
    parameters: {
      cancerHospitals: 95,
      specialistAccess: 94,
      screeningFacilities: 88,
      bloodSupport: 92,
      financialSupport: 90,
      geographicAccess: 87
    },
    metrics: {
      cancerCentresCount: 16,
      specialistsCount: 220,
      linearAccelerators: 22,
      petCtScanners: 15,
      bloodBanksCount: 42,
      bloodBanksWithApheresis: 26,
      ngoSupportUnits: 19,
      pmjayEmpaneledCentres: 15
    },
    keyGapsIdentified: [
      'Over-concentration of tertiary equipment in South/Central zones',
      'Severe bed occupancy pressure from neighboring Northern states'
    ],
    recommendedAction: 'Strengthen fast-track referral pathways from Western UP and Haryana.'
  },
  {
    id: 'dist-3',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    zone: 'South',
    populationTotal: '9,621,551',
    tier: 'Metro',
    overallScore: 84,
    statusCategory: 'Good Accessibility',
    colorCode: 'green',
    parameters: {
      cancerHospitals: 88,
      specialistAccess: 86,
      screeningFacilities: 80,
      bloodSupport: 84,
      financialSupport: 85,
      geographicAccess: 81
    },
    metrics: {
      cancerCentresCount: 12,
      specialistsCount: 140,
      linearAccelerators: 14,
      petCtScanners: 9,
      bloodBanksCount: 30,
      bloodBanksWithApheresis: 18,
      ngoSupportUnits: 11,
      pmjayEmpaneledCentres: 10
    },
    keyGapsIdentified: [
      'Significant cost disparity between private tertiary hubs and public RCC KMIO',
      'Peripheral traffic congestion delays day-care chemotherapy transit'
    ],
    recommendedAction: 'Expand municipal satellite screening clinics in peri-urban belts (Hosakote, Nelamangala).'
  },
  {
    id: 'dist-4',
    district: 'Chennai',
    state: 'Tamil Nadu',
    zone: 'South',
    populationTotal: '7,088,000',
    tier: 'Metro',
    overallScore: 89,
    statusCategory: 'Good Accessibility',
    colorCode: 'green',
    parameters: {
      cancerHospitals: 92,
      specialistAccess: 91,
      screeningFacilities: 87,
      bloodSupport: 89,
      financialSupport: 92,
      geographicAccess: 83
    },
    metrics: {
      cancerCentresCount: 15,
      specialistsCount: 170,
      linearAccelerators: 16,
      petCtScanners: 12,
      bloodBanksCount: 35,
      bloodBanksWithApheresis: 20,
      ngoSupportUnits: 14,
      pmjayEmpaneledCentres: 14
    },
    keyGapsIdentified: [
      'Tamil Nadu CMCHIS scheme covers major therapies, but novel targeted antibody therapies need higher sub-caps.'
    ],
    recommendedAction: 'Support local manufacturing of biosimilar oncology pharmaceuticals.'
  },
  {
    id: 'dist-5',
    district: 'Varanasi',
    state: 'Uttar Pradesh',
    zone: 'North',
    populationTotal: '3,676,841',
    tier: 'Tier-2',
    overallScore: 68,
    statusCategory: 'Moderate Accessibility', // 45-69
    colorCode: 'yellow',
    parameters: {
      cancerHospitals: 74,
      specialistAccess: 66,
      screeningFacilities: 62,
      bloodSupport: 72,
      financialSupport: 70,
      geographicAccess: 64
    },
    metrics: {
      cancerCentresCount: 3,
      specialistsCount: 32,
      linearAccelerators: 3,
      petCtScanners: 2,
      bloodBanksCount: 8,
      bloodBanksWithApheresis: 4,
      ngoSupportUnits: 4,
      pmjayEmpaneledCentres: 3
    },
    keyGapsIdentified: [
      'HBCHRC Varanasi absorbs massive patient load from Eastern UP, Bihar, and Jharkhand',
      'Screening coverage in rural blocks remains below 12%'
    ],
    recommendedAction: 'Deploy 4 dedicated mobile screening units with digital mammography across rural tehsils.'
  },
  {
    id: 'dist-6',
    district: 'Kamrup Metropolitan (Guwahati)',
    state: 'Assam',
    zone: 'North-East',
    populationTotal: '1,253,938',
    tier: 'Tier-2 Hub',
    overallScore: 65,
    statusCategory: 'Moderate Accessibility',
    colorCode: 'yellow',
    parameters: {
      cancerHospitals: 70,
      specialistAccess: 64,
      screeningFacilities: 58,
      bloodSupport: 69,
      financialSupport: 68,
      geographicAccess: 61
    },
    metrics: {
      cancerCentresCount: 4,
      specialistsCount: 35,
      linearAccelerators: 3,
      petCtScanners: 2,
      bloodBanksCount: 9,
      bloodBanksWithApheresis: 3,
      ngoSupportUnits: 5,
      pmjayEmpaneledCentres: 4
    },
    keyGapsIdentified: [
      'High incidence of hypopharyngeal and esophageal cancers due to betel quid usage',
      'Serves as the primary referral point for all 7 North-Eastern states'
    ],
    recommendedAction: 'Establish satellite chemotherapy day-care centres in Upper Assam and Meghalaya borders.'
  },
  {
    id: 'dist-7',
    district: 'Patna',
    state: 'Bihar',
    zone: 'East',
    populationTotal: '5,838,465',
    tier: 'Tier-2',
    overallScore: 56,
    statusCategory: 'Moderate Accessibility',
    colorCode: 'yellow',
    parameters: {
      cancerHospitals: 60,
      specialistAccess: 52,
      screeningFacilities: 48,
      bloodSupport: 62,
      financialSupport: 64,
      geographicAccess: 50
    },
    metrics: {
      cancerCentresCount: 4,
      specialistsCount: 26,
      linearAccelerators: 2,
      petCtScanners: 2,
      bloodBanksCount: 11,
      bloodBanksWithApheresis: 3,
      ngoSupportUnits: 3,
      pmjayEmpaneledCentres: 4
    },
    keyGapsIdentified: [
      'Severe shortage of pediatric oncology inpatient beds',
      'High distress travel to Kolkata and Mumbai for advanced radiation therapy'
    ],
    recommendedAction: 'Operationalize new high-energy linear accelerator at AIIMS Patna and Indira Gandhi Institute.'
  },
  {
    id: 'dist-8',
    district: 'Cachar (Silchar)',
    state: 'Assam',
    zone: 'North-East',
    populationTotal: '1,736,617',
    tier: 'Tier-3 / Border',
    overallScore: 42,
    statusCategory: 'Poor / Underserved', // <45
    colorCode: 'red',
    parameters: {
      cancerHospitals: 45,
      specialistAccess: 38,
      screeningFacilities: 35,
      bloodSupport: 46,
      financialSupport: 49,
      geographicAccess: 39
    },
    metrics: {
      cancerCentresCount: 1, // Cachar Cancer Hospital & Research Centre
      specialistsCount: 9,
      linearAccelerators: 1,
      petCtScanners: 0,
      bloodBanksCount: 3,
      bloodBanksWithApheresis: 1,
      ngoSupportUnits: 2,
      pmjayEmpaneledCentres: 1
    },
    keyGapsIdentified: [
      'No PET-CT scanner within 250 km radius (patients travel 12 hours by road to Guwahati)',
      'Severe shortages of single donor platelet (SDP) apheresis units during monsoon landslides'
    ],
    recommendedAction: 'Grant capital subsidy for diagnostic PET-CT scanner and establish emergency platelet backup.'
  },
  {
    id: 'dist-9',
    district: 'Wardha',
    state: 'Maharashtra',
    zone: 'West',
    populationTotal: '1,300,774',
    tier: 'Rural / Semi-Urban',
    overallScore: 49,
    statusCategory: 'Moderate Accessibility',
    colorCode: 'yellow',
    parameters: {
      cancerHospitals: 52,
      specialistAccess: 44,
      screeningFacilities: 47,
      bloodSupport: 54,
      financialSupport: 52,
      geographicAccess: 45
    },
    metrics: {
      cancerCentresCount: 1,
      specialistsCount: 8,
      linearAccelerators: 1,
      petCtScanners: 0,
      bloodBanksCount: 4,
      bloodBanksWithApheresis: 1,
      ngoSupportUnits: 2,
      pmjayEmpaneledCentres: 2
    },
    keyGapsIdentified: [
      'Patients depend heavily on Nagpur (75 km away) for surgical oncology subspecialties',
      'Limited weekend oncologist availability'
    ],
    recommendedAction: 'Establish weekly visiting super-specialty surgical OPD from Nagpur AIIMS.'
  },
  {
    id: 'dist-10',
    district: 'Kalahandi',
    state: 'Odisha',
    zone: 'East',
    populationTotal: '1,576,869',
    tier: 'Aspirational / Rural',
    overallScore: 31,
    statusCategory: 'Poor / Underserved',
    colorCode: 'red',
    parameters: {
      cancerHospitals: 25,
      specialistAccess: 20,
      screeningFacilities: 32,
      bloodSupport: 38,
      financialSupport: 44,
      geographicAccess: 27
    },
    metrics: {
      cancerCentresCount: 0, // No comprehensive cancer hospital in district
      specialistsCount: 2,   // Only visiting medical oncologists
      linearAccelerators: 0,
      petCtScanners: 0,
      bloodBanksCount: 2,
      bloodBanksWithApheresis: 0,
      ngoSupportUnits: 1,
      pmjayEmpaneledCentres: 1
    },
    keyGapsIdentified: [
      'ZERO linear accelerator radiation machines in district',
      'Patients must travel 400+ km to Cuttack (AHRCC) or Bhubaneswar for radiation & surgical resection',
      'Lack of cold-chain for chemotherapy drugs at district hospital'
    ],
    recommendedAction: 'Priority establishment of a Daycare Chemotherapy Center and tele-oncology consultation node at District Headquarter Hospital.'
  },
  {
    id: 'dist-11',
    district: 'Barmer',
    state: 'Rajasthan',
    zone: 'North-West',
    populationTotal: '2,603,751',
    tier: 'Border / Desert Rural',
    overallScore: 36,
    statusCategory: 'Poor / Underserved',
    colorCode: 'red',
    parameters: {
      cancerHospitals: 30,
      specialistAccess: 26,
      screeningFacilities: 34,
      bloodSupport: 42,
      financialSupport: 48,
      geographicAccess: 36
    },
    metrics: {
      cancerCentresCount: 0,
      specialistsCount: 3,
      linearAccelerators: 0,
      petCtScanners: 0,
      bloodBanksCount: 3,
      bloodBanksWithApheresis: 0,
      ngoSupportUnits: 1,
      pmjayEmpaneledCentres: 1
    },
    keyGapsIdentified: [
      'Extreme geographic distances between villages and nearest oncologist in Jodhpur (200 km)',
      'Severe delay in initial biopsy diagnosis (often 4-6 weeks)'
    ],
    recommendedAction: 'Deploy rapid digital tele-pathology reporting connecting Barmer Medical College with AIIMS Jodhpur.'
  },
  {
    id: 'dist-12',
    district: 'Ernakulam (Kochi)',
    state: 'Kerala',
    zone: 'South',
    populationTotal: '3,427,659',
    tier: 'Urban',
    overallScore: 86,
    statusCategory: 'Good Accessibility',
    colorCode: 'green',
    parameters: {
      cancerHospitals: 90,
      specialistAccess: 88,
      screeningFacilities: 85,
      bloodSupport: 87,
      financialSupport: 86,
      geographicAccess: 80
    },
    metrics: {
      cancerCentresCount: 8,
      specialistsCount: 95,
      linearAccelerators: 9,
      petCtScanners: 6,
      bloodBanksCount: 22,
      bloodBanksWithApheresis: 12,
      ngoSupportUnits: 8,
      pmjayEmpaneledCentres: 7
    },
    keyGapsIdentified: [
      'High out-of-pocket costs for advanced genomic NGS panels and target drugs not covered under Karunya scheme'
    ],
    recommendedAction: 'Establish state-subsidized molecular diagnostic facility at Cochin Cancer Research Centre.'
  }
];

// District evaluation formula breakdown description for UI display
export const SCORING_METHODOLOGY = {
  title: 'District CancerCare Accessibility & Resource Index (DCARI)',
  formula: 'Overall Score = (Hospitals × 0.25) + (Specialists × 0.20) + (Screening × 0.15) + (Blood × 0.15) + (Financial × 0.15) + (Access × 0.10)',
  disclaimer: 'This metric is strictly an Accessibility & Infrastructure Index. It evaluates geographical proximity, facility density, specialist availability, and financial scheme empanelment. It does NOT evaluate clinical outcome rates or individual hospital survival statistics.'
};

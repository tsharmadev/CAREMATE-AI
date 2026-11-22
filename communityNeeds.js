// Community Help & Need Matching Board
// Verified requests from patients/caregivers matched with volunteers, NGOs, and blood donors

export const COMMUNITY_NEEDS = [
  {
    id: 'need-1',
    category: 'Blood & Platelet Support',
    urgency: 'CRITICAL',
    title: 'Urgent: 2 Units Single Donor Platelets (SDP) — O-Negative Needed',
    patientName: 'Kunal Verma (19 yrs, Acute Myeloid Leukemia)',
    hospital: 'Tata Memorial Hospital, Parel, Mumbai',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    description: 'Patient Kunal underwent induction chemo cycle 2. Platelet count has plunged to 8,000/mcL with petechial bleeding. Urgent need for eligible O-negative platelet apheresis donor at TMH Blood Bank within next 12 hours.',
    datePosted: '2 hours ago',
    requiredBy: 'Today by 11:00 PM',
    status: 'ACTIVE_SEEKING', // ACTIVE_SEEKING, MATCH_IN_PROGRESS, FULFILLED
    matchedEntities: [
      {
        name: 'Amit Vikram Rao',
        type: 'Verified Platelet Donor (18 donations)',
        contactInitiated: true,
        statusNote: 'Donor notified via SMS, arriving at blood bank at 8:30 PM'
      }
    ],
    verifiedByHospitalStaff: true,
    verificationCode: 'TMH-BB-EMERGENCY-8812'
  },
  {
    id: 'need-2',
    category: 'Patient Transportation',
    urgency: 'HIGH',
    title: 'Wheelchair-Accessible Transport: Howrah Station to CNCI Kolkata',
    patientName: 'Dipali Das (62 yrs, Post-Hysterectomy Chemo)',
    hospital: 'Chittaranjan National Cancer Institute (CNCI), Rajarhat, Kolkata',
    district: 'Kolkata / North 24 Parganas',
    state: 'West Bengal',
    description: 'Elderly patient arriving from rural Purulia by early morning train at Howrah Station (Track 12). Needs non-emergency wheelchair vehicle transit to CNCI Rajarhat for Cycle 4 Carboplatin/Paclitaxel infusion.',
    datePosted: '5 hours ago',
    requiredBy: 'Tomorrow, 6:00 AM',
    status: 'MATCH_IN_PROGRESS',
    matchedEntities: [
      {
        name: 'Bengal Oncology Patient Care Transport Shuttle',
        type: 'Verified NGO Van',
        contactInitiated: true,
        statusNote: 'Volunteer driver Subhash deployed with oxygen facility'
      }
    ],
    verifiedByHospitalStaff: true,
    verificationCode: 'CNCI-OPD-7721'
  },
  {
    id: 'need-3',
    category: 'Temporary Accommodation',
    urgency: 'MEDIUM',
    title: 'Affordable 14-Day Stay for 2 Attendants near Kidwai KMIO Bangalore',
    patientName: 'Rameshwar Reddy (54 yrs, Oral Cavity Radiation)',
    hospital: 'Kidwai Memorial Institute of Oncology (KMIO), Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    description: 'Patient undergoing daily 3DCRT radiation for 4 weeks. Unable to afford private hotel tariffs (over ₹1,500/day). Seeking subsidized charitable dharamshala room within 2 km of KMIO Dairy Circle.',
    datePosted: '1 day ago',
    requiredBy: 'Within 3 days',
    status: 'ACTIVE_SEEKING',
    matchedEntities: [
      {
        name: 'Sri Shankara Cancer Foundation Guest Home',
        type: 'Affordable Caregiver Lodge',
        contactInitiated: false,
        statusNote: 'Bed allotment pending document verification'
      }
    ],
    verifiedByHospitalStaff: true,
    verificationCode: 'KMIO-SWD-4109'
  },
  {
    id: 'need-4',
    category: 'Volunteer Support',
    urgency: 'MEDIUM',
    title: 'Care Companion / Language Translator (Bengali to Hindi/English) at AIIMS Delhi',
    patientName: 'Bina Roy (58 yrs, Breast Cancer)',
    hospital: 'Dr. B.R. Ambedkar IRCH, AIIMS, New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    description: 'Patient and daughter arrived from Tripura speaking only Bengali. Daughter feels overwhelmed navigating OPD registration, nuclear medicine PET tokens, and oncology pharmacy queues.',
    datePosted: '6 hours ago',
    requiredBy: 'Tomorrow, 9:00 AM',
    status: 'FULFILLED',
    matchedEntities: [
      {
        name: 'Sanjeevani CanSahyogi Volunteer Network',
        type: 'Trained Patient Navigators',
        contactInitiated: true,
        statusNote: 'Volunteer Debolina Mitra assigned to meet at Gate No. 2'
      }
    ],
    verifiedByHospitalStaff: true,
    verificationCode: 'AIIMS-NAV-1022'
  },
  {
    id: 'need-5',
    category: 'Financial Assistance',
    urgency: 'HIGH',
    title: 'Emergency Co-pay Support for Trastuzumab (Herceptin) Cycle 1',
    patientName: 'Farzana Parveen (38 yrs, HER2+ Breast Cancer)',
    hospital: 'Civil Hospital / HBCHRC Hub',
    district: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'State scheme covered basic chemo drugs but biological targeted injection required immediate co-pay of ₹24,000 before cold-chain reconstitution.',
    datePosted: '3 hours ago',
    requiredBy: 'Within 24 hours',
    status: 'ACTIVE_SEEKING',
    matchedEntities: [
      {
        name: 'V Care Emergency Drug Fund',
        type: 'Verified NGO Co-pay Grant',
        contactInitiated: true,
        statusNote: 'Hospital prescription receipt under verification by social worker'
      }
    ],
    verifiedByHospitalStaff: true,
    verificationCode: 'HBCH-SW-9021'
  }
];

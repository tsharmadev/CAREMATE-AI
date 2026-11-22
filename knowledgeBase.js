// Verified Cancer Information & Navigation Knowledge Base (RAG Source Corpus)
// Curated from verified clinical standards: National Cancer Grid (NCG), ICMR Guidelines, Tata Memorial Guidelines, and MoHFW

export const KNOWLEDGE_BASE = [
  {
    topic: 'Biopsy & Histopathology',
    keywords: ['biopsy', 'histopathology', 'tissue sample', 'malignancy', 'benign', 'fnac', 'core needle'],
    title: 'What is a Biopsy and why is it mandatory before cancer treatment?',
    answer: 'A biopsy is a minor medical procedure where a small tissue sample is extracted from a suspected lump or lesion so a specialized pathologist can examine it under high magnification microscopes.\n\nKey Facts:\n1. A biopsy is the ONLY definitive way to confirm whether a growth is malignant (cancerous) or benign (non-cancerous).\n2. Myth Buster: Under modern clinical oncology guidelines (NCG & Tata Memorial), a properly conducted core-needle or punch biopsy does NOT spread cancer.\n3. Beyond confirming cancer, modern biopsies enable Immunohistochemistry (IHC) and Molecular Genetic Profiling (like ER, PR, HER2, EGFR, KRAS) to tell your doctor precisely which targeted medicines will destroy the tumor.',
    sources: [
      { name: 'National Cancer Grid (NCG) Diagnostic Consensus Guidelines', url: 'https://tmc.gov.in/ncg' },
      { name: 'ICMR Guidelines for Management of Common Cancers in India', url: 'https://icmr.nic.in' }
    ]
  },
  {
    topic: 'Appointment Documentation & Preparation',
    keywords: ['documents', 'carry', 'first visit', 'appointment', 'what to take', 'checklist', 'reports'],
    title: 'What documents and records must I carry to my first oncology consultation?',
    answer: 'Arriving organized saves critical days in starting treatment. Carry:\n1. All Pathology Reports (Biopsy, FNAC, Pap smear) + Histopathology Glass Slides & Wax Tissue Blocks (if requested for second-opinion review).\n2. Full Imaging CDs & Films (CT scans, MRI, PET-CT, Ultrasound) — doctors need the actual digital DICOM scans, not just the typed paper report.\n3. Complete List of Current Medications with exact daily doses (including diabetes, blood pressure, thyroid, cardiac pills).\n4. Discharge Summaries from any previous operations or endoscopic procedures.\n5. Government Identity Proof (Aadhaar, Voter ID, Ration Card) and Government Health Insurance / Ayushman Bharat Cards for scheme desk registration.\n6. A written notepad with questions you and your family wish to ask the oncologist.',
    sources: [
      { name: 'Tata Memorial Hospital Patient Education Handouts', url: 'https://tmc.gov.in' },
      { name: 'CancerCare Grid Patient Guidance Protocols', url: '#' }
    ]
  },
  {
    topic: 'Government Schemes & Financial Aid',
    keywords: ['financial assistance', 'schemes', 'ayushman', 'pmjay', 'ran', 'hmcpf', 'money', 'free treatment', 'bpl'],
    title: 'How can a cancer patient access government financial schemes in India?',
    answer: 'India provides several central and state-level financial assistance pathways for cancer patients:\n\n1. Ayushman Bharat PM-JAY: Provides up to ₹5,00,000 cashless annual coverage per eligible family across thousands of empaneled public and private oncology hospitals nationwide.\n2. Rashtriya Arogya Nidhi (RAN) / Health Minister’s Cancer Patient Fund (HMCPF): Offers up to ₹15,00,000 one-time financial aid for Below Poverty Line (BPL) patients undergoing treatment at recognized Regional Cancer Centres (RCCs).\n3. State Schemes: Specific state programs like MJPJAY in Maharashtra, Karunya in Kerala, CMCHIS in Tamil Nadu, and Aarogyasri in AP/Telangana offer state-sponsored cashless oncology treatment packages.\n4. Indian Railways Concession: Offers up to 100% fare exemption for cancer patients and 75% for one companion traveling to recognized treatment hospitals.',
    sources: [
      { name: 'National Health Authority (NHA) PM-JAY Portal', url: 'https://pmjay.gov.in' },
      { name: 'MoHFW Central Health Grants Desk', url: 'https://main.mohfw.gov.in' }
    ]
  },
  {
    topic: 'Understanding Staging & Grades',
    keywords: ['stage', 'grade', 'tnm', 'metastasis', 'stage 1', 'stage 2', 'stage 3', 'stage 4', 'prognosis'],
    title: 'What is the difference between Cancer Stage and Cancer Grade?',
    answer: 'Cancer Stage and Grade measure two different biological aspects:\n\n• STAGE (Roman Numerals I to IV): Describes WHERE the cancer is located and HOW FAR it has spread in the body.\n  - Stage I: Small, localized tumor.\n  - Stage II & III: Larger local tumor that has reached nearby lymph nodes or surrounding tissues.\n  - Stage IV: Cancer cells have traveled through blood or lymphatic vessels to distant organs (Metastasis).\n\n• GRADE (Grade 1, 2, or 3): Describes how the cells look under a microscope. Low grade (Grade 1) cells look more like normal healthy tissue and tend to grow slowly; high grade (Grade 3) cells look erratic and divide rapidly.',
    sources: [
      { name: 'AJCC Cancer Staging Manual (8th Edition)', url: 'https://cancerstaging.org' },
      { name: 'American Society of Clinical Oncology (ASCO) Patient Education', url: 'https://cancer.net' }
    ]
  },
  {
    topic: 'Chemotherapy Side Effect Management',
    keywords: ['chemo', 'chemotherapy', 'side effects', 'nausea', 'vomiting', 'hair loss', 'fever', 'neutropenia', 'infection'],
    title: 'How should chemotherapy side effects be managed safely at home?',
    answer: 'Chemotherapy targets rapidly dividing cells. While highly effective, proactive supportive care ensures safety:\n\n1. FEVER WARNING (EMERGENCY): If a chemotherapy patient develops a fever of 100.4°F (38.0°C) or higher, this can indicate "Febrile Neutropenia" (dangerously low infection-fighting white blood cells). Contact the hospital emergency IMMEDIATELY. Do NOT just take paracetamol and sleep.\n2. Nausea & Vomiting: Take prescribed anti-emetics (like Ondansetron, Aprepitant) on the exact scheduled timetable, not just when nausea begins.\n3. Nutrition & Hydration: Drink 2-3 liters of clean boiled water daily. Eat small, frequent, high-protein cooked meals. Avoid raw salads, unpeeled street fruits, or unpasteurized dairy during low white count phases.\n4. Mouth Sores (Mucositis): Rinse mouth with salt and baking soda warm water solution after every meal. Use a soft pediatric toothbrush.',
    sources: [
      { name: 'Multinational Association of Supportive Care in Cancer (MASCC)', url: 'https://mascc.org' },
      { name: 'NCG Supportive Oncology Guidelines', url: 'https://tmc.gov.in/ncg' }
    ]
  },
  {
    topic: 'District CancerCare Score',
    keywords: ['district score', 'cancercare index', 'dcari', 'facility score', 'how is score calculated'],
    title: 'How does the District CancerCare Accessibility Score work?',
    answer: 'The District CancerCare Accessibility & Resource Index (DCARI) is a standardized data-driven score (0 to 100) that measures oncology infrastructure in Indian districts across 6 weighted parameters:\n\n1. Cancer Hospitals & Bed Capacity (25%)\n2. Specialist Oncologist Density (20%)\n3. Early Screening & Diagnostic Centres (15%)\n4. Blood Bank & Platelet Apheresis Coverage (15%)\n5. Financial Scheme Empanelment (15%)\n6. Geographic & Transport Transit (10%)\n\nColor Indicators:\n🟢 Green (70-100): High accessibility & infrastructure\n🟡 Yellow (45-69): Moderate accessibility; specific regional gaps\n🔴 Red (<45): Underserved district requiring urgent decentralized daycare or radiotherapy equipment intervention.\n\nDisclaimer: This is an accessibility and infrastructure capacity metric, not a measure of individual hospital medical skill or survival rates.',
    sources: [
      { name: 'CancerCare Grid Public Health Analytics Model', url: '#' }
    ]
  }
];

export function queryAssistant(userPrompt) {
  const cleanPrompt = userPrompt.toLowerCase().trim();
  
  // Search for best matching knowledge item
  let bestMatch = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (cleanPrompt.includes(kw)) {
        score += 2;
      }
    }
    if (cleanPrompt.includes(item.topic.toLowerCase())) {
      score += 4;
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return {
      title: bestMatch.title,
      content: bestMatch.answer,
      sources: bestMatch.sources,
      matchedTopic: bestMatch.topic
    };
  }

  // Fallback intelligent navigation answer
  return {
    title: 'Cancer Information & Navigation Guidance',
    content: `Thank you for reaching out to the CancerCare Navigation Assistant. 

Regarding your question about "${userPrompt}":

1. Clinical Safety Guidance: Please note that I provide navigation and informational assistance based on verified oncology consensus protocols (National Cancer Grid and ICMR), but I cannot replace a qualified oncologist's diagnostic evaluation.
2. Hospital Resources: You can search our verified database of comprehensive cancer centres, Regional Cancer Centres (RCCs), and specialists using the "Resource Database" tab.
3. Financial Aid: If you are looking for assistance with treatment costs, explore our "Financial Support & Schemes" section for Ayushman Bharat PM-JAY, RAN-HMCPF, and state healthcare funds.
4. Appointment Prep: If you have an upcoming consultation, use our "Visit Assistant" tool to generate an itemized checklist of biopsy slides, DICOM scan CDs, and questions to ask your doctor.

Would you like more specific information on hospital visit checklists, government scheme eligibility, or understanding medical reports?`,
    sources: [
      { name: 'National Cancer Grid (NCG) India Guidelines', url: 'https://tmc.gov.in/ncg' },
      { name: 'ICMR Oncology Protocols', url: 'https://icmr.nic.in' }
    ],
    matchedTopic: 'General Oncology Navigation'
  };
}

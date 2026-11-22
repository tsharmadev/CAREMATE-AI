import React, { useState, useEffect } from 'react';
import { 
  ClipboardList, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Download, 
  Plus, 
  Trash2, 
  Sparkles, 
  FileText, 
  HelpCircle,
  Clock,
  ShieldCheck,
  Share2
} from 'lucide-react';

export default function VisitAssistant() {
  // Appointment Details State
  const [appointmentType, setAppointmentType] = useState('first-consultation'); // first-consultation, follow-up, second-opinion, chemo-cycle, pre-surgery
  const [hospitalContext, setHospitalContext] = useState('new-hospital'); // new-hospital, existing-hospital
  const [cancerSite, setCancerSite] = useState('breast'); // breast, lung, oral-head-neck, gi-colon, hematology, gynecologic, other
  const [hasBiopsyReport, setHasBiopsyReport] = useState(true);
  const [hasScansCd, setHasScansCd] = useState(true);
  const [insuranceScheme, setInsuranceScheme] = useState('ayushman-pmjay'); // ayushman-pmjay, state-scheme, private-insurance, out-of-pocket

  // Custom User Items
  const [customItems, setCustomItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  // Ticked state
  const [checkedItems, setCheckedItems] = useState({});

  // Generate dynamic checklist items based on user selections
  const generateChecklist = () => {
    const medicalDocs = [];
    const administrativeDocs = [];
    const personalItems = [];
    const oncologistQuestions = [];

    // Medical Records
    if (appointmentType === 'first-consultation' || appointmentType === 'second-opinion') {
      medicalDocs.push({
        id: 'med-1',
        title: 'Original Biopsy & Histopathology Reports',
        detail: 'Carry all printed pathology reports, including Immunohistochemistry (IHC) markers if tested.'
      });
      if (appointmentType === 'second-opinion') {
        medicalDocs.push({
          id: 'med-2',
          title: 'Histopathology Glass Slides & Paraffin Tissue Blocks',
          detail: 'Crucial: When seeking a second opinion at premier centres (TMH, AIIMS), their pathology lab re-examines the actual tissue slides to confirm diagnosis.'
        });
      }
      medicalDocs.push({
        id: 'med-3',
        title: 'Imaging CDs / DVDs with DICOM Scans (PET-CT, CT, MRI)',
        detail: 'Do NOT bring only paper reports. Oncologists and radiologists must review the actual digital volumetric scan slices.'
      });
      medicalDocs.push({
        id: 'med-4',
        title: 'Comprehensive List of Current Medications & Dosages',
        detail: 'Include exact milligram doses of medications for diabetes, blood pressure, thyroid, cardiac, or anticoagulant pills.'
      });
    }

    if (appointmentType === 'chemo-cycle') {
      medicalDocs.push({
        id: 'med-chemo-1',
        title: 'Fresh Complete Blood Count (CBC) & Serum Creatinine / LFT',
        detail: 'Chemotherapy requires Absolute Neutrophil Count (ANC) > 1,500 and Platelets > 1,00,000 to safely proceed.'
      });
      medicalDocs.push({
        id: 'med-chemo-2',
        title: 'Chemotherapy Daycare Protocol Sheet & Doctor Prescription',
        detail: 'Signed daycare order form detailing the exact regimen drugs and pre-medications.'
      });
    }

    if (appointmentType === 'pre-surgery') {
      medicalDocs.push({
        id: 'med-surg-1',
        title: 'Pre-Anesthetic Checkup (PAC) Clearance Fitness Card',
        detail: 'Echo 2D report, pulmonary function test (PFT), and anesthetic clearance.'
      });
      medicalDocs.push({
        id: 'med-surg-2',
        title: 'Blood Bank Cross-Match Reservation Slips',
        detail: 'Slips confirming blood component reservation in hospital blood bank.'
      });
    }

    // Administrative & Financial
    if (hospitalContext === 'new-hospital') {
      administrativeDocs.push({
        id: 'adm-1',
        title: 'Patient Government Photo ID (Aadhaar / Voter ID / Passport)',
        detail: 'Mandatory for opening hospital Central Registration (CR/MRN) file.'
      });
      administrativeDocs.push({
        id: 'adm-2',
        title: '3 Passport Size Photographs of Patient',
        detail: 'Needed for physical OPD file and scheme registration cards.'
      });
    } else {
      administrativeDocs.push({
        id: 'adm-3',
        title: 'Hospital Registration Card / Patient File Number (MRN / CR)',
        detail: 'Have your hospital barcoded card ready to fast-track queue tokens.'
      });
    }

    if (insuranceScheme === 'ayushman-pmjay') {
      administrativeDocs.push({
        id: 'adm-sch-1',
        title: 'Ayushman Bharat Golden Card / PM-JAY e-Card',
        detail: 'Carry printed PVC or laminated card plus linked Aadhaar card for biometric thumb authentication at Ayushman Mitra kiosk.'
      });
      administrativeDocs.push({
        id: 'adm-sch-2',
        title: 'Family Ration Card Copy (BPL / Antyodaya if applicable)',
        detail: 'Required for state registry verification.'
      });
    } else if (insuranceScheme === 'private-insurance') {
      administrativeDocs.push({
        id: 'adm-ins-1',
        title: 'Health Insurance TPA Card & Policy Copy',
        detail: 'Pre-authorization desk requires policy document with cumulative sum insured.'
      });
    }

    // Physical Comfort & Caregiver Prep
    personalItems.push({
      id: 'per-1',
      title: 'Warm Shawl, Jacket & Socks',
      detail: 'Hospital waiting areas, scanning suites, and chemo infusion halls are kept chilly (18-20°C) for sterile air conditioning.'
    });
    personalItems.push({
      id: 'per-2',
      title: 'Water Bottle & Light Packed Snack (Dry fruits / Crackers)',
      detail: 'OPD and diagnostic delays can take 4 to 6 hours. (Note: fast only if blood work or abdominal scan specifically requested fasting).'
    });
    personalItems.push({
      id: 'per-3',
      title: 'Notepad & Pen / Companion Listener',
      detail: 'Oncology consultations involve high information volume. Having a trusted caregiver take notes prevents forgotten instructions.'
    });

    // Curated Questions for the Oncologist
    if (appointmentType === 'first-consultation' || appointmentType === 'second-opinion') {
      oncologistQuestions.push({
        id: 'q-1',
        title: 'What is the exact stage, biomarker profile, and site of origin?',
        why: 'Helps you understand whether the tumor is localized, regional, or metastatic.'
      });
      oncologistQuestions.push({
        id: 'q-2',
        title: 'What is the recommended treatment sequence (Surgery first, or Neoadjuvant Chemo/Radiation)?',
        why: 'In modern oncology, shrinking tumors with medicines prior to surgery often yields better preservation.'
      });
      oncologistQuestions.push({
        id: 'q-3',
        title: 'What is the goal of this treatment plan (Curative intent vs. Disease control)?',
        why: 'Provides compassionate clarity for patient and family decision-making.'
      });
      oncologistQuestions.push({
        id: 'q-4',
        title: 'Are generic / biosimilar equivalents or clinical trial options available?',
        why: 'Substantially reduces out-of-pocket costs without sacrificing efficacy.'
      });
      oncologistQuestions.push({
        id: 'q-5',
        title: 'Whom should we call at 2:00 AM if fever or severe vomiting develops at home?',
        why: 'Essential emergency safety contact for febrile neutropenia.'
      });
    } else if (appointmentType === 'chemo-cycle') {
      oncologistQuestions.push({
        id: 'q-chemo-1',
        title: 'Are my blood counts (ANC and Platelets) completely safe for this cycle dose?',
        why: 'Ensures bone marrow has recovered sufficiently.'
      });
      oncologistQuestions.push({
        id: 'q-chemo-2',
        title: 'Do I need a prophylactic G-CSF (white cell booster) injection after this cycle?',
        why: 'Prevents neutropenic infections in high-risk regimens.'
      });
    }

    return { medicalDocs, administrativeDocs, personalItems, oncologistQuestions };
  };

  const checklistData = generateChecklist();

  // Calculate total items and progress
  const allGeneratedIds = [
    ...checklistData.medicalDocs.map(i => i.id),
    ...checklistData.administrativeDocs.map(i => i.id),
    ...checklistData.personalItems.map(i => i.id),
    ...checklistData.oncologistQuestions.map(i => i.id),
    ...customItems.map(i => i.id)
  ];

  const totalItems = allGeneratedIds.length;
  const completedCount = allGeneratedIds.filter(id => checkedItems[id]).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    const newId = `custom-${Date.now()}`;
    setCustomItems([...customItems, { id: newId, title: newItemText.trim(), detail: 'Custom item added by patient' }]);
    setNewItemText('');
  };

  const removeCustomItem = (id) => {
    setCustomItems(customItems.filter(i => i.id !== id));
    const newChecked = { ...checkedItems };
    delete newChecked[id];
    setCheckedItems(newChecked);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
              <ClipboardList className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              “Prepare for Your Hospital Visit” Assistant
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Personalized appointment checklist generator. Ensure you have mandatory pathology slides, DICOM scan CDs, scheme documents, and the right questions ready for your oncologist.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 shadow-xs transition-all"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print Checklist</span>
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Appointment Parameter Configuration Form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <span>Appointment Parameters</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust parameters to generate a custom-tailored checklist.
              </p>
            </div>

            {/* Visit Stage */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Type of Upcoming Visit:
              </label>
              <select
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
              >
                <option value="first-consultation">First Consultation (New Diagnosis / Suspected Cancer)</option>
                <option value="second-opinion">Second Opinion (Review of outside hospital plan)</option>
                <option value="chemo-cycle">Chemotherapy Infusion Cycle</option>
                <option value="pre-surgery">Pre-Surgical Clearance & Workup</option>
                <option value="follow-up">Routine Post-Treatment Surveillance / Follow-up</option>
              </select>
            </div>

            {/* Hospital Relationship */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Hospital Context:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setHospitalContext('new-hospital')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                    hospitalContext === 'new-hospital'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  New Hospital (1st Visit)
                </button>
                <button
                  type="button"
                  onClick={() => setHospitalContext('existing-hospital')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                    hospitalContext === 'existing-hospital'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Existing Registered Patient
                </button>
              </div>
            </div>

            {/* Cancer Site / Suspected Diagnosis */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Cancer Site / Organ:
              </label>
              <select
                value={cancerSite}
                onChange={(e) => setCancerSite(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
              >
                <option value="breast">Breast Cancer</option>
                <option value="oral-head-neck">Oral / Head & Neck Malignancy</option>
                <option value="lung">Lung / Thoracic Malignancy</option>
                <option value="gi-colon">Gastrointestinal / Pancreas / Colorectal</option>
                <option value="hematology">Leukemia / Lymphoma / Myeloma</option>
                <option value="gynecologic">Cervical / Ovarian / Uterine</option>
                <option value="prostate">Prostate / Urological Cancer</option>
                <option value="other">Undiagnosed Lump / General Oncology</option>
              </select>
            </div>

            {/* Financial / Scheme Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Coverage / Payment Pathway:
              </label>
              <select
                value={insuranceScheme}
                onChange={(e) => setInsuranceScheme(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
              >
                <option value="ayushman-pmjay">Ayushman Bharat PM-JAY Card</option>
                <option value="state-scheme">State Scheme (MJPJAY / CMCHIS / Karunya)</option>
                <option value="private-insurance">Private Health Insurance TPA</option>
                <option value="out-of-pocket">Direct Self-Pay / Cash / Charitable</option>
              </select>
            </div>

            {/* Informational Guidance Notice */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Checklist dynamically updates whenever you switch visit stage or insurance mode. Items you check are preserved in your session.
              </p>
            </div>
          </div>

          {/* Add Custom Checklist Item */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card">
            <h4 className="text-xs font-bold text-slate-800 mb-2">Add Your Own Personal Item:</h4>
            <form onSubmit={handleAddCustom} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. Bring wheelchair cushion, mom's eye glasses..."
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shrink-0 transition-colors"
              >
                Add
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Interactive Generated Checklist */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Progress Header Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-elevated">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Interactive Visit Preparation Checklist
                </span>
                <h3 className="text-lg font-bold mt-0.5 text-white">
                  Appointment Readiness: {completedCount} of {totalItems} items ready
                </h3>
              </div>
              <div className="flex items-center space-x-2 self-start sm:self-auto">
                <span className="text-2xl font-black text-indigo-300">{progressPercent}%</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-indigo-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {progressPercent === 100 && (
              <p className="mt-3 text-xs text-emerald-300 font-semibold flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                All set! You have all mandatory clinical reports and questions prepared for your oncologist.
              </p>
            )}
          </div>

          {/* Section 1: Clinical Documents & Pathology */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  1. Mandatory Medical Records & Pathology Reports
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                {checklistData.medicalDocs.filter(i => checkedItems[i.id]).length}/{checklistData.medicalDocs.length} Checked
              </span>
            </div>

            <div className="space-y-3">
              {checklistData.medicalDocs.map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                    checkedItems[item.id]
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-800'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Administrative, IDs & Schemes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  2. Government ID, Hospital File & Scheme Cards
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                {checklistData.administrativeDocs.filter(i => checkedItems[i.id]).length}/{checklistData.administrativeDocs.length} Checked
              </span>
            </div>

            <div className="space-y-3">
              {checklistData.administrativeDocs.map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                    checkedItems[item.id]
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-800'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Physical Comfort & Caregiver Items */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  3. Physical Comfort & Day-of-Visit Essentials
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                {checklistData.personalItems.filter(i => checkedItems[i.id]).length}/{checklistData.personalItems.length} Checked
              </span>
            </div>

            <div className="space-y-3">
              {checklistData.personalItems.map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                    checkedItems[item.id]
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-800'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {item.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Tailored Questions to Ask Your Oncologist */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-rose-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  4. Questions You Should Ask the Doctor
                </h3>
              </div>
              <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                Recommended by Tata Memorial Guidelines
              </span>
            </div>

            <div className="space-y-3">
              {checklistData.oncologistQuestions.map(q => (
                <div 
                  key={q.id}
                  onClick={() => toggleCheck(q.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                    checkedItems[q.id]
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-800'
                      : 'bg-rose-50/30 border-rose-100 hover:border-rose-200 text-slate-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!checkedItems[q.id]}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${checkedItems[q.id] ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      "{q.title}"
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 italic">
                      Why ask this: {q.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Custom Added Items */}
          {customItems.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                5. Custom Personal Notes
              </h3>
              <div className="space-y-2">
                {customItems.map(item => (
                  <div 
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between"
                  >
                    <div 
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-center space-x-3 flex-1 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedItems[item.id]}
                        onChange={() => {}}
                        className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                      <span className={`text-xs font-medium ${checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {item.title}
                      </span>
                    </div>
                    <button 
                      onClick={() => removeCustomItem(item.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete custom item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

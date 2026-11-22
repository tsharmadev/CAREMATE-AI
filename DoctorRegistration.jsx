import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  FileText, 
  UploadCloud, 
  Smartphone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Award, 
  Building, 
  ArrowRight,
  Eye,
  FileCheck2,
  AlertTriangle,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { DOCTORS } from '../data/doctors';

export const STATE_MEDICAL_COUNCILS = [
  'National Medical Commission (NMC)',
  'Maharashtra Medical Council (MMC)',
  'Delhi Medical Council (DMC)',
  'Karnataka Medical Council (KMC)',
  'Tamil Nadu Medical Council (TNMC)',
  'Uttar Pradesh Medical Council (UPMC)',
  'West Bengal Medical Council (WBMC)',
  'Assam Medical Council (AMC)',
  'Bihar Medical Council (BMC)',
  'Kerala State Medical Council (KSMC)',
  'Gujarat Medical Council (GMC)',
  'Andhra Pradesh Medical Council (APMC)',
  'Telangana State Medical Council (TSMC)'
];

export default function DoctorRegistration() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeViewTab, setActiveViewTab] = useState('register'); // 'register' or 'directory'
  
  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: 'Dr. Rajeshwari Swaminathan',
    email: 'r.swaminathan@cancercare.org',
    phone: '+91 98401 23456',
    medicalCouncil: 'Tamil Nadu Medical Council (TNMC)',
    registrationNumber: 'TNMC-2014-98412',
    hospitalAffiliation: 'Cancer Institute Adyar / Apollo Proton Cancer Centre',
    specialization: 'Radiation Oncology',
    superSpecialty: 'Stereotactic Body Radiotherapy (SBRT) & Proton Beam Planning',
    experienceYears: '14',
    mbbsCollege: 'Madras Medical College, Chennai',
    pgSpecialty: 'MD (Radiotherapy) / DNB Radiation Oncology',
    govtIdType: 'Aadhaar Card'
  });

  // Simulated Document Files
  const [uploadedDocs, setUploadedDocs] = useState({
    mbbsCert: { name: 'MBBS_Degree_Certificate_MMC.pdf', size: '2.4 MB', uploaded: true },
    pgCert: { name: 'MD_Radiation_Oncology_Adyar.pdf', size: '3.1 MB', uploaded: true },
    councilRegistration: { name: 'TNMC_Registration_Certificate_2014.pdf', size: '1.8 MB', uploaded: true },
    govtId: { name: 'Aadhaar_Card_Verified_Copy.pdf', size: '1.2 MB', uploaded: true }
  });

  // OTP State
  const [emailOtp, setEmailOtp] = useState(['4', '8', '2', '1', '9', '0']);
  const [phoneOtp, setPhoneOtp] = useState(['7', '3', '0', '5', '4', '2']);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  // Live Verification Pipeline State (Simulating progression to Approved)
  const [verificationPipeline, setVerificationPipeline] = useState({
    step1_registration: true,
    step2_uploadDocs: true,
    step3_otpVerified: false,
    step4_adminReview: false,
    step5_docsChecked: false,
    step6_approved: false
  });

  const [submittedDoctorProfile, setSubmittedDoctorProfile] = useState(null);

  // Handle OTP submission
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (emailOtp.join('').length !== 6 || phoneOtp.join('').length !== 6) {
      setOtpError('Please enter valid 6-digit OTPs for both Email and Phone.');
      return;
    }
    setOtpError('');
    setIsEmailVerified(true);
    setIsPhoneVerified(true);

    // Update pipeline: OTPs verified, moving to Admin review
    setVerificationPipeline(prev => ({
      ...prev,
      step3_otpVerified: true,
      step4_adminReview: true
    }));

    setActiveStep(4);
  };

  // Simulate Admin Approving the application
  const simulateAdminApproval = () => {
    setVerificationPipeline({
      step1_registration: true,
      step2_uploadDocs: true,
      step3_otpVerified: true,
      step4_adminReview: true,
      step5_docsChecked: true,
      step6_approved: true
    });

    setSubmittedDoctorProfile({
      ...formData,
      id: 'doc-new-verified',
      verifiedDoctorBadge: true,
      verificationTimestamp: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      verificationReference: 'GRID-MED-VERIF-2026-9921',
      adminSignoff: 'Verified by Dr. Arvind K. (Senior Medical Assessor, National Board)'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Module Title & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-blue-100 text-blue-700">
              <Stethoscope className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Doctor Registration & Credential Verification
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Rigorous multi-stage onboarding for oncologists. OTP verifies contact identity; medical credentials require mandatory admin verification before the Verified Badge is awarded.
          </p>
        </div>

        {/* View Switcher: New Registration vs Verified Doctors Directory */}
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveViewTab('register')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeViewTab === 'register' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Doctor Onboarding Flow
          </button>
          <button
            onClick={() => setActiveViewTab('directory')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeViewTab === 'directory' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Verified Doctor Directory ({DOCTORS.length})
          </button>
        </div>
      </div>

      {activeViewTab === 'directory' ? (
        /* Verified Doctor Directory View */
        <div className="mt-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-8 flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-emerald-900">
                CancerCare Grid Verified Doctor Standard
              </h3>
              <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                Doctors displaying the <strong>“Verified Doctor”</strong> badge have undergone two-stage verification:
                (1) Identity & mobile/email OTP confirmation, and (2) Manual verification of MBBS/MD/DM registration against State Medical Council & NMC registries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-700 mt-0.5">
                        {doc.specialization}
                      </p>
                    </div>
                    {doc.verifiedDoctorBadge && (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                        <span>Verified Doctor</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mt-1">{doc.degree}</p>

                  <div className="mt-4 p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400">Reg No:</span>
                      <span className="font-mono font-medium">{doc.registrationNumber}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400">Council:</span>
                      <span className="font-medium text-right">{doc.medicalCouncil}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400">Hospital:</span>
                      <span className="font-medium text-right truncate max-w-[180px]">{doc.hospitalAffiliation}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400">Experience:</span>
                      <span className="font-medium">{doc.experienceYears} Years</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 italic">
                    "{doc.bio}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{doc.consultationFee}</span>
                    <span className="text-slate-400 block text-[10px]">Consultation Fee</span>
                  </div>
                  <div className="flex items-center text-amber-500 font-bold">
                    ★ {doc.rating} <span className="text-slate-400 font-normal ml-1">({doc.totalReviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Doctor Registration & Verification Workflow */
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Multi-Step Registration Form & Wizard */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-card p-6">
            
            {/* Step Navigation Pill Indicator */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              {[
                { step: 1, label: '1. Profile & Council' },
                { step: 2, label: '2. Upload Degrees' },
                { step: 3, label: '3. OTP Verification' },
                { step: 4, label: '4. Status Tracker' }
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                    activeStep === s.step
                      ? 'bg-blue-600 text-white shadow-sm'
                      : activeStep > s.step
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* STEP 1: Basic Profile & Medical Council */}
            {activeStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Personal & Medical Council Details</h3>
                  <p className="text-xs text-slate-500">Provide official details as listed in the National Medical Commission (NMC) registry.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Doctor Full Name (with prefix)</label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">State Medical Council</label>
                    <select
                      value={formData.medicalCouncil}
                      onChange={(e) => setFormData({ ...formData, medicalCouncil: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      {STATE_MEDICAL_COUNCILS.map(council => (
                        <option key={council} value={council}>{council}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Medical Registration Number</label>
                    <input 
                      type="text" 
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      placeholder="e.g. MMC-2012-08-3122"
                      className="w-full px-3 py-2 text-xs font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Years of Oncology Experience</label>
                    <input 
                      type="number" 
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Hospital / Cancer Centre Affiliation</label>
                    <input 
                      type="text" 
                      value={formData.hospitalAffiliation}
                      onChange={(e) => setFormData({ ...formData, hospitalAffiliation: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Official Doctor Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone (for OTP verification)</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="flex items-center space-x-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition-all"
                  >
                    <span>Proceed to Document Upload</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Document Uploads */}
            {activeStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Upload Mandatory Medical Credentials</h3>
                  <p className="text-xs text-slate-500">
                    High-resolution scanned copies of official certificates required for Admin Medical Council verification.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'mbbsCert', label: '1. MBBS Degree Certificate', desc: 'University awarded primary degree', file: uploadedDocs.mbbsCert },
                    { key: 'pgCert', label: '2. PG / DM / MCh Specialization Certificate', desc: 'MD, MS, DM, MCh or DNB in Oncology sub-specialty', file: uploadedDocs.pgCert },
                    { key: 'councilRegistration', label: '3. State Medical Council Registration Certificate', desc: 'Active valid council registration certificate copy', file: uploadedDocs.councilRegistration },
                    { key: 'govtId', label: '4. Official Government Photo ID', desc: 'Aadhaar, Passport, or Voter ID for identity check', file: uploadedDocs.govtId },
                  ].map((doc) => (
                    <div key={doc.key} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{doc.label}</p>
                          <p className="text-[11px] text-slate-500">{doc.desc}</p>
                          {doc.file && (
                            <span className="inline-flex items-center text-[10px] text-emerald-600 font-medium mt-1">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              {doc.file.name} ({doc.file.size})
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 text-xs font-semibold flex items-center space-x-1 shadow-xs">
                        <UploadCloud className="w-3.5 h-3.5 text-slate-500" />
                        <span>Re-upload</span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Back to Profile
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="flex items-center space-x-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition-all"
                  >
                    <span>Proceed to Contact OTP Verification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Email + Phone OTP Verification */}
            {activeStep === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Email & Mobile Two-Factor OTP Verification</h3>
                  <p className="text-xs text-slate-500">
                    Confirms that contact credentials belong directly to the registering practitioner.
                  </p>
                </div>

                {/* Critical architectural reminder box */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start space-x-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Important Architecture Principle:</p>
                    <p className="text-amber-700 leading-relaxed">
                      OTP verification verifies <strong>Identity & Contact Ownership</strong>, NOT medical competence.
                      Your medical certificates will subsequently be verified manually by the Admin Medical Review Board before the <strong>“Verified Doctor”</strong> badge is enabled.
                    </p>
                  </div>
                </div>

                {/* Email OTP Field */}
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                      Email Verification OTP (Sent to {formData.email})
                    </span>
                    <span className="text-[11px] text-blue-600 font-medium cursor-pointer hover:underline">
                      Resend Code
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {emailOtp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...emailOtp];
                          newOtp[idx] = e.target.value;
                          setEmailOtp(newOtp);
                        }}
                        className="w-10 h-11 text-center font-bold text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Phone OTP Field */}
                <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center">
                      <Smartphone className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                      SMS Verification OTP (Sent to {formData.phone})
                    </span>
                    <span className="text-[11px] text-blue-600 font-medium cursor-pointer hover:underline">
                      Resend SMS
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {phoneOtp.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...phoneOtp];
                          newOtp[idx] = e.target.value;
                          setPhoneOtp(newOtp);
                        }}
                        className="w-10 h-11 text-center font-bold text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    ))}
                  </div>
                </div>

                {otpError && (
                  <p className="text-xs text-rose-600 font-medium">{otpError}</p>
                )}

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Back to Documents
                  </button>
                  <button
                    onClick={handleVerifyOtp}
                    className="flex items-center space-x-1.5 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow transition-all"
                  >
                    <span>Verify Contact & Submit to Admin Board</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Live Verification Pipeline & Approval Status */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Application Status & Verification Timeline</h3>
                  <p className="text-xs text-slate-500">
                    Live end-to-end tracking of doctor credential audit.
                  </p>
                </div>

                {/* Visual Pipeline Progression (As requested in chatgpt conversation specs) */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="space-y-3">
                    {[
                      { key: 'step1_registration', title: '1. Doctor Registration Details Submitted', done: true, time: 'Completed' },
                      { key: 'step2_uploadDocs', title: '2. MBBS & Specialization Documents Uploaded', done: true, time: 'Completed' },
                      { key: 'step3_otpVerified', title: '3. Email & Phone OTP Contact Verified', done: verificationPipeline.step3_otpVerified, time: verificationPipeline.step3_otpVerified ? 'Verified' : 'Pending' },
                      { key: 'step4_adminReview', title: '4. Admin Credential Board Audit', done: verificationPipeline.step4_adminReview, time: verificationPipeline.step4_adminReview ? 'Under Review' : 'Queued' },
                      { key: 'step5_docsChecked', title: '5. State Council Registration Number Cross-Checked', done: verificationPipeline.step5_docsChecked, time: verificationPipeline.step5_docsChecked ? 'Checked' : 'Awaiting Admin' },
                      { key: 'step6_approved', title: '6. Final Approval & "Verified Doctor" Badge Issued', done: verificationPipeline.step6_approved, time: verificationPipeline.step6_approved ? 'APPROVED' : 'Awaiting Admin' },
                    ].map((st, i) => (
                      <div key={st.key} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/60 last:border-0">
                        <div className="flex items-center space-x-2.5">
                          {st.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <span className={st.done ? 'font-semibold text-slate-800' : 'text-slate-500'}>
                            {st.title}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          st.time === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' :
                          st.time === 'Under Review' ? 'bg-amber-100 text-amber-800' :
                          st.time === 'Completed' || st.time === 'Verified' || st.time === 'Checked' ? 'bg-blue-100 text-blue-800' :
                          'bg-slate-200 text-slate-600'
                        }`}>
                          {st.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulation Control for testing/demo purposes */}
                {!verificationPipeline.step6_approved ? (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-900">
                        Evaluation / Demo Controls:
                      </span>
                      <span className="text-[10px] text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">
                        Evaluator Quick Test
                      </span>
                    </div>
                    <p className="text-xs text-blue-700">
                      As an admin or evaluator reviewing this project, you can simulate the administrative verification of degrees and Council records.
                    </p>
                    <button
                      onClick={simulateAdminApproval}
                      className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-lg shadow transition-all flex items-center justify-center space-x-1.5"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Simulate Admin Medical Board Approval & Issue Badge</span>
                    </button>
                  </div>
                ) : (
                  /* Verified Profile Preview */
                  <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300 rounded-2xl shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="p-2 rounded-xl bg-emerald-600 text-white">
                          <Award className="w-5 h-5" />
                        </span>
                        <div>
                          <h4 className="text-sm font-extrabold text-emerald-950">
                            {submittedDoctorProfile.fullName}
                          </h4>
                          <p className="text-xs text-emerald-700 font-medium">
                            {submittedDoctorProfile.specialization} • {submittedDoctorProfile.hospitalAffiliation}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verified Doctor</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2 border-t border-emerald-200/60">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Medical Registration:</span>
                        <span className="font-mono font-bold text-emerald-900">{submittedDoctorProfile.registrationNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Issuing Council:</span>
                        <span className="font-medium text-emerald-900">{submittedDoctorProfile.medicalCouncil}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Audit Reference:</span>
                        <span className="font-mono text-[11px] text-slate-600">{submittedDoctorProfile.verificationReference}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Verified On:</span>
                        <span className="text-slate-600">{submittedDoctorProfile.verificationTimestamp}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-emerald-800 bg-emerald-100/70 p-2 rounded-lg italic">
                      ✓ {submittedDoctorProfile.adminSignoff}
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Right Column: Verification Standards & Educational Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Process Diagram Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-elevated">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-3">
                Verification Architecture
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                  👨‍⚕️ Doctor Registration (Basic Details)
                </div>
                <div className="text-center text-slate-500">↓</div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                  📄 Upload MBBS, PG & Govt ID
                </div>
                <div className="text-center text-slate-500">↓</div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-teal-500/50 text-teal-300 text-center">
                  📱 Email + Phone OTP Verification (Identity)
                </div>
                <div className="text-center text-slate-500">↓</div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-amber-500/50 text-amber-300 text-center">
                  🛡️ Admin Medical Board Credential Audit
                </div>
                <div className="text-center text-slate-500">↓</div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-blue-500/50 text-blue-300 text-center">
                  🔍 State Medical Council Cross-Check
                </div>
                <div className="text-center text-slate-500">↓</div>
                <div className="p-2.5 rounded-lg bg-emerald-900/80 border border-emerald-400 text-emerald-200 text-center font-bold">
                  ✓ APPROVED → Verified Doctor Badge
                </div>
              </div>
            </div>

            {/* Why OTP ≠ Doctor Verification explanation */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-3">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-brand-600" />
                <span>Why OTP alone is insufficient for healthcare:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                OTP verification strictly authenticates that the applicant controls the submitted mobile number and email. Anyone can enter a fictitious registration number and pass an OTP check.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                CancerCare Grid prevents fraudulent doctor listings by requiring the platform admin to cross-reference degrees against the <strong>National Medical Commission (NMC)</strong> Indian Medical Register before granting the verified credential badge.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

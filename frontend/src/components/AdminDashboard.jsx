import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Stethoscope, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  HeartHandshake, 
  AlertTriangle, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Search, 
  Eye, 
  Award,
  RefreshCw,
  ExternalLink,
  Coins
} from 'lucide-react';
import { DOCTORS, SAMPLE_FLAGGED_REVIEWS } from '../data/doctors';
import { CROWDFUNDING_CAMPAIGNS } from '../data/crowdfunding';
import { COMMUNITY_NEEDS } from '../data/communityNeeds';

export default function AdminDashboard() {
  const [activeAdminTab, setActiveAdminTab] = useState('doctor-verification');

  // Pending Doctor Applications Queue State
  const [pendingDoctors, setPendingDoctors] = useState([
    {
      id: 'app-doc-1',
      name: 'Dr. Rajeshwari Swaminathan',
      degree: 'MBBS, MD (Radiation Oncology)',
      specialization: 'Radiation Oncology (SBRT & Proton Beam)',
      council: 'Tamil Nadu Medical Council (TNMC)',
      regNumber: 'TNMC-2014-98412',
      hospital: 'Cancer Institute Adyar / Apollo Proton',
      experience: 14,
      emailOtpVerified: true,
      phoneOtpVerified: true,
      docsUploaded: [
        'MBBS_Degree_Certificate_MMC.pdf (Verified)',
        'MD_Radiation_Oncology_Adyar.pdf (Verified)',
        'TNMC_Registration_Certificate_2014.pdf (Active in Council)',
        'Govt_Aadhaar_ID_Verified.pdf'
      ],
      submissionDate: '2026-11-20',
      status: 'PENDING_APPROVAL'
    },
    {
      id: 'app-doc-2',
      name: 'Dr. Sameer Pathak',
      degree: 'MBBS, MS, MCh (Surgical Oncology)',
      specialization: 'Head & Neck Onco-Surgery',
      council: 'Maharashtra Medical Council (MMC)',
      regNumber: 'MMC-2018-05-1829',
      hospital: 'Tata Memorial Hospital (Fellow) & KEM Hospital',
      experience: 9,
      emailOtpVerified: true,
      phoneOtpVerified: true,
      docsUploaded: [
        'MBBS_KEM_Mumbai.pdf',
        'MCh_Surgical_Oncology_TMH.pdf',
        'MMC_Active_Registration.pdf'
      ],
      submissionDate: '2026-11-19',
      status: 'PENDING_APPROVAL'
    }
  ]);

  // Crowdfunding Queue State
  const [campaignQueue, setCampaignQueue] = useState([
    {
      id: 'camp-pend-1',
      patient: 'Farhan Ali (9 years)',
      condition: 'Relapsed Neuroblastoma',
      hospital: 'AIIMS New Delhi (Pediatric Onco)',
      target: '₹14,00,000',
      hospitalEstimateVerified: true,
      bankEscrowVerified: true,
      status: 'AWAITING_FINAL_SIGN'
    }
  ]);

  // Flagged Reviews State
  const [flaggedReviews, setFlaggedReviews] = useState(SAMPLE_FLAGGED_REVIEWS);

  // Community Needs State
  const [communityRequests, setCommunityRequests] = useState(COMMUNITY_NEEDS);

  // Success Notification
  const [adminNotification, setAdminNotification] = useState(null);

  const showNotification = (msg) => {
    setAdminNotification(msg);
    setTimeout(() => setAdminNotification(null), 4000);
  };

  const handleApproveDoctor = (docId) => {
    const approvedDoc = pendingDoctors.find(d => d.id === docId);
    setPendingDoctors(pendingDoctors.filter(d => d.id !== docId));
    showNotification(`Approved ${approvedDoc?.name}. Verified Doctor Badge issued and linked to NMC profile.`);
  };

  const handleRejectDoctor = (docId) => {
    const rejectedDoc = pendingDoctors.find(d => d.id === docId);
    setPendingDoctors(pendingDoctors.filter(d => d.id !== docId));
    showNotification(`Application of ${rejectedDoc?.name} returned with deficiency note.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-purple-100 text-purple-700">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Platform Administration & Verification Console
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Unified authority portal to audit doctor medical registrations, verify hospital crowdfunding estimates, moderate flagged reviews, and govern mutual aid.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1.5 rounded-xl text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
          <span>Admin Privileges Active (Medical Board Level)</span>
        </div>
      </div>

      {/* Admin Toast Notification */}
      {adminNotification && (
        <div className="mt-4 p-4 rounded-xl bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold flex items-center justify-between animate-in fade-in">
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2 text-purple-700" />
            {adminNotification}
          </span>
        </div>
      )}

      {/* Vital Operations Metrics */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-card">
          <span className="text-xs text-slate-500 font-semibold">Pending Doctor Audits</span>
          <p className="text-2xl font-black text-blue-700 mt-1">{pendingDoctors.length}</p>
          <span className="text-[10px] text-blue-600 font-medium">Council Cross-Checks</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-card">
          <span className="text-xs text-slate-500 font-semibold">Flagged Reviews in Queue</span>
          <p className="text-2xl font-black text-amber-700 mt-1">{flaggedReviews.length}</p>
          <span className="text-[10px] text-amber-600 font-medium">Bot Heuristics Triggered</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-card">
          <span className="text-xs text-slate-500 font-semibold">Verified Active Doctors</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">{DOCTORS.length}</p>
          <span className="text-[10px] text-emerald-600 font-medium">100% Admin Audited</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-card">
          <span className="text-xs text-slate-500 font-semibold">Direct Disbursals Facilitated</span>
          <p className="text-2xl font-black text-purple-700 mt-1">₹3.5 Cr+</p>
          <span className="text-[10px] text-purple-600 font-medium">Zero Escrow Leakage</span>
        </div>
      </div>

      {/* Admin Module Tabs */}
      <div className="mt-8 flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        {[
          { id: 'doctor-verification', label: 'Doctor Credential Audit', icon: Stethoscope, badge: pendingDoctors.length },
          { id: 'crowdfunding-queue', label: 'Funding Campaigns', icon: Coins, badge: campaignQueue.length },
          { id: 'flagged-reviews', label: 'Flagged Review Investigation', icon: AlertTriangle, badge: flaggedReviews.length },
          { id: 'community-moderation', label: 'Community Requests', icon: Users, badge: communityRequests.length },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeAdminTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveAdminTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-800'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Doctor Credential Audit Queue */}
      {activeAdminTab === 'doctor-verification' && (
        <div className="mt-6 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{pendingDoctors.length} applications pending Medical Council registry validation</span>
            <span className="text-purple-700 font-bold">NMC Registry Integration Active</span>
          </div>

          {pendingDoctors.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <p className="font-bold text-slate-800 text-sm">All Doctor Credential Applications Audited</p>
              <p className="mt-1">No doctor profiles currently waiting in the verification queue.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingDoctors.map(doc => (
                <div 
                  key={doc.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-bold text-slate-900">{doc.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                          {doc.specialization}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{doc.degree} • {doc.experience} Years Experience</p>
                      <p className="text-xs text-brand-700 font-semibold mt-1">Hospital: {doc.hospital}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Submitted On</span>
                      <span className="text-xs font-mono font-medium text-slate-700">{doc.submissionDate}</span>
                    </div>
                  </div>

                  {/* Verification Checkpoints */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">State Medical Council:</span>
                      <span className="font-bold text-slate-800">{doc.council}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Council Registration No:</span>
                      <span className="font-mono font-bold text-blue-700">{doc.regNumber}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">2FA Contact OTP:</span>
                      <span className="font-semibold text-emerald-700 flex items-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        Email + Phone Verified
                      </span>
                    </div>
                  </div>

                  {/* Uploaded Documents to Inspect */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 block">Uploaded Certificates to Verify:</span>
                    <div className="flex flex-wrap gap-2">
                      {doc.docsUploaded.map((file, i) => (
                        <div key={i} className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-700">
                          <FileText className="w-3.5 h-3.5 text-blue-600" />
                          <span>{file}</span>
                          <span className="text-[10px] font-bold text-blue-600 cursor-pointer hover:underline ml-1">Inspect</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Admin Decision Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-3 text-xs">
                    <button
                      onClick={() => handleRejectDoctor(doc.id)}
                      className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl font-bold transition-colors"
                    >
                      Reject with Deficiency Note
                    </button>
                    <button
                      onClick={() => handleApproveDoctor(doc.id)}
                      className="flex items-center space-x-1.5 px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold shadow transition-all"
                    >
                      <Award className="w-4 h-4" />
                      <span>Approve & Issue "Verified Doctor" Badge</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Crowdfunding Verification Queue */}
      {activeAdminTab === 'crowdfunding-queue' && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-card space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Hospital Pre-Authorization & Estimate Audits</h3>
            {campaignQueue.map(camp => (
              <div key={camp.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{camp.patient}</h4>
                  <p className="text-rose-700 font-semibold">{camp.condition} • {camp.hospital}</p>
                  <p className="text-slate-500 mt-1">Target Required: <strong className="text-slate-800">{camp.target}</strong></p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-bold text-[10px]">
                    ✓ Hospital Estimate Verified
                  </span>
                  <button
                    onClick={() => {
                      setCampaignQueue(campaignQueue.filter(c => c.id !== camp.id));
                      showNotification(`Campaign for ${camp.patient} approved for public donation listing!`);
                    }}
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold"
                  >
                    Approve Campaign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Flagged Review Moderation */}
      {activeAdminTab === 'flagged-reviews' && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Heuristic Bot Flags & Investigation Queue</h3>
                <p className="text-xs text-slate-500">Reviews flagged by automated detection engine.</p>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
                {flaggedReviews.length} Flagged
              </span>
            </div>

            {flaggedReviews.map(rev => (
              <div key={rev.id} className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold">
                  <span>Author: {rev.author} (Doctor: {rev.doctorName})</span>
                  <span className="text-amber-700">★ {rev.rating}</span>
                </div>
                <p className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-slate-800">
                  "{rev.text}"
                </p>
                <div className="text-[11px] text-amber-900">
                  <strong className="block text-[10px] uppercase">Reason for Flag:</strong>
                  {rev.flagReasons.join(', ')}
                </div>
                <div className="flex justify-end space-x-2 pt-2 border-t border-amber-200">
                  <button
                    onClick={() => {
                      setFlaggedReviews(flaggedReviews.filter(f => f.id !== rev.id));
                      showNotification('Flagged review dismissed as invalid/spam.');
                    }}
                    className="px-3 py-1 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-100"
                  >
                    Confirm Spam & Dismiss
                  </button>
                  <button
                    onClick={() => {
                      setFlaggedReviews(flaggedReviews.filter(f => f.id !== rev.id));
                      showNotification('Review marked authentic by human admin and published.');
                    }}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold"
                  >
                    Override & Publish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Community Requests Moderation */}
      {activeAdminTab === 'community-moderation' && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-card space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Active Patient Mutual Aid Moderation</h3>
            {communityRequests.slice(0, 3).map(req => (
              <div key={req.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-900">{req.title}</span>
                  <p className="text-slate-500">{req.hospital} • {req.district}</p>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-bold text-[10px]">
                  Verified Hospital Request
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

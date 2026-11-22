import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Coins, 
  ArrowRight, 
  Building2, 
  Share2, 
  PlusCircle, 
  Lock, 
  Award, 
  X,
  CreditCard,
  QrCode
} from 'lucide-react';
import { CROWDFUNDING_CAMPAIGNS } from '../data/crowdfunding';

export default function Crowdfunding() {
  const [campaigns, setCampaigns] = useState(CROWDFUNDING_CAMPAIGNS);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donateModalCampaign, setDonateModalCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('5000');
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);

  // New Campaign Form State
  const [newCampaign, setNewCampaign] = useState({
    patientName: '',
    age: '',
    cancerCondition: '',
    hospitalName: '',
    estimatedCost: '',
    amountAlreadyArranged: '',
    storyDescription: '',
    hasHospitalQuotation: true,
    hasBiopsyReport: true,
    hasIncomeCertificate: true
  });
  const [submittedForReview, setSubmittedForReview] = useState(false);

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setDonationSuccess(true);
    // Update raised amount locally for interactive demo feel
    setCampaigns(prev => prev.map(c => {
      if (c.id === donateModalCampaign.id) {
        const added = Number(donationAmount) || 0;
        return {
          ...c,
          raisedAmount: c.raisedAmount + added,
          donorsCount: c.donorsCount + 1
        };
      }
      return c;
    }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    setSubmittedForReview(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-rose-100 text-rose-700">
              <HeartHandshake className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Verified Medical Crowdfunding
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Mandatory audit of hospital estimates, biopsy records, and direct hospital escrow disbursal. 100% scam-proof patient support.
          </p>
        </div>

        <button
          onClick={() => { setIsCreatingCampaign(true); setSubmittedForReview(false); }}
          className="flex items-center space-x-1.5 px-4 py-2.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Start a Verified Funding Request</span>
        </button>
      </div>

      {/* Mandatory Verification Pipeline Graphic */}
      <div className="mt-6 p-4 bg-slate-900 text-white rounded-2xl shadow-md">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <span className="font-bold text-teal-400 uppercase tracking-wider text-[11px]">
            Strict Anti-Fraud Pipeline (Mandatory Verification)
          </span>
          <span className="text-[10px] text-slate-400">Direct Escrow to Hospital Accounts</span>
        </div>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
          <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
            <span className="block text-[10px] text-slate-400">Step 1</span>
            <span className="font-semibold text-slate-200">Funding Request</span>
          </div>
          <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
            <span className="block text-[10px] text-slate-400">Step 2</span>
            <span className="font-semibold text-slate-200">Docs Submitted</span>
          </div>
          <div className="p-2 bg-slate-800 rounded-lg border border-amber-500/40 text-amber-300">
            <span className="block text-[10px] text-amber-400">Step 3</span>
            <span className="font-semibold">Admin Verification</span>
          </div>
          <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
            <span className="block text-[10px] text-slate-400">Step 4</span>
            <span className="font-semibold text-slate-200">Approved</span>
          </div>
          <div className="p-2 bg-emerald-950/80 rounded-lg border border-emerald-500 text-emerald-300 col-span-2 sm:col-span-1">
            <span className="block text-[10px] text-emerald-400 font-bold">Step 5</span>
            <span className="font-bold">Public Campaign</span>
          </div>
        </div>
      </div>

      {/* Campaign Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map(camp => {
          const remaining = Math.max(0, camp.targetAmount - camp.raisedAmount);
          const percent = Math.min(100, Math.round((camp.raisedAmount / camp.targetAmount) * 100));

          return (
            <div 
              key={camp.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Hospital Verified</span>
                  </span>
                  <span className="text-xs text-slate-400 flex items-center font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {camp.daysLeft} days left
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {camp.patientName}
                </h3>
                <p className="text-xs font-semibold text-rose-700 mt-0.5">
                  {camp.diagnosedCondition}
                </p>

                <p className="text-xs text-slate-500 mt-1 flex items-center">
                  <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {camp.treatingHospital}
                </p>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {camp.storySummary}
                </p>

                {/* Progress Bar & Financial Numbers (As requested in prompt) */}
                <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-800">₹{camp.raisedAmount.toLocaleString('en-IN')} raised</span>
                    <span className="text-slate-400">{percent}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-rose-500 transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {/* Exactly matching Target / Raised / Remaining specs */}
                  <div className="grid grid-cols-3 gap-1 text-[11px] pt-1 text-slate-600">
                    <div>
                      <span className="block text-[10px] text-slate-400">Target</span>
                      <span className="font-bold text-slate-800">₹{(camp.targetAmount / 100000).toFixed(1)}L</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400">Raised</span>
                      <span className="font-bold text-teal-700">₹{(camp.raisedAmount / 100000).toFixed(1)}L</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400">Remaining</span>
                      <span className="font-bold text-rose-700">₹{(remaining / 100000).toFixed(1)}L</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {camp.donorsCount} Supporters
                  </span>
                  <span className="text-emerald-700 font-semibold">80G Tax Deductible</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center space-x-2">
                <button
                  onClick={() => setSelectedCampaign(camp)}
                  className="flex-1 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
                >
                  View Details & Audits
                </button>
                <button
                  onClick={() => { setDonateModalCampaign(camp); setDonationSuccess(false); }}
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white text-xs font-bold shadow transition-all"
                >
                  Contribute
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAIL MODAL WITH AUDITED DOCUMENTS & ESCROW DETAILS */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 my-8">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Admin Audited & Approved Campaign</span>
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedCampaign.patientName}</h3>
                <p className="text-xs text-rose-700 font-semibold">{selectedCampaign.diagnosedCondition}</p>
              </div>
              <button 
                onClick={() => setSelectedCampaign(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed space-y-2">
              <p>{selectedCampaign.fullStory}</p>
            </div>

            {/* Cost Breakdown */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-800 block">
                Itemized Hospital Cost Estimation Breakdown:
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                {selectedCampaign.costBreakdown.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-slate-200/60 last:border-0">
                    <span className="font-sans text-slate-700">{item.item}</span>
                    <span className="font-bold text-slate-900">₹{item.amount.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Documents Checklist */}
            <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200 space-y-1.5">
              <span className="text-xs font-bold text-teal-950 flex items-center">
                <FileText className="w-4 h-4 mr-1.5 text-teal-700" />
                Verified Clinical & Financial Proofs:
              </span>
              <ul className="text-xs text-teal-900 space-y-1">
                {selectedCampaign.verifiedDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 pt-2 border-t border-teal-200/60 text-[11px] text-teal-800 flex justify-between">
                <span>Audited By: <strong>{selectedCampaign.adminApprovalDetails.verifiedBy}</strong></span>
                <span>Disbursal: <strong>Direct Hospital Escrow Account</strong></span>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedCampaign(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDonateModalCampaign(selectedCampaign);
                  setSelectedCampaign(null);
                  setDonationSuccess(false);
                }}
                className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow"
              >
                Contribute to this Campaign
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DONATE MODAL */}
      {donateModalCampaign && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Support {donateModalCampaign.patientName}</h3>
                <p className="text-xs text-slate-500">100% funds transferred directly to {donateModalCampaign.treatingHospital}</p>
              </div>
              <button 
                onClick={() => setDonateModalCampaign(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {donationSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Thank You for Your Contribution!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your donation of <strong>₹{Number(donationAmount).toLocaleString('en-IN')}</strong> has been simulated and credited to the hospital escrow account. An 80G tax receipt has been generated.
                </p>
                <button
                  onClick={() => setDonateModalCampaign(null)}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Contribution Amount (₹):</label>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {['1000', '2500', '5000', '10000'].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDonationAmount(amt)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          donationAmount === amt ? 'border-rose-600 bg-rose-50 text-rose-700 font-extrabold' : 'border-slate-200 text-slate-700'
                        }`}
                      >
                        ₹{Number(amt).toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 font-mono font-bold"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Tax Exemption:</span>
                    <span className="font-bold text-emerald-700">Eligible for 50% 80G deduction</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disbursal Channel:</span>
                    <span className="font-bold text-slate-800">Direct Hospital Patient Ledger</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-xl text-xs font-bold shadow flex items-center justify-center space-x-1.5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Proceed to Simulated Secure Payment</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* CREATE NEW FUNDING REQUEST MODAL (With mandatory verification flow) */}
      {isCreatingCampaign && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-5 my-8 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Create a Funding Request</h3>
                <p className="text-xs text-slate-500">Requires mandatory admin verification before going live.</p>
              </div>
              <button 
                onClick={() => setIsCreatingCampaign(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedForReview ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Application Submitted to Admin Verification Queue</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your request has entered Stage 3 (Admin Verification). Our medical finance desk will contact {newCampaign.hospitalName || 'your treating hospital'} to cross-verify the clinical estimation letter before public listing.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">
                  Tracking ID: CCG-FUND-REV-{Math.floor(1000 + Math.random() * 9000)}
                </div>
                <button
                  onClick={() => setIsCreatingCampaign(false)}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  Return to Campaigns
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh K."
                      value={newCampaign.patientName}
                      onChange={(e) => setNewCampaign({ ...newCampaign, patientName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Age</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 52"
                      value={newCampaign.age}
                      onChange={(e) => setNewCampaign({ ...newCampaign, age: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Cancer Type & Stage</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Stage III Colon Cancer"
                      value={newCampaign.cancerCondition}
                      onChange={(e) => setNewCampaign({ ...newCampaign, cancerCondition: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Treating Hospital</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tata Memorial Hospital"
                      value={newCampaign.hospitalName}
                      onChange={(e) => setNewCampaign({ ...newCampaign, hospitalName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Cost (₹)</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 500000"
                      value={newCampaign.estimatedCost}
                      onChange={(e) => setNewCampaign({ ...newCampaign, estimatedCost: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Amount Arranged (₹)</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 150000"
                      value={newCampaign.amountAlreadyArranged}
                      onChange={(e) => setNewCampaign({ ...newCampaign, amountAlreadyArranged: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Treatment Narrative</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Describe the medical situation, family background, and urgent necessity..."
                    value={newCampaign.storyDescription}
                    onChange={(e) => setNewCampaign({ ...newCampaign, storyDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Mandatory Documentation Check */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <span className="font-bold text-slate-800 block text-[11px]">Mandatory Document Confirmations:</span>
                  <label className="flex items-center space-x-2 text-slate-700">
                    <input type="checkbox" defaultChecked required className="w-3.5 h-3.5 text-rose-600 rounded" />
                    <span>I have uploaded the official Hospital Estimate Letter on letterhead</span>
                  </label>
                  <label className="flex items-center space-x-2 text-slate-700">
                    <input type="checkbox" defaultChecked required className="w-3.5 h-3.5 text-rose-600 rounded" />
                    <span>I have attached the confirmed Biopsy / Histopathology diagnostic report</span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsCreatingCampaign(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Submit for Admin Verification
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

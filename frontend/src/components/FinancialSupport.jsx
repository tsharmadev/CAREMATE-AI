import React, { useState } from 'react';
import { 
  Coins, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Search, 
  Filter, 
  HelpCircle, 
  AlertCircle,
  Building,
  Train,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GOVERNMENT_SCHEMES, screenSchemes } from '../data/schemes';

export default function FinancialSupport() {
  const [activeTab, setActiveTab] = useState('directory'); // 'directory' or 'screener'
  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState(null);
  
  // Screener state
  const [screenerState, setScreenerState] = useState({
    state: 'Maharashtra',
    annualIncome: 150000,
    hasBplCard: true,
    hospitalType: 'Government / RCC'
  });

  const [screenerResults, setScreenerResults] = useState(null);

  const handleRunScreener = (e) => {
    e.preventDefault();
    const results = screenSchemes({
      state: screenerState.state,
      annualIncome: Number(screenerState.annualIncome),
      hasBplCard: screenerState.hasBplCard,
      hospitalType: screenerState.hospitalType
    });
    setScreenerResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-amber-100 text-amber-700">
              <Coins className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Financial Support & Government Schemes
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Verified repository of central & state cancer healthcare assistance schemes, travel concessions, and personalized scheme discovery.
          </p>
        </div>

        {/* View Switcher: Schemes Directory vs Personalized Screener */}
        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'directory' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Schemes Directory ({GOVERNMENT_SCHEMES.length})
          </button>
          <button
            onClick={() => setActiveTab('screener')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
              activeTab === 'screener' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Personalized Scheme Screener</span>
          </button>
        </div>
      </div>

      {activeTab === 'directory' ? (
        /* SCHEMES DIRECTORY VIEW */
        <div className="mt-8 space-y-6">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start space-x-3 text-xs text-emerald-800">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Direct Official Portals Guarantee:</span> Every scheme below directs you to authentic government domains (.gov.in, .nic.in). CancerCare Grid never charges fees or acts as an unauthorized intermediary for government grant disbursement.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOVERNMENT_SCHEMES.map(scheme => (
              <div 
                key={scheme.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        {scheme.level}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1.5">
                        {scheme.name}
                      </h3>
                      <p className="text-xs text-slate-500">{scheme.authority}</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Coverage:</span>
                      <span className="font-bold text-emerald-700">{scheme.coverageAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Jurisdiction:</span>
                      <span className="font-medium text-slate-700">{scheme.applicableStates}</span>
                    </div>
                  </div>

                  {/* Eligibility summary */}
                  <div className="mt-3 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 block">Who is Eligible:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      {scheme.eligibilityCriteria.slice(0, 2).map((crit, idx) => (
                        <li key={idx}>{crit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Required Documents */}
                  <div className="mt-3 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 block">Required Documents:</span>
                    <div className="flex flex-wrap gap-1">
                      {scheme.requiredDocuments.slice(0, 3).map((doc, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {doc.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">Helpline: <strong className="text-slate-700">{scheme.tollFreeHelpline}</strong></span>
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg font-bold shadow-xs transition-all"
                  >
                    <span>{scheme.portalLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* PERSONALIZED SCHEME SCREENER VIEW */
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Screener Input Wizard */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Personalized Scheme Discovery Screener
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Answer 4 quick parameters to identify schemes you may potentially qualify for.
              </p>
            </div>

            <form onSubmit={handleRunScreener} className="space-y-4">
              {/* State */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">State of Permanent Residence</label>
                <select
                  value={screenerState.state}
                  onChange={(e) => setScreenerState({ ...screenerState, state: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                >
                  <option value="Maharashtra">Maharashtra (MJPJAY Applicable)</option>
                  <option value="Kerala">Kerala (Karunya Applicable)</option>
                  <option value="Tamil Nadu">Tamil Nadu (CMCHIS Applicable)</option>
                  <option value="Delhi">Delhi (Delhi Arogya Kosh)</option>
                  <option value="Uttar Pradesh">Uttar Pradesh (PM-JAY & UP SAA)</option>
                  <option value="Karnataka">Karnataka (Arogya Karnataka)</option>
                  <option value="Assam">Assam (Atal Amrit Abhiyan)</option>
                  <option value="Other">Other Indian State</option>
                </select>
              </div>

              {/* Annual Income */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Annual Family Income: ₹{Number(screenerState.annualIncome).toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={screenerState.annualIncome}
                  onChange={(e) => setScreenerState({ ...screenerState, annualIncome: e.target.value })}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹50,000 (BPL)</span>
                  <span>₹3,00,000</span>
                  <span>₹10,00,000+</span>
                </div>
              </div>

              {/* Ration Card */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ration Card Classification</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setScreenerState({ ...screenerState, hasBplCard: true })}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                      screenerState.hasBplCard
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    BPL / Yellow / Pink Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreenerState({ ...screenerState, hasBplCard: false })}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                      !screenerState.hasBplCard
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    APL / White / None
                  </button>
                </div>
              </div>

              {/* Hospital Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Treating Hospital Classification</label>
                <select
                  value={screenerState.hospitalType}
                  onChange={(e) => setScreenerState({ ...screenerState, hospitalType: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                >
                  <option value="Government / RCC">Government Regional Cancer Centre (e.g. TMH, KMIO, RCC)</option>
                  <option value="Apex Central Institute">Apex Central Institute (e.g. AIIMS New Delhi)</option>
                  <option value="Empaneled Private Hospital">Empaneled Private Oncology Hospital</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl text-xs font-bold shadow transition-all flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Screen for Potentially Relevant Schemes</span>
              </button>
            </form>
          </div>

          {/* Screener Results Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Cautionary Architectural Disclaimer Box */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-1.5">
              <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                Important Disclaimer: "Potentially Relevant", Not Guaranteed
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                As emphasized in clinical governance guidelines, this platform highlights <strong>potentially relevant schemes</strong> based on income heuristics. Final eligibility is verified in-person by the hospital’s official government empanelment desk.
              </p>
            </div>

            {screenerResults ? (
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Found {screenerResults.length} Potentially Relevant Schemes:
                </h4>

                {screenerResults.map((match, i) => {
                  const schemeObj = GOVERNMENT_SCHEMES.find(s => s.id === match.schemeId);
                  if (!schemeObj) return null;
                  return (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {match.relevanceConfidence} Relevance Match
                          </span>
                          <h3 className="text-sm font-bold text-slate-900 mt-1">{schemeObj.name}</h3>
                          <p className="text-xs text-slate-500">{schemeObj.coverageAmount}</p>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs text-amber-900">
                        <span className="font-bold block text-[11px]">Why matched:</span>
                        <p className="mt-0.5">{match.matchReason}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 text-[11px]">Helpline: {schemeObj.tollFreeHelpline}</span>
                        <a
                          href={schemeObj.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 font-bold text-teal-700 hover:underline"
                        >
                          <span>Apply on Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300 text-slate-400 text-xs">
                <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2 opacity-60" />
                <p className="font-semibold text-slate-600">No screener results yet</p>
                <p className="mt-1">Fill the parameters on the left and click "Screen for Potentially Relevant Schemes".</p>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { 
  Users, 
  Droplet, 
  Bus, 
  Home, 
  Coins, 
  HeartHandshake, 
  PlusCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Building2, 
  Phone, 
  AlertTriangle,
  X,
  Search,
  Filter
} from 'lucide-react';
import { COMMUNITY_NEEDS } from '../data/communityNeeds';

export default function CommunityMatching() {
  const [needs, setNeeds] = useState(COMMUNITY_NEEDS);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [isPostingNeed, setIsPostingNeed] = useState(false);
  const [needPostedSuccess, setNeedPostedSuccess] = useState(false);
  const [matchedNotification, setMatchedNotification] = useState(null);

  // New Request Form
  const [newRequest, setNewRequest] = useState({
    category: 'Blood & Platelet Support',
    urgency: 'HIGH',
    title: '',
    patientName: '',
    hospital: '',
    district: '',
    state: 'Maharashtra',
    description: '',
    requiredBy: ''
  });

  const categories = [
    'All',
    'Blood & Platelet Support',
    'Patient Transportation',
    'Temporary Accommodation',
    'Volunteer Support',
    'Financial Assistance'
  ];

  const filteredNeeds = selectedCategoryFilter === 'All'
    ? needs
    : needs.filter(n => n.category === selectedCategoryFilter);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const createdItem = {
      id: `need-${Date.now()}`,
      category: newRequest.category,
      urgency: newRequest.urgency,
      title: newRequest.title,
      patientName: newRequest.patientName,
      hospital: newRequest.hospital,
      district: newRequest.district,
      state: newRequest.state,
      description: newRequest.description,
      datePosted: 'Just now',
      requiredBy: newRequest.requiredBy || 'Within 24 hours',
      status: 'ACTIVE_SEEKING',
      matchedEntities: [],
      verifiedByHospitalStaff: true,
      verificationCode: `CCG-VERIF-${Math.floor(1000 + Math.random() * 9000)}`
    };
    setNeeds([createdItem, ...needs]);
    setNeedPostedSuccess(true);
  };

  const handleOfferHelp = (needId) => {
    setNeeds(prev => prev.map(n => {
      if (n.id === needId) {
        return {
          ...n,
          status: 'MATCH_IN_PROGRESS',
          matchedEntities: [
            ...n.matchedEntities,
            {
              name: 'Community Care Volunteer Network',
              type: 'Volunteer Matching Unit',
              contactInitiated: true,
              statusNote: 'Volunteer connected via secure helpline'
            }
          ]
        };
      }
      return n;
    }));

    setMatchedNotification(`You have successfully offered support for request #${needId}. The hospital care coordinator has been notified!`);
    setTimeout(() => setMatchedNotification(null), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
              <Users className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Community Help & Need Matching Grid
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Real-time mutual aid board connecting cancer patients with nearby blood donors, volunteer transport drivers, charitable dharamshalas, and compassionate NGO escorts.
          </p>
        </div>

        <button
          onClick={() => { setIsPostingNeed(true); setNeedPostedSuccess(false); }}
          className="flex items-center space-x-1.5 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post a Verified Need</span>
        </button>
      </div>

      {/* Match Notification Alert */}
      {matchedNotification && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-between animate-in fade-in">
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-700" />
            {matchedNotification}
          </span>
          <button onClick={() => setMatchedNotification(null)} className="text-emerald-700 hover:text-emerald-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="mt-6 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategoryFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Requests Feed */}
      <div className="mt-8 space-y-4">
        {filteredNeeds.map(item => (
          <div 
            key={item.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col md:flex-row items-start justify-between gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {/* Urgency Badge */}
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider ${
                  item.urgency === 'CRITICAL' ? 'bg-red-100 text-red-800 border border-red-200 animate-pulse' :
                  item.urgency === 'HIGH' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                  'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {item.urgency} URGENCY
                </span>

                {/* Category Pill */}
                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {item.category}
                </span>

                {/* Verification Code */}
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  {item.verificationCode}
                </span>

                <span className="text-[11px] text-slate-400">
                  Posted {item.datePosted}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>Patient: <strong className="text-slate-800">{item.patientName}</strong></span>
                  <span>•</span>
                  <span className="flex items-center"><Building2 className="w-3 h-3 mr-1 text-slate-400" /> {item.hospital}</span>
                  <span>•</span>
                  <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-slate-400" /> {item.district}, {item.state}</span>
                </p>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                {item.description}
              </p>

              {/* Matched Entities Box */}
              {item.matchedEntities.length > 0 && (
                <div className="p-3 bg-teal-50/70 border border-teal-200 rounded-xl space-y-1 text-xs">
                  <span className="font-bold text-teal-950 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-teal-600" />
                    Active Community Matches:
                  </span>
                  {item.matchedEntities.map((m, idx) => (
                    <div key={idx} className="text-teal-800 pl-4 text-[11px]">
                      <strong>{m.name}</strong> ({m.type}) — {m.statusNote}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Column */}
            <div className="shrink-0 flex flex-col items-end justify-between space-y-3 w-full md:w-auto">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Required By</span>
                <span className="text-xs font-bold text-slate-800">{item.requiredBy}</span>
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto">
                {item.status === 'FULFILLED' ? (
                  <span className="px-4 py-2 bg-slate-100 text-slate-500 rounded-xl text-xs font-bold">
                    ✓ Request Fulfilled
                  </span>
                ) : (
                  <button
                    onClick={() => handleOfferHelp(item.id)}
                    className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow transition-all flex items-center justify-center space-x-1.5"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>I Can Help / Match</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POST A NEED MODAL */}
      {isPostingNeed && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5 my-8 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Post a Verified Community Need</h3>
                <p className="text-xs text-slate-500">Connects with nearby volunteers and resources.</p>
              </div>
              <button 
                onClick={() => setIsPostingNeed(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {needPostedSuccess ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Need Broadcast to Volunteer Network</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your request has been published on the grid. Verified donors and NGOs in your district have been notified via SMS alert.
                </p>
                <button
                  onClick={() => setIsPostingNeed(false)}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  Return to Need Board
                </button>
              </div>
            ) : (
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Need Category</label>
                    <select
                      value={newRequest.category}
                      onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option>Blood & Platelet Support</option>
                      <option>Patient Transportation</option>
                      <option>Temporary Accommodation</option>
                      <option>Volunteer Support</option>
                      <option>Financial Assistance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Urgency Level</label>
                    <select
                      value={newRequest.urgency}
                      onChange={(e) => setNewRequest({ ...newRequest, urgency: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="CRITICAL">CRITICAL (Immediate)</option>
                      <option value="HIGH">HIGH (Within 24 Hours)</option>
                      <option value="MEDIUM">MEDIUM (Within 3 Days)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Urgent: 2 Units O-ve Platelets needed at TMH"
                    value={newRequest.title}
                    onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={newRequest.patientName}
                      onChange={(e) => setNewRequest({ ...newRequest, patientName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Treating Hospital</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AIIMS Delhi"
                      value={newRequest.hospital}
                      onChange={(e) => setNewRequest({ ...newRequest, hospital: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">District</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai Suburban"
                      value={newRequest.district}
                      onChange={(e) => setNewRequest({ ...newRequest, district: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Needed By Time</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Today by 8:00 PM"
                      value={newRequest.requiredBy}
                      onChange={(e) => setNewRequest({ ...newRequest, requiredBy: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Description & Context</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Provide specific details, ward number, blood group, or transport route required..."
                    value={newRequest.description}
                    onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsPostingNeed(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Broadcast to Grid
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

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import DoctorRegistration from './components/DoctorRegistration';
import ResourceDatabase from './components/ResourceDatabase';
import VisitAssistant from './components/VisitAssistant';
import DistrictScoreMap from './components/DistrictScoreMap';
import FinancialSupport from './components/FinancialSupport';
import Crowdfunding from './components/Crowdfunding';
import PatientStories from './components/PatientStories';
import DoctorReviews from './components/DoctorReviews';
import CommunityMatching from './components/CommunityMatching';
import AdminDashboard from './components/AdminDashboard';
import AiAssistant from './components/AiAssistant';
import { 
  Ribbon, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Mail, 
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Home,
  ClipboardList,
  Building2,
  Stethoscope,
  Coins,
  HeartHandshake,
  Star,
  Users,
  Activity,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Check,
  Sparkles,
  Sliders,
  Droplet
} from 'lucide-react';

export default function App() {
  // Sync tab with browser URL hash for browser back/forward history support
  const [activeTab, setActiveTabState] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return hash || 'home';
    }
    return 'home';
  });
  
  const [currentRole, setCurrentRole] = useState('patient');

  // Interactive Bento Grid State for live tactile micro-interactions
  const [visitChecklist, setVisitChecklist] = useState({
    biopsy: true,
    dicom: false,
    questions: true
  });
  const [selectedDistrictView, setSelectedDistrictView] = useState('mumbai'); // 'mumbai' or 'kalahandi'

  const setActiveTab = (tab) => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      if (tab === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState(null, '', `#${tab}`);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen to browser Back/Forward navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveTabState(hash || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const tabTitles = {
    'home': 'Overview',
    'database': 'Healthcare & Oncology Directory',
    'doctor-register': 'Doctor Verification & Credential Audit',
    'visit-assistant': 'Hospital Visit Preparation Assistant',
    'district-index': 'District CancerCare Accessibility Index (DCARI)',
    'financial-schemes': 'Government Schemes & Financial Grants',
    'crowdfunding': 'Verified Patient Crowdfunding (Escrow)',
    'patient-stories': 'Patient Recovery Stories & Aid',
    'doctor-reviews': 'Oncologist Reviews & Anti-Bot Engine',
    'community-help': 'Community Mutual Aid & Platelet Matching',
    'admin-dashboard': 'Platform Governance & Admin Console',
    'ai-assistant': 'AI Cancer Information & Navigation Guide',
  };

  const visitItemsCheckedCount = Object.values(visitChecklist).filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans selection:bg-teal-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Universal Header with Navigation & Role Switcher */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
      />

      {/* Persistent Sub-Module Breadcrumb & Back Bar (Visible when not on Home) */}
      {activeTab !== 'home' && (
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs w-full transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
            <button
              onClick={() => setActiveTab('home')}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 hover:border-teal-200 text-xs font-bold transition-all group shadow-xs cursor-pointer shrink-0 active:scale-95"
              title="Return to Overview"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-teal-600" />
              <span>Back to Overview</span>
            </button>
            
            <div className="flex items-center space-x-2 text-xs truncate">
              <button 
                onClick={() => setActiveTab('home')}
                className="text-slate-500 hover:text-teal-700 transition-colors font-medium flex items-center space-x-1 cursor-pointer shrink-0"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Overview</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/80 truncate">
                {tabTitles[activeTab] || activeTab.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main View Router with Smooth Fade & Slide Transition */}
      <main className="flex-1 w-full max-w-full">
        {activeTab === 'home' && (
          <div className="animate-fade-in-up">
            <HeroBanner setActiveTab={setActiveTab} />
            
            {/* Modern Flowy Bento Grid Section */}
            <div className="py-14 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header with live badge */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Activity className="w-3 h-3 text-teal-600" />
                      <span>Coordinated Oncology Modules</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Institutional Support & Patient Navigation Architecture
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                      Tactile, verified clinical resources to calculate district accessibility disparities, audit oncologist degrees, and screen for government healthcare subsidies.
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center space-x-2 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon" />
                    <span className="font-medium text-slate-600">All services public-interest & verified</span>
                  </div>
                </div>

                {/* Asymmetric Interactive Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                  {/* BENTO 1: Interactive Consultation Prep Card (Spans 2 columns on lg) */}
                  <div className="lg:col-span-2 group bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <ClipboardList className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider">Interactive Protocol</span>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                              Hospital Visit Preparation Assistant
                            </h3>
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200/80">
                          {visitItemsCheckedCount}/3 Ready
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        Interactive consultation protocol derived from Tata Memorial patient education guidelines. Click below to test mandatory document readiness before consultation:
                      </p>

                      {/* Tactile Interactive Checklist (Interactive right on the card!) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setVisitChecklist(prev => ({ ...prev, biopsy: !prev.biopsy }));
                          }}
                          className={`flex items-center space-x-2 text-xs p-2 rounded-lg border text-left transition-all cursor-pointer ${
                            visitChecklist.biopsy 
                              ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200 font-semibold' 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            visitChecklist.biopsy ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                          }`}>
                            {visitChecklist.biopsy && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">Biopsy Block & IHC</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setVisitChecklist(prev => ({ ...prev, dicom: !prev.dicom }));
                          }}
                          className={`flex items-center space-x-2 text-xs p-2 rounded-lg border text-left transition-all cursor-pointer ${
                            visitChecklist.dicom 
                              ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200 font-semibold' 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            visitChecklist.dicom ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                          }`}>
                            {visitChecklist.dicom && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">Contrast PET-CT DICOM</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setVisitChecklist(prev => ({ ...prev, questions: !prev.questions }));
                          }}
                          className={`flex items-center space-x-2 text-xs p-2 rounded-lg border text-left transition-all cursor-pointer ${
                            visitChecklist.questions 
                              ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200 font-semibold' 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            visitChecklist.questions ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                          }`}>
                            {visitChecklist.questions && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">Doctor Questions List</span>
                        </button>
                      </div>
                    </div>

                    <div 
                      onClick={() => setActiveTab('visit-assistant')}
                      className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 cursor-pointer group-hover:text-teal-800"
                    >
                      <span>Open Full Personalized Checklist Wizard</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 2: Interactive District CancerCare Index with Disparity Switcher */}
                  <div className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex items-center space-x-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                          <button
                            type="button"
                            onClick={() => setSelectedDistrictView('mumbai')}
                            className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                              selectedDistrictView === 'mumbai' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-500'
                            }`}
                          >
                            Metro
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedDistrictView('kalahandi')}
                            className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                              selectedDistrictView === 'kalahandi' ? 'bg-white text-rose-800 shadow-xs' : 'text-slate-500'
                            }`}
                          >
                            Rural Gap
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        District Disparity Index (DCARI)
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Data science scoring (0-100) mapping linear accelerators, surgical beds, and blood banks across 750+ Indian districts.
                      </p>

                      {/* Smooth Animated Gauge Bar */}
                      <div className="mt-4 p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80">
                        {selectedDistrictView === 'mumbai' ? (
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs font-bold text-slate-800">
                              <span>Mumbai Suburban (Metro)</span>
                              <span className="text-emerald-700 tabular-nums">88/100 (High)</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full w-[88%] transition-all duration-700 ease-out" />
                            </div>
                            <p className="text-[10px] text-slate-500">Tata Memorial, 12 Linacs within 15km</p>
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs font-bold text-slate-800">
                              <span>Kalahandi (Rural Odisha)</span>
                              <span className="text-rose-600 tabular-nums">31/100 (Severe Gap)</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-rose-500 h-full w-[31%] transition-all duration-700 ease-out" />
                            </div>
                            <p className="text-[10px] text-rose-600 font-medium">Critical deficit: 0 Radiotherapy units within 140km</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div 
                      onClick={() => setActiveTab('district-index')}
                      className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 cursor-pointer group-hover:text-teal-800"
                    >
                      <span>Explore National Map & Compare</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 3: Doctor Verification & Credential Audit */}
                  <div 
                    onClick={() => setActiveTab('doctor-register')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <BadgeCheck className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                          NMC Verified
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Doctor Credentials Audit
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Two-stage audit cross-checking State Medical Councils (13 states) and NMC registry before awarding the Verified Doctor badge.
                      </p>

                      <div className="mt-4 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100/80 flex items-center space-x-2.5 text-xs text-emerald-900">
                        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-semibold text-[11px]">OTP Identity + State Council Checked</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Verify Doctor or Register</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 4: Government Schemes & Cashless Grants */}
                  <div 
                    onClick={() => setActiveTab('financial-schemes')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Coins className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                          Govt Grants
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Financial Schemes Directory
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        PM-JAY (₹5 Lakhs cashless), RAN-HMCPF (₹15 Lakhs), state cancer funds, and 100% railway concession with official .gov.in redirects.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">PM-JAY Cashless</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">RAN ₹15 Lakhs</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">Railway Concession</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Screen Scheme Eligibility</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 5: Hospital Escrow Verified Crowdfunding */}
                  <div 
                    onClick={() => setActiveTab('crowdfunding')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <HeartHandshake className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-full">
                          Direct Escrow
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Verified Crowdfunding
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Anti-fraud patient campaigns where 100% of donated capital is disbursed directly to hospital bank accounts with cost estimate audits.
                      </p>

                      <div className="mt-4 p-3 bg-slate-50/90 rounded-xl border border-slate-200/80">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                          <span>Target: ₹18.5 Lakhs</span>
                          <span className="text-rose-700 font-bold">77% Raised</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1.5">
                          <div className="bg-rose-600 h-full w-[77%]" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>View Audited Campaigns</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 6: Healthcare Database & Resources */}
                  <div 
                    onClick={() => setActiveTab('database')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full">
                          National Directory
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Healthcare & Support Directory
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Comprehensive registry of regional cancer centres (RCCs), blood apheresis units, NGOs, subsidized dharamshalas, and shuttles.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-100">Regional Cancer Centres</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">Blood Banks</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">Dharamshalas</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Browse National Directory</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 7: Doctor Reviews & Bot Detection */}
                  <div 
                    onClick={() => setActiveTab('doctor-reviews')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Star className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                          Zero-Delete Triage
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Reviews & Bot Check Engine
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Evaluates oncologist feedback with automated heuristics detecting burst submissions, miracle cure spam, and duplicate text.
                      </p>

                      <div className="mt-4 p-3 bg-slate-50/90 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Bot Detection Heuristics</span>
                        <span className="font-bold text-emerald-700">Active Pipeline</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Test Detection Engine</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 8: AI Oncology Information Navigator */}
                  <div 
                    onClick={() => setActiveTab('ai-assistant')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Bot className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full">
                          NCG Evidence Based
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        AI Cancer Information Guide
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Strictly non-diagnostic guide for explaining biopsy terminology, staging vs grading, and chemo safety protocols with verified citations.
                      </p>

                      <div className="mt-4 p-3 bg-teal-50/60 rounded-xl border border-teal-100 text-[11px] text-teal-900 font-medium">
                        Aligned with Tata Memorial & ICMR Consensus
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Ask AI Navigator</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* BENTO 9: Institutional Governance Admin Console */}
                  <div 
                    onClick={() => setActiveTab('admin-dashboard')}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-teal-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Lock className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-2 py-0.5 rounded-full">
                          Admin Governance
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Platform Governance Console
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        Dedicated queue for medical credential audits, hospital escrow cost estimate approvals, and flagged review investigation.
                      </p>

                      <div className="mt-4 p-3 bg-purple-50/50 rounded-xl border border-purple-100 flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Audit Queues</span>
                        <span className="font-bold text-purple-700">3 Pending Review</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                      <span>Open Admin Console</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Modules with Butter-Smooth Fade-In-Up Transitions */}
        {activeTab === 'database' && (
          <div className="animate-fade-in-up">
            <ResourceDatabase setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'doctor-register' && (
          <div className="animate-fade-in-up">
            <DoctorRegistration setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'visit-assistant' && (
          <div className="animate-fade-in-up">
            <VisitAssistant setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'district-index' && (
          <div className="animate-fade-in-up">
            <DistrictScoreMap setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'financial-schemes' && (
          <div className="animate-fade-in-up">
            <FinancialSupport setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'crowdfunding' && (
          <div className="animate-fade-in-up">
            <Crowdfunding setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'patient-stories' && (
          <div className="animate-fade-in-up">
            <PatientStories setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'doctor-reviews' && (
          <div className="animate-fade-in-up">
            <DoctorReviews setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'community-help' && (
          <div className="animate-fade-in-up">
            <CommunityMatching setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'admin-dashboard' && (
          <div className="animate-fade-in-up">
            <AdminDashboard setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === 'ai-assistant' && (
          <div className="animate-fade-in-up">
            <AiAssistant setActiveTab={setActiveTab} />
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="space-y-3">
              <div 
                onClick={() => setActiveTab('home')}
                className="flex items-center space-x-2.5 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-ribbon-600 to-rose-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                  <Ribbon className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                  CancerCare<span className="text-ribbon-500">Grid</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                India’s comprehensive oncology accessibility, doctor verification, and community mutual aid network. Dedicated to cancer equity and patient empowerment.
              </p>
              <div className="text-[11px] text-teal-400 font-medium">
                National Cancer Grid & NMC Registry Aligned
              </div>
            </div>

            {/* Emergency & Helplines */}
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
                Emergency & National Helplines
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>National Cancer Helpline: <strong className="text-white tabular-nums">1800-22-1951</strong></li>
                <li>Ayushman Bharat PM-JAY: <strong className="text-white tabular-nums">14555</strong></li>
                <li>Blood Bank Emergency: <strong className="text-white tabular-nums">1910</strong></li>
                <li>Railway Cancer Concession: <strong className="text-white tabular-nums">139</strong></li>
              </ul>
            </div>

            {/* Quick Feature Jump */}
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
                Core Modules
              </h4>
              <ul className="space-y-1 text-xs text-slate-400">
                <li><button onClick={() => setActiveTab('doctor-register')} className="hover:text-white cursor-pointer">Doctor Credentials Audit</button></li>
                <li><button onClick={() => setActiveTab('visit-assistant')} className="hover:text-white cursor-pointer">Hospital Visit Assistant</button></li>
                <li><button onClick={() => setActiveTab('district-index')} className="hover:text-white cursor-pointer">District Accessibility Index</button></li>
                <li><button onClick={() => setActiveTab('financial-schemes')} className="hover:text-white cursor-pointer">Government Schemes Directory</button></li>
                <li><button onClick={() => setActiveTab('crowdfunding')} className="hover:text-white cursor-pointer">Verified Crowdfunding</button></li>
                <li><button onClick={() => setActiveTab('doctor-reviews')} className="hover:text-white cursor-pointer">Fake Review Detection</button></li>
              </ul>
            </div>

            {/* Disclaimer & Academic Attribution */}
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
                Medical & Institutional Disclaimer
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                CancerCare Grid provides informational navigation, verification, and community logistics. It does NOT provide individualized clinical prescriptions or replace oncologist consultations.
              </p>
              <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                Developed as an EPICS / B.Tech Engineering Project in Community Service.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <div>
              © 2026 CancerCare Grid. All rights reserved. Verified Healthcare Architecture.
            </div>
            <div className="flex space-x-4">
              <button onClick={() => setActiveTab('home')} className="hover:text-white cursor-pointer">Overview</button>
              <span>•</span>
              <span>Privacy Safeguards</span>
              <span>•</span>
              <span>NMC Medical Verification</span>
              <span>•</span>
              <span>Escrow Transparency</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

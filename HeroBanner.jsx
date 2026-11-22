import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  ClipboardList, 
  MapPin, 
  HeartHandshake, 
  Bot, 
  ArrowRight, 
  ShieldCheck, 
  Droplet, 
  Search, 
  CheckCircle2, 
  ChevronRight,
  PhoneCall,
  Activity,
  FileText,
  BadgeCheck,
  Sparkles,
  Compass
} from 'lucide-react';

export default function HeroBanner({ setActiveTab }) {
  const [searchInput, setSearchInput] = useState('');

  const quickFilterPills = [
    { label: 'Apex Cancer Centres', tab: 'database' },
    { label: 'Verified Oncologists', tab: 'doctor-register' },
    { label: 'Visit Checklist', tab: 'visit-assistant' },
    { label: 'District Access Score', tab: 'district-index' },
    { label: 'PM-JAY & State Grants', tab: 'financial-schemes' },
    { label: 'Urgent Apheresis Units', tab: 'database' },
  ];

  const marqueeAlerts = [
    { icon: Droplet, text: '24/7 Rare Platelet Apheresis: Single Donor Platelet (SDP) matching active across 14 Regional Cancer Centres', highlight: 'Emergency Grid' },
    { icon: ShieldCheck, text: 'National Medical Commission: 13 State Medical Councils actively synchronized for doctor credential verification', highlight: 'NMC Verified' },
    { icon: Building2, text: 'Apex Hospitals: Tata Memorial, AIIMS IRCH, Adyar Cancer Institute, and Kidwai protocols integrated', highlight: 'NCG Protocols' },
    { icon: PhoneCall, text: 'National Cancer Helpline 1800-22-1951 (Toll Free) • Ayushman NHA 14555 active round the clock', highlight: 'Toll-Free' },
  ];

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      
      {/* 1. Live Continuous Flowing Ticker Strip */}
      <div className="bg-slate-950/90 border-b border-slate-800/80 py-2 overflow-hidden marquee-container select-none">
        <div className="animate-marquee flex items-center space-x-8 text-xs text-slate-300">
          {[...marqueeAlerts, ...marqueeAlerts].map((alert, idx) => {
            const Icon = alert.icon;
            return (
              <div key={idx} className="flex items-center space-x-2 shrink-0">
                <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-teal-950 text-teal-300 border border-teal-800">
                  <Icon className="w-3 h-3 text-teal-400" />
                  <span>{alert.highlight}</span>
                </span>
                <span className="text-[11px] text-slate-300 font-medium">{alert.text}</span>
                <span className="text-slate-700 ml-4">•</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Organic Flowing SVG Wave & Ribbon Vector Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-[180%] sm:w-[130%] h-full object-cover animate-wave-flow"
        >
          <path 
            d="M-100,280 C200,420 500,120 850,260 C1200,400 1400,200 1600,320 L1600,600 L-100,600 Z" 
            fill="url(#medicalWaveGrad)" 
            opacity="0.6"
          />
          <path 
            d="M-50,380 C300,180 700,450 1100,280 C1350,180 1500,350 1650,280" 
            stroke="url(#ribbonStrokeGrad)" 
            strokeWidth="3" 
            strokeDasharray="6 6"
            fill="none"
          />
          <defs>
            <linearGradient id="medicalWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="ribbonStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Floating Ambient Badges (Gentle organic drift) */}
      <div className="hidden lg:block absolute left-8 top-32 pointer-events-none animate-float-slow z-20">
        <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-xl flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-beacon" />
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NMC Verification</p>
            <p className="text-xs font-bold text-white">100% Medical Degrees Audited</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-36 pointer-events-none animate-float-reverse z-20">
        <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-xl flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-xl bg-teal-900/60 text-teal-400 flex items-center justify-center">
            <Activity className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DCARI Index</p>
            <p className="text-xs font-bold text-white">750+ Districts Scored</p>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto pt-8 pb-14 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Announcement Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 shadow-xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon" />
            <span className="text-slate-200 font-semibold">National Cancer Grid Aligned</span>
            <span className="text-slate-500">•</span>
            <span className="text-teal-400 font-medium">100% Verified Medical Credentials</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            National Oncology Support & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-sky-300">
              Healthcare Access Grid
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Bridging patients, oncology specialists, government financial schemes, and mutual aid across India. 
            Empowering families with verified doctors, personalized hospital visit preparation, district accessibility gap metrics, and urgent community support.
          </p>

          {/* Flowy Search Bar with Instant Focus & Smooth Action */}
          <div className="mt-8 w-full max-w-2xl bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-400/30">
            <div className="flex items-center space-x-3 px-3.5 py-2.5 w-full text-slate-200">
              <Search className="w-4 h-4 text-teal-400 shrink-0" />
              <input 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search hospitals, verified oncologists, blood banks, or financial schemes..."
                className="bg-transparent border-none text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none w-full"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActiveTab('database');
                }}
              />
            </div>
            <button
              onClick={() => setActiveTab('database')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold whitespace-nowrap shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Search Directory
            </button>
          </div>

          {/* Flowy Quick Jump Category Pills */}
          <div className="mt-4 flex flex-wrap justify-center items-center gap-1.5 text-xs text-slate-400">
            <span className="text-slate-500 mr-1 hidden sm:inline text-xs font-medium">Quick Jump:</span>
            {quickFilterPills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(pill.tab)}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-teal-950/80 border border-slate-700/60 hover:border-teal-700/80 text-slate-300 hover:text-teal-200 text-[11px] font-medium transition-all cursor-pointer active:scale-95"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Interactive Feature Pillars with Fluid Lift on Hover */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Prepare for Hospital Visit',
              desc: 'Personalized checklists for biopsy blocks, PET-CT scans, and questions for your oncologist.',
              tab: 'visit-assistant',
              badge: 'Tata Memorial Protocol',
              icon: ClipboardList,
              badgeColor: 'bg-teal-900/60 text-teal-300 border-teal-800'
            },
            {
              title: 'District Accessibility Index',
              desc: 'Algorithmic score (0-100) evaluating oncology beds, linear accelerators, and blood banks per district.',
              tab: 'district-index',
              badge: 'DCARI Data Science',
              icon: MapPin,
              badgeColor: 'bg-blue-900/60 text-blue-300 border-blue-800'
            },
            {
              title: 'Doctor Credentials Audit',
              desc: 'Two-stage verification cross-referencing State Medical Councils and National Medical Commission (NMC).',
              tab: 'doctor-register',
              badge: 'Zero-Fake Guarantee',
              icon: BadgeCheck,
              badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-800'
            },
            {
              title: 'Government Scheme Screener',
              desc: 'Ayushman Bharat PM-JAY, RAN-HMCPF, and state cancer funds with official .gov.in redirects.',
              tab: 'financial-schemes',
              badge: 'Cashless Aid',
              icon: HeartHandshake,
              badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-800'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveTab(item.tab)}
                className="group p-5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/70 text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:text-teal-300">
                  <span>Explore Module</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Vital Statistics Bar */}
        <div className="mt-10 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="hover:scale-105 transition-transform duration-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400 tabular-nums">100%</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Audited Medical Degrees & NMC Reg</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">750+</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Indian Districts Evaluated on DCARI</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-400 tabular-nums">₹3.5 Cr+</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Direct Hospital Escrow Disbursal</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">24/7</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Emergency Platelet & Transport Matching</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

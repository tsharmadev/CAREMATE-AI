import React, { useState, useEffect, useRef } from 'react';
import { 
  Ribbon, 
  ShieldCheck, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown,
  Building2,
  Stethoscope,
  ClipboardList,
  MapPin,
  HeartHandshake,
  Bot,
  Star,
  Users,
  Coins,
  ArrowLeft,
  LayoutGrid,
  User,
  Shield,
  Activity
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, currentRole, setCurrentRole, unreadAlertsCount = 2 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef(null);

  const roles = [
    { id: 'patient', label: 'Patient / Caregiver', icon: User, color: 'bg-emerald-50 text-emerald-800 border-emerald-200/80', desc: 'Find doctors, schemes & prepare visits' },
    { id: 'doctor', label: 'Oncologist Specialist', icon: Stethoscope, color: 'bg-teal-50 text-teal-800 border-teal-200/80', desc: 'NMC verification & credentials audit' },
    { id: 'admin', label: 'Institutional Admin', icon: ShieldCheck, color: 'bg-slate-100 text-slate-800 border-slate-300', desc: 'Audit registrations & escrow campaigns' },
    { id: 'ngo', label: 'Mutual Aid Volunteer', icon: HeartHandshake, color: 'bg-amber-50 text-amber-800 border-amber-200/80', desc: 'Platelet match & emergency transport' },
  ];

  // Primary visible links on desktop navbar (strictly fits within standard viewport)
  const primaryNavItems = [
    { id: 'home', label: 'Overview', icon: Ribbon },
    { id: 'database', label: 'Directory', icon: Building2 },
    { id: 'doctor-register', label: 'Doctor Verification', icon: Stethoscope },
    { id: 'visit-assistant', label: 'Visit Assistant', icon: ClipboardList },
    { id: 'district-index', label: 'District Index', icon: MapPin },
    { id: 'financial-schemes', label: 'Govt Schemes', icon: Coins },
  ];

  // Secondary modules grouped cleanly in a dropdown
  const secondaryNavItems = [
    { id: 'crowdfunding', label: 'Verified Crowdfunding', desc: 'Direct hospital escrow disbursal', icon: HeartHandshake },
    { id: 'patient-stories', label: 'Patient Stories', desc: 'Consent-verified recovery narratives', icon: Users },
    { id: 'doctor-reviews', label: 'Reviews & Bot Check', desc: 'Clinical ratings with anti-fraud triage', icon: Star },
    { id: 'community-help', label: 'Mutual Aid Grid', desc: 'Urgent apheresis & caregiver match', icon: Activity },
    { id: 'admin-dashboard', label: 'Admin Governance', desc: 'Credential audits & escrow oversight', icon: ShieldCheck, adminOnly: true },
  ];

  const allNavItems = [
    ...primaryNavItems,
    ...secondaryNavItems,
    { id: 'ai-assistant', label: 'AI Navigator', icon: Bot, isSpecial: true },
  ];

  const isSecondaryActive = secondaryNavItems.some(item => item.id === activeTab);
  const currentRoleObj = roles.find(r => r.id === currentRole) || roles[0];
  const CurrentRoleIcon = currentRoleObj.icon;

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setMoreMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs w-full max-w-full overflow-x-clip transition-all">
      {/* Institutional National Helpline Micro-Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-ribbon-600/90 text-white uppercase tracking-wider">
              National Cancer Grid
            </span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              Coordinated oncology access, verified credentials, and patient equity across India
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:1800221951" 
              className="inline-flex items-center space-x-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>National Helpline: <strong className="tabular-nums font-bold">1800-22-1951</strong> (Toll Free)</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">Ayushman NHA: <strong className="tabular-nums text-slate-300">14555</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-2 shrink-0">
            {activeTab !== 'home' && (
              <button
                onClick={() => setActiveTab('home')}
                className="mr-1 p-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-700 transition-colors border border-slate-200/80 cursor-pointer"
                title="Return to Home Overview"
                aria-label="Back to Home"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}

            <div 
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2.5 cursor-pointer group select-none"
              title="CancerCare Grid — National Oncology Support"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ribbon-600 to-rose-700 flex items-center justify-center text-white shadow-xs group-hover:shadow transition-all shrink-0">
                <Ribbon className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center space-x-1.5">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                    CancerCare<span className="text-ribbon-600">Grid</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                    INDIA
                  </span>
                </div>
                <p className="hidden md:block text-[10px] text-slate-500 font-medium leading-none">
                  National Oncology Support & Mutual Aid Network
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1 shrink-0">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-teal-50 text-teal-900 border border-teal-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* 'More Modules' Dropdown */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSecondaryActive
                    ? 'bg-teal-50 text-teal-900 border border-teal-200 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
                <span>More Modules</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-elevated border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3.5 py-1.5 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Community & Institutional Services
                  </div>
                  {secondaryNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMoreMenuOpen(false);
                        }}
                        className={`w-full flex items-start space-x-2.5 px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                          isActive ? 'bg-teal-50 font-bold text-teal-900' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg mt-0.5 shrink-0 ${
                          isActive 
                            ? 'bg-teal-100 text-teal-700' 
                            : item.adminOnly 
                              ? 'bg-purple-50 text-purple-700' 
                              : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 leading-tight flex items-center gap-1.5">
                            {item.label}
                            {item.adminOnly && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-100 text-purple-700 font-bold uppercase">Admin</span>
                            )}
                          </p>
                          <p className="text-[11px] text-slate-500 font-normal leading-snug mt-0.5">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* AI Assistant Pill */}
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                activeTab === 'ai-assistant'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask AI Guide</span>
            </button>
          </nav>

          {/* Right Action: Role Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Role Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${currentRoleObj.color}`}
                title="Switch platform view role to test patient, doctor, and admin workflows"
              >
                <CurrentRoleIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="font-semibold hidden sm:inline">{currentRoleObj.label}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-elevated border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setRoleDropdownOpen(false)}
                >
                  <div className="px-3.5 py-1.5 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Interactive Role Switcher
                  </div>
                  {roles.map((r) => {
                    const RoleIcon = r.icon;
                    return (
                      <button
                        key={r.id}
                        onClick={() => {
                          setCurrentRole(r.id);
                          setRoleDropdownOpen(false);
                          if (r.id === 'admin') setActiveTab('admin-dashboard');
                          if (r.id === 'doctor') setActiveTab('doctor-register');
                        }}
                        className={`w-full flex items-start space-x-2.5 px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                          currentRole === r.id ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="p-1 rounded-lg bg-slate-100 text-slate-700 mt-0.5 shrink-0">
                          <RoleIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{r.label}</p>
                          <p className="text-[11px] text-slate-400 leading-snug font-normal mt-0.5">{r.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3 shadow-lg">
          {activeTab !== 'home' && (
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-teal-50 text-teal-800 font-bold text-xs hover:bg-teal-100 border border-teal-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-teal-600" />
              <span>&larr; Back to Home Overview</span>
            </button>
          )}

          <div className="px-2 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            All Platform Modules
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {allNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-medium w-full text-left transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-teal-700 text-white font-semibold shadow-xs' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-2 font-medium">Switch Active Role:</p>
            <div className="grid grid-cols-2 gap-2">
              {roles.map(r => {
                const RoleIcon = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      setCurrentRole(r.id);
                      setMobileMenuOpen(false);
                      if (r.id === 'admin') setActiveTab('admin-dashboard');
                      if (r.id === 'doctor') setActiveTab('doctor-register');
                    }}
                    className={`flex items-center space-x-2 px-2.5 py-2 rounded-xl border text-xs text-left cursor-pointer ${
                      currentRole === r.id ? 'border-teal-500 bg-teal-50 font-bold text-teal-900' : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <RoleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

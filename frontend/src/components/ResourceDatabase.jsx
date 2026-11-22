import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Droplet, 
  HeartHandshake, 
  ShieldCheck, 
  Search, 
  Filter, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Home, 
  Bus, 
  Crosshair, 
  Info,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  HOSPITALS, 
  BLOOD_BANKS, 
  BLOOD_DONORS, 
  NGOS, 
  SCREENING_CENTRES, 
  ACCOMMODATIONS, 
  TRANSPORT_SERVICES 
} from '../data/hospitals';
import { DOCTORS } from '../data/doctors';

export default function ResourceDatabase() {
  const [activeCategory, setActiveCategory] = useState('hospitals');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('All');
  const [onlyVerified, setOnlyVerified] = useState(true);
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  const categories = [
    { id: 'hospitals', label: 'Hospitals & Centres', icon: Building2, count: HOSPITALS.length },
    { id: 'doctors', label: 'Doctors & Specialists', icon: Stethoscope, count: DOCTORS.length },
    { id: 'blood-banks', label: 'Blood Banks', icon: Droplet, count: BLOOD_BANKS.length },
    { id: 'blood-donors', label: 'Voluntary Donors', icon: Droplet, count: BLOOD_DONORS.length },
    { id: 'ngos', label: 'NGOs & Support Orgs', icon: HeartHandshake, count: NGOS.length },
    { id: 'screening', label: 'Screening Centres', icon: Crosshair, count: SCREENING_CENTRES.length },
    { id: 'accommodation', label: 'Accommodations', icon: Home, count: ACCOMMODATIONS.length },
    { id: 'transport', label: 'Patient Transport', icon: Bus, count: TRANSPORT_SERVICES.length },
  ];

  // Distinct Indian states present in data
  const availableStates = ['All', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Assam'];

  // Filtered Hospitals
  const filteredHospitals = useMemo(() => {
    return HOSPITALS.filter(h => {
      const matchSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          h.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchState = selectedState === 'All' || h.state === selectedState;
      const matchOwnership = selectedOwnership === 'All' || 
                              (selectedOwnership === 'Government' && h.type.includes('Government')) ||
                              (selectedOwnership === 'Private / Trust' && !h.type.includes('Government'));
      return matchSearch && matchState && matchOwnership;
    });
  }, [searchQuery, selectedState, selectedOwnership]);

  // Filtered Doctors
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchState = selectedState === 'All' || d.state === selectedState;
      return matchSearch && matchState;
    });
  }, [searchQuery, selectedState]);

  // Filtered Blood Banks
  const filteredBloodBanks = useMemo(() => {
    return BLOOD_BANKS.filter(b => {
      const matchSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchState = selectedState === 'All' || b.state === selectedState;
      return matchSearch && matchState;
    });
  }, [searchQuery, selectedState]);

  // Filtered Donors
  const filteredDonors = useMemo(() => {
    return BLOOD_DONORS.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchState = selectedState === 'All' || d.state === selectedState;
      const matchGroup = selectedBloodGroup === 'All' || d.bloodGroup === selectedBloodGroup;
      return matchSearch && matchState && matchGroup;
    });
  }, [searchQuery, selectedState, selectedBloodGroup]);

  // Filtered NGOs
  const filteredNGOs = useMemo(() => {
    return NGOS.filter(n => {
      return n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             n.focus.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  // Filtered Screening
  const filteredScreening = useMemo(() => {
    return SCREENING_CENTRES.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchState = selectedState === 'All' || s.state === selectedState;
      return matchSearch && matchState;
    });
  }, [searchQuery, selectedState]);

  // Filtered Accommodations
  const filteredAccommodations = useMemo(() => {
    return ACCOMMODATIONS.filter(a => {
      return a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             a.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  // Filtered Transport
  const filteredTransport = useMemo(() => {
    return TRANSPORT_SERVICES.filter(t => {
      return t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             t.coverage.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <span className="p-2 rounded-lg bg-teal-100 text-teal-700">
            <Building2 className="w-5 h-5" />
          </span>
          <h1 className="text-2xl font-bold text-slate-900">
            Cancer Healthcare & Support Database
          </h1>
        </div>
        <p className="mt-1 text-sm text-slate-500">
          Centralized directory of verified oncology hospitals, specialists, blood & platelet apheresis banks, NGOs, screening camps, patient stays, and transport services.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mt-6 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Global Filter & Search Bar */}
      <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-card flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search across ${categories.find(c => c.id === activeCategory)?.label}...`}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* State Filter */}
          <div className="flex items-center space-x-1.5 text-xs text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-2.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
            >
              {availableStates.map(st => (
                <option key={st} value={st}>{st === 'All' ? 'All States' : st}</option>
              ))}
            </select>
          </div>

          {/* Hospital Ownership Filter */}
          {activeCategory === 'hospitals' && (
            <select
              value={selectedOwnership}
              onChange={(e) => setSelectedOwnership(e.target.value)}
              className="px-2.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
            >
              <option value="All">All Ownership</option>
              <option value="Government">Government / Autonomous</option>
              <option value="Private / Trust">Non-profit Trust / Private</option>
            </select>
          )}

          {/* Blood Group Filter for Donors */}
          {activeCategory === 'blood-donors' && (
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
              className="px-2.5 py-2 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
            >
              <option value="All">All Blood Groups</option>
              <option value="O-">O Negative (Universal)</option>
              <option value="O+">O Positive</option>
              <option value="B-">B Negative</option>
              <option value="AB-">AB Negative</option>
            </select>
          )}
        </div>
      </div>

      {/* Main Content Area based on Selected Category */}
      <div className="mt-8">
        
        {/* HOSPITALS TAB */}
        {activeCategory === 'hospitals' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Showing {filteredHospitals.length} oncology centres</span>
              <span className="text-teal-700 font-semibold">100% Empaneled with Government Schemes</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredHospitals.map(hosp => (
                <div 
                  key={hosp.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                          {hosp.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-1">
                          {hosp.name}
                        </h3>
                        <p className="text-xs text-slate-500 flex items-center mt-1">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                          {hosp.city}, {hosp.state} ({hosp.distanceKm} km)
                        </p>
                      </div>
                      <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
                        ★ {hosp.rating}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs py-2 bg-slate-50 rounded-xl">
                      <div>
                        <span className="font-bold text-slate-800">{hosp.bedsCount}</span>
                        <span className="block text-[10px] text-slate-400">Total Beds</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">{hosp.linearAccelerators}</span>
                        <span className="block text-[10px] text-slate-400">LINAC Units</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">{hosp.petCtAvailable ? 'Yes' : 'No'}</span>
                        <span className="block text-[10px] text-slate-400">PET-CT Scan</span>
                      </div>
                    </div>

                    {/* Empaneled Schemes */}
                    <div className="mt-3">
                      <span className="text-[10px] text-slate-400 font-semibold block mb-1">Empaneled Schemes:</span>
                      <div className="flex flex-wrap gap-1">
                        {hosp.schemesEmpaneled.map((sch, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                            {sch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a 
                      href={`tel:${hosp.phone}`}
                      className="flex items-center space-x-1.5 text-blue-600 font-bold hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{hosp.phone}</span>
                    </a>
                    <a 
                      href={hosp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-slate-500 hover:text-slate-900 font-medium"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCTORS TAB */}
        {activeCategory === 'doctors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDoctors.map(doc => (
              <div 
                key={doc.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{doc.name}</h3>
                      <p className="text-xs font-semibold text-brand-700">{doc.specialization}</p>
                    </div>
                    {doc.verifiedDoctorBadge && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                        <ShieldCheck className="w-3 h-3 mr-0.5" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mt-1">{doc.degree}</p>

                  <div className="mt-3 p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs">
                    <p className="text-slate-600 flex justify-between">
                      <span className="text-slate-400">Hospital:</span>
                      <span className="font-medium truncate max-w-[170px]">{doc.hospitalAffiliation}</span>
                    </p>
                    <p className="text-slate-600 flex justify-between">
                      <span className="text-slate-400">Experience:</span>
                      <span className="font-medium">{doc.experienceYears} Years</span>
                    </p>
                    <p className="text-slate-600 flex justify-between">
                      <span className="text-slate-400">Council Reg:</span>
                      <span className="font-mono text-[11px] font-medium">{doc.registrationNumber}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{doc.consultationFee}</span>
                  <span className="text-amber-500 font-bold">★ {doc.rating} ({doc.totalReviews})</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BLOOD BANKS TAB */}
        {activeCategory === 'blood-banks' && (
          <div className="space-y-4">
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center space-x-3 text-xs text-rose-800">
              <Droplet className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="font-bold">Chemotherapy & Bone Marrow Support:</span> Cancer treatments frequently induce thrombocytopenia and severe anemia. The blood banks below maintain dedicated single donor platelet (SDP) apheresis systems.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredBloodBanks.map(bank => (
                <div key={bank.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{bank.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center mt-0.5">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        {bank.address}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      24x7 Open
                    </span>
                  </div>

                  {/* Stock Grid */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-700 block mb-1.5">Live Stock Status:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
                      {Object.entries(bank.stocks).slice(0, 8).map(([grp, status]) => (
                        <div key={grp} className={`p-1.5 rounded-lg border text-center ${
                          status.includes('CRITICAL') ? 'bg-red-50 border-red-200 text-red-700 font-bold' :
                          status.includes('Low') ? 'bg-amber-50 border-amber-200 text-amber-700' :
                          'bg-slate-50 border-slate-200 text-slate-700'
                        }`}>
                          <span className="block text-[10px] font-semibold text-slate-400">{grp}</span>
                          <span className="text-[11px]">{status.split(' ')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a href={`tel:${bank.phone}`} className="flex items-center space-x-1 font-bold text-rose-600">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{bank.phone}</span>
                    </a>
                    <span className="text-[11px] text-slate-500 font-medium">
                      ✓ {bank.verifiedStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOOD DONORS TAB */}
        {activeCategory === 'blood-donors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredDonors.map(donor => (
              <div key={donor.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center font-extrabold text-sm">
                    {donor.bloodGroup}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    ✓ Verified Donor
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900">{donor.name}</h4>
                  <p className="text-[11px] text-slate-500 flex items-center mt-0.5">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                    {donor.city}, {donor.state}
                  </p>
                </div>

                <div className="p-2 bg-slate-50 rounded-xl text-[11px] space-y-1">
                  <p className="flex justify-between text-slate-600">
                    <span>Donations:</span>
                    <span className="font-bold text-slate-800">{donor.donationsCount} times</span>
                  </p>
                  <p className="flex justify-between text-slate-600">
                    <span>Platelet Apheresis:</span>
                    <span className="font-semibold text-teal-700">{donor.isPlateletDonor ? 'Eligible & Active' : 'Whole Blood Only'}</span>
                  </p>
                </div>

                <button className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors">
                  Contact via Grid ({donor.phoneMasked})
                </button>
              </div>
            ))}
          </div>
        )}

        {/* NGOS TAB */}
        {activeCategory === 'ngos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredNGOs.map(ngo => (
              <div key={ngo.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded uppercase">
                    {ngo.verifiedStatus}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">{ngo.name}</h3>
                  <p className="text-xs text-slate-500">{ngo.focus}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 block">Services Provided:</span>
                  <div className="flex flex-wrap gap-1">
                    {ngo.services.map((srv, idx) => (
                      <span key={idx} className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600">{ngo.phone}</span>
                  <a href={ngo.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-slate-600 hover:underline">
                    <span>Visit NGO Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SCREENING TAB */}
        {activeCategory === 'screening' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredScreening.map(camp => (
              <div key={camp.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    {camp.type}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">{camp.name}</h3>
                  <p className="text-xs text-slate-500">{camp.city}, {camp.state}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 block">Available Screenings:</span>
                  {camp.services.map((srv, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2" />
                      {srv}
                    </div>
                  ))}
                </div>

                <div className="p-2 bg-slate-50 rounded-lg text-xs">
                  <span className="text-slate-400 block text-[10px]">Cost to Patient:</span>
                  <span className="font-bold text-slate-800">{camp.cost}</span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{camp.contact}</span>
                  <span className="text-[10px] text-emerald-600 font-bold">✓ Verified Clinic</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACCOMMODATION TAB */}
        {activeCategory === 'accommodation' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredAccommodations.map(acc => (
              <div key={acc.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{acc.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{acc.location}</p>
                  <p className="text-xs font-semibold text-brand-700 mt-1">{acc.distanceToHospital}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tariff:</span>
                    <span className="font-bold text-emerald-700">{acc.tariff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="font-medium text-slate-700">{acc.capacity}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 block">Facilities:</span>
                  {acc.facilities.map((fac, i) => (
                    <p key={i} className="text-[11px] text-slate-600 flex items-center">
                      ✓ {fac}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{acc.contact}</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Verified Stay</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TRANSPORT TAB */}
        {activeCategory === 'transport' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTransport.map(trn => (
              <div key={trn.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{trn.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Route: {trn.coverage}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {trn.charge}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hours:</span>
                    <span className="font-medium text-slate-700">{trn.operatingHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Eligibility:</span>
                    <span className="font-medium text-slate-700">{trn.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Managed By:</span>
                    <span className="font-medium text-slate-700">{trn.operator}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a href={`tel:${trn.bookingHelpline}`} className="flex items-center space-x-1.5 font-bold text-blue-600">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Booking: {trn.bookingHelpline}</span>
                  </a>
                  <span className="text-[10px] font-semibold text-slate-400">Verified Service</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

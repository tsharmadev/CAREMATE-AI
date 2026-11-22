import React, { useState } from 'react';
import { 
  MapPin, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  Stethoscope, 
  Droplet, 
  Crosshair, 
  Coins, 
  Compass, 
  ArrowRight,
  TrendingUp,
  Info,
  Scale
} from 'lucide-react';
import { DISTRICT_SCORES, SCORING_METHODOLOGY } from '../data/districts';

export default function DistrictScoreMap() {
  const [selectedDistrictId, setSelectedDistrictId] = useState('dist-1'); // Default Mumbai Suburban
  const [comparisonDistrictId, setComparisonDistrictId] = useState('dist-10'); // Default Kalahandi Odisha for contrast
  const [showComparison, setShowComparison] = useState(false);
  const [selectedStateFilter, setSelectedStateFilter] = useState('All');

  const currentDistrict = DISTRICT_SCORES.find(d => d.id === selectedDistrictId) || DISTRICT_SCORES[0];
  const compareDistrict = DISTRICT_SCORES.find(d => d.id === comparisonDistrictId) || DISTRICT_SCORES[9];

  // States available in dataset
  const availableStates = ['All', ...new Set(DISTRICT_SCORES.map(d => d.state))];

  const filteredDistricts = selectedStateFilter === 'All' 
    ? DISTRICT_SCORES 
    : DISTRICT_SCORES.filter(d => d.state === selectedStateFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
              <MapPin className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              District CancerCare Accessibility & Resource Index (DCARI)
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Data science evaluation of oncology infrastructure across Indian districts. Analyzes cancer hospital density, specialist availability, radiotherapy machines, and blood banks.
          </p>
        </div>

        <button
          onClick={() => setShowComparison(!showComparison)}
          className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
            showComparison 
              ? 'bg-slate-900 text-white' 
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>{showComparison ? 'Exit Comparison Mode' : 'Compare Two Districts Side-by-Side'}</span>
        </button>
      </div>

      {/* Analytical Methodology & Scientific Disclaimer Banner */}
      <div className="mt-6 p-4 bg-slate-900 text-slate-200 rounded-2xl flex items-start space-x-3.5 shadow-md">
        <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            {SCORING_METHODOLOGY.title}
          </p>
          <p className="font-mono text-teal-300 text-[11px]">
            Formula: {SCORING_METHODOLOGY.formula}
          </p>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            {SCORING_METHODOLOGY.disclaimer}
          </p>
        </div>
      </div>

      {/* Main Analysis Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Map Representation & District Directory */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Interactive Visual Geographic Map View */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Interactive National District Map
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold">
                Click pin to inspect district
              </span>
            </div>

            {/* SVG Visual India Map Representation */}
            <div className="relative bg-slate-950 rounded-xl p-4 overflow-hidden border border-slate-800">
              <div className="absolute top-2 right-2 text-right">
                <div className="flex items-center space-x-1 text-[10px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>≥70 High Access</span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  <span>45-69 Moderate</span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-rose-400">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                  <span>&lt;45 Underserved</span>
                </div>
              </div>

              {/* Simplified Stylized India Map Canvas with dynamic district pins */}
              <svg viewBox="0 0 400 440" className="w-full h-72">
                {/* Outlines of India Regional Landmass */}
                <path
                  d="M140,40 L190,50 L220,90 L240,110 L280,120 L310,140 L350,150 L380,140 L390,160 L360,180 L330,190 L280,190 L270,220 L280,260 L240,300 L210,340 L180,380 L160,420 L150,420 L130,370 L110,320 L100,280 L80,250 L60,230 L50,190 L80,160 L100,120 L120,80 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="2"
                  className="opacity-90"
                />

                {/* District Nodes on the Map */}
                {[
                  { id: 'dist-2', x: 155, y: 130, name: 'Delhi', score: 91, color: '#10b981' },
                  { id: 'dist-5', x: 220, y: 190, name: 'Varanasi', score: 68, color: '#f59e0b' },
                  { id: 'dist-7', x: 255, y: 195, name: 'Patna', score: 56, color: '#f59e0b' },
                  { id: 'dist-6', x: 345, y: 165, name: 'Guwahati', score: 65, color: '#f59e0b' },
                  { id: 'dist-8', x: 360, y: 190, name: 'Cachar', score: 42, color: '#ef4444' },
                  { id: 'dist-11', x: 80, y: 180, name: 'Barmer', score: 36, color: '#ef4444' },
                  { id: 'dist-1', x: 110, y: 260, name: 'Mumbai', score: 88, color: '#10b981' },
                  { id: 'dist-9', x: 165, y: 245, name: 'Wardha', score: 49, color: '#f59e0b' },
                  { id: 'dist-10', x: 235, y: 255, name: 'Kalahandi', score: 31, color: '#ef4444' },
                  { id: 'dist-3', x: 145, y: 340, name: 'Bengaluru', score: 84, color: '#10b981' },
                  { id: 'dist-4', x: 185, y: 345, name: 'Chennai', score: 89, color: '#10b981' },
                  { id: 'dist-12', x: 135, y: 395, name: 'Ernakulam', score: 86, color: '#10b981' },
                ].map((node) => {
                  const isSelected = selectedDistrictId === node.id;
                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedDistrictId(node.id)}
                      className="cursor-pointer transition-transform hover:scale-125"
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? 9 : 6}
                        fill={node.color}
                        stroke={isSelected ? '#ffffff' : '#0f172a'}
                        strokeWidth={isSelected ? 3 : 1.5}
                        className={isSelected ? 'animate-pulse' : ''}
                      />
                      <text
                        x={node.x + 9}
                        y={node.y + 4}
                        fill="#cbd5e1"
                        fontSize="9"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {node.name} ({node.score})
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="mt-2 text-center text-[11px] text-slate-400">
                Active Selection: <strong className="text-white">{currentDistrict.district} ({currentDistrict.state})</strong> — Score: <strong className="text-teal-400">{currentDistrict.overallScore}/100</strong>
              </div>
            </div>
          </div>

          {/* District Selector & List */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800">Filter By State:</h4>
              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="px-2 py-1 border border-slate-200 rounded-lg text-xs font-medium bg-slate-50"
              >
                {availableStates.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {filteredDistricts.map(dist => {
                const isSelected = selectedDistrictId === dist.id;
                return (
                  <div
                    key={dist.id}
                    onClick={() => setSelectedDistrictId(dist.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                      isSelected
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          dist.colorCode === 'green' ? 'bg-emerald-500' :
                          dist.colorCode === 'yellow' ? 'bg-amber-500' : 'bg-rose-500'
                        }`} />
                        <span className="text-xs font-bold">{dist.district}</span>
                      </div>
                      <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                        {dist.state} • Pop: {dist.populationTotal}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className={`text-sm font-extrabold ${
                        isSelected ? 'text-teal-400' :
                        dist.colorCode === 'green' ? 'text-emerald-600' :
                        dist.colorCode === 'yellow' ? 'text-amber-600' : 'text-rose-600'
                      }`}>
                        {dist.overallScore}/100
                      </span>
                      <span className={`block text-[9px] uppercase font-bold tracking-wider ${
                        isSelected ? 'text-slate-300' : 'text-slate-400'
                      }`}>
                        {dist.tier}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Detailed 6-Parameter Score Breakdown & Gap Analysis */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Selected District Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card space-y-6">
            
            {/* Header: Score & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    District Evaluation Report
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    currentDistrict.colorCode === 'green' ? 'bg-emerald-100 text-emerald-800' :
                    currentDistrict.colorCode === 'yellow' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {currentDistrict.statusCategory}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {currentDistrict.district}, <span className="font-semibold text-slate-600">{currentDistrict.state}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Zone: {currentDistrict.zone} • Population: {currentDistrict.populationTotal} • Classification: {currentDistrict.tier}
                </p>
              </div>

              {/* Big Score Gauge Box */}
              <div className={`p-4 rounded-2xl border text-center min-w-[140px] shadow-sm ${
                currentDistrict.colorCode === 'green' ? 'bg-emerald-50 border-emerald-200' :
                currentDistrict.colorCode === 'yellow' ? 'bg-amber-50 border-amber-200' : 'bg-rose-50 border-rose-200'
              }`}>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Overall Score
                </span>
                <span className={`text-4xl font-black ${
                  currentDistrict.colorCode === 'green' ? 'text-emerald-700' :
                  currentDistrict.colorCode === 'yellow' ? 'text-amber-700' : 'text-rose-700'
                }`}>
                  {currentDistrict.overallScore}
                </span>
                <span className="text-xs text-slate-400 block font-medium">out of 100</span>
              </div>
            </div>

            {/* 6 Dimensional Parameter Bars (Exactly as specified in prompt) */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Parameter-Wise Resource Breakdown:
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'Cancer Hospitals & Beds (25%)', val: currentDistrict.parameters.cancerHospitals, icon: Building2 },
                  { label: 'Specialist Oncologist Access (20%)', val: currentDistrict.parameters.specialistAccess, icon: Stethoscope },
                  { label: 'Early Screening Facilities (15%)', val: currentDistrict.parameters.screeningFacilities, icon: Crosshair },
                  { label: 'Blood & Platelet Apheresis (15%)', val: currentDistrict.parameters.bloodSupport, icon: Droplet },
                  { label: 'Financial Scheme Empanelment (15%)', val: currentDistrict.parameters.financialSupport, icon: Coins },
                  { label: 'Geographic & Transit Access (10%)', val: currentDistrict.parameters.geographicAccess, icon: Compass },
                ].map((param, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-sans font-semibold text-slate-700 flex items-center">
                        <param.icon className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {param.label}
                      </span>
                      <span className="font-bold text-slate-900">{param.val}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          param.val >= 70 ? 'bg-emerald-500' :
                          param.val >= 45 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${param.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric Highlights Grid */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Ground Reality Metrics:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="font-extrabold text-slate-900 text-sm">{currentDistrict.metrics.cancerCentresCount}</span>
                  <span className="block text-[10px] text-slate-500">Cancer Centres</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="font-extrabold text-slate-900 text-sm">{currentDistrict.metrics.specialistsCount}</span>
                  <span className="block text-[10px] text-slate-500">Specialists</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="font-extrabold text-slate-900 text-sm">{currentDistrict.metrics.linearAccelerators}</span>
                  <span className="block text-[10px] text-slate-500">LINAC Machines</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <span className="font-extrabold text-slate-900 text-sm">{currentDistrict.metrics.petCtScanners}</span>
                  <span className="block text-[10px] text-slate-500">PET-CT Scanners</span>
                </div>
              </div>
            </div>

            {/* Gap Analysis & Recommended Policy Action */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Critical Resource Gaps Identified:</span>
                </div>
                <ul className="text-xs text-amber-800 space-y-1 list-disc pl-5">
                  {currentDistrict.keyGapsIdentified.map((gap, i) => (
                    <li key={i}>{gap}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 space-y-1 text-xs">
                <span className="font-bold text-teal-900 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-teal-600" />
                  Recommended Action Plan:
                </span>
                <p className="text-teal-800 leading-relaxed pl-5">
                  {currentDistrict.recommendedAction}
                </p>
              </div>
            </div>

          </div>

          {/* SIDE-BY-SIDE COMPARISON MODULE (If Activated) */}
          {showComparison && (
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-6 shadow-elevated space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-indigo-950 flex items-center space-x-1.5">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>District Disparity Comparison</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compare healthcare resource availability between two diverse regions.
                  </p>
                </div>

                <select
                  value={comparisonDistrictId}
                  onChange={(e) => setComparisonDistrictId(e.target.value)}
                  className="px-3 py-1.5 border border-indigo-300 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-900"
                >
                  {DISTRICT_SCORES.map(d => (
                    <option key={d.id} value={d.id}>{d.district} ({d.state})</option>
                  ))}
                </select>
              </div>

              {/* Side-by-side scorecard */}
              <div className="grid grid-cols-2 gap-4">
                {/* Left: District A */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs font-bold text-slate-800">{currentDistrict.district}</span>
                  <span className="block text-[10px] text-slate-500">{currentDistrict.state}</span>
                  <span className="text-2xl font-black text-slate-900 mt-2 block">{currentDistrict.overallScore}/100</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    currentDistrict.colorCode === 'green' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {currentDistrict.statusCategory}
                  </span>
                </div>

                {/* Right: District B */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs font-bold text-slate-800">{compareDistrict.district}</span>
                  <span className="block text-[10px] text-slate-500">{compareDistrict.state}</span>
                  <span className="text-2xl font-black text-slate-900 mt-2 block">{compareDistrict.overallScore}/100</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    compareDistrict.colorCode === 'green' ? 'bg-emerald-100 text-emerald-800' :
                    compareDistrict.colorCode === 'yellow' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {compareDistrict.statusCategory}
                  </span>
                </div>
              </div>

              {/* Metric comparison table */}
              <div className="text-xs space-y-2 font-mono">
                {[
                  { name: 'Linear Accelerators', a: currentDistrict.metrics.linearAccelerators, b: compareDistrict.metrics.linearAccelerators },
                  { name: 'PET-CT Diagnostic Scanners', a: currentDistrict.metrics.petCtScanners, b: compareDistrict.metrics.petCtScanners },
                  { name: 'Oncologist Specialists', a: currentDistrict.metrics.specialistsCount, b: compareDistrict.metrics.specialistsCount },
                  { name: 'Apheresis Blood Banks', a: currentDistrict.metrics.bloodBanksWithApheresis, b: compareDistrict.metrics.bloodBanksWithApheresis },
                ].map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="font-sans font-medium text-slate-600">{row.name}</span>
                    <div className="space-x-8 font-bold">
                      <span className="text-slate-900">{row.a}</span>
                      <span className="text-indigo-600">{row.b}</span>
                    </div>
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

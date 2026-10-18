import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Home,
  Check,
  Maximize2,
  DollarSign,
  Calculator,
  Calendar,
  Sparkles,
  Info,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { CURO_FLOORPLANS, Floorplan } from '../data/curoData';
import { PerspectiveTiltCard } from './PerspectiveTiltCard';

interface MasterplanExplorerProps {
  onOpenInquiry: (projectName?: string) => void;
}

export const MasterplanExplorer: React.FC<MasterplanExplorerProps> = ({
  onOpenInquiry,
}) => {
  const [activePlanId, setActivePlanId] = useState<string>('curo-one-3bhk');
  const [activeMode, setActiveMode] = useState<'floorplans' | 'site_masterplan'>('floorplans');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  // EMI Calculator state
  const [propertyPrice, setPropertyPrice] = useState<number>(12500000); // 1.25 Cr
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const selectedPlan: Floorplan =
    CURO_FLOORPLANS.find((p) => p.id === activePlanId) || CURO_FLOORPLANS[1];

  // Calculate EMI
  const loanAmount = propertyPrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;
  const calculatedEmi =
    loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  // Masterplan hotspots for Curo One 10-acre site
  const masterplanZones = [
    { id: 'clubhouse', name: 'G+2 Designer Clubhouse (35,000 Sq.Ft.)', x: '48%', y: '45%', desc: 'Private clubhouse with infinity pool, spa, squash & gym' },
    { id: 'tower1_2', name: 'Towers 1 & 2 (Executive Suites)', x: '25%', y: '30%', desc: '1 BHK & 2 BHK smart residences' },
    { id: 'tower3_6', name: 'Towers 3, 4, 5 & 6 (3 BHK Royal)', x: '70%', y: '32%', desc: 'Overlooking the majestic Shivalik hill range' },
    { id: 'tower7_8', name: 'Towers 7 & 8 (4 BHK & Penthouses)', x: '75%', y: '65%', desc: 'Exclusive corner sky mansions with private terraces' },
    { id: 'sports', name: 'Olympic Sports Deck', x: '28%', y: '70%', desc: 'Lawn tennis, basketball, and children’s play arena' },
    { id: 'entrance', name: 'Grand Entrance Plaza & Water Cascade', x: '12%', y: '50%', desc: 'Double-height security gateway and biometric access' },
  ];

  return (
    <section id="masterplan-section" className="py-20 bg-[#0A0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C5A869] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Space Architecture</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
            3D Masterplan & Floorplan Explorer
          </h2>
          <p className="text-sm text-slate-300 mt-3">
            Examine unit dimensions, orientation, spatial geometry, and layout configurations engineered for natural ventilation and daylight.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#141824] border border-white/10 mt-6">
            <button
              onClick={() => setActiveMode('floorplans')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeMode === 'floorplans'
                  ? 'bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] text-[#0A0C10] shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Unit Floorplans & Layouts
            </button>
            <button
              onClick={() => setActiveMode('site_masterplan')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeMode === 'site_masterplan'
                  ? 'bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] text-[#0A0C10] shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              10-Acre Master Site Layout
            </button>
          </div>
        </div>

        {/* MODE 1: UNIT FLOORPLANS */}
        {activeMode === 'floorplans' && (
          <div className="space-y-8">
            {/* Unit Selector Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CURO_FLOORPLANS.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => {
                    setActivePlanId(plan.id);
                    if (plan.id === 'curo-one-1bhk') setPropertyPrice(4500000);
                    if (plan.id === 'curo-one-3bhk') setPropertyPrice(12500000);
                    if (plan.id === 'curo-one-4bhk') setPropertyPrice(17800000);
                    if (plan.id === 'curo-one-5bhk') setPropertyPrice(29500000);
                  }}
                  className={`px-4 py-3 rounded-xl border text-left whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    activePlanId === plan.id
                      ? 'bg-[#181D29] border-[#C5A869] shadow-lg shadow-[#C5A869]/10'
                      : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="text-[11px] font-mono text-[#C5A869] font-medium">
                    {plan.carpetArea} Carpet
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    {plan.unitType}
                  </div>
                </button>
              ))}
            </div>

            {/* Split Showcase: Interactive Blueprint + Spec Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 3D Blueprint Canvas */}
              <div className="lg:col-span-7">
                <PerspectiveTiltCard maxTilt={10} glareEffect={true} className="w-full">
                  <div className="relative rounded-2xl glass-obsidian border border-white/15 p-6 shadow-2xl overflow-hidden">
                    {/* Blueprint Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-[#C5A869]">
                          Architectural Unit Layout
                        </span>
                        <h3 className="font-serif-luxury text-xl font-bold text-white">
                          {selectedPlan.unitType}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {selectedPlan.facing}
                      </span>
                    </div>

                    {/* Stylized Architectural Blueprint Diagram */}
                    <div className="relative h-80 sm:h-96 w-full rounded-xl bg-[#080B12] border border-blue-900/30 p-6 flex flex-col justify-between overflow-hidden">
                      {/* Grid overlay */}
                      <div
                        className="absolute inset-0 opacity-15"
                        style={{
                          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
                          backgroundSize: '24px 24px',
                        }}
                      />

                      {/* Blueprint Simulated Architectural Zones */}
                      <div className="relative z-10 grid grid-cols-3 gap-3 h-full">
                        {/* Zone 1: Master Suite */}
                        <div className="col-span-2 border border-blue-400/40 rounded-lg p-3 bg-blue-950/20 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono text-blue-300 font-semibold uppercase">
                              Primary Master Suite
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">14' x 16'</span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Ensuite bath · Walk-in closet · Wooden finish
                          </div>
                          <div className="h-1.5 w-16 bg-[#C5A869]/50 rounded-full" />
                        </div>

                        {/* Zone 2: Kitchen & Utility */}
                        <div className="col-span-1 border border-blue-400/30 rounded-lg p-3 bg-blue-950/15 flex flex-col justify-between">
                          <span className="text-[11px] font-mono text-blue-300 font-semibold uppercase">
                            Kitchen
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">9' x 11'</span>
                          <div className="text-[10px] text-slate-400">Caesarstone Quartz</div>
                        </div>

                        {/* Zone 3: Formal Living Atrium */}
                        <div className="col-span-2 border border-blue-400/50 rounded-lg p-4 bg-blue-950/25 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#E6CA85] font-semibold uppercase">
                              Formal Living & Dining Atrium
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">22' x 14'</span>
                          </div>
                          <div className="text-xs text-slate-300">
                            Italian vitrified flooring · 10' ceiling clearance
                          </div>
                          <div className="text-[10px] text-emerald-400 font-mono">
                            Opens to 7-ft Viewing Terrace
                          </div>
                        </div>

                        {/* Zone 4: Viewing Terrace Balcony */}
                        <div className="col-span-1 border-2 border-dashed border-[#C5A869]/50 rounded-lg p-3 bg-[#C5A869]/5 flex flex-col justify-between">
                          <span className="text-[11px] font-mono text-[#E6CA85] font-semibold uppercase">
                            Private Deck
                          </span>
                          <span className="text-[10px] font-mono text-slate-300">
                            {selectedPlan.balconyArea}
                          </span>
                          <div className="text-[10px] text-slate-400">Toughened glass railing</div>
                        </div>
                      </div>

                      {/* Technical Compass rose & scale */}
                      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Scale: 1:100 (Architectural Standards)</span>
                        <span className="text-[#C5A869]">Vastu Compliant Layout</span>
                      </div>
                    </div>
                  </div>
                </PerspectiveTiltCard>
              </div>

              {/* Right Column: Specification & Mortgage Calculator */}
              <div className="lg:col-span-5 space-y-6">
                {/* Unit Metrics Card */}
                <div className="p-6 rounded-2xl glass-obsidian border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <div className="text-xs font-mono text-slate-400">Estimated Unit Value</div>
                      <div className="font-serif-luxury text-2xl font-bold text-white">
                        {selectedPlan.estimatedPrice}
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenInquiry(`Floorplan Booking: ${selectedPlan.unitType}`)}
                      className="px-3.5 py-2 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] rounded-lg shadow-md hover:brightness-110 cursor-pointer"
                    >
                      Book Layout
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center py-2">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Super Area</div>
                      <div className="text-xs font-bold text-white mt-0.5">{selectedPlan.superArea}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Carpet Area</div>
                      <div className="text-xs font-bold text-[#E6CA85] mt-0.5">{selectedPlan.carpetArea}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Balcony</div>
                      <div className="text-xs font-bold text-white mt-0.5">{selectedPlan.balconyArea}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider text-[#C5A869]">
                      Architectural Features:
                    </div>
                    {selectedPlan.specs.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mortgage & EMI Estimator */}
                <div className="p-6 rounded-2xl glass-obsidian border border-[#C5A869]/20 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#C5A869]">
                    <Calculator className="w-4 h-4" />
                    <span>Investment & EMI Calculator</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Down Payment ({downPaymentPercent}%):</span>
                        <span className="font-mono text-white font-semibold">
                          ₹ {((propertyPrice * downPaymentPercent) / 100).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        step="5"
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        className="w-full accent-[#C5A869]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Loan Tenure ({loanTenureYears} Years):</span>
                        <span className="font-mono text-white font-semibold">{loanTenureYears} yrs</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="5"
                        value={loanTenureYears}
                        onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                        className="w-full accent-[#C5A869]"
                      />
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">Estimated Monthly EMI:</div>
                        <div className="font-serif-luxury text-2xl font-bold gold-gradient-text tabular-nums">
                          ₹ {calculatedEmi.toLocaleString('en-IN')} / mo*
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenInquiry(`Bank Loan & EMI Assistance for ${selectedPlan.unitType}`)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium cursor-pointer"
                      >
                        Apply for Loan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: 10-ACRE SITE MASTERPLAN */}
        {activeMode === 'site_masterplan' && (
          <div className="rounded-2xl glass-obsidian border border-white/15 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#C5A869] uppercase">
                  Flagship Development Master Layout
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                  Curo One — 10-Acre Master Site Map
                </h3>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Mullapur Garibdas · 8 Towers · G+2 Clubhouse · 70% Open Greens
              </div>
            </div>

            {/* Interactive Masterplan Map Container */}
            <div className="relative h-96 sm:h-[480px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1322] to-[#080c14] border border-white/10">
              <img
                src="/images/main-slider/slider1.jpg"
                alt="Curo One Masterplan Aerial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-50 filter contrast-125"
              />
              <div className="absolute inset-0 bg-[#0A0C10]/40 backdrop-blur-[2px]" />

              {/* Interactive Hotspots */}
              {masterplanZones.map((zone) => (
                <div
                  key={zone.id}
                  style={{ top: zone.y, left: zone.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => setSelectedHotspot(zone.id)}
                    className={`relative p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedHotspot === zone.id
                        ? 'bg-[#C5A869] text-[#0A0C10] scale-125 shadow-xl shadow-[#C5A869]/50'
                        : 'bg-black/80 text-white border border-[#C5A869] hover:bg-[#C5A869] hover:text-[#0A0C10]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>

                  {/* Hover / Active Label */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 rounded-xl bg-[#0E121A]/95 border border-[#C5A869]/40 backdrop-blur-md shadow-2xl transition-all duration-200 pointer-events-none ${
                      selectedHotspot === zone.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{zone.name}</div>
                    <div className="text-[10px] text-slate-300 mt-1">{zone.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Masterplan Zone Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {masterplanZones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedHotspot(zone.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedHotspot === zone.id
                      ? 'bg-[#181C26] border-[#C5A869] shadow-lg shadow-[#C5A869]/10'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{zone.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

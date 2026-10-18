import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Building2, MapPin, Eye } from 'lucide-react';
import { CURO_STATS } from '../data/curoData';
import { PerspectiveTiltCard } from './PerspectiveTiltCard';

interface HeroSectionProps {
  onNavigate: (view: string) => void;
  onOpenInquiry: (project?: string) => void;
  onSelectProject: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenInquiry,
  onSelectProject,
}) => {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const heroShowcases = [
    {
      projectId: 'curo-one',
      tag: 'Flagship Residential Landmark',
      title: 'Curo One, New Chandigarh',
      subtitle: '8 Iconic Towers · 576 Luxury Residences · G+2 Designer Clubhouse',
      location: 'Mullapur Garibdas, Adjacent to Chandigarh',
      image: '/images/main-slider/slider1.jpg',
      stat: '10 Acres Masterplan',
    },
    {
      projectId: 'curo-high-street',
      tag: 'European-Style Retail Destination',
      title: 'Curo High Street, Jalandhar',
      subtitle: 'Spanish Promenade · 5-Screen PVR Multiplex · 350,000 Sq.Ft.',
      location: '66 Feet Road, Urban Estate Phase 2',
      image: '/images/commercial/high-street/left-bg.jpg',
      stat: 'Over 50% Open Green Space',
    },
    {
      projectId: 'curo-tech',
      tag: 'Commercial & Corporate Hub',
      title: 'Curo Tech & Corporate Assets',
      subtitle: 'LEED Certified Green Architecture · Grade-A Office Floorplates',
      location: 'Sector 48, Sohna Road, Gurgaon',
      image: '/images/commercial/curotech/left-bg.jpg',
      stat: 'Grade-A Sustainable Campus',
    },
  ];

  const currentSlide = heroShowcases[activeHeroSlide];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambience & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A869]/10 rounded-full blur-[140px]" />
        <div className="absolute -top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - Anti-Slop Unboxed Editorial */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#C5A869] font-mono uppercase mb-4">
          <span>Est. 1987</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Architectural Integrity</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>North India’s Premier Developer</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12] text-balance">
              Building Timeless <br />
              <span className="italic font-light gold-gradient-text">Architectural Legacies</span> <br />
              Across North India.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              For over 38 years, Curo India has engineered high-end residential group housing, vibrant European-style retail high streets, and institutional commercial spaces. Crafted with structural excellence, RERA certified transparency, and enduring patron trust.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 text-sm font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] via-[#D8B76E] to-[#B89241] rounded-xl shadow-xl shadow-[#C5A869]/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Developments</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0C10]" />
              </button>

              <button
                onClick={() => onNavigate('masterplan')}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A869]/40 rounded-xl backdrop-blur-sm transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C5A869]" />
                <span>3D Masterplan Explorer</span>
              </button>

              <button
                onClick={() => onOpenInquiry('General VIP Consultation')}
                className="px-4 py-3 text-sm text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Request Private Brochure
              </button>
            </div>

            {/* Quick Project Showcase Selector */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-mono">
                Featured Developments Showcase:
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {heroShowcases.map((showcase, idx) => (
                  <button
                    key={showcase.projectId}
                    onClick={() => setActiveHeroSlide(idx)}
                    className={`p-2.5 sm:p-3 rounded-lg text-left transition-all border ${
                      activeHeroSlide === idx
                        ? 'bg-[#181C26] border-[#C5A869]/60 shadow-lg shadow-[#C5A869]/10'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400'
                    }`}
                  >
                    <div className="text-[11px] font-medium text-[#C5A869] truncate">
                      {showcase.projectId === 'curo-one' ? 'Residential' : showcase.projectId === 'curo-high-street' ? 'Retail High Street' : 'Commercial'}
                    </div>
                    <div className="text-xs font-semibold text-white truncate mt-0.5">
                      {showcase.title.split(',')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Advanced 3D Perspective Tilt Showcase */}
          <div className="lg:col-span-5 relative">
            <PerspectiveTiltCard
              maxTilt={14}
              glareEffect={true}
              onClick={() => onSelectProject(currentSlide.projectId)}
              className="w-full"
            >
              <div className="relative rounded-2xl overflow-hidden glass-obsidian border border-white/15 shadow-2xl p-3 group">
                {/* 3D Depth Image Container */}
                <div className="relative h-[380px] sm:h-[440px] w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Cinematic Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent" />

                  {/* Top Floating Badge with 3D Depth */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>{currentSlide.tag}</span>
                  </div>

                  {/* Bottom Information Overlay with 3D Float */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#E6CA85] font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{currentSlide.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-bold text-white tracking-wide">
                      {currentSlide.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2">
                      {currentSlide.subtitle}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/15">
                      <span className="text-xs font-mono text-slate-300">
                        {currentSlide.stat}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6CA85] group-hover:translate-x-1 transition-transform">
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </PerspectiveTiltCard>

            {/* Decorative Floating Architectural Metric Tag */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 z-30 p-3.5 rounded-xl glass-obsidian border border-[#C5A869]/30 shadow-2xl backdrop-blur-md animate-fade-in">
              <div className="p-2 rounded-lg bg-[#C5A869]/15 text-[#E6CA85]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">RERA Approved Group</div>
                <div className="text-[11px] text-slate-400">100% Statutory Clearances</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CURO_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold gold-gradient-text tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

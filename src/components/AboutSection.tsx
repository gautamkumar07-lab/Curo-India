import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, History, Sparkles, Building, Quote } from 'lucide-react';
import { CURO_LEADERSHIP, CURO_MILESTONES } from '../data/curoData';
import { PerspectiveTiltCard } from './PerspectiveTiltCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-[#0A0C10] relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A869]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C5A869]">
            <History className="w-3.5 h-3.5" />
            <span>Thirty-Eight Years of Excellence</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
            The Curo Legacy: Built on Integrity, Defined by Vision
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Established in 1987 by Mr. Pawan Garg, Curo Group evolved from pioneering automotive retail to becoming one of North India’s most trusted real estate, hospitality, and infrastructure conglomerates.
          </p>
        </div>

        {/* Chairman's Vision Statement (Editorial 3D Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <PerspectiveTiltCard maxTilt={10} glareEffect={true} className="w-full">
              <div className="relative rounded-2xl overflow-hidden glass-obsidian border border-[#C5A869]/30 p-3 shadow-2xl">
                <div className="relative h-[420px] rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/images/about/left-bg.jpg"
                    alt="Curo Corporate Leadership & Architecture"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-black/30 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs font-mono text-[#C5A869] uppercase">Leadership & Governance</div>
                    <div className="font-serif-luxury text-2xl font-bold text-white mt-1">
                      {CURO_LEADERSHIP.chairman.name}
                    </div>
                    <div className="text-xs text-slate-300">{CURO_LEADERSHIP.chairman.title}</div>
                  </div>
                </div>
              </div>
            </PerspectiveTiltCard>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-12 h-12 text-[#C5A869]/40" />
            <blockquote className="font-serif-luxury text-xl sm:text-2xl text-slate-100 font-light italic leading-relaxed">
              "{CURO_LEADERSHIP.chairman.message}"
            </blockquote>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Founded</span>
                <span className="text-white font-semibold">1987 (New Delhi)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Corporate HQ</span>
                <span className="text-white font-semibold">Green Park Ext., Delhi</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Presence</span>
                <span className="text-white font-semibold">Punjab, NCR, Haryana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-[#C5A869] tracking-widest">
              Foundational Commitments
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
              Core Principles Guiding Every Blueprint
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURO_LEADERSHIP.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-obsidian border border-white/10 hover:border-[#C5A869]/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A869]/15 flex items-center justify-center text-[#E6CA85]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline (1987 to Present) */}
        <div className="space-y-10 pt-10 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-[#C5A869] tracking-widest">
              Journey Through Time
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
              Milestones of Growth & Delivery
            </h3>
          </div>

          <div className="relative border-l border-white/15 ml-4 sm:ml-32 space-y-8">
            {CURO_MILESTONES.map((m, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Badge */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A0C10] border-2 border-[#C5A869] group-hover:bg-[#C5A869] transition-colors" />

                <div className="sm:absolute sm:-left-28 sm:top-1 font-mono text-sm font-bold text-[#E6CA85]">
                  {m.year}
                </div>

                <div className="p-4 rounded-xl glass-obsidian border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-sm font-bold text-white font-serif-luxury">
                    {m.title}
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

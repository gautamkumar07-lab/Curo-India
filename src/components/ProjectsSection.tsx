import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Building, ShieldCheck, Check, Sparkles, Filter } from 'lucide-react';
import { CURO_PROJECTS, Project } from '../data/curoData';
import { PerspectiveTiltCard } from './PerspectiveTiltCard';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cityFilter, setCityFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Developments' },
    { id: 'residential', label: 'Residential & Townships' },
    { id: 'retail', label: 'High Street Retail' },
    { id: 'commercial', label: 'Commercial & Malls' },
    { id: 'entertainment', label: 'Cinemas & Leisure' },
  ];

  const cities = ['all', 'New Chandigarh', 'Jalandhar', 'Ludhiana', 'Barnala', 'New Delhi', 'Gurgaon'];

  const filteredProjects = CURO_PROJECTS.filter((proj) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'residential' && proj.category === 'residential') ||
      (activeCategory === 'retail' && proj.category === 'retail') ||
      (activeCategory === 'commercial' && proj.category === 'commercial') ||
      (activeCategory === 'entertainment' && proj.category === 'entertainment');

    const matchesCity = cityFilter === 'all' || proj.city.toLowerCase().includes(cityFilter.toLowerCase());

    return matchesCategory && matchesCity;
  });

  return (
    <section id="projects-section" className="py-20 bg-[#0E121A] relative">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A869]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-mono text-[#C5A869] mb-3">
              <span>Landmark Portfolio</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>100% RERA & Legal Transparency</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Iconic Residential & Commercial Developments
            </h2>
          </div>

          <p className="text-sm text-slate-300 max-w-md">
            Engineered with Spanish architecture, structural longevity, and customer-first design across Punjab, Chandigarh tri-city, and Delhi NCR.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs with Active Handlers) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A869] text-[#0A0C10] shadow-md shadow-[#C5A869]/20 font-semibold'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* City Dropdown Filter */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Region:</span>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="bg-[#181C26] border border-white/10 text-white rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#C5A869]"
            >
              <option value="all">All Regions ({CURO_PROJECTS.length})</option>
              {cities.filter(c => c !== 'all').map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 3D Perspective Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PerspectiveTiltCard
              key={project.id}
              maxTilt={12}
              glareEffect={true}
              onClick={() => onSelectProject(project.id)}
              className="h-full"
            >
              <div className="h-full flex flex-col rounded-2xl glass-obsidian glass-obsidian-hover transition-all duration-300 overflow-hidden border border-white/10 group">
                {/* 3D Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-transparent to-black/30" />

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-[#E6CA85]">
                      {project.status}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300 capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white/90 drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#E6CA85] transition-colors">
                        {project.name}
                      </h3>
                      {project.projectLogo && (
                        <div className="px-2 py-0.5 rounded bg-white/95 shrink-0 shadow-sm">
                          <img src={project.projectLogo} alt={project.name} className="h-4 w-auto object-contain" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[#C5A869] font-medium mt-1">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Specification Pill Strip */}
                  <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                      <span>Scale / Area:</span>
                      <span className="text-slate-200">{project.area}</span>
                    </div>

                    {project.reraId && (
                      <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                        <span>RERA ID:</span>
                        <span className="text-[#C5A869] font-semibold">{project.reraId}</span>
                      </div>
                    )}

                    {project.priceStarting && (
                      <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                        <span>Starting Price:</span>
                        <span className="text-emerald-400 font-semibold">{project.priceStarting}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#E6CA85] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Explore Full Specs & Gallery</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry(project.name);
                      }}
                      className="text-xs px-2.5 py-1 rounded bg-white/5 hover:bg-[#C5A869] hover:text-[#0A0C10] text-slate-300 font-medium transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </PerspectiveTiltCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <Building className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#C5A869]" />
            <p className="text-sm">No developments found matching the selected filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setCityFilter('all');
              }}
              className="mt-3 text-xs text-[#E6CA85] underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

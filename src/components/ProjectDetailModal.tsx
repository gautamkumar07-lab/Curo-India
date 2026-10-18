import React, { useState } from 'react';
import {
  X,
  MapPin,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';
import { Project } from '../data/curoData';
import { saveInquiry } from '../utils/submissionsStore';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: (projectName: string) => void;
  onOpenLeadPortal?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
  onOpenLeadPortal,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'specs' | 'gallery'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Quick form state
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    saveInquiry({
      projectName: project.name,
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      visitType: 'Direct Project Detail Inquiry',
      message: formData.message,
    });

    setFormSubmitted(true);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0E121A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0C10]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#C5A869]/20 text-[#E6CA85] text-xs font-mono font-medium">
              {project.status}
            </span>
            <div className="text-xs text-slate-400 font-mono hidden sm:inline">
              {project.category.toUpperCase()} · {project.city}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenInquiry(project.name)}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] rounded-lg shadow-md hover:brightness-110 cursor-pointer"
            >
              Book Site Walkthrough
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Hero Banner with 3D Depth Gallery */}
          <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden group bg-slate-900 border border-white/10">
            <img
              src={project.gallery[activeImageIndex] || project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/30" />

            {/* Lightbox / Fullscreen trigger */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white hover:bg-[#C5A869] hover:text-[#0A0C10] transition-colors"
              title="Expand image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Gallery Navigation Controls */}
            {project.gallery.length > 1 && (
              <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none">
                <button
                  onClick={prevImage}
                  className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-[#C5A869] hover:text-[#0A0C10] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="pointer-events-auto p-2 rounded-full bg-black/60 text-white hover:bg-[#C5A869] hover:text-[#0A0C10] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Project Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 text-xs text-[#E6CA85] font-mono mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
                {project.reraId && (
                  <>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-300">RERA: {project.reraId}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                {project.projectLogo && (
                  <div className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm border border-white/20 shadow-md shrink-0">
                    <img src={project.projectLogo} alt={project.name} className="h-6 w-auto object-contain" />
                  </div>
                )}
                <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white tracking-wide">
                  {project.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#C5A869] scale-102 shadow-lg'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            {[
              { id: 'overview', label: 'Project Overview' },
              { id: 'amenities', label: 'Luxury Amenities' },
              { id: 'specs', label: 'Architectural Specs' },
              { id: 'gallery', label: 'Media & Visuals' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1E2433] text-[#E6CA85] border border-[#C5A869]/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="font-serif-luxury text-xl font-semibold text-white">
                    {project.tagline}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#C5A869] mb-3">
                      Development Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quick Facts Card */}
                <div className="p-5 rounded-xl glass-obsidian border border-white/10 space-y-4">
                  <h4 className="font-serif-luxury text-base font-semibold text-white border-b border-white/10 pb-2">
                    Key Specifications
                  </h4>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px]">Area / Scale:</span>
                      <span className="text-white font-medium">{project.area}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-mono text-[11px]">Configuration:</span>
                      <span className="text-white font-medium">{project.unitsOrFloors}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-mono text-[11px]">Possession Status:</span>
                      <span className="text-[#E6CA85] font-medium">{project.handoverDate}</span>
                    </div>

                    {project.priceStarting && (
                      <div>
                        <span className="text-slate-400 block font-mono text-[11px]">Investment / Price:</span>
                        <span className="text-emerald-400 font-semibold">{project.priceStarting}</span>
                      </div>
                    )}

                    {project.reraId && (
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-slate-400 block font-mono text-[11px]">RERA Registration:</span>
                        <span className="text-[#C5A869] font-mono font-medium">{project.reraId}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry(project.name)}
                      className="w-full py-2.5 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] rounded-lg shadow-md hover:brightness-110 transition-all cursor-pointer"
                    >
                      Enquire for This Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AMENITIES */}
          {activeTab === 'amenities' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-semibold text-white mb-4">
                Curated Amenities & Lifestyle Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-obsidian border border-white/10 hover:border-[#C5A869]/40 transition-colors space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C5A869]/15 flex items-center justify-center text-[#E6CA85]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-sm text-white">
                      {amenity.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-semibold text-white mb-4">
                Architectural Finishes & Materials
              </h3>
              <div className="border border-white/10 rounded-xl overflow-hidden glass-obsidian">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03]">
                      <th className="p-3.5 text-xs font-mono uppercase tracking-wider text-[#C5A869] w-1/3">
                        Category
                      </th>
                      <th className="p-3.5 text-xs font-mono uppercase tracking-wider text-[#C5A869]">
                        Design & Specification Standards
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs">
                    {project.specifications.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-semibold text-white align-top">
                          {spec.category}
                        </td>
                        <td className="p-3.5 text-slate-300 leading-relaxed">
                          {spec.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-semibold text-white mb-4">
                Architectural Photography & Renderings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsLightboxOpen(true);
                    }}
                    className="relative h-48 rounded-xl overflow-hidden group cursor-pointer border border-white/10 bg-slate-900"
                  >
                    <img
                      src={img}
                      alt={`${project.name} photo ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-black/70 text-white">
                        <Maximize2 className="w-5 h-5 text-[#E6CA85]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Embedded Instant Lead Capture Form */}
          <div className="mt-8 p-6 rounded-xl glass-obsidian border border-[#C5A869]/30 bg-gradient-to-br from-[#121622] to-[#0A0C10]">
            <div className="max-w-xl">
              <h4 className="font-serif-luxury text-lg font-bold text-white mb-1">
                Direct Project Inquiry for {project.name}
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Connect directly with Curo India’s senior development consultants for floor layouts, current pricing, and verified site visit assistance.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-lg bg-emerald-900/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="font-semibold">Thank you for your inquiry!</div>
                    <div>Our senior project director will contact you within 2 business hours.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C5A869]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (+91) *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C5A869]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-lg bg-[#0E121A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C5A869]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] hover:brightness-110 transition-all cursor-pointer"
                  >
                    Submit Official Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={project.gallery[activeImageIndex] || project.image}
            alt="Fullscreen view"
            referrerPolicy="no-referrer"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

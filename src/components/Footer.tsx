import React from 'react';
import { Building2, ShieldCheck, Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { CURO_PROJECTS } from '../data/curoData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectProject: (id: string) => void;
  onOpenInquiry: (projectName?: string) => void;
  onOpenLeadPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectProject,
  onOpenInquiry,
  onOpenLeadPortal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090D] border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      {/* Top Footer Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0E121A] via-[#141824] to-[#0E121A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Experience Curo Developments First-Hand
            </h3>
            <p className="text-xs text-slate-300">
              Schedule an exclusive guided tour at Curo One New Chandigarh or Curo High Street Jalandhar.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="px-5 py-2.5 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] rounded-lg shadow-md hover:brightness-110 transition-all cursor-pointer"
            >
              Request Site Walkthrough
            </button>
            <a
              href="tel:+911126171915"
              className="px-4 py-2.5 text-xs font-medium text-white border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
            >
              +91-11-26171915
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Curo India"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Founded in 1987 by Mr. Pawan Garg. Curo India is an established brand in luxury real estate, European-style high street retail, and modern infrastructure developments across North India.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 space-y-1">
              <div>CIN: U70109DL1998PTC092800</div>
              <div>RERA Registered Real Estate Developer</div>
            </div>
          </div>

          {/* Col 2: Residential Landmarks */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C5A869]">
              Residential Portfolio
            </h4>
            <ul className="space-y-2">
              {CURO_PROJECTS.filter((p) => p.category === 'residential').map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="hover:text-white transition-colors text-left text-xs"
                  >
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Commercial & Retail */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C5A869]">
              Commercial & Retail
            </h4>
            <ul className="space-y-2">
              {CURO_PROJECTS.filter((p) => p.category !== 'residential').map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="hover:text-white transition-colors text-left text-xs"
                  >
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C5A869]">
              Corporate & Careers
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Heritage & Leadership (1987)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('masterplan')} className="hover:text-white transition-colors">
                  3D Masterplan Explorer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">
                  Careers & Open Positions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Regional Offices Directory
                </button>
              </li>
              {onOpenLeadPortal && (
                <li>
                  <button onClick={onOpenLeadPortal} className="text-[#E6CA85] hover:underline font-mono">
                    Submissions & HR Records Log
                  </button>
                </li>
              )}
              <li>
                <a href="mailto:info@curoindia.com" className="hover:text-white transition-colors">
                  Media & Investor Relations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Statutory Disclaimers */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> The visual imagery, 3D renderings, and specifications displayed herein are artistic representations and for informational guidance only. Official project parameters, layouts, and sanctions conform to respective RERA registrations (e.g. Curo One: PBRERA-SAS80-PR0063). Prospective purchasers and investors are encouraged to verify details with authorized Curo India personnel at our registered offices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <div>
              © 1987 – {new Date().getFullYear()} Curo India Private Limited. All Rights Reserved.
            </div>

            <div className="flex items-center gap-4">
              <span>Corporate HQ: K-28 Green Park Ext., New Delhi 110016</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

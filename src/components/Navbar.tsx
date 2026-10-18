import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Compass, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenInquiry: (projectName?: string) => void;
  onSelectProject?: (projectId: string) => void;
  onOpenLeadPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenInquiry,
  onSelectProject,
  onOpenLeadPortal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'residential' | 'commercial' | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (type: 'residential' | 'commercial') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const dropdownData = {
    residential: {
      ongoing: [
        { id: 'curo-one', name: 'Curo One', location: 'New Chandigarh', image: '/images/residence/ongoing/subthumb.jpg' },
      ],
      upcoming: [
        { id: 'curo-queensridge', name: 'Curo Queensridge', location: 'Delhi', image: '/images/residence/upcoming/subthumb.jpg' },
      ],
      completed: [
        { id: 'curo-homes-barnala', name: 'Curo Homes', location: 'Barnala', image: '/images/residence/compleated/subthumb.jpg' },
      ],
    },
    commercial: {
      ongoing: [
        { id: 'curo-one', name: 'Curo One', location: 'New Chandigarh', image: '/images/commercial/ongoing/subthumb1.jpg' },
        { id: 'curo-high-street', name: 'Curo Highstreet', location: 'Jalandhar', image: '/images/commercial/ongoing/subthumb2.jpg' },
      ],
      upcoming: [
        { id: 'curo-tech', name: 'Curo Tech', location: 'Gurgaon', image: '/images/commercial/upcoming/subthumb.jpg' },
      ],
      completed: [
        { id: 'curo-square', name: 'Curo Square', location: 'Ludhiana', image: '/images/commercial/compleated/subthumb.jpg' },
      ],
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0C10]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0A0C10]/98 via-[#0A0C10]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Curo Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 shadow-md group-hover:bg-white transition-all">
              <img
                src="/images/logo.png"
                alt="Curo India"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] tracking-widest text-[#C5A869] uppercase font-mono">
                Est. 1987
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Real Estate & Retail
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links with Animated Dropdown Mega-Menus */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeView === 'home' ? 'text-[#E6CA85]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Overview
            </button>

            {/* RESIDENTIAL DROPDOWN LINK */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('residential')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('projects')}
                className="flex items-center gap-1.5 text-sm tracking-wide font-medium text-slate-300 hover:text-white py-2 cursor-pointer focus:outline-none"
              >
                <span>Residential</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'residential' ? 'rotate-180 text-[#FFB700]' : ''}`} />
              </button>
            </div>

            {/* COMMERCIAL DROPDOWN LINK */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('commercial')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('projects')}
                className="flex items-center gap-1.5 text-sm tracking-wide font-medium text-slate-300 hover:text-white py-2 cursor-pointer focus:outline-none"
              >
                <span>Commercial</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'commercial' ? 'rotate-180 text-[#FFB700]' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => handleNavClick('masterplan')}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeView === 'masterplan' ? 'text-[#E6CA85]' : 'text-slate-300 hover:text-white'
              }`}
            >
              3D Masterplan
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeView === 'about' ? 'text-[#E6CA85]' : 'text-slate-300 hover:text-white'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('careers')}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeView === 'careers' ? 'text-[#E6CA85]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeView === 'contact' ? 'text-[#E6CA85]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Zone 3: Primary Action, Leads Portal & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenLeadPortal && (
              <button
                onClick={onOpenLeadPortal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 hover:text-[#E6CA85] bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors cursor-pointer"
                title="View Submissions & Leads Log"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Submissions Log</span>
              </button>
            )}

            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] via-[#D8B76E] to-[#B89241] rounded-lg shadow-md shadow-[#C5A869]/20 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#0A0C10]" />
              <span>Schedule VIP Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3D MEGA-MENU DROPDOWN CURTAIN (ONGOING / UPCOMING / COMPLETED) */}
      {activeDropdown && (
        <div
          onMouseEnter={() => {
            if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:block absolute top-full left-0 right-0 bg-[#32363D] border-b-2 border-[#FFB700] shadow-2xl transition-all duration-300 z-50 py-8 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* ONGOING COLUMN */}
              <div className="col-span-5 space-y-4">
                <div className="border border-[#FFB700] px-6 py-1.5 text-white font-mono tracking-widest text-xs font-bold uppercase bg-black/30 inline-block">
                  ONGOING
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  {dropdownData[activeDropdown].ongoing.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleProjectClick(item.id)}
                      className="group cursor-pointer space-y-1.5"
                    >
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-[11px] px-2 py-0.5 inline-block uppercase">
                        {item.name}
                      </span>
                      <div className="text-white text-xs font-medium">{item.location}</div>
                      <div className="relative h-28 w-full overflow-hidden border border-white/20 group-hover:border-[#FFB700] transition-colors">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}
              <div className="col-span-1 self-stretch border-r border-white/20" />

              {/* UPCOMING COLUMN */}
              <div className="col-span-3 space-y-4">
                <div className="border border-[#FFB700] px-6 py-1.5 text-white font-mono tracking-widest text-xs font-bold uppercase bg-black/30 inline-block">
                  UPCOMING
                </div>
                <div className="space-y-4 pt-1">
                  {dropdownData[activeDropdown].upcoming.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleProjectClick(item.id)}
                      className="group cursor-pointer space-y-1.5"
                    >
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-[11px] px-2 py-0.5 inline-block uppercase">
                        {item.name}
                      </span>
                      <div className="text-white text-xs font-medium">{item.location}</div>
                      <div className="relative h-28 w-full overflow-hidden border border-white/20 group-hover:border-[#FFB700] transition-colors">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}
              <div className="col-span-1 self-stretch border-r border-white/20" />

              {/* COMPLETED COLUMN */}
              <div className="col-span-2 space-y-4">
                <div className="border border-[#FFB700] px-6 py-1.5 text-white font-mono tracking-widest text-xs font-bold uppercase bg-black/30 inline-block">
                  COMPLETED
                </div>
                <div className="space-y-4 pt-1">
                  {dropdownData[activeDropdown].completed.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleProjectClick(item.id)}
                      className="group cursor-pointer space-y-1.5"
                    >
                      <span className="bg-[#FFB700] text-[#1E232B] font-bold text-[11px] px-2 py-0.5 inline-block uppercase">
                        {item.name}
                      </span>
                      <div className="text-white text-xs font-medium">{item.location}</div>
                      <div className="relative h-28 w-full overflow-hidden border border-white/20 group-hover:border-[#FFB700] transition-colors">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0A0C10]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-2xl">
          <div className="flex flex-col gap-2">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'projects', label: 'Residential & Commercial Developments' },
              { id: 'masterplan', label: '3D Masterplan' },
              { id: 'about', label: 'Heritage & Vision' },
              { id: 'careers', label: 'Careers' },
              { id: 'contact', label: 'Contact Us' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeView === item.id
                    ? 'bg-[#C5A869]/15 text-[#E6CA85]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] via-[#D8B76E] to-[#B89241] rounded-lg shadow-lg"
              >
                <Compass className="w-4 h-4 text-[#0A0C10]" />
                <span>Schedule VIP Site Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

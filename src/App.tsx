import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { MasterplanExplorer } from './components/MasterplanExplorer';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GlobalInquiryModal } from './components/GlobalInquiryModal';
import { LeadPortalModal } from './components/LeadPortalModal';
import { CURO_PROJECTS, Project } from './data/curoData';
import { StatusMatrixSection } from './components/StatusMatrixSection';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryProject, setInquiryProject] = useState<string>('');
  const [isLeadPortalOpen, setIsLeadPortalOpen] = useState(false);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const pId = hash.replace('project/', '');
        setSelectedProjectId(pId);
      } else if (hash && ['home', 'projects', 'masterplan', 'about', 'careers', 'contact'].includes(hash)) {
        setActiveView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    window.location.hash = `project/${id}`;
  };

  const handleCloseProjectModal = () => {
    setSelectedProjectId(null);
    window.location.hash = activeView;
  };

  const handleOpenInquiry = (projectName?: string) => {
    setInquiryProject(projectName || '');
    setIsInquiryOpen(true);
  };

  const handleOpenLeadPortal = () => {
    setIsLeadPortalOpen(true);
  };

  const selectedProject: Project | null =
    selectedProjectId ? CURO_PROJECTS.find((p) => p.id === selectedProjectId) || null : null;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 flex flex-col font-sans selection:bg-[#C5A869]/30 selection:text-white">
      {/* Fixed Sticky Glass Navbar with 3D Dropdown Mega-Menu */}
      <Navbar
        activeView={activeView}
        setActiveView={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
        onSelectProject={handleSelectProject}
        onOpenLeadPortal={handleOpenLeadPortal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenInquiry={handleOpenInquiry}
              onSelectProject={handleSelectProject}
            />

            {/* The Iconic Original Curo ONGOING / UPCOMING / COMPLETED Matrix */}
            <StatusMatrixSection onSelectProject={handleSelectProject} />

            <ProjectsSection
              onSelectProject={handleSelectProject}
              onOpenInquiry={handleOpenInquiry}
            />
            <MasterplanExplorer onOpenInquiry={handleOpenInquiry} />
            <AboutSection />
            <CareersSection onOpenLeadPortal={handleOpenLeadPortal} />
            <ContactSection onOpenLeadPortal={handleOpenLeadPortal} />
          </>
        )}

        {activeView === 'projects' && (
          <div className="pt-20">
            <StatusMatrixSection onSelectProject={handleSelectProject} />
            <ProjectsSection
              onSelectProject={handleSelectProject}
              onOpenInquiry={handleOpenInquiry}
            />
          </div>
        )}

        {activeView === 'masterplan' && (
          <div className="pt-20">
            <MasterplanExplorer onOpenInquiry={handleOpenInquiry} />
          </div>
        )}

        {activeView === 'about' && (
          <div className="pt-20">
            <AboutSection />
          </div>
        )}

        {activeView === 'careers' && (
          <div className="pt-20">
            <CareersSection onOpenLeadPortal={handleOpenLeadPortal} />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="pt-20">
            <ContactSection
              initialProject={inquiryProject}
              onOpenLeadPortal={handleOpenLeadPortal}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectProject={handleSelectProject}
        onOpenInquiry={handleOpenInquiry}
        onOpenLeadPortal={handleOpenLeadPortal}
      />

      {/* Project Detail Deep View Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onOpenInquiry={(pName) => {
          setSelectedProjectId(null);
          handleOpenInquiry(pName);
        }}
        onOpenLeadPortal={handleOpenLeadPortal}
      />

      {/* Global VIP Site Visit Inquiry Modal */}
      <GlobalInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultProject={inquiryProject}
        onOpenLeadPortal={handleOpenLeadPortal}
      />

      {/* Central HR & Lead Submissions Log Modal */}
      <LeadPortalModal
        isOpen={isLeadPortalOpen}
        onClose={() => setIsLeadPortalOpen(false)}
      />
    </div>
  );
}

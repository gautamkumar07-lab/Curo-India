import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Upload, Mail, X } from 'lucide-react';
import { CURO_CAREERS, CareerOpening } from '../data/curoData';
import { saveJobApplication } from '../utils/submissionsStore';

interface CareersSectionProps {
  onOpenLeadPortal?: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  onOpenLeadPortal,
}) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resumeLink: '',
    coverNote: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = (job: CareerOpening) => {
    setSelectedJob(job);
    setSubmitted(false);
    setApplicationModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantData.name || !applicantData.email || !applicantData.phone || !selectedJob) return;

    saveJobApplication({
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      candidateName: applicantData.name,
      email: applicantData.email,
      phone: applicantData.phone,
      experience: applicantData.experience,
      resumeLink: applicantData.resumeLink,
      coverNote: applicantData.coverNote,
    });

    setSubmitted(true);
  };

  return (
    <section id="careers-section" className="py-24 bg-[#0E121A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C5A869]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Master Builders</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Careers at Curo India
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We empower visionaries, civil engineers, architects, leasing pioneers, and real estate professionals to construct monumental structures that shape city skylines.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
            <Mail className="w-4 h-4 text-[#C5A869]" />
            <span>Direct resume dispatch: </span>
            <a href="mailto:hr@curoindia.com" className="text-[#E6CA85] underline">
              hr@curoindia.com
            </a>
          </div>
        </div>

        {/* Original Careers Showcase Banner */}
        <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/15 bg-slate-900 group shadow-2xl">
          <img
            src="/images/careers/left-bg.jpg"
            alt="Life and Careers at Curo India"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="text-xs font-mono uppercase text-[#C5A869]">Talent & Leadership</div>
            <div className="text-lg sm:text-xl font-bold text-white font-serif-luxury">Building Enduring Careers Across North India</div>
          </div>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-obsidian border border-white/10 space-y-2">
            <div className="text-[#E6CA85] font-serif-luxury text-xl font-bold">Uncompromising Quality</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Work with top structural designers, seismic engineers, and tier-1 contractors to build structures that endure.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-obsidian border border-white/10 space-y-2">
            <div className="text-[#E6CA85] font-serif-luxury text-xl font-bold">Merit-Driven Growth</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Accelerate your professional trajectory with high responsibility on multi-million dollar flagship projects.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-obsidian border border-white/10 space-y-2">
            <div className="text-[#E6CA85] font-serif-luxury text-xl font-bold">Collaborative Culture</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transparent leadership, continuous on-site safety empowerment, and a respectful corporate environment.
            </p>
          </div>
        </div>

        {/* Open Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              Current Open Requisitions ({CURO_CAREERS.length})
            </h3>
            <span className="text-xs font-mono text-[#C5A869]">Full-Time Opportunities</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CURO_CAREERS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl glass-obsidian border border-white/10 hover:border-[#C5A869]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C5A869]">
                    <span>{job.department}</span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3 h-3 text-[#C5A869]" />
                      {job.location}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#E6CA85] transition-colors">
                    {job.title}
                  </h4>

                  <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-400">
                    Experience Requirement: <span className="text-white">{job.experience}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] rounded-lg shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0A0C10]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {applicationModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-[#0E121A] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#C5A869] uppercase">Application Portal</span>
                <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
                  {selectedJob.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono">{selectedJob.location}</div>
              </div>
              <button
                onClick={() => setApplicationModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-4 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-lg text-white">Application Recorded Successfully!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                  Your profile for <strong className="text-white">{selectedJob.title}</strong> has been logged into the Curo HR portal. You can also send a direct copy to Curo's official HR email (<span className="text-[#E6CA85] font-mono">hr@curoindia.com</span>).
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:hr@curoindia.com?subject=Job Application: ${encodeURIComponent(selectedJob.title)} - ${encodeURIComponent(applicantData.name)}&body=Dear Curo HR Team,%0D%0A%0D%0AI wish to apply for the position of ${encodeURIComponent(selectedJob.title)}.%0D%0A%0D%0AName: ${encodeURIComponent(applicantData.name)}%0D%0APhone: ${encodeURIComponent(applicantData.phone)}%0D%0AEmail: ${encodeURIComponent(applicantData.email)}%0D%0AResume Link: ${encodeURIComponent(applicantData.resumeLink)}%0D%0ACover Note: ${encodeURIComponent(applicantData.coverNote)}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] shadow-md hover:brightness-110 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0A0C10]" />
                    <span>Send via Email Client</span>
                  </a>

                  {onOpenLeadPortal && (
                    <button
                      type="button"
                      onClick={() => {
                        setApplicationModalOpen(false);
                        onOpenLeadPortal();
                      }}
                      className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10"
                    >
                      View in Submissions Log
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={applicantData.name}
                    onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Resume Link (Google Drive / LinkedIn / Portfolio) *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/your-resume-pdf"
                    value={applicantData.resumeLink}
                    onChange={(e) => setApplicantData({ ...applicantData, resumeLink: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Brief Cover Note</label>
                  <textarea
                    rows={3}
                    placeholder="Highlight your relevant high-rise construction, design, or leasing accomplishments..."
                    value={applicantData.coverNote}
                    onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] hover:brightness-110"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

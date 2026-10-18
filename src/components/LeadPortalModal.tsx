import React, { useState, useEffect } from 'react';
import {
  X,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Trash2,
  CheckCircle2,
  Clock,
  Building,
  ShieldCheck,
} from 'lucide-react';
import {
  getJobApplications,
  getInquiries,
  StoredJobApplication,
  StoredInquiry,
  clearAllSubmissions,
} from '../utils/submissionsStore';

interface LeadPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadPortalModal: React.FC<LeadPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'applications' | 'inquiries'>('applications');
  const [applications, setApplications] = useState<StoredJobApplication[]>([]);
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);

  useEffect(() => {
    if (isOpen) {
      setApplications(getJobApplications());
      setInquiries(getInquiries());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExportCSV = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    if (activeTab === 'applications') {
      csvContent += 'ID,Position,Candidate Name,Email,Phone,Resume Link,Date,Status\n';
      applications.forEach((a) => {
        csvContent += `"${a.id}","${a.jobTitle}","${a.candidateName}","${a.email}","${a.phone}","${a.resumeLink}","${a.submittedAt}","${a.status}"\n`;
      });
    } else {
      csvContent += 'ID,Project,Full Name,Email,Phone,Preferred Date,Visit Type,Date,Status\n';
      inquiries.forEach((i) => {
        csvContent += `"${i.id}","${i.projectName}","${i.fullName}","${i.email}","${i.phone}","${i.preferredDate || ''}","${i.visitType || ''}","${i.submittedAt}","${i.status}"\n`;
      });
    }
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `curo_${activeTab}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the local submission logs?')) {
      clearAllSubmissions();
      setApplications([]);
      setInquiries([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0E121A] border border-white/15 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0C10]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A869]/15 flex items-center justify-center text-[#E6CA85]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C5A869]">
                Curo Central CRM & HR Log
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                Submissions & Inquiries Records
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 border border-white/10 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handleClear}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
              title="Clear all local logs"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Data Routing Notice */}
        <div className="bg-[#141824] px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C5A869]" />
            <span>
              <strong>Careers Destination:</strong> hr@curoindia.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C5A869]" />
            <span>
              <strong>VIP Visits Desk:</strong> sales@curoindia.com (+91-11-26171915)
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 flex items-center gap-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'applications'
                ? 'border-[#C5A869] text-[#E6CA85] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Job Applications ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
              activeTab === 'inquiries'
                ? 'border-[#C5A869] text-[#E6CA85] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Site Visits & Inquiries ({inquiries.length})</span>
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'applications' && (
            <>
              {applications.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Briefcase className="w-10 h-10 mx-auto text-[#C5A869] opacity-30" />
                  <p className="text-sm">No job applications submitted in this browser yet.</p>
                  <p className="text-xs text-slate-500">
                    When anyone applies from the Careers section, their resume link, phone, and credentials will be saved and displayed here.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-xl glass-obsidian border border-white/10 space-y-2 text-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold text-sm text-white">{app.candidateName}</div>
                        <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-[11px]">
                          {app.status}
                        </span>
                      </div>

                      <div className="text-[#E6CA85] font-semibold">{app.jobTitle}</div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300 font-mono text-[11px] pt-1">
                        <div>Email: {app.email}</div>
                        <div>Phone: {app.phone}</div>
                        <div>Applied: {app.submittedAt}</div>
                      </div>

                      {app.resumeLink && (
                        <div className="pt-2 flex items-center gap-2">
                          <a
                            href={app.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-[#C5A869] hover:text-[#0A0C10] text-slate-200 transition-colors"
                          >
                            <span>Open Resume Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <a
                            href={`mailto:hr@curoindia.com?subject=Job Application: ${encodeURIComponent(app.jobTitle)} - ${encodeURIComponent(app.candidateName)}&body=Candidate Name: ${encodeURIComponent(app.candidateName)}%0D%0APhone: ${encodeURIComponent(app.phone)}%0D%0AEmail: ${encodeURIComponent(app.email)}%0D%0AResume: ${encodeURIComponent(app.resumeLink)}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#C5A869]/20 text-[#E6CA85] hover:bg-[#C5A869]/30 transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                            <span>Dispatch to hr@curoindia.com</span>
                          </a>
                        </div>
                      )}

                      {app.coverNote && (
                        <p className="text-slate-400 bg-black/30 p-2.5 rounded border border-white/5 mt-1 italic">
                          "{app.coverNote}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'inquiries' && (
            <>
              {inquiries.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Calendar className="w-10 h-10 mx-auto text-[#C5A869] opacity-30" />
                  <p className="text-sm">No project inquiries or site visits booked yet.</p>
                  <p className="text-xs text-slate-500">
                    When visitors submit the VIP site visit form or project inquiry, the lead details will be recorded and displayed here.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-xl glass-obsidian border border-white/10 space-y-2 text-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold text-sm text-white">{inq.fullName}</div>
                        <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/40 text-blue-300 font-mono text-[11px]">
                          {inq.status}
                        </span>
                      </div>

                      <div className="text-[#E6CA85] font-semibold">{inq.projectName}</div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300 font-mono text-[11px] pt-1">
                        <div>Phone: {inq.phone}</div>
                        <div>Email: {inq.email || 'N/A'}</div>
                        <div>Preferred Date: {inq.preferredDate || 'Earliest Available'}</div>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href={`tel:${inq.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-emerald-600 text-white transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call Lead ({inq.phone})</span>
                        </a>

                        <a
                          href={`mailto:sales@curoindia.com?subject=VIP Site Visit Lead: ${encodeURIComponent(inq.projectName)} - ${encodeURIComponent(inq.fullName)}&body=Name: ${encodeURIComponent(inq.fullName)}%0D%0APhone: ${encodeURIComponent(inq.phone)}%0D%0AProject: ${encodeURIComponent(inq.projectName)}%0D%0ADate: ${encodeURIComponent(inq.preferredDate || 'N/A')}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#C5A869]/20 text-[#E6CA85] hover:bg-[#C5A869]/30 transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Forward to sales@curoindia.com</span>
                        </a>
                      </div>

                      {inq.message && (
                        <p className="text-slate-400 bg-black/30 p-2.5 rounded border border-white/5 mt-1">
                          Requirements: {inq.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

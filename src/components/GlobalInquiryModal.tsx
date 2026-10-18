import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, Phone, Mail, Building2, Compass } from 'lucide-react';
import { CURO_PROJECTS } from '../data/curoData';
import { saveInquiry } from '../utils/submissionsStore';

interface GlobalInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  onOpenLeadPortal?: () => void;
}

export const GlobalInquiryModal: React.FC<GlobalInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProject = '',
  onOpenLeadPortal,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: defaultProject || 'Curo One (New Chandigarh)',
    visitType: 'On-Site Show Residence Walkthrough',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    saveInquiry({
      projectName: formData.project,
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.preferredDate,
      visitType: formData.visitType,
      message: formData.message,
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0E121A] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A869]/15 flex items-center justify-center text-[#E6CA85]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869]">
                VIP Concierge Desk
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Schedule VIP Site Visit
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-white">
              Appointment Logged Successfully
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our senior relationship manager for <strong className="text-[#E6CA85]">{formData.project}</strong> has received your VIP walkthrough request and will call <span className="font-mono text-emerald-400">{formData.phone}</span> promptly.
            </p>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
              Direct Desk: +91-11-26171915 · sales@curoindia.com
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:sales@curoindia.com?subject=VIP Site Visit Request: ${encodeURIComponent(formData.project)} - ${encodeURIComponent(formData.name)}&body=Dear Curo Sales Team,%0D%0A%0D%0AI would like to schedule a VIP site visit for ${encodeURIComponent(formData.project)}.%0D%0A%0D%0AName: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APreferred Date: ${encodeURIComponent(formData.preferredDate || 'Earliest Available')}%0D%0AVisit Type: ${encodeURIComponent(formData.visitType)}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] to-[#D8B76E] shadow-md hover:brightness-110 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#0A0C10]" />
                <span>Send via Email Client</span>
              </a>

              {onOpenLeadPortal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenLeadPortal();
                  }}
                  className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  View in Submissions Log
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Singhal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Phone Number (+91) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98888 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Project of Choice</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                >
                  {CURO_PROJECTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.city})
                    </option>
                  ))}
                  <option value="General Corporate Consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Visit Type</label>
              <select
                value={formData.visitType}
                onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
              >
                <option value="On-Site Show Residence Walkthrough">On-Site Show Residence Walkthrough</option>
                <option value="Retail & High Street Commercial Leasing">Retail & High Street Commercial Leasing</option>
                <option value="Investment & High-Yield Strategy Advisory">Investment & High-Yield Strategy Advisory</option>
                <option value="Architectural & Masterplan Review">Architectural & Masterplan Review</option>
              </select>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] via-[#D8B76E] to-[#B89241] rounded-lg shadow-md hover:brightness-110 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#0A0C10]" />
                <span>Confirm VIP Booking</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

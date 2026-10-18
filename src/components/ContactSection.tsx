import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { CURO_OFFICES } from '../data/curoData';
import { saveInquiry } from '../utils/submissionsStore';

interface ContactSectionProps {
  initialProject?: string;
  onOpenLeadPortal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProject = '',
  onOpenLeadPortal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: initialProject || 'Curo One (New Chandigarh)',
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
      visitType: 'VIP Consultation / Site Visit',
      message: formData.message,
    });

    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0A0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C5A869]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Connect with Curo India</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Schedule a Private Consultation or VIP Site Walkthrough
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our corporate headquarters in New Delhi and dedicated regional site offices in New Chandigarh, Jalandhar, and Ludhiana are at your service.
          </p>
        </div>

        {/* Contact Split: Offices Directory + Lead Capture Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Regional Offices Directory */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              Corporate & Site Locations
            </h3>

            {/* Original Corporate HQ Photo from curoindia.com */}
            <div className="relative h-44 rounded-2xl overflow-hidden border border-white/15 bg-slate-900 group shadow-xl">
              <img
                src="/images/contact-us/left-bg.jpg"
                alt="Curo India Corporate Office Green Park New Delhi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-[10px] font-mono uppercase text-[#C5A869]">Official Corporate Head Office</div>
                <div className="text-sm font-bold text-white font-serif-luxury">K-28, Green Park Extension, New Delhi</div>
              </div>
            </div>

            <div className="space-y-4">
              {CURO_OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-obsidian border border-white/10 hover:border-[#C5A869]/40 transition-colors space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white font-serif-luxury">
                      {office.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#C5A869]">
                      {office.city}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Phone className="w-4 h-4 text-[#C5A869] shrink-0" />
                    <span className="font-mono text-[11px]">
                      {office.phones.join(' · ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Mail className="w-4 h-4 text-[#C5A869] shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-slate-300 hover:text-[#E6CA85] underline font-mono text-[11px]"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono pt-1 border-t border-white/5">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-obsidian border border-[#C5A869]/30 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-[#C5A869] tracking-widest">
                  VIP Concierge Desk
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                  Book a Priority Site Visit
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Experience Curo One sample show residences, Curo High Street retail flagships, or discuss commercial leasing opportunities.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Site Walkthrough Confirmed!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A dedicated relationship manager from our {formData.project} desk will call <span className="font-mono text-emerald-400">{formData.phone}</span> to coordinate your appointment and arrange chauffeured transport if required.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        project: 'Curo One (New Chandigarh)',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Contact Phone (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98100 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Project of Interest *
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                      >
                        <option value="Curo One (New Chandigarh)">Curo One (New Chandigarh - Residences)</option>
                        <option value="Curo High Street (Jalandhar)">Curo High Street (Jalandhar - Retail & Food)</option>
                        <option value="Curo Square (Ludhiana)">Curo Square (Ludhiana - Mall & Offices)</option>
                        <option value="Soho Suites (Ludhiana)">Soho Suites (Ludhiana - Boutique Commercial)</option>
                        <option value="Curo Homes (Barnala)">Curo Homes (Barnala - Township & Villas)</option>
                        <option value="Curo Dynamic Homes (Barnala)">Curo Dynamic Homes (Plotted Enclave)</option>
                        <option value="Curo Queensridge (Delhi)">Curo Queensridge (Delhi - Ultra Luxury)</option>
                        <option value="Curo Tech (Gurgaon)">Curo Tech (Gurgaon - Grade-A IT Park)</option>
                        <option value="General Corporate Consultation">General Corporate Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Preferred Date of Visit
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Additional Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify unit preference (e.g., 3 BHK East-facing, Ground Floor Retail space, etc.)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 text-sm font-semibold text-[#0A0C10] bg-gradient-to-r from-[#F9E7B9] via-[#D8B76E] to-[#B89241] rounded-xl shadow-xl shadow-[#C5A869]/20 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#0A0C10]" />
                      <span>Confirm Appointment Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

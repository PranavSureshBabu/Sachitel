import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Building2, 
  Calendar,
  FileCheck,
  Printer,
  Sparkles,
  Loader2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface ContactSectionProps {
  initialSolution?: string | null;
  transferredEstimate?: {
    drops: number;
    cameras: number;
    rooms: number;
    racks: number;
    sla: string;
    totalAed: string;
    timeline: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialSolution, 
  transferredEstimate 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: '',
    projectScope: '',
    solutions: [] as string[],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<{
    rfqId: string;
    date: string;
    data: typeof formData;
  } | null>(null);

  const availableSolutions = [
    'Structured Cabling (Cat6A / Fiber)',
    'SIRA Commercial CCTV & Security',
    'Door Access Control & Biometrics',
    'Executive Boardroom AV & MTR',
    'Data Center Racking & Smart UPS',
    'Annual Maintenance Contract (AMC)',
  ];

  // If a solution was selected from another section, ensure it is checked
  useEffect(() => {
    if (initialSolution) {
      setFormData(prev => {
        const matching = availableSolutions.find(s => s.toLowerCase().includes(initialSolution.toLowerCase().slice(0, 5))) || initialSolution;
        if (!prev.solutions.includes(matching)) {
          return { ...prev, solutions: [...prev.solutions, matching] };
        }
        return prev;
      });
    }
  }, [initialSolution]);

  // If estimate was transferred from estimator
  useEffect(() => {
    if (transferredEstimate) {
      const estimateText = `Calculated BOQ Scope:\n- Network Drops: ${transferredEstimate.drops}\n- SIRA CCTV: ${transferredEstimate.cameras}\n- AV Boardrooms: ${transferredEstimate.rooms}\n- Server Racks: ${transferredEstimate.racks}\n- SLA: ${transferredEstimate.sla}\n- Target Timeline: ${transferredEstimate.timeline}\n- Estimated Range: ${transferredEstimate.totalAed}`;
      setFormData(prev => ({
        ...prev,
        projectScope: prev.projectScope ? `${prev.projectScope}\n\n${estimateText}` : estimateText,
        solutions: Array.from(new Set([...prev.solutions, 'Structured Cabling (Cat6A / Fiber)', 'SIRA Commercial CCTV & Security']))
      }));
    }
  }, [transferredEstimate]);

  const toggleSolution = (sol: string) => {
    setFormData(prev => {
      const exists = prev.solutions.includes(sol);
      return {
        ...prev,
        solutions: exists ? prev.solutions.filter(s => s !== sol) : [...prev.solutions, sol]
      };
    });
    if (errors.solutions) {
      setErrors(prev => ({ ...prev, solutions: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company or Entity name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email address';
    }

    // UAE / International phone validation
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for dispatch';
    } else if (phoneClean.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (e.g. +971 50 123 4567)';
    }

    if (formData.solutions.length === 0) {
      newErrors.solutions = 'Please select at least one technology solution';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch submission
    setTimeout(() => {
      const rfqId = `RFQ-SACH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRfq({
        rfqId,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        data: { ...formData }
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedRfq(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      preferredDate: '',
      projectScope: '',
      solutions: [],
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#050B14] overflow-hidden">
      
      {/* Background photonics grid */}
      <div className="absolute inset-0 bg-photonics-grid opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
            <span>06</span>
            <span>·</span>
            <span>COMMERCIAL & TECHNICAL ENGAGEMENT</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3 text-balance">
            Request Site Survey & Engineering Consultation
          </h2>
          <p className="text-[#94A3B8] text-base">
            Connect directly with our Dubai engineering desk. We conduct physical site evaluations within 24 hours across all seven Emirates.
          </p>
        </div>

        {/* 2-Column Split: Corporate Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Pre-filled Verified Company Location & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#081325] border border-white/10 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Sachitel Telecom Equipment Trading L.L.C
                  </h3>
                  <div className="text-xs font-arabic text-[#94A3B8] mt-0.5">
                    ساتشيتل لتجارة أجهزة الاتصالات ذ.م.م
                  </div>
                </div>
                <span className="p-2 rounded bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/30">
                  <Building2 className="w-5 h-5" />
                </span>
              </div>

              {/* Verified Contact Details as requested */}
              <div className="space-y-4 text-xs font-mono">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Headquarters Location</div>
                    <div className="text-white font-semibold text-sm">{COMPANY_INFO.location}</div>
                    <div className="text-[#475569] text-[11px] mt-0.5">GPS: {COMPANY_INFO.coordinates}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Direct Landline (Dubai HQ)</div>
                    <a href={`tel:${COMPANY_INFO.phoneLandline}`} className="text-white hover:text-[#00F0FF] font-semibold text-sm">
                      {COMPANY_INFO.phoneLandline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Mobile & 24/7 Technical Dispatch</div>
                    <a href={`tel:${COMPANY_INFO.phoneMobile}`} className="text-white hover:text-[#00F0FF] font-semibold text-sm">
                      {COMPANY_INFO.phoneMobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Corporate Inquiries & RFQ Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#00F0FF] font-semibold text-sm">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#b3c5ff] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Official Web Portal</div>
                    <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="text-white hover:text-[#00F0FF] font-semibold text-sm">
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Clock className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#94A3B8] uppercase text-[10px]">Operating Hours</div>
                    <div className="text-white">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Dubai Map Visual & Fast Response Guarantee */}
            <div className="p-5 rounded-xl bg-[#081325] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#10B981] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>24-Hour UAE Response Commitment</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Emergency optical fusion splicing and SIRA camera repairs receive on-site engineer dispatch within 4 hours throughout Dubai, Sharjah, and Abu Dhabi.
              </p>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Form or Submitted Receipt */}
          <div className="lg:col-span-7 bg-[#081325] p-6 sm:p-8 rounded-xl border-2 border-[#00F0FF]/30 shadow-2xl relative">
            
            {submittedRfq ? (
              /* Success Confirmation Card */
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="p-4 rounded-lg bg-[#10B981]/15 border border-[#10B981]/40 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#10B981] shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      RFQ Successfully Dispatched to Engineering Desk
                    </h4>
                    <p className="text-xs text-[#94A3B8]">
                      A certified technical project manager will review your submission and contact you within 24 hours.
                    </p>
                  </div>
                </div>

                {/* RFQ Dossier Receipt */}
                <div className="p-6 rounded-lg bg-[#0B192C] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Reference Code</span>
                      <div className="text-base font-mono font-bold text-[#00F0FF]">{submittedRfq.rfqId}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Submission Date</span>
                      <div className="text-xs font-mono text-white">{submittedRfq.date}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[#94A3B8]">Client Name:</span>
                      <div className="text-white font-semibold">{submittedRfq.data.fullName}</div>
                    </div>
                    <div>
                      <span className="text-[#94A3B8]">Enterprise / Company:</span>
                      <div className="text-white font-semibold">{submittedRfq.data.company}</div>
                    </div>
                    <div>
                      <span className="text-[#94A3B8]">Corporate Email:</span>
                      <div className="text-white font-semibold">{submittedRfq.data.email}</div>
                    </div>
                    <div>
                      <span className="text-[#94A3B8]">Phone:</span>
                      <div className="text-white font-semibold">{submittedRfq.data.phone}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#94A3B8] block mb-1">Selected Systems:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {submittedRfq.data.solutions.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded bg-[#0066FF]/20 text-[#00F0FF] text-[11px] font-mono border border-[#00F0FF]/30">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {submittedRfq.data.projectScope && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-xs font-mono text-[#94A3B8] block mb-1">Project Notes / BOQ:</span>
                      <div className="text-xs font-mono text-[#dce3f0] bg-[#050B14] p-3 rounded border border-white/5 whitespace-pre-wrap">
                        {submittedRfq.data.projectScope}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2.5 rounded text-xs font-mono font-medium text-white bg-white/10 hover:bg-white/15 transition-colors flex items-center gap-2"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Print RFQ Receipt</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2.5 rounded text-xs font-mono font-semibold text-white bg-[#0066FF] hover:bg-[#0054D6] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Inquiry & Site Survey Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    Project Scope & Site Survey Inquiry
                  </h3>
                  <span className="text-[10px] font-mono text-[#00F0FF]">
                    *Required Fields
                  </span>
                </div>

                {/* 2-Column Name and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mohammed Al Mansoor"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-3 py-2.5 rounded bg-[#0B192C] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                      Enterprise / Organization *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Al Ghurair Holding"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: '' });
                      }}
                      className={`w-full px-3 py-2.5 rounded bg-[#0B192C] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 2-Column Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="m.mansoor@company.ae"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-3 py-2.5 rounded bg-[#0B192C] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                      UAE Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-3 py-2.5 rounded bg-[#0B192C] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#00F0FF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Solution Checkboxes as requested */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase text-[#94A3B8]">
                      Select Required Solutions *
                    </label>
                    <span className="text-[10px] text-[#00F0FF]">Multiple selection allowed</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableSolutions.map((sol) => {
                      const isChecked = formData.solutions.includes(sol);
                      return (
                        <button
                          key={sol}
                          type="button"
                          onClick={() => toggleSolution(sol)}
                          className={`p-2.5 rounded text-left text-xs font-medium transition-all flex items-center gap-2.5 border ${
                            isChecked
                              ? 'bg-[#0066FF]/20 text-[#00F0FF] border-[#00F0FF]'
                              : 'bg-[#0B192C] text-[#94A3B8] border-white/5 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-[#0066FF] border-[#00F0FF] text-white'
                                : 'border-white/30 bg-[#050B14]'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <span className="truncate">{sol}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.solutions && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.solutions}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Site Survey Date */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                    Preferred Site Survey Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded bg-[#0B192C] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Scope / BOQ Notes */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">
                    Project Scope, Locations & Special Technical Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on project premises (e.g. Dubai Marina office fit-out, JAFZA warehouse, number of drops, SIRA CCTV requirements)..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#0B192C] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:border-[#00F0FF] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting RFQ to Dubai NOC...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-0.5 transition-transform" />
                      <span>Submit RFQ & Schedule Site Survey</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-1">
                  <span>NDA Clearance: Protected by UAE Federal Law</span>
                  <span className="text-[#10B981]">Guaranteed 24h Response</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

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
  Loader2,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface ContactSectionProps {
  initialSolution?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialSolution
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
    'Server Racks & UPS Systems',
    'Annual Maintenance Contract (AMC)',
  ];

  // If a solution was selected from another section, pre-select it
  useEffect(() => {
    if (initialSolution) {
      setFormData(prev => {
        const matching = availableSolutions.find(s => 
          s.toLowerCase().includes(initialSolution.toLowerCase().slice(0, 5))
        ) || initialSolution;
        if (!prev.solutions.includes(matching)) {
          return { ...prev, solutions: [...prev.solutions, matching] };
        }
        return prev;
      });
    }
  }, [initialSolution]);

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
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company or organization';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid corporate email address';
    }

    // Phone validation accepting international and UAE numbers
    const phoneClean = formData.phone.trim();
    const phoneRegex = /^(\+?[0-9\s-]{7,20})$/;
    if (!phoneClean) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +971 50 123 4567)';
    }

    if (formData.solutions.length === 0) {
      newErrors.solutions = 'Please select at least one service required';
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
      const rfqId = `RFQ-ST-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRfq({
        rfqId,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        data: { ...formData }
      });
      setIsSubmitting(false);
    }, 900);
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
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#EDF2F7] border-b border-slate-300/80">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Pattern: small label, clear heading, 1-2 line intro */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
            05 · Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Request a Site Survey
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Contact our Dubai engineering office for a physical site inspection, project consultation, or competitive RFQ tender.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Contact Details with Clear Labels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Sachitel Telecom Equipment Trading L.L.C
                </h3>
                <div className="text-xs text-slate-500 mt-1 font-arabic">
                  ساتشيتل لتجارة أجهزة الاتصالات ذ.م.م
                </div>
              </div>

              {/* Office */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Office</span>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {COMPANY_INFO.location}
                </div>
              </div>

              {/* 24/7 Technical Support */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>24/7 Technical Support</span>
                </div>
                <div className="flex flex-col gap-1">
                  <a 
                    href={`tel:${COMPANY_INFO.phoneLandline}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors font-mono"
                  >
                    Landline: {COMPANY_INFO.phoneLandline}
                  </a>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneMobile}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors font-mono"
                  >
                    Mobile / Emergency: {COMPANY_INFO.phoneMobile}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email</span>
                </div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors font-mono"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Website */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Website</span>
                </div>
                <a 
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors font-mono"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>

              {/* Hours */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Hours</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed font-medium">
                  {COMPANY_INFO.workingHours}
                </div>
              </div>

            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 mb-0.5">Rapid Site Survey Dispatch</div>
                <div>Physical site surveys scheduled within 24 hours across Dubai, Abu Dhabi, and Northern Emirates.</div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Clean Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              
              {submittedRfq ? (
                /* Inline Success Confirmation */
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-emerald-950 mb-1">
                        Site Survey Request Received
                      </h4>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        Thank you, {submittedRfq.data.fullName}. Your inquiry has been routed to our Dubai project engineering desk. Reference code: <span className="font-mono text-emerald-950 font-bold">{submittedRfq.rfqId}</span>. A project manager will contact you within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between pb-2 border-b border-slate-200 text-slate-500 font-mono font-medium">
                      <span>Inquiry Summary</span>
                      <span>Date: {submittedRfq.date}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                      <div>
                        <span className="text-slate-500 block">Company:</span>
                        <span className="text-slate-900 font-semibold">{submittedRfq.data.company}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Contact Phone:</span>
                        <span className="text-slate-900 font-semibold">{submittedRfq.data.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Email:</span>
                        <span className="text-slate-900 font-semibold">{submittedRfq.data.email}</span>
                      </div>
                      {submittedRfq.data.preferredDate && (
                        <div>
                          <span className="text-slate-500 block">Target Survey Date:</span>
                          <span className="text-slate-900 font-semibold">{submittedRfq.data.preferredDate}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="text-slate-500 block mb-1">Requested Solutions:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {submittedRfq.data.solutions.map((s, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-mono font-medium border border-blue-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Enquiry Form with Grouped Fields and Clear Labels */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Group 1: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tariq Al Nuaimi"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-blue-600'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company or Entity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Al Ghurair Holding"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                          errors.company ? 'border-red-500' : 'border-slate-300 focus:border-blue-600'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Corporate Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="tariq@company.ae"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-blue-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number (UAE / International) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-blue-600'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Group 2: Solutions Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Required Solutions <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableSolutions.map((sol) => {
                        const isChecked = formData.solutions.includes(sol);
                        return (
                          <button
                            key={sol}
                            type="button"
                            onClick={() => toggleSolution(sol)}
                            className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center gap-2.5 border ${
                              isChecked
                                ? 'bg-blue-50 text-blue-700 border-blue-600 shadow-2xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked
                                  ? 'bg-blue-600 border-blue-600 text-white'
                                  : 'border-slate-400 bg-white'
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
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.solutions}</span>
                      </p>
                    )}
                  </div>

                  {/* Group 3: Preferred Survey Date (dd/mm/yyyy) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Site Survey Date (dd/mm/yyyy)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="dd/mm/yyyy (e.g. 15/11/2026)"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                      <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Group 4: Project Scope */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Scope & Premises Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe premises (e.g. office fit-out in Business Bay, warehouse in JAFZA, number of network drops, camera coverage)..."
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Request Site Survey & RFQ</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    All inquiries are kept confidential. Direct technical evaluation within 24 hours.
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

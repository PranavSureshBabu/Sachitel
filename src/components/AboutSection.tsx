import React from 'react';
import { ShieldCheck, Award, FileText, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface AboutSectionProps {
  onOpenPdfModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPdfModal, onNavigate }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#E8EFF6] border-b border-slate-300/80">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Pattern: small label, clear heading, 1-2 line intro */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
            01 · About
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Over 18 Years of Infrastructure Delivery in the UAE
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Founded in Dubai in {COMPANY_INFO.established}, Sachitel Telecom provides turnkey telecommunications, structured cabling, electronic security, and server room fit-outs across the UAE.
          </p>
        </div>

        {/* Split Layout: 3 Strengths on Left, Tidy Company At a Glance on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): The Three Core Strengths */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-6 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-100/70 text-blue-700 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Turnkey Single-Source Execution
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    One dedicated engineering team handles everything from initial CAD drawings and authority submissions to physical cabling, system configuration, and final handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all duration-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-100/70 text-emerald-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Certified In-House Technical Team
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our full-time staff includes BICSI RCDD designers, Dubai SIRA licensed security engineers, and Fluke certified cabling test technicians operating our own calibrated diagnostic tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200/90 hover:border-sky-400 hover:shadow-md transition-all duration-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-sky-100/70 text-sky-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    Full UAE Compliance & Financial Stability
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pre-approved with TDRA, SIRA, and Civil Defense codes. Backed by solid commercial credit lines to furnish performance bonds and maintain critical spare stock in Dubai.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Tidy "Company at a Glance" Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-100">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Company at a Glance
                </h3>
              </div>

              {/* Company Details List */}
              <div className="space-y-3.5 text-xs text-slate-600 mb-6">
                <div>
                  <div className="text-slate-500 text-[11px] font-medium mb-0.5">Legal Name</div>
                  <div className="font-bold text-slate-900 text-sm">{COMPANY_INFO.name}</div>
                  <div className="text-slate-500 text-xs font-arabic mt-0.5">{COMPANY_INFO.nameArabic}</div>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <div className="text-slate-500 text-[11px] font-medium">Founded</div>
                  <div className="font-bold text-slate-900 text-sm">{COMPANY_INFO.established} ({COMPANY_INFO.experienceYears} Years)</div>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <div className="text-slate-500 text-[11px] font-medium">Headquarters</div>
                  <div className="font-medium text-slate-800">{COMPANY_INFO.location}</div>
                </div>
              </div>

              {/* Secondary Outline PDF Download Button */}
              <button
                onClick={onOpenPdfModal}
                className="w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Profile (PDF)</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

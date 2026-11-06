import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenPdfModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E4ECF5] via-[#EDF2F7] to-[#E4EBF4] border-b border-slate-300/80">
      
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-75 pointer-events-none" />

      {/* Subtle radial ambient light glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-200/35 blur-[100px] pointer-events-none rounded-full" 
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Left-aligned headline, subline, and 2 buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Regulatory Accreditation Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Dubai & Northern Emirates · Est. 2014</span>
            </div>

            {/* Single clean H1 headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Telecom and Security Infrastructure for UAE Businesses
            </h1>

            {/* Clear one-sentence subline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              We design, install, and maintain certified fiber networks, SIRA CCTV and access control, corporate audiovisual systems, and data center physical infrastructure across Dubai and the UAE.
            </p>

            {/* One Primary & One Secondary CTA Button */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 flex items-center gap-2 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Request Site Survey & RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs flex items-center gap-2 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Profile (PDF)</span>
              </button>
            </div>

            {/* Proof Strip: Clean row of 4 items beneath */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Copper & Fiber</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">SIRA Certified</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Boardroom AV</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">42U Racks & UPS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean imagery in white elevation frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
              {/* REPLACE with real project photo */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern enterprise data center and structured cabling"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200/90 text-xs flex items-center justify-between shadow-md">
                  <span className="font-semibold text-slate-900">Tier-rated UAE Integration</span>
                  <span className="text-blue-700 font-mono font-semibold text-[11px] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    SIRA · TDRA Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

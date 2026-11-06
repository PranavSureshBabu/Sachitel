import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle, Download, ExternalLink, Building, Lock } from 'lucide-react';
import { COMPANY_INFO, EXECUTIVE_PROFILE_TEXT } from '../data/sachitelData';

interface AboutSectionProps {
  onOpenPdfModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPdfModal, onNavigate }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#081325]/50 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
            <span>01</span>
            <span>·</span>
            <span>EXECUTIVE PROFILE & CORPORATE TRACK RECORD</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-4 text-balance">
            A Decade of Precision Engineering & Sovereign Infrastructure in the UAE
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Founded in Dubai in {COMPANY_INFO.established}, Sachitel Telecom Equipment Trading L.L.C stands as an authoritative 
            telecommunications contractor trusted by government departments, maritime shipping leaders, industrial conglomerates, 
            and global luxury brands.
          </p>
        </div>

        {/* 2-Column Layout: Pillars & Interactive Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): The 4 Core Institutional Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-lg bg-[#0B192C]/80 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#0066FF]/20 border border-[#00F0FF]/30 text-[#00F0FF] shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Turnkey Single-Source Execution
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    We eliminate multi-subcontractor finger-pointing. Sachitel engineers manage all 7 phases internally—from architectural CAD blueprints, SIRA filings, civil containment, and fiber pulling to Fluke OTDR certification and final handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#0B192C]/80 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#10B981]/20 border border-[#10B981]/30 text-[#10B981] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    In-House Certified Engineering Staff
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Our technical bench consists of full-time BICSI RCDD designers, Dubai SIRA licensed security professionals, Fluke Certified Cabling Test Technicians (CCTT), and certified fusion splicers equipped with industrial Fujikura 90S+ splicers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#0B192C]/80 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#00F0FF]/20 border border-[#00F0FF]/30 text-[#00F0FF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Complete UAE Sovereign Compliance
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Full regulatory pre-approvals across TDRA (Telecommunications and Digital Government Regulatory Authority), Dubai SIRA (Security Industry Regulatory Agency), and UAE Civil Defense firestop life safety codes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#0B192C]/80 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Financial Stability & Performance Bonding
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Substantial working capital and Tier-1 UAE banking credit lines enable us to execute high-value multi-million AED master projects, furnish performance bonds, and maintain extensive warehouse stock of active & passive telecom supplies in Dubai.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Corporate Dossier Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0B192C] border-2 border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,102,255,0.2)] relative overflow-hidden group">
              
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/10 blur-3xl pointer-events-none rounded-full" />
              
              {/* Card Header with Doc Type */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#00F0FF]" />
                  <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                    Official Corporate Dossier
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-semibold">
                  AUDITED 2026
                </span>
              </div>

              {/* Company Logo lockup on card */}
              <div className="p-4 rounded-lg bg-white/95 border border-[#00F0FF]/20 mb-6 flex items-center justify-between">
                <img
                  src="/assets/aistudio/image_82f646b7.png"
                  alt="Sachitel Telecom Logo"
                  className="h-9 w-auto object-contain"
                />
                <div className="text-right">
                  <div className="text-[10px] font-mono text-[#475569]">Dubai DED License</div>
                  <div className="text-xs font-mono font-bold text-[#002b75]">{COMPANY_INFO.tradeLicense}</div>
                </div>
              </div>

              {/* Dossier Specs */}
              <div className="space-y-3 mb-6 text-xs text-[#94A3B8]">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 font-mono">
                  <span>Entity Name</span>
                  <span className="text-white font-semibold">Sachitel Telecom L.L.C</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 font-mono">
                  <span>Incorporation</span>
                  <span className="text-white">Dubai, United Arab Emirates (2014)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 font-mono">
                  <span>Scope of License</span>
                  <span className="text-white">Telecommunications Equipment Trading</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 font-mono">
                  <span>Regulators</span>
                  <span className="text-[#00F0FF]">SIRA / TDRA / Civil Defense</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 font-mono">
                  <span>Doc Checksum</span>
                  <span className="text-[10px] text-[#475569]">SHA256: 7f8a9d...c014</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onOpenPdfModal}
                  className="w-full py-3 px-4 rounded text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <FileText className="w-4 h-4 text-[#00F0FF]" />
                  <span>Preview Executive Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] px-1">
                  <span>Format: Signed PDF (Printable)</span>
                  <span className="text-[#10B981]">Instant Download</span>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#94A3B8]">
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Includes project reference portfolio, compliance certificates & banking details.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

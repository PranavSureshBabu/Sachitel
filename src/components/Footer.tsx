import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, ArrowUpRight, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPdfModal }) => {
  return (
    <footer className="bg-[#050B14] border-t border-white/10 text-white relative z-10 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1 (4 cols): Company Logo, Arabic Branding & Mission */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo Image extracted from attached asset */}
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded border border-[#00F0FF]/30 shadow-md inline-block">
                <img
                  src="/assets/aistudio/image_82f646b7.png"
                  alt="Sachitel Telecom Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-display font-extrabold text-base tracking-tight text-white leading-none">
                  SACHITEL TELECOM
                </div>
                <div className="text-[11px] font-arabic text-[#c2c6d8] mt-0.5">
                  ساميتل لتجارة أجهزة الاتصالات ذ.م.م
                </div>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Your Integrated Business Solution Partner. Delivering sovereign optical fiber networks, SIRA-approved CCTV security, enterprise AV automation, and data center physical infrastructure across Dubai, Abu Dhabi, and the Northern Emirates.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                DED License: {COMPANY_INFO.tradeLicense}
              </span>
              <span className="text-[11px] font-mono text-[#00F0FF] bg-[#0066FF]/15 px-2 py-0.5 rounded border border-[#00F0FF]/30">
                EST. {COMPANY_INFO.established}
              </span>
            </div>

          </div>

          {/* Column 2 (2 cols): Core Solutions Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  Structured Cabling
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  Optical Fiber Backbone
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  SIRA Approved CCTV
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  Access Control & Gates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  Boardroom AV & MTR
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-[#00F0FF] transition-colors">
                  Server Racks & UPS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 (2 cols): Lifecycle & Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Executive Profile
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lifecycle')} className="hover:text-white transition-colors">
                  7-Stage Delivery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clients')} className="hover:text-white transition-colors">
                  Enterprise Clients
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Site Survey RFQ
                </button>
              </li>
              <li>
                <button onClick={onOpenPdfModal} className="text-[#00F0FF] hover:underline flex items-center gap-1 font-semibold">
                  <span>Download PDF Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 (4 cols): Direct Dubai Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Dubai Headquarters
            </h4>
            
            <div className="space-y-2 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneLandline}`} className="text-white hover:text-[#00F0FF]">
                  {COMPANY_INFO.phoneLandline}
                </a>
                <span className="text-white/20">|</span>
                <a href={`tel:${COMPANY_INFO.phoneMobile}`} className="text-white hover:text-[#00F0FF]">
                  {COMPANY_INFO.phoneMobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#00F0FF]">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="text-white hover:text-[#00F0FF]">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/971553481239?text=${encodeURIComponent('Hello Sachitel Telecom, I would like to inquire about structured cabling and telecom solutions.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] border border-[#10B981]/40 text-xs font-mono font-medium transition-colors"
              >
                <span>💬 WhatsApp Project Hotline</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Strip: Copyright & Regulatory Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Dubai, United Arab Emirates.
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
            <span>TDRA Approved</span>
            <span>·</span>
            <span>SIRA Certified</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
            <span>·</span>
            <span>BICSI Member</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

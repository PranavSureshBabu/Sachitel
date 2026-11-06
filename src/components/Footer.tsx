import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPdfModal }) => {
  return (
    <footer className="bg-[#E2E8F0] border-t border-slate-300 text-slate-700 py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-300">
          
          {/* Column 1 (5 cols): Company Logo & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-300 shadow-xs inline-flex items-center">
                <img
                  src="/assets/sachitel-logo.png"
                  alt="Sachitel Telecom Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/assets/aistudio/image_82f646b7.png';
                  }}
                />
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Your Integrated Business Solution Partner. Delivering certified structured cabling, SIRA-approved security, corporate audiovisual systems, and server room physical infrastructure across Dubai and the UAE.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs font-mono">
              <span className="bg-white text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                DED License: {COMPANY_INFO.tradeLicense}
              </span>
              <span className="bg-white text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                Est. {COMPANY_INFO.established}
              </span>
            </div>
          </div>

          {/* Column 2 (3 cols): Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('solutions')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('how-we-work')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('clients')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </li>
              {onOpenPdfModal && (
                <li className="pt-1">
                  <button 
                    onClick={onOpenPdfModal} 
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Download Profile (PDF)
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3 (4 cols): Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Dubai Headquarters
            </h4>
            
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_INFO.phoneLandline}`} className="hover:text-blue-600 transition-colors font-mono font-medium">
                    {COMPANY_INFO.phoneLandline}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneMobile}`} className="hover:text-blue-600 transition-colors font-mono font-medium">
                    {COMPANY_INFO.phoneMobile}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 transition-colors font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <a 
                  href={`https://${COMPANY_INFO.website}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-blue-600 transition-colors font-mono"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Regulatory Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Dubai, United Arab Emirates.
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 font-medium">
            <span>SIRA Certified</span>
            <span>·</span>
            <span>TDRA Registered</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

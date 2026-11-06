import React, { useState, useEffect } from 'react';
import { Phone, FileText, Menu, X, Shield, ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenPdfModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'lifecycle', label: 'Lifecycle' },
    { id: 'about', label: 'Executive Profile' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleCopy = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081325]/90 backdrop-blur-xl border-b border-[#00F0FF]/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Zone */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-3 group shrink-0"
            title="Sachitel Telecom Equipment Trading L.L.C"
          >
            {/* Logo Image extracted from attached asset */}
            <div className="relative bg-white px-2 py-1.5 rounded border border-[#00F0FF]/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center transition-all duration-300 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <img
                src="/assets/aistudio/image_82f646b7.png"
                alt="Sachitel Telecom Logo"
                className="h-7 sm:h-8 w-auto object-contain"
                onError={(e) => {
                  // Fallback container in case of path resolution issues
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback flex items-center gap-1.5 text-[#002b75] font-bold text-xs';
                    fallback.innerHTML = `<span>📡</span><span>SACHITEL</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#00F0FF] transition-colors leading-none">
                  SACHITEL TELECOM
                </span>
                <span className="hidden xl:inline-block font-mono text-[10px] tracking-wider text-[#00F0FF] bg-[#0066FF]/15 px-1.5 py-0.5 rounded border border-[#00F0FF]/30 font-medium">
                  DUBAI · UAE
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-[#94A3B8]">
                <span className="font-arabic font-medium text-[#c2c6d8]">ساميتل للاتصالات</span>
                <span className="hidden sm:inline text-[#424656]">·</span>
                <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-wider text-[#94A3B8]">
                  Equipment Trading L.L.C
                </span>
              </div>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#94A3B8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3 py-1.5 rounded transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/30'
                      : 'hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Zone: Direct Phone Dropdown & PDF Download CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded border border-[#00F0FF]/25 bg-[#081325] text-white hover:border-[#00F0FF] hover:bg-[#0066FF]/10 transition-all duration-200 shadow-sm"
                aria-expanded={phoneDropdownOpen}
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span className="tracking-tight">{COMPANY_INFO.phoneLandline}</span>
                <ChevronDown className={`w-3 h-3 text-[#94A3B8] transition-transform duration-200 ${phoneDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {phoneDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 bg-[#0B192C] border border-[#00F0FF]/30 rounded-lg shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] pb-2 border-b border-white/10 mb-2 flex items-center justify-between">
                    <span>Direct Telecom Lines</span>
                    <span className="text-[#10B981] font-semibold">Dubai HQ</span>
                  </div>

                  {/* Landline */}
                  <div className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group mb-1">
                    <div>
                      <div className="text-xs text-[#94A3B8]">Head Office (Landline)</div>
                      <a href={`tel:${COMPANY_INFO.phoneLandline}`} className="text-sm font-mono font-bold text-white group-hover:text-[#00F0FF]">
                        {COMPANY_INFO.phoneLandline}
                      </a>
                    </div>
                    <button
                      onClick={(e) => handleCopy(COMPANY_INFO.phoneLandline, e)}
                      className="p-1.5 text-xs text-[#94A3B8] hover:text-[#00F0FF] hover:bg-[#0066FF]/20 rounded border border-white/10"
                      title="Copy Number"
                    >
                      {copiedPhone === COMPANY_INFO.phoneLandline ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : 'Copy'}
                    </button>
                  </div>

                  {/* Mobile & 24/7 Hotline */}
                  <div className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group">
                    <div>
                      <div className="text-xs text-[#94A3B8]">Project Desk & 24/7 NOC</div>
                      <a href={`tel:${COMPANY_INFO.phoneMobile}`} className="text-sm font-mono font-bold text-white group-hover:text-[#00F0FF]">
                        {COMPANY_INFO.phoneMobile}
                      </a>
                    </div>
                    <button
                      onClick={(e) => handleCopy(COMPANY_INFO.phoneMobile, e)}
                      className="p-1.5 text-xs text-[#94A3B8] hover:text-[#00F0FF] hover:bg-[#0066FF]/20 rounded border border-white/10"
                      title="Copy Number"
                    >
                      {copiedPhone === COMPANY_INFO.phoneMobile ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : 'Copy'}
                    </button>
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-[#94A3B8] flex items-center justify-between">
                    <span>PO Box 187127, Dubai</span>
                    <a href="mailto:sachitel@eim.ae" className="text-[#00F0FF] hover:underline">sachitel@eim.ae</a>
                  </div>
                </div>
              )}
            </div>

            {/* Prominent Download Profile (PDF) CTA Button */}
            <button
              onClick={onOpenPdfModal}
              className="relative group overflow-hidden px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[#0066FF] to-[#0052D6] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,102,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-tight">Download Profile (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded border border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#00F0FF]/15 bg-[#081325]/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded font-medium text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0066FF]/20 text-[#00F0FF] border-l-2 border-[#00F0FF]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Direct Contacts */}
          <div className="p-3 bg-[#050B14] rounded-lg border border-white/10 flex flex-col gap-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Direct Dubai Project Inquiries</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={`tel:${COMPANY_INFO.phoneLandline}`}
                className="flex items-center gap-2 text-xs font-mono text-white bg-white/5 p-2 rounded hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Tel: {COMPANY_INFO.phoneLandline}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneMobile}`}
                className="flex items-center gap-2 text-xs font-mono text-white bg-white/5 p-2 rounded hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Mob: {COMPANY_INFO.phoneMobile}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

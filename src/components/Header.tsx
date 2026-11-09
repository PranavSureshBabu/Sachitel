import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate
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

  // Ordered logically in plain English to match section order
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'documentation', label: 'Documentation' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/70 py-3.5'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Area: Crisp, high-contrast Sachitel Telecom logo in full original color */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg group"
            title="Sachitel Telecom Equipment Trading L.L.C"
          >
            <img
              src="/assets/sachitel-logo.png"
              alt="Sachitel Telecom Logo"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/assets/aistudio/image_82f646b7.png';
              }}
            />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'text-blue-700 font-semibold bg-blue-50/90 border border-blue-200/60'
                      : 'hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Phone + Single Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Phone Number Display / Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-expanded={phoneDropdownOpen}
                aria-label="Direct telecom phone lines"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-mono font-semibold text-slate-900">{COMPANY_INFO.phoneLandline}</span>
                <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${phoneDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {phoneDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 mb-2 font-semibold flex items-center justify-between">
                    <span>Direct Dubai Lines</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold text-[10px]">Active NOC</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group mb-1">
                    <div>
                      <div className="text-xs text-slate-500">Head Office</div>
                      <a href={`tel:${COMPANY_INFO.phoneLandline}`} className="text-sm font-mono font-bold text-slate-900 group-hover:text-blue-600">
                        {COMPANY_INFO.phoneLandline}
                      </a>
                    </div>
                    <button
                      onClick={(e) => handleCopy(COMPANY_INFO.phoneLandline, e)}
                      className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-200"
                    >
                      {copiedPhone === COMPANY_INFO.phoneLandline ? <Check className="w-3 h-3 text-emerald-600" /> : 'Copy'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div>
                      <div className="text-xs text-slate-500">24/7 Technical Dispatch</div>
                      <a href={`tel:${COMPANY_INFO.phoneMobile}`} className="text-sm font-mono font-bold text-slate-900 group-hover:text-blue-600">
                        {COMPANY_INFO.phoneMobile}
                      </a>
                    </div>
                    <button
                      onClick={(e) => handleCopy(COMPANY_INFO.phoneMobile, e)}
                      className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-200"
                    >
                      {copiedPhone === COMPANY_INFO.phoneMobile ? <Check className="w-3 h-3 text-emerald-600" /> : 'Copy'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* The One Primary CTA Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 flex items-center gap-2 active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Request Site Survey & RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Request Site Survey & RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneLandline}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-slate-700 hover:text-blue-600 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call HQ: {COMPANY_INFO.phoneLandline}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ShieldCheck, Cpu, ArrowRight, FileText, CheckCircle2, Activity, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/sachitelData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdfModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenPdfModal }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-photonics-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#0066FF]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#00F0FF]/8 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Subtle laser top trace */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Accreditations Strip */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0066FF]/15 border border-[#00F0FF]/30 text-xs font-mono font-medium text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
            <span>EST. 2014 · DUBAI, UAE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#94A3B8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>SIRA APPROVED INTEGRATOR</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#94A3B8]">
            <Cpu className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>TDRA REGISTERED · BICSI MEMBER</span>
          </div>
        </div>

        {/* Hero Main Grid: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & Authority */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1] mb-5 text-balance">
              Turnkey Telecommunications & Critical Infrastructure for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#b3c5ff] to-[#0066FF]">
                Enterprise UAE
              </span>
            </h1>

            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              For over a decade, <strong className="text-white font-semibold">Sachitel Telecom</strong> has engineered mission-critical 
              optical fiber networks, SIRA-compliant electronic security, executive audiovisual environments, and Tier-rated data center 
              containment across Dubai and the Emirates.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:border-[#00F0FF] transition-all duration-300 flex items-center gap-2.5 active:scale-95 group"
              >
                <span>Request Site Survey & RFQ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="px-5 py-3.5 rounded text-sm font-semibold text-white bg-[#081325] border border-white/20 hover:border-[#00F0FF] hover:bg-[#0066FF]/15 transition-all duration-300 flex items-center gap-2 active:scale-95 group shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
                <span>Executive Profile (PDF)</span>
              </button>

              <button
                onClick={() => onNavigate('solutions')}
                className="px-4 py-3.5 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Explore Solutions ↓
              </button>
            </div>

            {/* Certified Competencies Tickers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Copper & Fiber</span>
                </div>
                <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">Cat6/6A/7 & OS2/OM4</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>SIRA Certified</span>
                </div>
                <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">4K CCTV & Access</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Boardroom AV</span>
                </div>
                <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">MTR & Crestron DSP</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>42U Racks & UPS</span>
                </div>
                <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">N+1 Data Center</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual High-Tech Focal Asset */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl overflow-hidden border border-[#00F0FF]/25 bg-[#081325] shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-2">
              
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF] z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF] z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF] z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF] z-20 pointer-events-none" />

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#0B192C]">
                {/* Hotlinked high-res data center / fiber optic photo */}
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise Data Center Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to high-tech styled gradient
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.img-fallback')) {
                      const fb = document.createElement('div');
                      fb.className = 'img-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B192C] to-[#050B14] p-6 text-center';
                      fb.innerHTML = `
                        <div class="text-[#00F0FF] text-3xl mb-2 font-mono">⚡ 100G FIBER</div>
                        <p class="text-xs text-[#94A3B8]">High Density Structured Cabling & SIRA CCTV Systems</p>
                      `;
                      parent.appendChild(fb);
                    }
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />

                {/* Overlaid Technical HUD Telemetry */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#00F0FF] bg-[#050B14]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#00F0FF]/30">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse text-[#10B981]" />
                    <span>CARRIER BACKBONE ONLINE</span>
                  </div>
                  <span className="text-white/80">LATENCY: 0.8ms</span>
                </div>

                {/* Bottom HUD Specifications */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#081325]/90 backdrop-blur-md rounded border border-white/10 text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-white">Tier-III Optical Integration</span>
                    <span className="text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/20 px-1.5 py-0.5 rounded border border-[#00F0FF]/30">
                      SIRA / TDRA
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                    <span>Dubai HQ · PO Box 187127</span>
                    <span className="text-[#10B981]">Fluke OTDR Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Telemetry & Track Record Strip Below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-lg bg-[#081325] border border-white/10 hover:border-[#00F0FF]/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-baseline gap-1">
              <span>250</span>
              <span className="text-[#00F0FF] text-xl">+</span>
            </div>
            <div className="text-xs font-semibold text-white mt-1">Enterprise Projects</div>
            <div className="text-[11px] text-[#94A3B8] font-mono mt-0.5">Executed across Dubai & UAE</div>
          </div>

          <div className="p-4 rounded-lg bg-[#081325] border border-white/10 hover:border-[#00F0FF]/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-baseline gap-1">
              <span>100</span>
              <span className="text-[#10B981] text-xl">%</span>
            </div>
            <div className="text-xs font-semibold text-white mt-1">SIRA Compliance Audit</div>
            <div className="text-[11px] text-[#94A3B8] font-mono mt-0.5">First-time regulatory clearance</div>
          </div>

          <div className="p-4 rounded-lg bg-[#081325] border border-white/10 hover:border-[#00F0FF]/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-baseline gap-1">
              <span>99.999</span>
              <span className="text-[#00F0FF] text-xl">%</span>
            </div>
            <div className="text-xs font-semibold text-white mt-1">Optical Availability SLA</div>
            <div className="text-[11px] text-[#94A3B8] font-mono mt-0.5">Zero-loss fiber splice standard</div>
          </div>

          <div className="p-4 rounded-lg bg-[#081325] border border-white/10 hover:border-[#00F0FF]/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-baseline gap-1">
              <span>&lt; 4</span>
              <span className="text-[#F59E0B] text-xl">Hrs</span>
            </div>
            <div className="text-xs font-semibold text-white mt-1">On-Site Emergency MTTR</div>
            <div className="text-[11px] text-[#94A3B8] font-mono mt-0.5">24/7 dedicated dispatch NOC</div>
          </div>
        </div>

        {/* Client Logos Preview Bar (Extracted from user's attached banner) */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
            <span>TRUSTED BY UAE ENTERPRISES:</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto max-w-full pb-2 sm:pb-0 no-scrollbar">
            {[
              { name: 'Belhasa', logo: '/assets/clients/belhasa.png' },
              { name: 'Al Ghurair', logo: '/assets/clients/al-ghurair.png' },
              { name: 'AGIS', logo: '/assets/clients/agis.png' },
              { name: 'Jumeirah Golf', logo: '/assets/clients/jumeirah-golf.png' },
              { name: 'Emirates Golf', logo: '/assets/clients/emirates-golf.png' },
              { name: 'Sotheby’s', logo: '/assets/clients/sothebys.png' },
              { name: 'Hermès', logo: '/assets/clients/hermes.png' },
              { name: 'COSCO', logo: '/assets/clients/cosco.png' },
            ].map((c, i) => (
              <div 
                key={i} 
                className="h-8 px-2.5 bg-white/95 rounded flex items-center justify-center shrink-0 border border-white/20 shadow-sm"
                title={c.name}
              >
                <img src={c.logo} alt={c.name} className="h-5 max-w-[65px] object-contain" />
              </div>
            ))}

            <button
              onClick={() => onNavigate('clients')}
              className="text-xs font-mono text-[#00F0FF] hover:underline whitespace-nowrap pl-1"
            >
              + 13 more clients →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

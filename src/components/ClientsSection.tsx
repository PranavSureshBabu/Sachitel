import React, { useState } from 'react';
import { ENTERPRISE_CLIENTS, ClientItem } from '../data/sachitelData';
import { Building2, MapPin, CheckCircle, ExternalLink, ShieldCheck, Sparkles, Image as ImageIcon, ZoomIn } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [showOriginalBannerModal, setShowOriginalBannerModal] = useState<boolean>(false);

  const sectors = [
    'All',
    'Sovereign & Leisure',
    'Heavy Industry & Steel',
    'Maritime & Logistics',
    'Luxury & Retail',
    'Hospitality & Commercial',
  ];

  const filteredClients = selectedSector === 'All'
    ? ENTERPRISE_CLIENTS
    : ENTERPRISE_CLIENTS.filter(c => c.sector === selectedSector);

  // Divide clients for the dual-row marquee
  const rowOneClients = ENTERPRISE_CLIENTS.slice(0, 11);
  const rowTwoClients = ENTERPRISE_CLIENTS.slice(10);

  return (
    <section id="clients" className="py-20 lg:py-28 relative bg-[#081325]/70 border-t border-b border-white/5 overflow-hidden">
      
      {/* Background photonics laser trace */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
              <span>05</span>
              <span>·</span>
              <span>TRUSTED ENTERPRISE CLIENTELE</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3 text-balance">
              Proven Track Record with Premier UAE Institutions
            </h2>
            <p className="text-[#94A3B8] text-base">
              Featuring 21 enterprise clients from our official accredited portfolio—spanning championship golf clubs, heavy industrial manufacturers, luxury fashion boutiques, and sovereign maritime shipping.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => setShowOriginalBannerModal(true)}
              className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-white bg-[#0B192C] border border-[#00F0FF]/30 hover:border-[#00F0FF] hover:bg-[#0066FF]/20 transition-all flex items-center gap-2 shadow-sm group"
            >
              <ZoomIn className="w-3.5 h-3.5 text-[#00F0FF] group-hover:scale-110 transition-transform" />
              <span>Inspect High-Res Banner Asset</span>
            </button>
          </div>
        </div>

        {/* 1. EMBEDDED OFFICIAL CLIENT LOGOS BANNER CARD (PERMANENTLY VISIBLE ON PAGE) */}
        <div className="mb-14 p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-[#0B192C] to-[#081325] border-2 border-[#00F0FF]/30 shadow-[0_15px_40px_rgba(0,102,255,0.15)] relative overflow-hidden group">
          
          {/* Subtle top indicator */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                Official Client Portfolio (Attached Board)
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00F0FF] bg-[#0066FF]/15 px-2.5 py-0.5 rounded border border-[#00F0FF]/30">
              21 Accredited Organizations
            </span>
          </div>

          {/* The Actual Uploaded Image Displayed Crisp and Clean */}
          <div 
            onClick={() => setShowOriginalBannerModal(true)}
            className="cursor-pointer relative rounded-xl bg-white p-4 sm:p-6 shadow-inner flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.01]"
            title="Click to view full-screen high-res banner"
          >
            <img
              src="/assets/aistudio/image_e50b7ce9.png"
              alt="Sachitel Telecom Trusted Clients Portfolio"
              className="w-full h-auto max-h-[300px] object-contain drop-shadow-sm"
              onError={(e) => {
                // If path resolution needs fallback
                const target = e.currentTarget;
                target.src = '/public/assets/aistudio/image_e50b7ce9.png';
              }}
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#0066FF]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
              <span className="px-3 py-1.5 rounded-full bg-[#050B14]/90 text-white font-mono text-xs border border-[#00F0FF] flex items-center gap-1.5 shadow-lg">
                <ZoomIn className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Click to Expand Banner</span>
              </span>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-2">
            <span>Client brands: Belhasa · Al Ghurair · AGIS · RHS Group · Jumeirah Golf Estates · Emirates Golf · Sotheby’s · Hermès · National Cement · COSCO...</span>
            <span className="text-[#10B981] font-semibold">100% Commissioned & Handed Over</span>
          </div>
        </div>

      </div>

      {/* 2. DUAL-DIRECTION CONTINUOUS INFINITE MARQUEE TICKER (WITH LOGO IMAGES) */}
      <div className="mb-14 relative">
        
        {/* Gradient edge masks for seamless entry/exit */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#081325] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#081325] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left-to-Right Marquee with Logo Images */}
        <div className="overflow-hidden mb-4">
          <div className="animate-marquee-slow flex items-center gap-4 py-1">
            {[...rowOneClients, ...rowOneClients, ...rowOneClients].map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="px-3.5 py-2 rounded-xl bg-[#0B192C] border border-white/10 hover:border-[#00F0FF] transition-all flex items-center gap-3 shrink-0 group cursor-default shadow-md"
              >
                {/* Logo Image extracted directly from attached asset */}
                <div className="w-14 h-9 bg-white rounded-md p-1 flex items-center justify-center border border-white/20 shadow-sm shrink-0">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm text-white group-hover:text-[#00F0FF] transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                    {client.arabicName && (
                      <span className="text-xs text-[#94A3B8] font-arabic font-medium">
                        ({client.arabicName})
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] font-mono text-[#94A3B8] whitespace-nowrap">
                    {client.sector} · {client.location}
                  </div>
                </div>
                <span className="text-[#00F0FF]/40 text-xs ml-2">◇</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left Reverse Marquee with Logo Images */}
        <div className="overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-4 py-1">
            {[...rowTwoClients, ...rowTwoClients, ...rowTwoClients].map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="px-3.5 py-2 rounded-xl bg-[#0B192C] border border-white/10 hover:border-[#10B981] transition-all flex items-center gap-3 shrink-0 group cursor-default shadow-md"
              >
                {/* Logo Image extracted directly from attached asset */}
                <div className="w-14 h-9 bg-white rounded-md p-1 flex items-center justify-center border border-white/20 shadow-sm shrink-0">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm text-white group-hover:text-[#10B981] transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                    {client.arabicName && (
                      <span className="text-xs text-[#94A3B8] font-arabic font-medium">
                        ({client.arabicName})
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] font-mono text-[#94A3B8] whitespace-nowrap">
                    {client.sector} · {client.location}
                  </div>
                </div>
                <span className="text-[#10B981]/40 text-xs ml-2">◇</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. FILTERABLE CLIENT DIRECTORY CARDS WITH LOGO IMAGES */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all whitespace-nowrap ${
                selectedSector === sec
                  ? 'bg-[#0066FF] text-white font-semibold border border-[#00F0FF] shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                  : 'bg-[#0B192C] text-[#94A3B8] border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Client Cards Grid with Logo Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="p-5 rounded-xl bg-[#0B192C] border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            >
              <div>
                {/* Card Top: Logo Image + Meta */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  
                  {/* Logo Image Crop */}
                  <div className="h-12 w-24 bg-white rounded-lg p-1.5 flex items-center justify-center border border-white/20 shadow-sm shrink-0">
                    <img
                      src={client.logoUrl}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <span className="text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/15 px-2 py-0.5 rounded border border-[#00F0FF]/30 shrink-0">
                    {client.year}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#00F0FF] transition-colors">
                    {client.name}
                  </h3>
                  {client.arabicName && (
                    <span className="text-xs text-[#94A3B8] font-arabic font-medium">
                      {client.arabicName}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {client.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#00F0FF]" />
                  <span>{client.location}</span>
                </div>
                <span className="text-[#10B981] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Commissioned</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN MODAL FOR BANNER ASSET */}
      {showOriginalBannerModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowOriginalBannerModal(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-[#081325] border-2 border-[#00F0FF] shadow-[0_0_50px_rgba(0,240,255,0.4)] p-6 sm:p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                  Original Uploaded Image Asset
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                  Sachitel Telecom · Trusted Enterprise Clients Board
                </h3>
              </div>
              <button
                onClick={() => setShowOriginalBannerModal(false)}
                className="px-4 py-2 text-xs font-mono font-bold bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors border border-white/20"
              >
                Close ✕
              </button>
            </div>

            {/* Displaying the exact attached asset image in full size */}
            <div className="p-6 sm:p-10 rounded-xl bg-white shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/assets/aistudio/image_e50b7ce9.png"
                alt="Trusted Clients Full Banner"
                className="w-full h-auto max-h-[600px] object-contain drop-shadow"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>Location: public/assets/aistudio/image_e50b7ce9.png</span>
              <span className="text-[#10B981]">Belhasa · Al Ghurair · AGIS · RHS Group · Jumeirah Golf Estates · Sotheby’s · Hermès · COSCO</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

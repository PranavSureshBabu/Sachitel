import React, { useState } from 'react';
import { ENTERPRISE_CLIENTS, ClientItem } from '../data/sachitelData';
import { MapPin, Calendar, Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

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

  // Split for subtle marquee ticker
  const marqueeRowOne = ENTERPRISE_CLIENTS.slice(0, 11);
  const marqueeRowTwo = ENTERPRISE_CLIENTS.slice(10);

  return (
    <section id="clients" className="py-20 lg:py-24 bg-[#EDF2F7] border-b border-slate-300/80">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Pattern: small label, clear heading, 1-2 line intro */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
            04 · Clients
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Trusted by Organizations Across the UAE
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From championship golf clubs and sovereign maritime ports to heavy industrial steel works and international luxury retail, we deliver mission-critical telecom and security infrastructure.
          </p>
        </div>

        {/* 1. ELEVATED ACCREDITED CLIENT PORTFOLIO SHOWCASE (PRESTIGIOUS EXECUTIVE BOARD) */}
        <div className="mb-14 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0F1E36] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle blue photonic trace */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent pointer-events-none" />

          {/* Portfolio Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-7 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  Accredited Client Portfolio
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Official accredited client organizations commissioned across Dubai, Abu Dhabi, and Northern Emirates.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/40 shadow-xs">
                21 Enterprise Client Accounts
              </span>
            </div>
          </div>

          {/* Premium 21-Logo Responsive Grid with High Contrast White Plates */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-8">
            {ENTERPRISE_CLIENTS.map((client) => (
              <div
                key={`portfolio-${client.id}`}
                className="group relative bg-white rounded-xl p-3 flex flex-col items-center justify-center aspect-[16/10] transition-all duration-200 hover:scale-[1.04] hover:shadow-xl shadow-md border border-slate-100"
                title={`${client.name} · ${client.sector}`}
              >
                <div className="w-full h-full flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                </div>
                {/* Subtle client name caption on hover */}
                <span className="text-[10px] text-slate-500 group-hover:text-blue-600 font-medium truncate max-w-full text-center mt-1 transition-colors">
                  {client.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Dynamic Infinite Credibility Ticker */}
          <div className="pt-5 border-t border-slate-800/80 overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-slow flex items-center gap-4 py-1">
              {[...marqueeRowOne, ...marqueeRowTwo, ...marqueeRowOne].map((client, idx) => (
                <div
                  key={`ticker-${client.id}-${idx}`}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/80 text-xs text-slate-200 shrink-0 font-medium shadow-xs"
                >
                  <div className="h-5 w-12 bg-white rounded p-0.5 flex items-center justify-center shrink-0">
                    <img
                      src={client.logoUrl}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-white">{client.name}</span>
                  <span className="text-blue-300 text-[10px]">({client.sector.split('&')[0].trim()})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 2. ENTERPRISE PROJECT ENGAGEMENTS WITH CLIENT LOGO SIGNS */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Enterprise Project Engagements
              </h3>
              <p className="text-xs text-slate-600">
                Select an industry sector to view completed installations, fiber backbones, and SIRA CCTV systems.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    selectedSector === sec
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: WITH CLIENT LOGO SIGNS PROMINENTLY INCLUDED */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Prominent Client Logo Sign + Sector Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                    
                    {/* Official Client Logo Sign/Mark */}
                    <div className="h-12 w-28 bg-slate-50 rounded-xl p-1.5 flex items-center justify-center border border-slate-200 shadow-2xs shrink-0 group-hover:border-blue-400 group-hover:bg-white transition-colors">
                      <img
                        src={client.logoUrl}
                        alt={`${client.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 block mb-1">
                        {client.sector.split('&')[0].trim()}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 flex items-center justify-end gap-1 font-medium">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{client.year}</span>
                      </span>
                    </div>
                  </div>

                  {/* Client Name & Arabic Identity */}
                  <div className="mb-2.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                      <span>{client.name}</span>
                      {client.arabicName && (
                        <span className="text-xs text-slate-500 font-arabic font-normal">
                          ({client.arabicName})
                        </span>
                      )}
                    </h4>
                  </div>

                  {/* One-line Scope */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {client.scope}
                  </p>
                </div>

                {/* Card Bottom: Location and Handover Status */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{client.location}</span>
                  </div>
                  <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Commissioned</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

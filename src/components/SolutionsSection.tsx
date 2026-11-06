import React, { useState } from 'react';
import { CORE_SOLUTIONS, SolutionItem } from '../data/sachitelData';
import { 
  Network, 
  ShieldCheck, 
  Video, 
  Server, 
  Check, 
  ArrowRight, 
  X, 
  FileSpreadsheet, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate: (sectionId: string) => void;
  onSelectSolutionForRfq?: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onNavigate,
  onSelectSolutionForRfq 
}) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  const getIcon = (id: string) => {
    switch (id) {
      case 'data-networks':
        return <Network className="w-5 h-5 text-[#0066FF]" />;
      case 'security-systems':
        return <ShieldCheck className="w-5 h-5 text-[#00F0FF]" />;
      case 'audiovisual-systems':
        return <Video className="w-5 h-5 text-[#10B981]" />;
      case 'enterprise-it':
        return <Server className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Layers className="w-5 h-5 text-white" />;
    }
  };

  const filteredSolutions = activeTab === 'all' 
    ? CORE_SOLUTIONS 
    : CORE_SOLUTIONS.filter(s => s.id === activeTab);

  const handleOpenRfqWithSolution = (title: string) => {
    if (onSelectSolutionForRfq) {
      onSelectSolutionForRfq(title);
    }
    setSelectedSolution(null);
    onNavigate('contact');
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-[#050B14]">
      {/* Background photonics mesh */}
      <div className="absolute inset-0 bg-photonics-grid opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
              <span>02</span>
              <span>·</span>
              <span>CORE TECHNOLOGY SOLUTIONS HUB</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3 text-balance">
              Mission-Critical Infrastructure Solutions
            </h2>
            <p className="text-[#94A3B8] text-base">
              Engineered to stringent international TIA/EIA standards and approved by Dubai SIRA, TDRA, and municipal authorities.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#081325] rounded-lg border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#0066FF] text-white font-semibold shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              All Systems ({CORE_SOLUTIONS.length})
            </button>
            {CORE_SOLUTIONS.map(sol => (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors hidden sm:inline-block ${
                  activeTab === sol.id
                    ? 'bg-[#0066FF] text-white font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {sol.category}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Core Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative rounded-xl bg-[#081325] border border-white/10 hover:border-[#00F0FF]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
            >
              {/* Image Banner with subtle zoom and HUD */}
              <div className="relative h-56 w-full overflow-hidden bg-[#0B192C]">
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.sol-img-fallback')) {
                      const fb = document.createElement('div');
                      fb.className = 'sol-img-fallback w-full h-full flex items-center justify-center bg-[#0B192C] text-[#00F0FF] font-mono text-sm';
                      fb.innerText = solution.category;
                      parent.appendChild(fb);
                    }
                  }}
                />
                
                {/* Image Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/50 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="p-2 rounded bg-[#050B14]/80 backdrop-blur-md border border-white/10 shadow-sm">
                    {getIcon(solution.id)}
                  </div>
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-[#050B14]/85 backdrop-blur-md text-white border border-white/10">
                    {solution.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider mb-0.5">
                    {solution.subtitle}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00F0FF] transition-colors">
                    {solution.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {solution.shortDesc}
                  </p>

                  {/* Key Technical Specifications */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#dce3f0] mb-2 font-semibold flex items-center justify-between">
                      <span>Engineering Specifications</span>
                      <span className="text-[#00F0FF] text-[10px]">VERIFIED TIA/SIRA</span>
                    </div>
                    <ul className="space-y-1.5">
                      {solution.specs.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {solution.standards.map((std, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-[#c2c6d8] bg-white/5 px-2 py-0.5 rounded border border-white/10"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedSolution(solution)}
                    className="text-xs font-mono font-medium text-[#00F0FF] hover:text-white flex items-center gap-1.5 py-1 transition-colors"
                  >
                    <span>Full Spec Sheet & BOM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleOpenRfqWithSolution(solution.title)}
                    className="px-3 py-1.5 rounded text-xs font-semibold text-white bg-[#0066FF]/20 hover:bg-[#0066FF] border border-[#00F0FF]/30 hover:border-[#00F0FF] transition-all duration-200"
                  >
                    Request BOQ
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Assurance Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#081325] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#0066FF]/15 border border-[#00F0FF]/30 text-[#00F0FF] shrink-0">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Have an Existing MEP / IT Consultant Tender BOQ?</h4>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Upload your AutoCAD schematics or Excel equipment schedule for competitive pricing within 24 hours.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all shrink-0 whitespace-nowrap"
          >
            Submit Tender Documents
          </button>
        </div>

      </div>

      {/* Detailed Technical Spec Sheet Modal */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSolution(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#081325] border-2 border-[#00F0FF]/40 shadow-2xl p-6 sm:p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                  {selectedSolution.category} · Technical Dossier
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {selectedSolution.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSolution(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-sm text-[#94A3B8]">
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                  System Architecture & Scope
                </h4>
                <p className="leading-relaxed text-sm">
                  {selectedSolution.fullDesc}
                </p>
              </div>

              {/* All Specs */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                  Technical Parameters & Material Matrix
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSolution.specs.map((sp, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#0B192C] border border-white/5 flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="text-[#dce3f0]">{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Partners & Brands */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                  Authorized Hardware Integration Partners
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSolution.hardwarePartners.map((p, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-[#0066FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 text-xs font-mono">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Project Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                  Client Deliverables & Handover Package
                </h4>
                <div className="space-y-1.5">
                  {selectedSolution.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#dce3f0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#94A3B8]">
                Standard Turnaround: 24h Site Survey
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-mono text-[#94A3B8] hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => handleOpenRfqWithSolution(selectedSolution.title)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0054D6] border border-[#00F0FF]/40 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Custom BOQ for this Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

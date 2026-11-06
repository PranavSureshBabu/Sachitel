import React, { useState } from 'react';
import { CORE_SOLUTIONS } from '../data/sachitelData';
import { 
  Network, 
  ShieldCheck, 
  Video, 
  Server, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate: (sectionId: string) => void;
  onSelectSolutionForRfq?: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onNavigate,
  onSelectSolutionForRfq 
}) => {
  // Track expanded specifications per card
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleSpecs = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'data-networks':
        return <Network className="w-5 h-5 text-blue-600" />;
      case 'security-systems':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'audiovisual-systems':
        return <Video className="w-5 h-5 text-blue-600" />;
      case 'enterprise-it':
        return <Server className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleOpenRfqWithSolution = (title: string) => {
    if (onSelectSolutionForRfq) {
      onSelectSolutionForRfq(title);
    }
    onNavigate('contact');
  };

  // Verified clean photography for each solution
  const solutionImages: { [key: string]: { url: string; alt: string } } = {
    'data-networks': {
      url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      alt: 'Clean optical fiber connections and structured cabling'
    },
    'security-systems': {
      url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      alt: 'Commercial security camera and surveillance system'
    },
    'audiovisual-systems': {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      alt: 'Modern corporate boardroom video conferencing setup'
    },
    'enterprise-it': {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      alt: 'Structured server racks and precision cooling environment'
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-24 bg-[#EDF2F7] border-b border-slate-300/80">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Pattern: small label, clear heading, 1-2 line intro */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
            02 · Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            What We Deliver
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide certified physical network cabling, SIRA electronic security, corporate audiovisual systems, and server room infrastructure.
          </p>
        </div>

        {/* 2x2 Card Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {CORE_SOLUTIONS.map((solution) => {
            const isExpanded = !!expandedCards[solution.id];
            const imgData = solutionImages[solution.id] || { url: solution.imageUrl, alt: solution.title };

            return (
              <div
                key={solution.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Clean Visual Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    {/* REPLACE with real project photo */}
                    <img
                      src={imgData.url}
                      alt={imgData.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 text-blue-600 shadow-sm">
                        {getIcon(solution.id)}
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 backdrop-blur-sm text-slate-800 border border-slate-200 shadow-sm">
                        {solution.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {solution.title}
                    </h3>
                    
                    {/* One-line clean summary */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {solution.shortDesc}
                    </p>

                    {/* 3 Key Points */}
                    <div className="space-y-2 mb-4">
                      {solution.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable "View specifications" Area */}
                    <div className="pt-3 border-t border-slate-100">
                      <button
                        onClick={() => toggleSpecs(solution.id)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide specifications' : 'View specifications & standards'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-3 animate-in fade-in duration-150">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-1">Additional Specifications:</div>
                            <ul className="space-y-1">
                              {solution.specs.slice(3).map((sp, idx) => (
                                <li key={idx} className="text-slate-600">• {sp}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-1">Compliance Standards:</div>
                            <div className="flex flex-wrap gap-1.5">
                              {solution.standards.map((std, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-white text-[11px] text-slate-700 border border-slate-200 shadow-2xs">
                                  {std}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-1">Equipment Partners:</div>
                            <div className="text-slate-600 text-[11px]">
                              {solution.hardwarePartners.join(', ')}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenRfqWithSolution(solution.title)}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-blue-700 hover:text-white bg-blue-50/80 hover:bg-blue-600 border border-blue-200 transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shadow-2xs"
                  >
                    <span>Request Survey for this Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

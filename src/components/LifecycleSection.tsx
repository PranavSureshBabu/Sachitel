import React, { useState } from 'react';
import { LIFECYCLE_STAGES, LifecycleStage } from '../data/sachitelData';
import { 
  Compass, 
  FileCheck2, 
  CalendarCheck, 
  Wrench, 
  Cpu, 
  Activity, 
  LifeBuoy, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ToolCase as Tools
} from 'lucide-react';

export const LifecycleSection: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = LIFECYCLE_STAGES[selectedStageIndex];

  const getStageIcon = (id: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-[#00F0FF]' : 'text-[#94A3B8]'}`;
    switch (id) {
      case 'design':
        return <Compass className={iconClass} />;
      case 'documentation':
        return <FileCheck2 className={iconClass} />;
      case 'pm':
        return <CalendarCheck className={iconClass} />;
      case 'installation':
        return <Wrench className={iconClass} />;
      case 'programming':
        return <Cpu className={iconClass} />;
      case 'commissioning':
        return <Activity className={iconClass} />;
      case 'maintenance':
        return <LifeBuoy className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <section id="lifecycle" className="py-20 lg:py-28 relative bg-[#081325]/80 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
            <span>03</span>
            <span>·</span>
            <span>TURNKEY DEPLOYMENT LIFECYCLE</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3 text-balance">
            7-Stage Lifecycle Delivery & Turnkey Execution
          </h2>
          <p className="text-[#94A3B8] text-base">
            From initial CAD schematics and SIRA authority filings to Fluke OTDR certification and 24/7 AMC coverage, our delivery methodology ensures 100% first-pass regulatory compliance.
          </p>
        </div>

        {/* 7-Stage Horizontal Stepper Track (Responsive Scrollable) */}
        <div className="relative mb-12">
          
          {/* Connector Line behind steps */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-white/10 z-0" />
          <div 
            className="hidden lg:block absolute top-7 left-12 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00F0FF] z-0 transition-all duration-500" 
            style={{ width: `${(selectedStageIndex / (LIFECYCLE_STAGES.length - 1)) * 90}%` }}
          />

          <div className="flex items-center justify-between overflow-x-auto pb-4 pt-2 gap-3 sm:gap-4 no-scrollbar relative z-10">
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              const isPassed = idx < selectedStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`flex flex-col items-center min-w-[130px] p-2 sm:p-3 rounded-lg transition-all duration-200 group text-center shrink-0 ${
                    isSelected
                      ? 'bg-[#0B192C] border-2 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                      : 'bg-[#081325] border border-white/10 hover:border-white/30'
                  }`}
                >
                  {/* Step Bubble */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-2 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#0066FF] text-white shadow-[0_0_15px_#00F0FF]'
                        : isPassed
                        ? 'bg-[#0B192C] text-[#10B981] border border-[#10B981]/40'
                        : 'bg-[#050B14] text-[#94A3B8] border border-white/10'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> : getStageIcon(stage.id, isSelected)}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider text-[#00F0FF] font-semibold uppercase mb-0.5">
                    Stage 0{stage.step}
                  </span>
                  <span className={`text-xs font-semibold max-w-[120px] line-clamp-1 ${isSelected ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'}`}>
                    {stage.title.split(' ')[0]} {stage.title.split(' ')[1] || ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Telemetry Viewport Card */}
        <div className="rounded-xl bg-[#0B192C] border border-[#00F0FF]/30 p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Subtle top laser trace */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 mb-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#0066FF]/20 text-[#00F0FF] font-mono text-xs font-bold border border-[#00F0FF]/30">
                STAGE 0{activeStage.step} OF 07
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                {activeStage.title}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-1.5 bg-[#050B14] px-3 py-1.5 rounded border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Timeline: {activeStage.duration}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-[#050B14] px-3 py-1.5 rounded border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981] font-semibold">{activeStage.auditCheck}</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Detail Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Objective & Deep Technical Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#00F0FF] mb-1 font-semibold">
                  Phase Objective
                </div>
                <p className="text-base font-semibold text-white">
                  {activeStage.objective}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5 font-semibold">
                  Engineering Execution Protocol
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {activeStage.details}
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2 font-semibold">
                  Governing Standards & Protocols
                </div>
                <div className="inline-block px-3 py-1.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-[#00F0FF]">
                  {activeStage.standards}
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables & Diagnostic Tools */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-white mb-2 font-semibold flex items-center justify-between">
                  <span>Phase Deliverables</span>
                  <span className="text-[#10B981] text-[10px]">VERIFIED HANDOVER</span>
                </div>
                <ul className="space-y-2">
                  {activeStage.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#dce3f0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-white mb-2 font-semibold">
                  Authorized Diagnostic & Software Tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeStage.keyTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#081325] text-xs font-mono text-[#94A3B8] border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Stage Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setSelectedStageIndex(Math.max(0, selectedStageIndex - 1))}
              disabled={selectedStageIndex === 0}
              className="px-4 py-2 rounded text-xs font-mono font-medium text-[#94A3B8] hover:text-white bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Stage</span>
            </button>

            <div className="text-xs font-mono text-[#94A3B8] hidden sm:block">
              Click any stage in the track above or step forward
            </div>

            <button
              onClick={() => setSelectedStageIndex(Math.min(LIFECYCLE_STAGES.length - 1, selectedStageIndex + 1))}
              disabled={selectedStageIndex === LIFECYCLE_STAGES.length - 1}
              className="px-4 py-2 rounded text-xs font-mono font-medium text-white bg-[#0066FF] hover:bg-[#0054D6] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-2 border border-[#00F0FF]/30"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

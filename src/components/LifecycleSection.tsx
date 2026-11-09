import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../data/sachitelData';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export const LifecycleSection: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = LIFECYCLE_STAGES[selectedStageIndex];

  // Clean, short labels as requested to ensure zero truncation across all viewports
  const shortLabels = [
    'Design',
    'Documentation',
    'Planning',
    'Cabling',
    'Systems',
    'Testing',
    'Support'
  ];

  return (
    <section id="documentation" className="py-20 lg:py-24 bg-[#E8EFF6] border-b border-slate-300/80">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Pattern: small label, clear heading, 1-2 line intro */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 font-bold">
            03 · Documentation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            How We Deliver Your Project, Start to Finish
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We guide your installation through 7 structured stages from initial site survey and authority approvals to Fluke certification and 24/7 support.
          </p>
        </div>

        {/* Desktop & Mobile: Clean Horizontal Stepper with short single-word labels */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-1 sm:gap-2 p-1.5 bg-white/80 backdrop-blur-xs rounded-xl border border-slate-300/80 overflow-x-auto no-scrollbar shadow-xs">
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              const shortName = shortLabels[idx];

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`flex-1 min-w-[76px] sm:min-w-0 py-2.5 px-2 rounded-lg text-xs font-medium transition-all text-center whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isSelected
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-[10px] opacity-80 font-mono mb-0.5">0{stage.step}</div>
                  <div>{shortName}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Telemetry Viewport Card */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          {/* Top Stage Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 mb-6 gap-4">
            <div>
              <div className="text-xs font-mono text-blue-700 uppercase font-bold mb-1">
                Stage 0{activeStage.step} of 07 · {shortLabels[selectedStageIndex]}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeStage.title}
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-700 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-mono">{activeStage.duration}</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{activeStage.auditCheck}</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Detail Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Objective and Execution Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Phase Objective
                </h4>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  {activeStage.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Execution Details
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeStage.details}
                </p>
              </div>
            </div>

            {/* Right Column (5 cols): Verified Deliverables */}
            <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-slate-200 lg:pl-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Verified Deliverables
                </h4>
                <ul className="space-y-2">
                  {activeStage.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Stepper Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setSelectedStageIndex(Math.max(0, selectedStageIndex - 1))}
              disabled={selectedStageIndex === 0}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-2 shadow-2xs focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Stage</span>
            </button>

            <div className="text-xs font-medium text-slate-500 hidden sm:block">
              Stage {selectedStageIndex + 1} of {LIFECYCLE_STAGES.length}
            </div>

            <button
              onClick={() => setSelectedStageIndex(Math.min(LIFECYCLE_STAGES.length - 1, selectedStageIndex + 1))}
              disabled={selectedStageIndex === LIFECYCLE_STAGES.length - 1}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
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

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Zap, Server, Shield, Video, Network } from 'lucide-react';

interface EstimatorSectionProps {
  onTransferEstimateToRfq: (estimateDetails: {
    drops: number;
    cameras: number;
    rooms: number;
    racks: number;
    sla: string;
    totalAed: string;
    timeline: string;
  }) => void;
}

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ onTransferEstimateToRfq }) => {
  const [drops, setDrops] = useState<number>(120);
  const [cameras, setCameras] = useState<number>(24);
  const [rooms, setRooms] = useState<number>(2);
  const [racks, setRacks] = useState<number>(3);
  const [slaTier, setSlaTier] = useState<'Standard' | 'Enterprise' | 'Sovereign'>('Enterprise');

  // Dynamic calculations based on UAE market unit rates
  const cablingCost = drops * 380; // AED per certified drop including patch panel, faceplate & Fluke test
  const cctvCost = cameras * 1450; // AED per commercial SIRA camera + NVR storage share + cabling
  const avCost = rooms * 28000; // AED per automated MTR executive boardroom
  const racksCost = racks * 14500; // AED per 42U heavy duty rack + online double conversion UPS + iPDU
  
  const baseSubtotal = cablingCost + cctvCost + avCost + racksCost;
  const slaMultiplier = slaTier === 'Standard' ? 1.0 : slaTier === 'Enterprise' ? 1.12 : 1.25;
  const totalMin = Math.round((baseSubtotal * slaMultiplier) * 0.95);
  const totalMax = Math.round((baseSubtotal * slaMultiplier) * 1.08);

  const estimatedCableMeters = drops * 65; // average 65m per drop
  const estimatedStorageTb = Math.ceil(cameras * 0.65 * 31 / 30); // 31-day SIRA H.265 storage
  const estimatedTimelineWeeks = Math.max(2, Math.ceil((drops / 50) + (cameras / 15) + rooms));

  const handleApply = () => {
    onTransferEstimateToRfq({
      drops,
      cameras,
      rooms,
      racks,
      sla: slaTier,
      totalAed: `AED ${totalMin.toLocaleString()} - ${totalMax.toLocaleString()}`,
      timeline: `${estimatedTimelineWeeks} Weeks`
    });
  };

  return (
    <section className="py-20 relative bg-[#050B14] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#00F0FF] mb-2 flex items-center gap-2">
            <span>04</span>
            <span>·</span>
            <span>ENTERPRISE RFP & BOQ MODELER</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight mb-3 text-balance">
            Interactive Project Capacity & Budget Estimator
          </h2>
          <p className="text-[#94A3B8] text-base">
            Model your telecommunications, SIRA CCTV, executive AV, and data center requirements with real-time UAE market benchmarks.
          </p>
        </div>

        {/* Modeler 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Interactive Sliders */}
          <div className="lg:col-span-7 space-y-6 bg-[#081325] p-6 sm:p-8 rounded-xl border border-white/10">
            
            {/* Slider 1: Data Drops */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Network className="w-4 h-4 text-[#0066FF]" />
                  <span>Structured Cabling Points (Cat6A / Fiber Drops)</span>
                </label>
                <span className="font-mono text-sm font-bold text-[#00F0FF] bg-[#050B14] px-2.5 py-1 rounded border border-white/10">
                  {drops} Points
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={drops}
                onChange={(e) => setDrops(Number(e.target.value))}
                className="w-full h-2 bg-[#0B192C] rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-1">
                <span>20 Drops (Small Office)</span>
                <span>400 Drops</span>
                <span>800+ Drops (Campus)</span>
              </div>
            </div>

            {/* Slider 2: SIRA CCTV */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00F0FF]" />
                  <span>SIRA-Approved IP CCTV Cameras (4K / Dome / PTZ)</span>
                </label>
                <span className="font-mono text-sm font-bold text-[#00F0FF] bg-[#050B14] px-2.5 py-1 rounded border border-white/10">
                  {cameras} Cameras
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="96"
                step="2"
                value={cameras}
                onChange={(e) => setCameras(Number(e.target.value))}
                className="w-full h-2 bg-[#0B192C] rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-1">
                <span>4 Cameras</span>
                <span>48 Cameras</span>
                <span>96+ Cameras</span>
              </div>
            </div>

            {/* Slider 3: AV Rooms */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#10B981]" />
                  <span>Executive AV Video Conferencing Boardrooms</span>
                </label>
                <span className="font-mono text-sm font-bold text-[#10B981] bg-[#050B14] px-2.5 py-1 rounded border border-white/10">
                  {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full h-2 bg-[#0B192C] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-1">
                <span>1 Executive Boardroom</span>
                <span>4 Boardrooms</span>
                <span>8 Rooms</span>
              </div>
            </div>

            {/* Slider 4: Server Racks */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#F59E0B]" />
                  <span>42U Server Racks with Smart UPS & In-Row Cooling</span>
                </label>
                <span className="font-mono text-sm font-bold text-[#F59E0B] bg-[#050B14] px-2.5 py-1 rounded border border-white/10">
                  {racks} {racks === 1 ? 'Rack' : 'Racks'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={racks}
                onChange={(e) => setRacks(Number(e.target.value))}
                className="w-full h-2 bg-[#0B192C] rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-1">
                <span>1 Rack</span>
                <span>6 Racks</span>
                <span>12 Racks</span>
              </div>
            </div>

            {/* SLA Support Tier Selector */}
            <div className="pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-2">
                Annual Maintenance Contract (AMC) SLA Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Standard', 'Enterprise', 'Sovereign'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSlaTier(tier)}
                    className={`py-2 px-3 rounded text-xs font-mono font-medium transition-colors border ${
                      slaTier === tier
                        ? 'bg-[#0066FF] text-white border-[#00F0FF] shadow-sm font-bold'
                        : 'bg-[#050B14] text-[#94A3B8] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {tier} {tier === 'Enterprise' ? '(24/7)' : ''}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Live Telemetry Readout & Transfer */}
          <div className="lg:col-span-5 bg-[#0B192C] p-6 sm:p-8 rounded-xl border-2 border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,102,255,0.2)] flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#00F0FF]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    Real-Time BOQ Assessment
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                  UAE COMPLIANT
                </span>
              </div>

              {/* Total Estimated Budget Callout */}
              <div className="p-4 rounded-lg bg-[#081325] border border-white/10 mb-6">
                <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                  Indicative Turnkey Budget Range
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b3c5ff] to-[#00F0FF]">
                  AED {totalMin.toLocaleString()} - {totalMax.toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8] mt-1">
                  *Excludes UAE VAT · Includes Fluke certification & SIRA sign-off
                </div>
              </div>

              {/* Telemetry Breakdown */}
              <div className="space-y-3 mb-8 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-[#94A3B8]">
                  <span>Estimated LSZH Cable</span>
                  <span className="text-white font-semibold">~{estimatedCableMeters.toLocaleString()} Meters</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-[#94A3B8]">
                  <span>SIRA NVR RAID-6 Storage</span>
                  <span className="text-white font-semibold">~{estimatedStorageTb} TB (31 Days)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-[#94A3B8]">
                  <span>Estimated Deployment Time</span>
                  <span className="text-[#00F0FF] font-semibold">{estimatedTimelineWeeks} Weeks</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5 text-[#94A3B8]">
                  <span>Support Service Level</span>
                  <span className="text-[#10B981] font-semibold">{slaTier} Tier</span>
                </div>
              </div>
            </div>

            {/* Action to Transfer to Form */}
            <div>
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 rounded text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:border-[#00F0FF] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Transfer Estimate to Consultation Form</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-[11px] text-[#94A3B8] text-center mt-2.5">
                Automatically populates your requirements in the RFQ inquiry below.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

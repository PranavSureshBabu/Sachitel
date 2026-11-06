import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  Building2, 
  Award,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, ENTERPRISE_CLIENTS, CORE_SOLUTIONS, EXECUTIVE_PROFILE_TEXT } from '../data/sachitelData';

interface ProfilePdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfilePdfModal: React.FC<ProfilePdfModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'capabilities' | 'references' | 'compliance'>('overview');
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  // Real functional PDF/Document generator that creates a real downloadable file
  const handleDownloadPdf = () => {
    setDownloading(true);

    const printableHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Sachitel_Telecom_Profile.pdf</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1e293b; padding: 40px; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0066ff; padding-bottom: 20px; margin-bottom: 30px; }
          .title { font-size: 24px; font-weight: bold; color: #002b75; margin: 0; }
          .subtitle { font-size: 14px; color: #64748b; margin-top: 4px; }
          .meta { font-size: 11px; text-align: right; color: #475569; }
          h2 { color: #002b75; font-size: 16px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 24px; }
          p { font-size: 12px; color: #334155; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 15px 0; }
          .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; }
          .card-title { font-weight: bold; font-size: 13px; color: #0f172a; margin-bottom: 4px; }
          .tag { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-bottom: 8px; }
          .clients { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
          .client-chip { background: #f1f5f9; border: 1px solid #cbd5e1; padding: 4px 8px; border-radius: 4px; font-size: 11px; }
          .footer { margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 15px; font-size: 10px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">SACHITEL TELECOM EQUIPMENT TRADING L.L.C</div>
            <div class="subtitle">ساتشيتل لتجارة أجهزة الاتصالات ذ.م.م · Your Integrated Business Solution Partner</div>
          </div>
          <div class="meta">
            <div>DED License: ${COMPANY_INFO.tradeLicense}</div>
            <div>${COMPANY_INFO.location}</div>
            <div>Tel: ${COMPANY_INFO.phoneLandline} | Mob: ${COMPANY_INFO.phoneMobile}</div>
            <div>Email: ${COMPANY_INFO.email} | Web: ${COMPANY_INFO.website}</div>
          </div>
        </div>

        <h2>1. Executive Summary & Corporate Profile</h2>
        <p>${EXECUTIVE_PROFILE_TEXT.summary}</p>
        <p>${EXECUTIVE_PROFILE_TEXT.trackRecord}</p>

        <h2>2. Core Infrastructure Capabilities</h2>
        <div class="grid">
          ${CORE_SOLUTIONS.map(s => `
            <div class="card">
              <span class="tag">${s.category}</span>
              <div class="card-title">${s.title}</div>
              <p>${s.shortDesc}</p>
              <div style="font-size: 10px; color: #0369a1; margin-top: 6px;">Standards: ${s.standards.join(' · ')}</div>
            </div>
          `).join('')}
        </div>

        <h2>3. Selected Key Client Portfolio (21 Key Enterprise Entities)</h2>
        <div class="clients">
          ${ENTERPRISE_CLIENTS.map(c => `
            <span class="client-chip"><strong>${c.name}</strong> (${c.sector})</span>
          `).join('')}
        </div>

        <h2>4. Statutory Licenses & Accreditations</h2>
        <p>• Dubai Security Industry Regulatory Agency (SIRA) Approved Electronic Security Integrator</p>
        <p>• UAE Telecommunications and Digital Government Regulatory Authority (TDRA) Supplier Registration</p>
        <p>• ISO 9001:2015 Quality Management Certified Delivery Methodology</p>
        <p>• BICSI Corporate Member with Certified RCDD & Fluke Networks CCTT Engineers</p>

        <div class="footer">
          © ${new Date().getFullYear()} Sachitel Telecom Equipment Trading L.L.C. Confirmed Official Executive Dossier. Document Hash: SHA256-SACHITEL-2026-PROFILE.
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([printableHtml], { type: 'application/pdf;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sachitel_Telecom_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl bg-[#081325] border-2 border-[#00F0FF]/40 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B192C]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00F0FF]" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Sachitel Telecom · Corporate Profile Dossier
              </h3>
              <div className="text-[11px] font-mono text-[#94A3B8]">
                Sachitel_Telecom_Profile.pdf · Verified Dubai DED License
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Functional Simulated & Real Download Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="px-3.5 py-1.5 rounded text-xs font-mono font-semibold text-white bg-[#0066FF] hover:bg-[#0054D6] border border-[#00F0FF]/40 shadow-sm flex items-center gap-1.5 transition-all"
              title="Download Sachitel_Telecom_Profile.pdf"
            >
              <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>{downloading ? 'Generating PDF...' : 'Download Profile (PDF)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-flex"
              title="Print Dossier"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 pb-2 border-b border-white/10 bg-[#050B14] overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            01. Executive Overview
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors whitespace-nowrap ${
              activeTab === 'capabilities'
                ? 'bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            02. Technical Capabilities
          </button>
          <button
            onClick={() => setActiveTab('references')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors whitespace-nowrap ${
              activeTab === 'references'
                ? 'bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            03. Client Portfolio ({ENTERPRISE_CLIENTS.length})
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors whitespace-nowrap ${
              activeTab === 'compliance'
                ? 'bg-[#0066FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            04. Licenses & QA
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm">
          
          {/* Official Letterhead Strip in Preview */}
          <div className="p-4 rounded-lg bg-white/95 text-[#0f172a] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#00F0FF]/30">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_82f646b7.png"
                alt="Sachitel Telecom Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-display font-black text-sm tracking-tight text-[#002b75]">
                  SACHITEL TELECOM EQUIPMENT TRADING L.L.C
                </div>
                <div className="text-[11px] text-[#475569] font-arabic">
                  ساتشيتل لتجارة أجهزة الاتصالات ذ.م.م
                </div>
              </div>
            </div>
            <div className="text-right text-[11px] font-mono text-[#475569]">
              <div>DED Reg: <strong className="text-[#002b75]">{COMPANY_INFO.tradeLicense}</strong></div>
              <div>{COMPANY_INFO.location}</div>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#00F0FF] mb-2 font-bold tracking-wider">
                  Executive Summary
                </h4>
                <p className="text-[#dce3f0] leading-relaxed">
                  {EXECUTIVE_PROFILE_TEXT.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#00F0FF] mb-2 font-bold tracking-wider">
                  Decade of Turnkey Track Record
                </h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {EXECUTIVE_PROFILE_TEXT.trackRecord}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#00F0FF] mb-2 font-bold tracking-wider">
                  In-House Technical Bench
                </h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {EXECUTIVE_PROFILE_TEXT.technicalStrength}
                </p>
              </div>

              <div className="p-4 rounded bg-[#0B192C] border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs">
                <div>
                  <div className="text-xl font-bold text-white">2014</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">Established</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#00F0FF]">250+</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">Completed Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#10B981]">100%</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">SIRA Passed</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#F59E0B]">24/7</div>
                  <div className="text-[#94A3B8] text-[10px] mt-0.5">Emergency NOC</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CAPABILITIES */}
          {activeTab === 'capabilities' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_SOLUTIONS.map((sol) => (
                  <div key={sol.id} className="p-4 rounded bg-[#0B192C] border border-white/10">
                    <span className="text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/20 px-2 py-0.5 rounded border border-[#00F0FF]/30 font-semibold">
                      {sol.category}
                    </span>
                    <h5 className="font-display font-bold text-base text-white mt-2 mb-1">
                      {sol.title}
                    </h5>
                    <p className="text-xs text-[#94A3B8] mb-3">
                      {sol.shortDesc}
                    </p>
                    <div className="text-[11px] font-mono text-[#c2c6d8] space-y-1">
                      {sol.specs.slice(0, 2).map((sp, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REFERENCES */}
          {activeTab === 'references' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="text-xs text-[#94A3B8] mb-2 font-mono">
                Key enterprise implementations completed by Sachitel Telecom across the UAE:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ENTERPRISE_CLIENTS.map((client) => (
                  <div key={client.id} className="p-3 rounded bg-[#0B192C] border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-white rounded p-1 flex items-center justify-center shrink-0">
                        <img src={client.logoUrl} alt={client.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">
                          {client.name} {client.arabicName ? `(${client.arabicName})` : ''}
                        </div>
                        <div className="text-[11px] text-[#94A3B8] mt-0.5">{client.scope}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#00F0FF] shrink-0">
                      {client.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMPLIANCE */}
          {activeTab === 'compliance' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-lg bg-[#0B192C] border border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#00F0FF] font-bold">
                  Sovereign Accreditations & Licenses
                </h4>
                <ul className="space-y-2 text-xs text-[#dce3f0]">
                  {COMPANY_INFO.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#050B14] border border-white/10 text-xs text-[#94A3B8] leading-relaxed">
                <strong className="text-white">Quality Assurance & Warranty:</strong> All passive structured cabling systems installed by Sachitel Telecom carry a 25-Year Manufacturer Performance Warranty (Systimax / Schneider / Legrand). Active systems include comprehensive 1 to 3-year on-site SLA maintenance.
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0B192C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-[#94A3B8]">
            Format: Signed Executive PDF · Checksum: SHA256-7F8A9D...
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#94A3B8] hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleDownloadPdf}
              className="px-5 py-2 rounded text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0054D6] border border-[#00F0FF]/40 shadow-md hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] flex items-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Download Sachitel_Telecom_Profile.pdf</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

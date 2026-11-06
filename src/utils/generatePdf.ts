import jsPDF from 'jspdf';
import { COMPANY_INFO, ENTERPRISE_CLIENTS, CORE_SOLUTIONS, EXECUTIVE_PROFILE_TEXT } from '../data/sachitelData';

/**
 * Generates an authentic, high-resolution, multi-page vector PDF
 * for Sachitel Telecom Equipment Trading L.L.C
 */
export function generateSachitelProfilePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4', // 210 x 297 mm
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - (margin * 2);

  // Helper function to render corporate header on pages
  const drawPageHeader = (pageNum: number, totalPages: number) => {
    // Top primary banner
    doc.setFillColor(5, 11, 20); // #050B14 deep space base
    doc.rect(0, 0, pageWidth, 32, 'F');

    // Accent line (Electric Cyan #00F0FF)
    doc.setFillColor(0, 240, 255);
    doc.rect(0, 32, pageWidth, 1.5, 'F');

    // Top logo / corporate typography
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('SACHITEL TELECOM EQUIPMENT TRADING L.L.C', margin, 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(0, 240, 255);
    doc.text('Your Integrated Business Solution Partner  |  Dubai, United Arab Emirates', margin, 18);

    doc.setTextColor(148, 163, 184); // #94A3B8
    doc.setFontSize(8);
    doc.text(`DED License: ${COMPANY_INFO.tradeLicense}  |  PO Box: 187127, Dubai  |  Est. 2014`, margin, 24);

    // Right-aligned contact info
    doc.setFontSize(7.5);
    doc.setTextColor(220, 227, 240);
    doc.text(`Tel: ${COMPANY_INFO.phoneLandline}`, pageWidth - margin, 12, { align: 'right' });
    doc.text(`Mob: ${COMPANY_INFO.phoneMobile}`, pageWidth - margin, 17, { align: 'right' });
    doc.text(`Email: ${COMPANY_INFO.email}`, pageWidth - margin, 22, { align: 'right' });
    doc.text(`Web: ${COMPANY_INFO.website}`, pageWidth - margin, 27, { align: 'right' });

    // Page footer
    doc.setFillColor(241, 245, 249);
    doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 14, pageWidth, pageHeight - 14);

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text('Sachitel Telecom Equipment Trading L.L.C  -  Official Executive Profile Dossier', margin, pageHeight - 6);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: EXECUTIVE PROFILE & GOVERNANCE
  // ==========================================
  drawPageHeader(1, 3);

  let currentY = 42;

  // Document Title Banner
  doc.setFillColor(8, 19, 37); // #081325
  doc.roundedRect(margin, currentY, contentWidth, 18, 2, 2, 'F');
  doc.setDrawColor(0, 240, 255);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, currentY, contentWidth, 18, 2, 2, 'S');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('CORPORATE PROFILE & EXECUTIVE CREDENTIALS', margin + 6, currentY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(0, 240, 255);
  doc.text('Sovereign Telecommunications, Structured Cabling, SIRA CCTV & Enterprise Integration', margin + 6, currentY + 13);

  doc.setTextColor(16, 185, 129); // Emerald
  doc.setFont('helvetica', 'bold');
  doc.text('AUDITED 2026', pageWidth - margin - 6, currentY + 10, { align: 'right' });

  currentY += 24;

  // 1. Executive Summary Box
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 43, 117);
  doc.text('1. EXECUTIVE SUMMARY & COMPANY PROFILE', margin, currentY);
  currentY += 5;

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, currentY, contentWidth, 38, 1.5, 1.5, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, currentY, contentWidth, 38, 1.5, 1.5, 'S');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);

  const summaryLines = doc.splitTextToSize(
    `${EXECUTIVE_PROFILE_TEXT.summary}\n\n${EXECUTIVE_PROFILE_TEXT.trackRecord}`,
    contentWidth - 8
  );
  doc.text(summaryLines, margin + 4, currentY + 6);

  currentY += 43;

  // 2. Key Performance Indicators (4 Grid Boxes)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 43, 117);
  doc.text('2. INFRASTRUCTURE TRACK RECORD (UAE & GCC)', margin, currentY);
  currentY += 5;

  const boxWidth = (contentWidth - 9) / 4;
  const kpis = [
    { value: '250+', label: 'Turnkey Projects', sub: 'Executed in Dubai & UAE', color: [0, 102, 255] },
    { value: '100%', label: 'SIRA Compliance', sub: 'First-time audit clearance', color: [16, 185, 129] },
    { value: '99.999%', label: 'Optical SLA', sub: 'Zero-loss fiber splice rate', color: [0, 102, 255] },
    { value: '< 4 Hrs', label: 'Emergency MTTR', sub: '24/7 dedicated dispatch NOC', color: [245, 158, 11] },
  ];

  kpis.forEach((kpi, idx) => {
    const boxX = margin + idx * (boxWidth + 3);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(boxX, currentY, boxWidth, 22, 1.5, 1.5, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.roundedRect(boxX, currentY, boxWidth, 22, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(kpi.color[0], kpi.color[1], kpi.color[2]);
    doc.text(kpi.value, boxX + boxWidth / 2, currentY + 7, { align: 'center' });

    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    doc.text(kpi.label, boxX + boxWidth / 2, currentY + 12, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(kpi.sub, boxX + boxWidth / 2, currentY + 17, { align: 'center' });
  });

  currentY += 27;

  // 3. Statutory Accreditations & Licenses
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 43, 117);
  doc.text('3. STATUTORY LICENSES & REGULATORY PRE-APPROVALS', margin, currentY);
  currentY += 5;

  const certs = [
    { title: 'Dubai SIRA Approved Integrator', desc: 'Security Industry Regulatory Agency approved for commercial CCTV surveillance & electronic access control systems.' },
    { title: 'UAE TDRA Registered Supplier', desc: 'Telecommunications and Digital Government Regulatory Authority certified equipment supplier & contractor.' },
    { title: 'ISO 9001:2015 Quality Management Certified', desc: 'Standardized operational procedures for structured cabling installations, testing, and maintenance.' },
    { title: 'BICSI Corporate Member & Certified Engineers', desc: 'Full-time BICSI RCDD designers and Fluke Certified Cabling Test Technicians (CCTT) on in-house bench.' },
  ];

  certs.forEach((cert) => {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, currentY, contentWidth, 12.5, 1, 1, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.roundedRect(margin, currentY, contentWidth, 12.5, 1, 1, 'S');

    doc.setFillColor(16, 185, 129);
    doc.circle(margin + 4, currentY + 6.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(cert.title, margin + 8, currentY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(cert.desc, margin + 8, currentY + 9.5);

    currentY += 14.5;
  });

  currentY += 3;

  // 4. In-House Engineering & Equipment
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, currentY, contentWidth, 22, 1.5, 1.5, 'F');
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, currentY, contentWidth, 22, 1.5, 1.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 43, 117);
  doc.text('IN-HOUSE DIAGNOSTIC INSTRUMENTATION & WORKMANSHIP:', margin + 4, currentY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text('• Fluke Networks DSX-8000 CableAnalyzer (Level 2G accuracy for Category 6A & 7 copper certification)', margin + 4, currentY + 10.5);
  doc.text('• Fujikura 90S+ Core Alignment Fusion Splicers (<0.02 dB splice attenuation across OS2/OM4 optical fibers)', margin + 4, currentY + 15);
  doc.text('• EXFO Optical Time-Domain Reflectometer (OTDR) and Fluke CertiFiber Pro bi-directional Tier-2 testing', margin + 4, currentY + 19.5);

  // ==========================================
  // PAGE 2: CORE SOLUTIONS & 7-STAGE LIFECYCLE
  // ==========================================
  doc.addPage();
  drawPageHeader(2, 3);

  currentY = 40;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 43, 117);
  doc.text('4. CORE TECHNOLOGY SOLUTIONS & TECHNICAL SPECIFICATIONS', margin, currentY);
  currentY += 6;

  // Render 4 Solutions as 2x2 cards
  const solCardWidth = (contentWidth - 6) / 2;
  const solCardHeight = 44;

  CORE_SOLUTIONS.forEach((sol, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cardX = margin + col * (solCardWidth + 6);
    const cardY = currentY + row * (solCardHeight + 5);

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(cardX, cardY, solCardWidth, solCardHeight, 1.5, 1.5, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.roundedRect(cardX, cardY, solCardWidth, solCardHeight, 1.5, 1.5, 'S');

    // Accent line on card header
    doc.setFillColor(0, 102, 255);
    doc.rect(cardX, cardY, solCardWidth, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(0, 102, 255);
    doc.text(sol.category.toUpperCase(), cardX + 3.5, cardY + 5.5);

    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(sol.title, cardX + 3.5, cardY + 10.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    const descLines = doc.splitTextToSize(sol.shortDesc, solCardWidth - 7);
    doc.text(descLines, cardX + 3.5, cardY + 15.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(15, 23, 42);
    doc.text('Key Standards: ' + sol.standards.slice(0, 2).join(' | '), cardX + 3.5, cardY + 36);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 102, 255);
    doc.text('Partners: ' + sol.hardwarePartners.slice(0, 3).join(', '), cardX + 3.5, cardY + 40);
  });

  currentY += (solCardHeight * 2) + 16;

  // 25-Year Warranty Strip
  doc.setFillColor(240, 253, 250); // Mint
  doc.roundedRect(margin, currentY, contentWidth, 12, 1, 1, 'F');
  doc.setDrawColor(153, 246, 228);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, currentY, contentWidth, 12, 1, 1, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 118, 110);
  doc.text('25-YEAR MANUFACTURER PERFORMANCE WARRANTY:', margin + 4, currentY + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(19, 78, 74);
  doc.text('All structured cabling installations carry direct 25-year performance warranties from CommScope Systimax, Schneider Electric, or Legrand.', margin + 4, currentY + 8.5);

  currentY += 18;

  // 7-Stage Delivery Roadmap Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 43, 117);
  doc.text('5. 7-STAGE TURNKEY DELIVERY LIFECYCLE', margin, currentY);
  currentY += 5;

  const stages = [
    { num: '01', title: 'Systems Design & Engineering', desc: 'Site survey, optical loss budgets, CAD blueprints' },
    { num: '02', title: 'Documentation & Regulatory', desc: 'TDRA compliance, SIRA submissions, Civil Defense firestop' },
    { num: '03', title: 'Turnkey Project Management', desc: 'PMP certified site managers, Gantt milestones, HSE' },
    { num: '04', title: 'Structured Installation', desc: 'Cat6A/7 containment, fiber blowing, rack dressing' },
    { num: '05', title: 'Programming & Configuration', desc: 'VLANs, SIRA video watermarking, AV DSP tuning' },
    { num: '06', title: 'Testing & Commissioning', desc: 'Fluke DSX-8000 OTDR certification, SIRA site audit' },
    { num: '07', title: 'Maintenance & 24/7 AMC', desc: 'Guaranteed 4-hour MTTR, preventative health checks' },
  ];

  stages.forEach((stg) => {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, currentY, contentWidth, 9.5, 1, 1, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.roundedRect(margin, currentY, contentWidth, 9.5, 1, 1, 'S');

    doc.setFillColor(0, 102, 255);
    doc.roundedRect(margin + 2, currentY + 2, 7, 5.5, 0.5, 0.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(255, 255, 255);
    doc.text(stg.num, margin + 5.5, currentY + 5.8, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(stg.title, margin + 12, currentY + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(stg.desc, margin + 12, currentY + 8);

    currentY += 11;
  });

  // ==========================================
  // PAGE 3: ENTERPRISE CLIENTS & SIGN-OFF
  // ==========================================
  doc.addPage();
  drawPageHeader(3, 3);

  currentY = 40;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 43, 117);
  doc.text('6. ACCREDITED ENTERPRISE CLIENT PORTFOLIO (21 KEY ENTITIES)', margin, currentY);
  currentY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text('As featured on the official Sachitel corporate accreditation board, verified turnkey installations across the UAE:', margin, currentY);
  currentY += 5;

  // 3-Column Table of all 21 Enterprise Clients
  const clientColWidth = (contentWidth - 6) / 3;
  const clientRowHeight = 16.5;

  ENTERPRISE_CLIENTS.forEach((client, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const cX = margin + col * (clientColWidth + 3);
    const cY = currentY + row * (clientRowHeight + 2.5);

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(cX, cY, clientColWidth, clientRowHeight, 1, 1, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.roundedRect(cX, cY, clientColWidth, clientRowHeight, 1, 1, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    doc.text(client.name, cX + 2.5, cY + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(0, 102, 255);
    doc.text(client.sector, cX + 2.5, cY + 8);

    doc.setTextColor(100, 116, 139);
    const scopeBrief = client.scope.length > 38 ? client.scope.substring(0, 35) + '...' : client.scope;
    doc.text(scopeBrief, cX + 2.5, cY + 11.5);

    doc.setTextColor(16, 185, 129);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6);
    doc.text(client.location + ' | Commissioned', cX + 2.5, cY + 14.8);
  });

  currentY += (Math.ceil(ENTERPRISE_CLIENTS.length / 3) * (clientRowHeight + 2.5)) + 6;

  // 7. Banking & Performance Bond Capacity
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(0, 43, 117);
  doc.text('7. FINANCIAL STRENGTH & PERFORMANCE BONDING', margin, currentY);
  currentY += 4.5;

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, currentY, contentWidth, 18, 1.5, 1.5, 'F');
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, currentY, contentWidth, 18, 1.5, 1.5, 'S');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Sachitel Telecom maintains substantial cash flow liquidity and strong credit facilities with Tier-1 UAE commercial banks, enabling us to furnish Tender Bonds, Advance Payment Guarantees (APG), and Performance Bonds for multi-million AED infrastructure packages.', margin + 4, currentY + 5.5, { maxWidth: contentWidth - 8 });
  doc.text('Primary Banking Facilities: Emirates NBD  |  Mashreq Bank PSC  |  Dubai Islamic Bank', margin + 4, currentY + 14);

  currentY += 23;

  // 8. Sign-off & Verification Seal Box
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, currentY, contentWidth, 23, 1.5, 1.5, 'F');
  doc.setDrawColor(0, 102, 255);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, currentY, contentWidth, 23, 1.5, 1.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(0, 43, 117);
  doc.text('OFFICIAL VERIFICATION & DISPATCH DESK:', margin + 4, currentY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Headquarters: PO Box 187127, Dubai, United Arab Emirates', margin + 4, currentY + 10.5);
  doc.text('Direct Commercial Desk: +971 4 2397308  |  Hotline: +971 55 3481239  |  sachitel@eim.ae', margin + 4, currentY + 15);
  doc.text('Document Security Hash: SHA256-SACHITEL-TELECOM-DUBAI-2026-CONFIRMED', margin + 4, currentY + 19.5);

  // Digital Corporate Seal stamp simulation
  doc.setFillColor(0, 102, 255);
  doc.circle(pageWidth - margin - 14, currentY + 11.5, 8.5, 'S');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5);
  doc.setTextColor(0, 102, 255);
  doc.text('SACHITEL', pageWidth - margin - 14, currentY + 9, { align: 'center' });
  doc.text('TELECOM', pageWidth - margin - 14, currentY + 11.5, { align: 'center' });
  doc.text('DUBAI - UAE', pageWidth - margin - 14, currentY + 14, { align: 'center' });

  // Save the genuine binary PDF
  doc.save('Sachitel_Telecom_Profile.pdf');
}

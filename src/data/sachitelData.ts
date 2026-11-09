/**
 * Sachitel Telecom Equipment Trading L.L.C
 * Data Architecture & Specifications
 */

export interface ClientItem {
  id: string;
  name: string;
  arabicName?: string;
  sector: 'Sovereign & Leisure' | 'Heavy Industry & Steel' | 'Maritime & Logistics' | 'Luxury & Retail' | 'Hospitality & Commercial';
  scope: string;
  location: string;
  year: string;
  logoUrl: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  specs: string[];
  standards: string[];
  hardwarePartners: string[];
  deliverables: string[];
  imageUrl: string;
  accentColor: string;
}

export interface LifecycleStage {
  step: number;
  id: string;
  title: string;
  duration: string;
  objective: string;
  details: string;
  standards: string;
  deliverables: string[];
  keyTools: string[];
  auditCheck: string;
}

export const COMPANY_INFO = {
  name: 'Sachitel Telecom Equipment Trading L.L.C',
  nameArabic: 'ساتشيتل لتجارة أجهزة الاتصالات ذ.م.م',
  tagline: 'Your Integrated Business Solution Partner',
  established: '2008',
  experienceYears: '18+',
  location: 'PO Box: 187127, Dubai | U.A.E',
  coordinates: '25.2673° N, 55.3090° E',
  phoneLandline: '+971 4 2397308',
  phoneMobile: '+971 55 3481239',
  email: 'sachitel@eim.ae',
  website: 'www.sachitel.com',
  workingHours: 'Mon - Fri: 08:30 - 18:00 GST | 24/7 On-Call NOC',
  certifications: [
    'TDRA Registered Supplier (UAE)',
    'SIRA Approved Electronic Security Integrator (Dubai)',
    'BICSI Corporate Member & Certified RCDD Supervision',
    'Fluke Networks Certified Cabling Test Engineers (CCTT)'
  ]
};

export const ENTERPRISE_CLIENTS: ClientItem[] = [
  {
    id: 'belhasa',
    name: 'Belhasa Group',
    arabicName: 'بالحصا',
    sector: 'Heavy Industry & Steel',
    scope: 'Campus Structured Fiber Optic Backbone & Corporate CCTV Integration',
    location: 'Dubai, UAE',
    year: '2016 - Present',
    logoUrl: '/assets/clients/belhasa.png'
  },
  {
    id: 'al-ghurair',
    name: 'Al Ghurair Trading',
    arabicName: 'الغرير',
    sector: 'Heavy Industry & Steel',
    scope: 'Enterprise Data Center Cabling & High-Density Copper Cat6A Infrastructure',
    location: 'Dubai & Northern Emirates',
    year: '2017 - Present',
    logoUrl: '/assets/clients/al-ghurair.png'
  },
  {
    id: 'agis',
    name: 'AGIS (Al Ghurair Iron & Steel LLC)',
    arabicName: 'الحديد والصلب',
    sector: 'Heavy Industry & Steel',
    scope: 'Industrial Grade Armored Fiber Optic Distribution & SIRA CCTV Perimeter',
    location: 'ICAD I, Abu Dhabi',
    year: '2018',
    logoUrl: '/assets/clients/agis.png'
  },
  {
    id: 'rhs-group',
    name: 'RHS Group',
    sector: 'Maritime & Logistics',
    scope: 'Port Operations Telecommunications Network & Smart Access Control',
    location: 'Port Rashid & JAFZA, Dubai',
    year: '2019',
    logoUrl: '/assets/clients/rhs-group.png'
  },
  {
    id: 'jumeirah-golf',
    name: 'Jumeirah Golf Estates',
    sector: 'Sovereign & Leisure',
    scope: 'Enterprise WiFi 6 AP Cabling, Tournament PA System & Access Control',
    location: 'Dubai, UAE',
    year: '2020 - Present',
    logoUrl: '/assets/clients/jumeirah-golf.png'
  },
  {
    id: 'emirates-golf',
    name: 'Emirates Golf Club',
    sector: 'Sovereign & Leisure',
    scope: 'Enterprise WiFi 6 AP Cabling, Tournament PA System & Access Control',
    location: 'Emirates Hills, Dubai',
    year: '2019',
    logoUrl: '/assets/clients/emirates-golf.png'
  },
  {
    id: 'abu-dhabi-golf',
    name: 'Abu Dhabi Golf Club',
    sector: 'Sovereign & Leisure',
    scope: 'Enterprise WiFi 6 AP Cabling, Tournament PA System & Access Control',
    location: 'Abu Dhabi, UAE',
    year: '2021',
    logoUrl: '/assets/clients/abu-dhabi-golf.png'
  },
  {
    id: 'dbb',
    name: 'DBB Contracting',
    arabicName: 'دي بي بي',
    sector: 'Heavy Industry & Steel',
    scope: 'Site Office Data Links, Cat6 Trunking & Remote Site Surveillance Towers',
    location: 'Dubai & Sharjah',
    year: '2018',
    logoUrl: '/assets/clients/dbb.png'
  },
  {
    id: 'petrasco',
    name: 'Petrasco Energy Logistics',
    sector: 'Maritime & Logistics',
    scope: 'Secure Energy Warehouse Access Control & Explosion-Proof CCTV Network',
    location: 'Jebel Ali Free Zone (JAFZA)',
    year: '2020',
    logoUrl: '/assets/clients/petrasco.png'
  },
  {
    id: 'sothebys',
    name: "Sotheby's International Realty",
    sector: 'Luxury & Retail',
    scope: 'Executive Gallery Boardroom AV, 4K Video Conferencing & Cat7 Shielded LAN',
    location: 'DIFC, Dubai',
    year: '2021',
    logoUrl: '/assets/clients/sothebys.png'
  },
  {
    id: 'hermes',
    name: 'Hermès Paris',
    sector: 'Luxury & Retail',
    scope: 'Boutique Discrete IP Surveillance, Loss Prevention Sensors & Dedicated Comms',
    location: 'The Dubai Mall & Mall of the Emirates',
    year: '2022',
    logoUrl: '/assets/clients/hermes.png'
  },
  {
    id: 'cdc',
    name: 'CDC Construction Ltd.',
    sector: 'Heavy Industry & Steel',
    scope: 'Commercial Tower Structured Cabling Riser Distribution (1,200+ Drops)',
    location: 'Business Bay, Dubai',
    year: '2019',
    logoUrl: '/assets/clients/cdc.png'
  },
  {
    id: 'national-cement',
    name: 'National Cement Co. p.s.c.',
    arabicName: 'شركة الإسمنت الوطنية',
    sector: 'Heavy Industry & Steel',
    scope: 'Harsh Environment Heavy-Duty Fiber Optic Splicing & Thermal Surveillance',
    location: 'Al Quoz, Dubai',
    year: '2017',
    logoUrl: '/assets/clients/national-cement.png'
  },
  {
    id: 'hmm',
    name: 'HMM (Hyundai Merchant Marine)',
    sector: 'Maritime & Logistics',
    scope: 'Regional Headquarters Server Room Racking, Smart PDU & Fiber Connectivity',
    location: 'Dubai Maritime City',
    year: '2020',
    logoUrl: '/assets/clients/hmm.png'
  },
  {
    id: 'the-luxury-property',
    name: 'The Luxury Property Collection',
    sector: 'Luxury & Retail',
    scope: 'Ultra-Prime Showroom Crestron AV Automation & High-Speed Data Matrix',
    location: 'Palm Jumeirah, Dubai',
    year: '2022',
    logoUrl: '/assets/clients/the-luxury-property.png'
  },
  {
    id: 'rai',
    name: "RAI (Rakha Al-Khaleej Int'l L.L.C)",
    sector: 'Maritime & Logistics',
    scope: 'Corporate LAN Upgrade, 48U Server Rack Consolidation & Fluke OTDR Tests',
    location: 'Dubai, UAE',
    year: '2019',
    logoUrl: '/assets/clients/rai.png'
  },
  {
    id: 'kamat',
    name: 'Kamat Restaurant Chain',
    sector: 'Hospitality & Commercial',
    scope: 'Call center based telephony billing solution',
    location: '12 UAE Branches',
    year: '2018 - Present',
    logoUrl: '/assets/clients/kamat.png'
  },
  {
    id: 'gazebo',
    name: 'Gazebo Hospitality',
    sector: 'Hospitality & Commercial',
    scope: 'Call center based telephony billing solution',
    location: 'Dubai, Sharjah & Abu Dhabi',
    year: '2017 - Present',
    logoUrl: '/assets/clients/gazebo.png'
  },
  {
    id: 'lavazza',
    name: 'Lavazza Torino 1895',
    sector: 'Hospitality & Commercial',
    scope: 'UAE Regional Training Academy AV Installation & Precision Cabling',
    location: 'Dubai Media City',
    year: '2021',
    logoUrl: '/assets/clients/lavazza.png'
  },
  {
    id: 'lw',
    name: 'LW Design Group',
    sector: 'Luxury & Retail',
    scope: 'Creative Design Studio High-Bandwidth Cat6A Drops & Cloud Video Conferencing',
    location: 'Dubai Design District (d3)',
    year: '2022',
    logoUrl: '/assets/clients/lw.png'
  },
  {
    id: 'cosco',
    name: 'COSCO Shipping Lines',
    sector: 'Maritime & Logistics',
    scope: 'Regional Logistics Hub Optical Fiber Trunking & SIRA Compliant Control Room',
    location: 'Jebel Ali Port, Dubai',
    year: '2021',
    logoUrl: '/assets/clients/cosco.png'
  }
];

export const CORE_SOLUTIONS: SolutionItem[] = [
  {
    id: 'data-networks',
    title: 'IT Data Networks & Infrastructure',
    subtitle: 'Copper Cat6/6A/7 & Optical Fiber Backbone',
    shortDesc: 'Certified high-density structured cabling, single-mode & multi-mode fiber optic splicing, and carrier-grade cable pathways engineered for mission-critical GCC uptime.',
    fullDesc: 'Sachitel provides complete end-to-end passive and active data network infrastructure across the UAE. From multi-floor vertical riser backbones to high-density horizontal patching, our BICSI-certified technicians deliver certified structured cabling solutions backed by 25-year manufacturer warranties. Every installation undergoes rigorous Fluke DSX-8000 Level 2 OTDR testing with complete attenuation documentation.',
    category: 'Structured Cabling',
    specs: [
      'Copper: Category 6, 6A, 7 F/UTP, U/FTP, S/FTP (LSZH Jackets)',
      'Fiber Optic: OM3, OM4, OM5 50/125μm Multimode & OS2 9/125μm Singlemode',
      'Terminations: LC, SC, MTP/MPO 12/24-core High Density Cassettes',
      'Loss Budget: < 0.2 dB per fusion splice, Tier-1 & Tier-2 OTDR certified',
      'Cable Trays: Heavy-duty galvanized wire mesh, perforated trays & ladder racks'
    ],
    standards: ['ANSI/TIA-568-D', 'ISO/IEC 11801 Class EA', 'BICSI TDMM 14th Ed', 'UAE Fire Safety Code (LSZH)'],
    hardwarePartners: ['CommScope (Systimax)', 'Schneider Electric', 'Legrand', 'Corning Optical', 'Panduit'],
    deliverables: [
      'Full CAD As-Built Cable Route Drawings',
      'Fluke DTX/DSX-8000 OTDR Calibration Certification PDFs',
      'Patch Panel Port Mapping & Labeling Ledgers',
      '25-Year Performance & Workmanship Warranty'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#0066FF'
  },
  {
    id: 'security-systems',
    title: 'Electronic Security & CCTV Systems',
    subtitle: 'Commercial SIRA CCTV & Biometric Access Control',
    shortDesc: 'Turnkey surveillance systems fully approved by Dubai SIRA and UAE civil authorities. AI-assisted analytics, optical perimeter beams, and biometric barrier integration.',
    fullDesc: 'As a trusted electronic security systems contractor in Dubai, Sachitel designs, installs, and commissions video surveillance and access control solutions strictly adhering to Dubai SIRA (Security Industry Regulatory Agency) technical regulations. We provide 31-to-90-day retention enterprise NVR matrices, ANPR vehicle tracking, fail-safe electromagnetic door interlocks, and centralized Security Operations Center (SOC) video walls.',
    category: 'SIRA Certified Security',
    specs: [
      'Surveillance: 4K Ultra-HD, Starlight Low-Light, 360° Fisheye & 32x Optical PTZ',
      'Storage: Enterprise RAID-6 NVR Arrays (31-to-90 Days SIRA Compliance Storage)',
      'Access Control: Biometric Facial Recognition (<0.2s), RFID Proximity & Mobile BLE',
      'Barriers: Full-Height & Optical Flap Turnstiles, Automated Vehicle Boom Barriers',
      'Analytics: AI Intrusion Line Crossing, Loitering, Heat-mapping & ANPR'
    ],
    standards: ['Dubai SIRA V2.4 Regulations', 'ISO 27001 Physical Security', 'BS EN 62676-4'],
    hardwarePartners: ['Hikvision (Enterprise)', 'Dahua Technology', 'Milestone Systems', 'Axis Communications', 'HID Global'],
    deliverables: [
      'Dubai SIRA Compliance Certificate of Completion',
      'Storage Sizing & CCTV Coverage Blind-spot Calculation Sheet',
      'Emergency Break-Glass & Fire Alarm Interface Integration Test Sign-off',
      'Operator Training & Security Personnel SOP Manual'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#00F0FF'
  },
  {
    id: 'audiovisual-systems',
    title: 'Audio-Visual & Collaborative Systems',
    subtitle: 'Executive Video Conferencing & PA Systems',
    shortDesc: 'Acoustically tuned corporate boardrooms, Microsoft Teams & Zoom Rooms native integration, digital signage, and commercial public address / background music.',
    fullDesc: 'Sachitel transforms meeting environments into intuitive, high-impact collaboration hubs. We eliminate conference room friction with one-touch join automation, beamforming microphone arrays with acoustic echo cancellation, 4K laser projection, and ultra-fine pitch LED direct-view video walls. For large venues and retail chains, we engineer multi-zone 100V commercial public address and evacuation audio systems.',
    category: 'Enterprise AV',
    specs: [
      'Conferencing: Native Microsoft Teams Rooms (MTR), Zoom Rooms, Cisco Webex',
      'Audio: Dante Audio-over-IP, Ceiling Beamforming Tile Microphones, DSP Engines',
      'Automation: Crestron & Extron 10" Touch Controllers, Lighting & Blind Interlock',
      'Displays: Commercial 4K Interactive Touch Panels (65"-98"), 1.2mm LED Video Walls',
      'Public Address: 100V Distributed Ceiling & Horn Speakers with Emergency Override'
    ],
    standards: ['AVIXA CTS Standards', 'AES67 / Dante Protocol', 'STIPA Speech Transmission Index', 'IEC 60268-16'],
    hardwarePartners: ['Crestron', 'Logitech Commercial', 'Poly / HP', 'Bose Professional', 'Samsung Commercial Display'],
    deliverables: [
      'One-Line Audio/Video Schematic & Control Architecture Diagram',
      'Room Acoustic Reverberation (RT60) Optimization Report',
      'Custom Crestron/Extron GUI Programming File & Documentation',
      'Audio Calibration & Frequency Response Proofing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981'
  },
  {
    id: 'enterprise-it',
    title: 'Enterprise IT & Data Center Solutions',
    subtitle: 'Server Infrastructure, Racking & Smart UPS',
    shortDesc: 'Mission-critical server room fit-outs, modular 42U/48U rack integration, intelligent double-conversion UPS power, and environmental containment.',
    fullDesc: 'We construct resilient physical data center foundations built for high-density computing and zero downtime. Sachitel delivers complete server room containment including hot/cold aisle isolation, smart rackmount power distribution units (iPDUs) with per-outlet metering, online double-conversion three-phase UPS systems with battery string redundancy, and real-time environmental sensors monitoring thermal gradients and humidity.',
    category: 'Data Center Fit-out',
    specs: [
      'Racks: 42U / 48U 800x1200mm Heavy-Duty Server Racks (1,500kg Static Load)',
      'Power: Modular 3-Phase Online Double-Conversion UPS (10kVA - 500kVA, N+1/2N)',
      'iPDUs: Monitored & Switched Rack PDUs with Remote Power Cycling & Modbus/SNMP',
      'Cooling: In-Row Chilled Water / Direct Expansion Precision Air Conditioners',
      'Environment: IoT Multi-Sensor Probes (Temp, Humidity, Water Leak, Smoke)'
    ],
    standards: ['TIA-942 Tier II/III Topology', 'ASHRAE TC 9.9 Thermal Guidelines', 'IEC 62040-3 UPS Standards', 'CE & UL Certified'],
    hardwarePartners: ['Schneider Electric (APC)', 'Vertiv', 'Eaton', 'Rittal', 'Totem Racks'],
    deliverables: [
      'Server Room Heat Dissipation & Thermal Load Calculation Ledger',
      'UPS Autonomy Runtime vs. Critical KVA Load Curves',
      'Electrical Distribution Schematics & Earthing Resistance Certification',
      'Full Commissioning Load-Bank Test Report'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F59E0B'
  }
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: 1,
    id: 'design',
    title: 'Systems Design & Engineering',
    duration: 'Week 1 - 2',
    objective: 'Establish optical and structural design criteria with millimeter CAD precision.',
    details: 'Our BICSI RCDD engineers conduct comprehensive on-site physical surveys to assess riser capacities, electrical headroom, environmental factors, and cable pathways. We model optical attenuation loss budgets and calculate PoE power budgets across all network switch ports before a single cable is pulled.',
    standards: 'ANSI/TIA-568-D · BICSI TDMM',
    deliverables: [
      'Architectural CAD Schematic Drawings (Cable Routing & Drops)',
      'Optical Power Loss Budget Simulation Report',
      'Detailed Engineering Bill of Quantities (BOQ) with SKU breakdown',
      'Scope of Work (SOW) & Site Risk Mitigation Matrix'
    ],
    keyTools: ['AutoCAD MEP', 'Fluke LinkWare Pre-plan', 'Bluebeam Revu', 'Visual RF Sizer'],
    auditCheck: 'Client & Main Contractor Engineering Approval'
  },
  {
    step: 2,
    id: 'documentation',
    title: 'Documentation & Regulatory Approvals',
    duration: 'Week 2 - 3',
    objective: 'Secure mandatory UAE sovereign and municipal technical compliances.',
    details: 'Sachitel liaises directly with Dubai civil authorities and master developers. For surveillance infrastructure, we draft the comprehensive SIRA (Security Industry Regulatory Agency) technical submission. We also prepare TDRA network equipment compatibility filings, firestop containment documentation, and MEP coordinated drawings.',
    standards: 'Dubai SIRA V2.4 · TDRA UAE',
    deliverables: [
      'SIRA Drawing Submissions & Approved Security Plan',
      'TDRA Compliant Hardware Declaration Dossier',
      'MEP Clash Detection Coordination Matrix',
      'Certified Firestop Penetration Details'
    ],
    keyTools: ['SIRA Electronic Portal', 'Dubai Municipality e-Permits', 'BIM 360'],
    auditCheck: 'Regulatory NOC / Preliminary Permit Granted'
  },
  {
    step: 3,
    id: 'pm',
    title: 'Turnkey Project Management',
    duration: 'Throughout Project',
    objective: 'Coordinate civil works, milestone deliverables, and supply chain logistics.',
    details: 'A dedicated PMP-certified site superintendent is assigned to oversee every installation. We implement tight Gantt tracking, coordinate daily with client MEP contractors, enforce strict UAE health and safety (HSE) on-site protocols, and manage just-in-time hardware deliveries to avoid staging congestion.',
    standards: 'PMI PMBOK Standards · UAE HSE Site Safety Code',
    deliverables: [
      'Master Critical Path Schedule (Primavera / MS Project)',
      'Weekly Milestone Progress Reports with Photographic Logs',
      'Daily Toolbox Talks & Method Statements (RAMS)',
      'Submittal & Request for Information (RFI) Tracking Logs'
    ],
    keyTools: ['Microsoft Project', 'Procore', 'WhatsApp Site Coordination Desk'],
    auditCheck: 'Weekly Milestone Client Sign-Off'
  },
  {
    step: 4,
    id: 'installation',
    title: 'Structured Installation & Dressing',
    duration: 'Week 3 - 6',
    objective: 'Execute high-density physical pulling, routing, and cable management.',
    details: 'All Cat6/6A/7 copper and optical fiber cables are routed through dedicated containment trays, conforming strictly to minimum bend radius standards. In server rooms, our technicians dress cables with velcro bundling, color-coded patch cords, and mechanical labeling at both ends following TIA-606-C standards.',
    standards: 'TIA-569-E Pathways & Spaces · TIA-606-C Labeling',
    deliverables: [
      'Installed Cable Trays, Risers & Conduit Containment',
      'Fusion Spliced Fiber Optic Trays & Patch Panels',
      'Dressed Server Racks with Front & Rear Management',
      'Certified UL-Listed Intumescent Firestopping'
    ],
    keyTools: ['Fujikura 90S+ Fusion Splicer', 'Brady BMP41 Label Printers', 'Greenlee Tuggers'],
    auditCheck: 'Internal Quality Assurance (QA) Punch List'
  },
  {
    step: 5,
    id: 'programming',
    title: 'Systems Programming & Configuration',
    duration: 'Week 6 - 7',
    objective: 'Configure active switches, NVR storage arrays, and AV automation.',
    details: 'Certified systems engineers configure enterprise network VLANs, QoS voice/video priority, and 802.1X port authentication. For CCTV, we partition RAID arrays, configure motion alerts, setup SIRA video watermarking, and calibrate Crestron/Extron touch panels with corporate custom UI presets.',
    standards: 'IEEE 802.1Q VLAN · SIRA Watermarking · AES-256 Encryption',
    deliverables: [
      'Complete IP Address Allocation & Subnet Ledger',
      'Active Switch Configuration Files & Backup Images',
      'NVR Storage Retention Proof & Camera Matrix Layout',
      'AV Automation Custom Code Repository & Touch Screen GUI'
    ],
    keyTools: ['Wireshark', 'Putty / SecureCRT', 'Crestron Toolbox', 'HikCentral / Milestone Client'],
    auditCheck: 'End-to-End Functional Test Sign-Off'
  },
  {
    step: 6,
    id: 'commissioning',
    title: 'Service, Testing & Commissioning',
    duration: 'Week 7 - 8',
    objective: '100% verification with Fluke OTDR certification and final handover.',
    details: 'Every single copper link is tested for NEXT, return loss, and wiremap using Fluke DSX-8000 testers. Fiber cores undergo Tier-2 bi-directional OTDR trace analysis. We escort Dubai SIRA security inspectors through the physical site inspection, secure the official SIRA compliance certificate, and deliver the final handover package.',
    standards: 'Fluke Level 2G Accuracy · SIRA Final Audit Protocol',
    deliverables: [
      'Fluke LinkWare Certified Test Summary PDFs (100% Pass)',
      'Final Dubai SIRA Site Approval Certificate',
      'Full As-Built Operation & Maintenance (O&M) Manual',
      'Client Administrator & Operator Hands-On Training'
    ],
    keyTools: ['Fluke DSX-8000 CableAnalyzer', 'Fluke CertiFiber Pro', 'EXFO OTDR'],
    auditCheck: 'SIRA Clearance & Official Client Handover Certificate'
  },
  {
    step: 7,
    id: 'maintenance',
    title: 'Maintenance Programs & 24/7 AMC Support',
    duration: 'Ongoing 1 - 3 Years',
    objective: 'Guaranteed 4-hour MTTR, preventative audits, and round-the-clock peace of mind.',
    details: 'Sachitel provides comprehensive Annual Maintenance Contracts (AMC) tailored to enterprise risk requirements. We assign dedicated account engineers, provide 24/7/365 emergency phone support, guarantee 4-hour on-site mean-time-to-repair (MTTR), and conduct quarterly preventative maintenance with optical cleaning and UPS battery load testing.',
    standards: 'ITIL V4 Service Management · 99.999% Availability SLA',
    deliverables: [
      'Annual Maintenance Contract (AMC) Agreement with Defined SLA',
      'Quarterly Preventative Health Check Inspection Reports',
      'Priority Replacement Hardware Buffer from Local Dubai Stock',
      '24/7 NOC Emergency Hotline Access with Ticket Tracking'
    ],
    keyTools: ['ServiceDesk CRM', 'Fluke Fiber Inspector Pro', 'FLIR Thermal Imaging Camera'],
    auditCheck: 'Quarterly Executive Service Review'
  }
];

export const EXECUTIVE_PROFILE_TEXT = {
  summary: `Established in 2008 in Dubai, United Arab Emirates, Sachitel Telecom Equipment Trading L.L.C has grown into one of the region's foremost specialist contractors for enterprise telecommunications infrastructure, high-density structured cabling, electronic security systems, and mission-critical audio-visual integration.`,
  trackRecord: `Over more than 18 years of continuous operational execution across the UAE, Sachitel has delivered more than 250 turnkey enterprise infrastructure projects for sovereign institutions, industrial giants, five-star hospitality brands, luxury retail flagships, and global maritime logistics operators.`,
  technicalStrength: `Our strength lies in our certified technical bench: BICSI Registered Communications Distribution Designers (RCDD), Fluke Certified Cabling Test Technicians (CCTT), Dubai SIRA licensed security engineers, and Crestron/Extron certified AV programmers. We maintain full in-house capabilities with our own state-of-the-art diagnostic equipment, including Fluke DSX-8000 analyzers and Fujikura core-alignment fusion splicers.`,
  regulatoryPillars: `All installations are guaranteed to comply with UAE Telecommunications and Digital Government Regulatory Authority (TDRA) guidelines and Dubai Security Industry Regulatory Agency (SIRA) standards.`
};

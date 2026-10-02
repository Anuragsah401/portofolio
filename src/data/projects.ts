export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  layer: 'client' | 'gateway' | 'logic' | 'downstream';
}

export interface ProjectFeature {
  title: string;
  description: string;
  tag: string;
}

export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  idea: string;
  solution: string;
  features: ProjectFeature[];
  uxHighlights: string[];
  architectureSummary: string;
  architectureLayers: {
    client: string[];
    api: string;
    logic: string[];
    downstream: {
      ai: string[];
      database: string[];
      services: string[];
    };
  };
  aiIntegration: {
    headline: string;
    description: string;
    capabilities: string[];
  };
  technologies: string[];
  developmentProcess: {
    phase: string;
    detail: string;
  }[];
  featured: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'seatbooking',
    number: '01',
    slug: 'seatbooking',
    title: 'SeatBooking',
    category: 'Restaurant SaaS · Reservations · Automation',
    status: 'SaaS Platform · Full-Stack System',
    tagline: 'A modern restaurant reservation platform designed to simplify booking management, customer communication, and restaurant operations.',
    description:
      'A modern restaurant reservation platform designed to simplify booking management, customer communication, and restaurant operations.',
    overview:
      'SeatBooking transforms fragmented restaurant booking workflows into a unified multi-tenant SaaS system. Built for both diners and floor managers, it connects real-time table availability, automated guest messaging, and live floor state into one coherent operational interface.',
    problem:
      'Restaurants frequently juggle phone bookings, manual paper logs, and disconnected third-party tools. This leads to double-bookings, missed guest communications, high no-show rates, and overwhelmed hosts during peak dinner service.',
    idea:
      'Design a reservation operating system that feels effortless for guests booking on mobile while giving restaurant operators deterministic control over table capacities, shift pacing, and automated confirmations.',
    solution:
      'An end-to-end reservation platform featuring an instant guest booking flow, a real-time restaurant operations dashboard, visual table and capacity rules, automated email confirmations and SMS reminders, and a multi-tenant data architecture.',
    features: [
      {
        title: 'Customer Booking Experience',
        description: 'Frictionless multi-step guest reservation flow with live party-size validation, time-slot pacing, and special request notes.',
        tag: 'Guest UX',
      },
      {
        title: 'Reservation & Floor Management',
        description: 'Centralized host command center displaying upcoming arrivals, seated parties, table turns, and status transitions.',
        tag: 'Operations',
      },
      {
        title: 'Dynamic Table Management',
        description: 'Configurable dining zones, combinable tables, capacity constraints, and service-window pacing rules.',
        tag: 'Configuration',
      },
      {
        title: 'Automated Guest Notifications',
        description: 'Event-driven email confirmations, calendar invites, and scheduled SMS reminders to reduce no-shows.',
        tag: 'Automation',
      },
      {
        title: 'Multi-Tenant SaaS Architecture',
        description: 'Isolated restaurant workspaces, role-based staff permissions, and custom venue operating hours.',
        tag: 'Architecture',
      },
      {
        title: 'Responsive Cross-Device Interface',
        description: 'Engineered for iPads at the host stand, desktop back-offices, and mobile browsers for diners on the go.',
        tag: 'Interface',
      },
    ],
    uxHighlights: [
      'Zero-clutter guest booking flow designed for sub-60-second mobile completion.',
      'High-contrast dark-mode floor dashboard optimized for dimly lit restaurant environments.',
      'Instant status toggles (Confirmed → Seated → Completed / No-Show) with optimistic UI updates.',
      'Clear visual hierarchy separating urgent host actions from background configuration.',
    ],
    architectureSummary:
      'Built on a strict relational schema with PostgreSQL and Prisma to guarantee transactional integrity when allocating tables across overlapping time slots. Multi-tenant isolation ensures every venue operates within its own secure boundary.',
    architectureLayers: {
      client: ['Guest Booking Web App (React + TS)', 'Restaurant Host Dashboard (Responsive UI)'],
      api: 'REST API Layer · Tenant & Auth Middleware',
      logic: ['Slot Availability Engine', 'Table Allocation & Conflict Guard', 'Notification Dispatcher'],
      downstream: {
        ai: ['Natural Language Booking Assistant', 'Smart Pacing Suggestions'],
        database: ['PostgreSQL', 'Prisma ORM (Multi-Tenant Schema)'],
        services: ['Transactional Email Service', 'SMS Reminder Gateway'],
      },
    },
    aiIntegration: {
      headline: 'Intelligent Reservation Lookup & Operational Assistance',
      description:
        'AI capabilities are integrated to assist hosts and guests with natural-language availability queries, special dietary note classification, and intelligent time-slot recommendations when preferred times are full.',
      capabilities: [
        'Natural language reservation lookup and availability resolution',
        'Automated tagging of guest notes (allergies, VIP, celebrations)',
        'Alternative slot recommendations during peak service hours',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AI Integration'],
    developmentProcess: [
      {
        phase: '01 · Domain Modeling',
        detail: 'Mapped real-world hospitality constraints: turn times, buffer windows, party sizes, and multi-venue isolation.',
      },
      {
        phase: '02 · UX & Host Ergonomics',
        detail: 'Designed two distinct interfaces: a calm consumer booking widget and a high-density operational dashboard.',
      },
      {
        phase: '03 · Relational Core & Automation',
        detail: 'Implemented transactional booking logic with Prisma/PostgreSQL and connected event-driven email/SMS pipelines.',
      },
      {
        phase: '04 · AI Layer Integration',
        detail: 'Added conversational availability resolution and structured note extraction on top of the core reservation API.',
      },
    ],
    featured: true,
    repositoryUrl: 'https://github.com/anuragsah401',
  },
  {
    id: 'prosisit',
    number: '02',
    slug: 'prosisit',
    title: 'ProsisIt',
    category: 'AI · Voice · Intelligent Business Assistant',
    status: 'AI Product System · Voice & Tool Execution',
    tagline: 'An AI-powered business assistant designed to interact with hospitality systems through natural language, voice, analytics, and secure tool execution.',
    description:
      'An AI-powered business assistant designed to interact with hospitality systems through natural language, voice, analytics, and secure tool execution.',
    overview:
      'ProsisIt (Prosis) reimagines how managers and operators interact with complex business software. Instead of navigating dozens of nested reports and configuration screens, operators converse via text or voice with an AI assistant that has structured, permission-gated access to reservations, workforce schedules, and live operational analytics.',
    problem:
      'Hospitality managers work on their feet, not behind a desk. Digging through multiple dashboards to check tonight’s covers, verify who is clocked in, or approve a schedule change takes valuable time away from floor operations.',
    idea:
      'Build an AI-native operational copilot capable of real reasoning and deterministic tool calling—governed by Role-Based Access Control (RBAC), human-in-the-loop approval workflows, and complete audit trails.',
    solution:
      'A multi-modal AI business assistant combining conversational chat, low-latency voice interaction, live business analytics synthesis, and secure tool execution across reservation and workforce domains.',
    features: [
      {
        title: 'AI Chat & Voice Interaction',
        description: 'Seamless switching between natural-language text queries and hands-free voice commands for busy operators.',
        tag: 'Multi-Modal',
      },
      {
        title: 'Deterministic Tool Calling & Reasoning',
        description: 'Structured function execution that queries live databases, cross-references schedules, and synthesizes accurate answers.',
        tag: 'AI Agents',
      },
      {
        title: 'Live Business Analytics',
        description: 'Translates natural questions into structured operational insights across bookings, occupancy, and labor hours.',
        tag: 'Analytics',
      },
      {
        title: 'Reservation & Workforce Interaction',
        description: 'Directly inspect upcoming bookings, check staff attendance status, and coordinate shift coverage from one interface.',
        tag: 'Unified Ops',
      },
      {
        title: 'Human-in-the-Loop Approval Workflows',
        description: 'State-mutating actions require explicit operator confirmation before execution, preventing unintended AI modifications.',
        tag: 'Safety',
      },
      {
        title: 'RBAC & Immutable Audit Trails',
        description: 'Every prompt, tool invocation, permission check, and execution result is logged and scoped to the user’s role.',
        tag: 'Governance',
      },
    ],
    uxHighlights: [
      'Transparent AI reasoning steps showing exactly which tools are being queried in real time.',
      'Inline interactive approval cards for write operations (e.g., modifying a booking or approving a shift swap).',
      'Voice mode waveform and clear state indicators (Listening → Reasoning → Executing Tool → Responding).',
      'Structured data cards embedded directly inside the conversation stream rather than walls of plain text.',
    ],
    architectureSummary:
      'Designed around a secure AI orchestration gateway. User prompts pass through context enrichment and RBAC policy enforcement before the LLM can invoke typed domain tools. Read tools execute automatically; write tools pause and emit a structured approval state.',
    architectureLayers: {
      client: ['Conversational Web Workspace', 'Voice Audio Stream & Waveform UI'],
      api: 'AI Orchestration Gateway · RBAC Policy Guard',
      logic: ['LLM Reasoning & Tool Router', 'Approval State Machine', 'Audit Logger'],
      downstream: {
        ai: ['OpenAI / LLM APIs', 'Speech-to-Text & Voice Synthesis', 'Structured Function Schemas'],
        database: ['PostgreSQL', 'Audit Trail Store', 'Session Context Store'],
        services: ['Reservation Domain Service', 'Workforce Domain Service', 'Analytics Engine'],
      },
    },
    aiIntegration: {
      headline: 'Safe, Auditable Agentic Tool Execution',
      description:
        'Unlike generic chatbots, ProsisIt treats AI as a reasoning interface over strict typed APIs. Every tool has a JSON schema, role requirement, and safety classification (Read-Only vs. Approval-Required).',
      capabilities: [
        'Multi-step tool chaining across reservations, staff shifts, and business metrics',
        'Voice-to-intent pipeline for hands-free operational queries',
        'Granular RBAC enforcement ensuring staff only query data permitted by their role',
        'Comprehensive audit logging of every tool call and human approval decision',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI / LLM APIs', 'Voice Interfaces', 'Tool Calling', 'PostgreSQL', 'RBAC'],
    developmentProcess: [
      {
        phase: '01 · Intent & Safety Mapping',
        detail: 'Classified hospitality operations into safe read queries and guarded write actions requiring manager confirmation.',
      },
      {
        phase: '02 · Tool Schema Architecture',
        detail: 'Built deterministic TypeScript tool definitions connecting LLM function calling to reservation and workforce services.',
      },
      {
        phase: '03 · Voice & Streaming UX',
        detail: 'Designed low-friction voice interaction and streaming tool-execution states so users always understand system actions.',
      },
      {
        phase: '04 · RBAC & Audit Hardening',
        detail: 'Implemented permission scoping and full execution logs to make AI trustworthy in a real business environment.',
      },
    ],
    featured: true,
    repositoryUrl: 'https://github.com/anuragsah401',
  },
  {
    id: 'workforce',
    number: '03',
    slug: 'workforce',
    title: 'Workforce',
    category: 'SaaS · Workforce · Mobile',
    status: 'SaaS & Mobile Platform · Hospitality Ops',
    tagline: 'A workforce management platform designed for hospitality teams to manage employees, shifts, attendance, and working hours.',
    description:
      'A workforce management platform designed for hospitality teams to manage employees, shifts, attendance, and working hours.',
    overview:
      'Workforce solves the daily operational friction of scheduling hospitality teams and verifying on-site attendance. It pairs a comprehensive manager command center with a dedicated mobile experience for employees to view schedules, clock in and out with location and Wi-Fi verification, and track working hours.',
    problem:
      'Managing shift schedules across spreadsheets and group chats creates confusion, unverified clock-ins from off-site locations, and manual payroll reconciliation errors at the end of every month.',
    idea:
      'Create a dual-surface platform: a rapid shift planning and analytics dashboard for managers, synchronized with a mobile app for staff that verifies physical presence via GPS and venue Wi-Fi/BSSID.',
    solution:
      'An integrated workforce platform supporting employee profiles, visual shift scheduling, hardware-verified check-in/out (Location + Wi-Fi BSSID), real-time attendance monitoring, working-hour analytics, and instant team notifications.',
    features: [
      {
        title: 'Visual Shift Scheduling',
        description: 'Create, assign, and publish weekly rosters across roles (kitchen, floor, bar) with conflict detection.',
        tag: 'Scheduling',
      },
      {
        title: 'Location & Wi-Fi/BSSID Verification',
        description: 'Ensures accurate on-site attendance by validating GPS coordinates and venue Wi-Fi router BSSID during check-in/out.',
        tag: 'Verification',
      },
      {
        title: 'Employee Mobile Experience',
        description: 'Mobile-first interface for staff to inspect upcoming shifts, clock in/out, and review logged hours.',
        tag: 'Mobile',
      },
      {
        title: 'Manager Operations Dashboard',
        description: 'Live overview of who is currently on shift, late arrivals, break tracking, and overtime alerts.',
        tag: 'Management',
      },
      {
        title: 'Working Hours & Attendance Analytics',
        description: 'Automated calculation of regular hours, breaks, and shift variances for clean payroll preparation.',
        tag: 'Analytics',
      },
      {
        title: 'Employee Profiles & Notifications',
        description: 'Centralized directory with role assignments, availability preferences, and push/email alerts for schedule updates.',
        tag: 'Communication',
      },
    ],
    uxHighlights: [
      'One-tap verified check-in on mobile with clear visual feedback on GPS and Wi-Fi BSSID validation status.',
      'Color-coded shift timeline for managers to spot understaffed service windows at a glance.',
      'Clean separation between manager administrative controls and employee self-service views.',
    ],
    architectureSummary:
      'Engineered with a unified backend API serving both the web management console and the employee mobile client. Attendance verification combines geospatial radius checks with network BSSID matching to prevent spoofing.',
    architectureLayers: {
      client: ['Manager Web Dashboard', 'Employee Mobile App'],
      api: 'Unified REST API · Auth & Role Guard',
      logic: ['Shift Roster Engine', 'Geo & Wi-Fi BSSID Validator', 'Timesheet Aggregator'],
      downstream: {
        ai: ['Schedule Conflict Detection', 'Attendance Anomaly Flagging'],
        database: ['PostgreSQL / Relational Store', 'Prisma ORM'],
        services: ['Push & Email Notification Service', 'Timesheet Export Engine'],
      },
    },
    aiIntegration: {
      headline: 'Smart Scheduling & Attendance Insights',
      description:
        'Supports operational planning by highlighting scheduling overlaps, identifying recurring attendance patterns, and assisting managers in balancing shift coverage.',
      capabilities: [
        'Automated detection of overlapping shifts and rest-period violations',
        'Natural-language queries over attendance logs and weekly labor hours via ProsisIt integration',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Mobile UI', 'Geolocation & BSSID Verification'],
    developmentProcess: [
      {
        phase: '01 · Field Workflow Research',
        detail: 'Analyzed how hospitality staff clock in during busy shift changes and why traditional punch clocks fail.',
      },
      {
        phase: '02 · Dual-Surface UX Design',
        detail: 'Designed a high-density desktop planner for managers alongside a thumb-friendly mobile interface for staff.',
      },
      {
        phase: '03 · Presence Verification Engine',
        detail: 'Implemented dual verification combining GPS geofencing with venue Wi-Fi BSSID validation.',
      },
      {
        phase: '04 · Analytics & Reporting',
        detail: 'Built automated hour aggregation and real-time attendance status boards.',
      },
    ],
    featured: true,
    repositoryUrl: 'https://github.com/anuragsah401',
  },
  {
    id: 'emenu',
    number: '04',
    slug: 'emenu',
    title: 'E-Menu',
    category: 'Hospitality · QR Ordering · Real-time',
    status: 'Real-Time Ordering System · Hospitality',
    tagline: 'A digital restaurant ordering system connecting customers, menus, orders, and kitchen operations through QR-based experiences.',
    description:
      'A digital restaurant ordering system connecting customers, menus, orders, and kitchen operations through QR-based experiences.',
    overview:
      'E-Menu bridges the dining table and the kitchen line. Guests scan a table-specific QR code to browse an interactive digital menu, customize items, manage their cart, and place orders directly—instantly routing tickets to a real-time kitchen dashboard.',
    problem:
      'Static paper menus are expensive to update when items sell out, and waiting for staff just to place a drink or side order slows down table turnover and diminishes guest satisfaction.',
    idea:
      'Build an instant, app-less QR ordering experience bound to specific table contexts that streams orders directly to kitchen and bar preparation screens in real time.',
    solution:
      'A full-loop digital ordering platform featuring table-aware QR sessions, a fast mobile menu and cart experience, real-time order transmission to a Kitchen Display System (KDS), and a restaurant administration portal for live menu updates.',
    features: [
      {
        title: 'Table-Bound QR Experience',
        description: 'Zero-download web experience that automatically associates guest carts and orders with their physical table number.',
        tag: 'QR Flow',
      },
      {
        title: 'Interactive Digital Menu & Cart',
        description: 'Category filtering, dietary tags, item modifiers, and smooth cart management optimized for mobile browsers.',
        tag: 'Guest UX',
      },
      {
        title: 'Real-Time Kitchen Dashboard (KDS)',
        description: 'Live order queue for kitchen staff with preparation status transitions (New → Preparing → Ready → Served).',
        tag: 'Real-Time',
      },
      {
        title: 'Restaurant Administration Portal',
        description: 'Instant control over menu categories, pricing, item availability (86-ing items in one click), and QR code generation.',
        tag: 'Admin',
      },
    ],
    uxHighlights: [
      'Instant-load mobile menu engineered for low-connectivity dining environments.',
      'Frictionless modifier selection and sticky cart summary bar.',
      'High-legibility kitchen ticket cards with elapsed time indicators for line cooks.',
    ],
    architectureSummary:
      'Built around low-latency state synchronization so menu availability changes and newly placed table orders reflect immediately across guest devices and kitchen screens.',
    architectureLayers: {
      client: ['Mobile QR Guest Menu', 'Real-Time Kitchen Display (KDS)', 'Restaurant Admin Console'],
      api: 'API & Real-Time Event Layer',
      logic: ['Table Session Manager', 'Order State Machine', 'Menu Catalog Controller'],
      downstream: {
        ai: ['Menu Item Descriptions & Dietary Tagging', 'Pairing Suggestions'],
        database: ['PostgreSQL / Document Store', 'Live Order Queue'],
        services: ['QR Table Token Generator', 'Real-Time Kitchen Notification Stream'],
      },
    },
    aiIntegration: {
      headline: 'Intelligent Menu Discovery & Administration',
      description:
        'AI assists both guests and operators—helping diners filter by dietary constraints and enabling restaurant admins to rapidly structure and refine menu catalogs.',
      capabilities: [
        'Dietary and allergen filtering across menu items',
        'Contextual add-on and beverage pairing suggestions in the cart flow',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Real-Time Events', 'Tailwind CSS', 'PostgreSQL', 'QR Session Architecture'],
    developmentProcess: [
      {
        phase: '01 · Table Session Architecture',
        detail: 'Designed URL and token structures to bind guest scans to specific tables without requiring account registration.',
      },
      {
        phase: '02 · Mobile Cart & Modifier UX',
        detail: 'Crafted a responsive menu interface focused on rapid browsing and clear item customization.',
      },
      {
        phase: '03 · Real-Time Kitchen Routing',
        detail: 'Connected guest checkouts to a live kitchen board with instant status progression.',
      },
      {
        phase: '04 · Admin Catalog Controls',
        detail: 'Built real-time item availability toggles so sold-out dishes disappear from guest menus immediately.',
      },
    ],
    featured: true,
    repositoryUrl: 'https://github.com/anuragsah401',
  },
];

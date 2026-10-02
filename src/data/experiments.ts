export interface AIExperiment {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  pipeline: string[];
  sampleInput: string;
  reasoningSteps: string[];
  structuredOutput: {
    label: string;
    value: string;
  }[];
  statusLabel: string;
}

export const aiExperiments: AIExperiment[] = [
  {
    id: 'ai-reservation-assistant',
    number: 'EXP-01',
    title: 'AI Reservation Assistant',
    category: 'Natural Language · Tool Execution',
    summary:
      'Translates conversational guest or host requests into deterministic availability lookups, conflict checks, and structured booking actions.',
    pipeline: ['Natural language', 'Reservation lookup', 'Availability', 'Action'],
    sampleInput: '"Check if we can move the 7:30 PM party of 4 (Miller) to 8:15 PM on the patio."',
    reasoningSteps: [
      'tool.lookup_reservation({ guest: "Miller", time: "19:30", partySize: 4 }) → Found #RES-409',
      'tool.check_zone_availability({ zone: "Patio", time: "20:15", partySize: 4 }) → Table P4 available',
      'policy.require_approval({ action: "update_reservation_slot", target: "Table P4" })',
    ],
    structuredOutput: [
      { label: 'Matched Booking', value: '#RES-409 · Miller (4 Guests)' },
      { label: 'Target Slot', value: '20:15 · Patio Table P4 (Available)' },
      { label: 'Action State', value: 'Ready to reschedule & send SMS update' },
    ],
    statusLabel: 'Prototype · SeatBooking & ProsisIt',
  },
  {
    id: 'ai-analytics-assistant',
    number: 'EXP-02',
    title: 'AI Analytics Assistant',
    category: 'Business Intelligence · NL-to-Insight',
    summary:
      'Turns plain-English operational questions into safe analytical queries across bookings, table turnover, and workforce hours.',
    pipeline: ['Question', 'Business data', 'Analysis', 'Answer'],
    sampleInput: '"Compare Friday dinner occupancy with scheduled floor staff hours."',
    reasoningSteps: [
      'tool.query_reservations_summary({ day: "Friday", shift: "Dinner" })',
      'tool.query_workforce_roster({ day: "Friday", role: "Floor", shift: "Dinner" })',
      'synthesize.operational_balance({ coversWindow: "19:00-21:00" })',
    ],
    structuredOutput: [
      { label: 'Peak Window', value: '19:30 – 21:00 (High table concurrency)' },
      { label: 'Roster Coverage', value: '4 Floor Staff scheduled · 1 shift gap at 20:00' },
      { label: 'Recommendation', value: 'Extend Shift #SH-12 by 60 mins for peak coverage' },
    ],
    statusLabel: 'Experiment · ProsisIt Analytics',
  },
  {
    id: 'ai-voice-interface',
    number: 'EXP-03',
    title: 'AI Voice Interface',
    category: 'Voice-to-Intent · Hands-Free Ops',
    summary:
      'Enables managers on the floor to query operational systems by voice, routing speech through intent reasoning and tool execution.',
    pipeline: ['Voice', 'Reasoning', 'Tool execution', 'Response'],
    sampleInput: '[Voice Stream] "Who is currently clocked in for the kitchen evening shift?"',
    reasoningSteps: [
      'audio.transcribe_stream() → Intent: workforce_live_attendance',
      'rbac.verify_permission({ role: "Manager", scope: "workforce:read" }) → Granted',
      'tool.get_active_checkins({ department: "Kitchen", verifiedOnly: true })',
    ],
    structuredOutput: [
      { label: 'Verified On-Site', value: '5 Kitchen Staff clocked in (GPS + BSSID matched)' },
      { label: 'Pending Arrival', value: '1 Sous Chef scheduled for 17:00' },
      { label: 'Voice Response', value: 'Synthesized 4-second audio summary' },
    ],
    statusLabel: 'Prototype · ProsisIt Voice',
  },
  {
    id: 'ai-ui-generation',
    number: 'EXP-04',
    title: 'AI UI Generation',
    category: 'Design Systems · Rapid Prototyping',
    summary:
      'Accelerates product exploration by turning structured domain requirements into typed React + Tailwind component architectures.',
    pipeline: ['Requirements', 'Interface', 'Components', 'Implementation'],
    sampleInput: 'Spec: "Multi-tenant table pacing drawer with 15-min slot caps and override toggles."',
    reasoningSteps: [
      'spec.parse_constraints({ tokens: "design-system", accessibility: "WCAG-AA" })',
      'ui.compose_hierarchy({ primitives: ["Drawer", "SlotGrid", "RuleToggle"] })',
      'code.validate_typescript({ strict: true })',
    ],
    structuredOutput: [
      { label: 'Generated Surface', value: 'PacingConfigurationDrawer.tsx' },
      { label: 'State Model', value: 'Typed React Hook Form + optimistic updates' },
      { label: 'Engineering Validation', value: 'Refined layout hierarchy & keyboard focus traps' },
    ],
    statusLabel: 'Workflow · Product Engineering',
  },
  {
    id: 'ai-workflow-automation',
    number: 'EXP-05',
    title: 'AI Workflow Automation',
    category: 'Event-Driven · Autonomous Routing',
    summary:
      'Connects real-time domain events with AI classification and structured operational notifications.',
    pipeline: ['Event', 'AI reasoning', 'Action', 'Notification'],
    sampleInput: 'Event: "New group booking (10 guests) with note: Gluten allergy + anniversary table."',
    reasoningSteps: [
      'event.ingest("reservation.created") → Extract unstructured guest notes',
      'ai.classify_operational_tags() → Tags: [DIETARY_CRITICAL, LARGE_PARTY, CELEBRATION]',
      'workflow.dispatch_notifications({ targets: ["KitchenPrep", "HostStand"] })',
    ],
    structuredOutput: [
      { label: 'Extracted Tags', value: 'Gluten Allergy · Anniversary · 10 Pax' },
      { label: 'Automated Action', value: 'Pinned dietary alert to Kitchen & Host brief' },
      { label: 'Guest Confirmation', value: 'Dispatched tailored confirmation email' },
    ],
    statusLabel: 'System Pattern · Automation',
  },
];

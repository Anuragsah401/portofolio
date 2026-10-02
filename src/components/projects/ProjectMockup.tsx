import { Calendar, CheckCircle2, Clock, Mic, QrCode, ShieldCheck, Smartphone, Sparkles, Utensils, Wifi } from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  variant?: 'hero' | 'detail' | 'mobile';
}

export function ProjectMockup({ projectId, variant = 'hero' }: ProjectMockupProps) {
  if (projectId === 'seatbooking') {
    return <SeatBookingMockup variant={variant} />;
  }
  if (projectId === 'prosisit') {
    return <ProsisItMockup variant={variant} />;
  }
  if (projectId === 'workforce') {
    return <WorkforceMockup variant={variant} />;
  }
  return <EMenuMockup variant={variant} />;
}

function WindowHeader({ title, badge }: { title: string; badge: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border-subtle bg-bg-primary px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-border-strong bg-bg-surface" />
          <span className="h-2.5 w-2.5 rounded-full border border-border-strong bg-bg-surface" />
          <span className="h-2.5 w-2.5 rounded-full border border-border-strong bg-bg-surface" />
        </div>
        <span className="ml-2 font-mono text-[11px] text-text-secondary">{title}</span>
      </div>
      <span className="rounded border border-accent-border bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-medium text-accent">
        {badge}
      </span>
    </div>
  );
}

function SeatBookingMockup({ variant }: { variant: 'hero' | 'detail' | 'mobile' }) {
  if (variant === 'mobile') {
    return (
      <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-elevated">
        <div className="border-b border-border-subtle bg-bg-primary px-4 py-3 text-center">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
            Guest Mobile Booking Flow
          </span>
        </div>
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-text-primary">Reserve a Table</div>
              <div className="font-mono text-[11px] text-text-secondary">Multi-Tenant Venue · Dinner</div>
            </div>
            <Calendar className="h-4 w-4 text-accent" />
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            <div className="rounded border border-accent bg-accent-soft p-2 text-center text-accent">4 Guests</div>
            <div className="rounded border border-border-strong bg-bg-surface p-2 text-center text-text-primary">Today</div>
            <div className="rounded border border-border-strong bg-bg-surface p-2 text-center text-text-primary">19:30</div>
          </div>
          <div className="space-y-1.5">
            <div className="font-mono text-[10px] uppercase text-text-muted">Available Slots</div>
            <div className="grid grid-cols-3 gap-2 font-mono text-xs">
              <span className="rounded border border-border-subtle bg-bg-primary py-1.5 text-center text-text-secondary">19:00</span>
              <span className="rounded border border-accent bg-accent px-2 py-1.5 text-center font-semibold text-bg-primary">19:30</span>
              <span className="rounded border border-border-subtle bg-bg-primary py-1.5 text-center text-text-secondary">20:15</span>
            </div>
          </div>
          <div className="rounded border border-border-subtle bg-bg-surface p-2.5 font-mono text-[11px] text-text-secondary">
            ✓ Email confirmation + SMS reminder enabled
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border-strong bg-bg-elevated shadow-elevated">
      <WindowHeader title="seatbooking // host-operations-console" badge="MULTI-TENANT LIVE" />
      <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-12 md:divide-x md:divide-y-0">
        {/* Left Reservation Queue */}
        <div className="p-4 sm:p-5 md:col-span-7">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Evening Service Queue
            </span>
            <span className="font-mono text-[11px] text-text-muted">Dining Room & Patio</span>
          </div>
          <div className="space-y-2.5">
            {[
              { time: '19:00', guest: 'A. Lindqvist', party: '4 Pax', table: 'T-04', status: 'SEATED', note: 'Window request · SMS Confirmed' },
              { time: '19:30', guest: 'M. Laurent', party: '2 Pax', table: 'T-12', status: 'ARRIVING', note: 'Anniversary · Email Confirmed' },
              { time: '20:00', guest: 'K. Takahashi', party: '6 Pax', table: 'P-02', status: 'CONFIRMED', note: 'Patio Zone · Dietary Note' },
            ].map((row) => (
              <div
                key={row.guest}
                className="flex items-center justify-between rounded-sm border border-border-subtle bg-bg-surface px-3 py-2.5"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-accent">{row.time}</span>
                  <div>
                    <div className="text-xs font-semibold text-text-primary">{row.guest}</div>
                    <div className="font-mono text-[10px] text-text-muted">{row.note}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="rounded border border-border-strong bg-bg-elevated px-2 py-0.5 text-text-secondary">
                    {row.party}
                  </span>
                  <span className="rounded border border-border-strong bg-bg-primary px-2 py-0.5 text-text-primary">
                    {row.table}
                  </span>
                  <span className="hidden rounded bg-accent-soft px-2 py-0.5 text-[10px] text-accent sm:inline-block">
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Table Map & Automation Pipeline */}
        <div className="flex flex-col justify-between bg-bg-surface/50 p-4 sm:p-5 md:col-span-5">
          <div>
            <div className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Floor Table Topology
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'T-01', cap: '2p', state: 'Occupied' },
                { id: 'T-04', cap: '4p', state: 'Seated' },
                { id: 'T-08', cap: '4p', state: 'Available' },
                { id: 'T-12', cap: '2p', state: 'Reserved' },
                { id: 'P-01', cap: '4p', state: 'Available' },
                { id: 'P-02', cap: '6p', state: 'Reserved' },
              ].map((table) => (
                <div
                  key={table.id}
                  className={`rounded-sm border p-2 text-center font-mono ${
                    table.state === 'Available'
                      ? 'border-accent/40 bg-accent-soft text-accent'
                      : 'border-border-strong bg-bg-elevated text-text-secondary'
                  }`}
                >
                  <div className="text-xs font-semibold text-text-primary">{table.id}</div>
                  <div className="text-[10px]">{table.cap} · {table.state}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-sm border border-border-subtle bg-bg-primary p-3">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-text-secondary">Automation Pipeline</span>
              <span className="text-accent">Active</span>
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-text-muted">
              Booking → Conflict Check → Email Confirmation → SMS Reminder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProsisItMockup({ variant }: { variant: 'hero' | 'detail' | 'mobile' }) {
  if (variant === 'mobile') {
    return (
      <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-elevated">
        <div className="flex items-center justify-between border-b border-border-subtle bg-bg-primary px-4 py-3">
          <span className="font-mono text-[11px] text-text-secondary">ProsisIt Voice Mode</span>
          <Mic className="h-3.5 w-3.5 text-accent" />
        </div>
        <div className="space-y-3 p-4">
          <div className="rounded border border-border-subtle bg-bg-surface p-3 text-xs text-text-primary">
            &ldquo;Check tonight’s patio reservations and verify if kitchen evening shift is fully clocked in.&rdquo;
          </div>
          <div className="rounded border border-accent-border bg-accent-soft p-3 font-mono text-[11px] text-accent">
            → Executing: reservations.query() &amp; workforce.status()
          </div>
          <div className="rounded border border-border-strong bg-bg-primary p-3 font-mono text-[11px] text-text-secondary">
            RBAC: Manager Verified · Audit #AUD-892
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border-strong bg-bg-elevated shadow-elevated">
      <WindowHeader title="prosisit // ai-business-assistant" badge="VOICE + TOOL EXECUTION" />
      <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-12 md:divide-x md:divide-y-0">
        {/* Left: AI Conversation & Voice Stream */}
        <div className="space-y-3.5 p-4 sm:p-5 md:col-span-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Operator Conversation Stream
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded border border-border-strong bg-bg-surface px-2 py-0.5 font-mono text-[10px] text-text-secondary">
              <Mic className="h-3 w-3 text-accent" /> Voice Active
            </span>
          </div>

          {/* Prompt */}
          <div className="rounded-sm border border-border-subtle bg-bg-surface p-3 text-xs leading-relaxed text-text-primary">
            <span className="mb-1 block font-mono text-[10px] uppercase text-text-muted">
              Manager Voice Input
            </span>
            &ldquo;Move the 8:00 PM group booking to Table P-02 and check who is covering the patio section tonight.&rdquo;
          </div>

          {/* Reasoning & Tool Trace */}
          <div className="rounded-sm border border-border-strong bg-bg-primary p-3 font-mono text-[11px]">
            <div className="mb-1.5 flex items-center justify-between text-text-muted">
              <span>AI REASONING &amp; TOOL CALLS</span>
              <span className="text-accent">RBAC: PERMITTED</span>
            </div>
            <div className="space-y-1 text-text-secondary">
              <div>1. tool.get_reservation(time="20:00") → Matched #RES-412</div>
              <div>2. tool.get_shift_assignment(zone="Patio") → Assigned: Elena R.</div>
              <div className="text-accent">3. guard.require_approval(action="assign_table", target="P-02")</div>
            </div>
          </div>
        </div>

        {/* Right: Human-in-the-Loop Approval & Audit */}
        <div className="flex flex-col justify-between bg-bg-surface/50 p-4 sm:p-5 md:col-span-5">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Approval Workflow
              </span>
              <ShieldCheck className="h-4 w-4 text-accent" />
            </div>

            <div className="rounded-sm border border-accent-border bg-bg-elevated p-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Action Pending Confirmation
              </div>
              <div className="mt-1 text-xs font-semibold text-text-primary">
                Reassign #RES-412 → Patio Table P-02
              </div>
              <p className="mt-1 text-[11px] text-text-secondary">
                Patio Server on shift: Elena R. (Clocked in via verified BSSID).
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px]">
                <span className="rounded bg-accent px-2.5 py-1 font-semibold text-bg-primary">
                  Approve Execution
                </span>
                <span className="rounded border border-border-strong bg-bg-surface px-2.5 py-1 text-text-secondary">
                  Cancel
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-sm border border-border-subtle bg-bg-primary p-3 font-mono text-[10px] text-text-muted">
            <div className="flex justify-between text-text-secondary">
              <span>IMMUTABLE AUDIT TRAIL</span>
              <span>LOGGED</span>
            </div>
            <div className="mt-1 truncate">
              actor: manager_01 · scope: reservations:write · trace: verified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkforceMockup({ variant }: { variant: 'hero' | 'detail' | 'mobile' }) {
  if (variant === 'mobile') {
    return (
      <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-elevated">
        <div className="flex items-center justify-between border-b border-border-subtle bg-bg-primary px-4 py-3">
          <span className="font-mono text-[11px] text-text-secondary">Employee Mobile App</span>
          <Smartphone className="h-3.5 w-3.5 text-accent" />
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-text-primary">Evening Floor Shift</div>
              <div className="font-mono text-[11px] text-text-muted">16:30 – 23:30</div>
            </div>
            <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-[10px] text-accent">
              ON SITE
            </span>
          </div>
          <div className="space-y-1.5 rounded border border-border-subtle bg-bg-surface p-3 font-mono text-[11px]">
            <div className="flex items-center justify-between text-text-primary">
              <span>GPS Geofence</span>
              <span className="text-accent">✓ Verified</span>
            </div>
            <div className="flex items-center justify-between text-text-primary">
              <span>Wi-Fi BSSID</span>
              <span className="text-accent">✓ Venue Matched</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border-strong bg-bg-elevated shadow-elevated">
      <WindowHeader title="workforce // shift-and-attendance-platform" badge="GPS + BSSID VERIFIED" />
      <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-12 md:divide-x md:divide-y-0">
        {/* Left Manager Roster */}
        <div className="p-4 sm:p-5 md:col-span-7">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Live Shift &amp; Attendance Roster
            </span>
            <span className="font-mono text-[11px] text-text-muted">Hospitality Team</span>
          </div>

          <div className="space-y-2.5">
            {[
              { name: 'Elena Rostova', role: 'Lead Server · Patio', shift: '16:00 – 23:00', verify: 'BSSID + GPS', state: 'CLOCKED IN' },
              { name: 'Marcus Vance', role: 'Sous Chef · Kitchen', shift: '15:00 – 22:30', verify: 'BSSID + GPS', state: 'CLOCKED IN' },
              { name: 'Liam O’Connor', role: 'Bartender · Bar', shift: '17:00 – 00:00', verify: 'Scheduled', state: 'UPCOMING' },
            ].map((staff) => (
              <div
                key={staff.name}
                className="flex items-center justify-between rounded-sm border border-border-subtle bg-bg-surface px-3 py-2.5"
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary">{staff.name}</div>
                  <div className="font-mono text-[10px] text-text-muted">
                    {staff.role} · {staff.shift}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="inline-flex items-center gap-1 rounded border border-border-strong bg-bg-primary px-2 py-0.5 text-text-secondary">
                    <Wifi className="h-3 w-3 text-accent" />
                    {staff.verify}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 font-medium ${
                      staff.state === 'CLOCKED IN'
                        ? 'bg-accent-soft text-accent'
                        : 'bg-bg-elevated text-text-muted'
                    }`}
                  >
                    {staff.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Verification Check-in Module */}
        <div className="flex flex-col justify-between bg-bg-surface/50 p-4 sm:p-5 md:col-span-5">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Presence Verification
              </span>
              <Smartphone className="h-4 w-4 text-accent" />
            </div>

            <div className="space-y-2 rounded-sm border border-border-strong bg-bg-elevated p-3.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Location Check</span>
                <span className="inline-flex items-center gap-1 text-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" /> On-Premise
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Wi-Fi BSSID</span>
                <span className="inline-flex items-center gap-1 text-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                </span>
              </div>
              <div className="border-t border-border-subtle pt-2 text-[11px] text-text-muted">
                Prevents remote clock-ins and automates timesheet hour calculation.
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-sm border border-border-subtle bg-bg-primary p-3 font-mono text-[11px] text-text-secondary">
            Weekly Shift Hours · Break Tracking · Instant Roster Alerts
          </div>
        </div>
      </div>
    </div>
  );
}

function EMenuMockup({ variant }: { variant: 'hero' | 'detail' | 'mobile' }) {
  if (variant === 'mobile') {
    return (
      <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-border-strong bg-bg-elevated shadow-elevated">
        <div className="flex items-center justify-between border-b border-border-subtle bg-bg-primary px-4 py-3">
          <span className="font-mono text-[11px] text-text-secondary">Table #08 · QR Menu</span>
          <QrCode className="h-3.5 w-3.5 text-accent" />
        </div>
        <div className="space-y-3 p-4">
          <div className="rounded border border-border-subtle bg-bg-surface p-2.5">
            <div className="flex justify-between text-xs font-semibold text-text-primary">
              <span>Charred Octopus</span>
              <span>1x</span>
            </div>
            <div className="font-mono text-[10px] text-text-muted">Note: No cilantro · Sent to KDS</div>
          </div>
          <div className="rounded bg-text-primary py-2 text-center font-mono text-xs font-semibold text-bg-primary">
            Order Dispatched to Kitchen →
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border-strong bg-bg-elevated shadow-elevated">
      <WindowHeader title="e-menu // qr-ordering-and-kitchen-display" badge="REAL-TIME KDS SYNC" />
      <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-12 md:divide-x md:divide-y-0">
        {/* Left: Table QR Guest Session */}
        <div className="p-4 sm:p-5 md:col-span-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Table #08 · Guest QR Session
              </span>
            </div>
            <span className="font-mono text-[10px] text-accent">LIVE CART</span>
          </div>

          <div className="space-y-2">
            {[
              { item: 'Wood-Fired Flatbread', mod: 'Extra herb oil · Shareable', qty: '1x' },
              { item: 'Pan-Seared Sea Bass', mod: 'Gluten-Free preparation', qty: '2x' },
              { item: 'Artisanal Citrus Spritz', mod: 'Bar Station', qty: '2x' },
            ].map((line) => (
              <div
                key={line.item}
                className="flex items-center justify-between rounded-sm border border-border-subtle bg-bg-surface px-3 py-2"
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary">{line.item}</div>
                  <div className="font-mono text-[10px] text-text-muted">{line.mod}</div>
                </div>
                <span className="rounded border border-border-strong bg-bg-primary px-2 py-0.5 font-mono text-xs text-accent">
                  {line.qty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real-Time Kitchen Display (KDS) */}
        <div className="flex flex-col justify-between bg-bg-surface/50 p-4 sm:p-5 md:col-span-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-accent" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                  Kitchen Display Queue (KDS)
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-text-secondary">
                <Clock className="h-3 w-3 text-accent" /> Real-Time
              </span>
            </div>

            <div className="rounded-sm border border-accent-border bg-bg-elevated p-3.5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2 font-mono text-xs">
                <span className="font-semibold text-text-primary">TICKET #KDS-204 · TABLE 08</span>
                <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] text-accent">
                  PREPARING
                </span>
              </div>
              <div className="mt-2.5 space-y-1 font-mono text-[11px] text-text-secondary">
                <div>• 1x Wood-Fired Flatbread</div>
                <div>• 2x Pan-Seared Sea Bass [GF Alert]</div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-sm border border-border-subtle bg-bg-primary p-3 font-mono text-[11px] text-text-muted">
            QR Scan → Digital Menu → Cart → Kitchen Ticket → Served
          </div>
        </div>
      </div>
    </div>
  );
}

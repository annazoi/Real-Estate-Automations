"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/ui/brand-mark";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z" },
      { href: "/dashboard/analytics", label: "Analytics", icon: "M3 20h18M7 20V10m5 10V4m5 16v-7" },
    ],
  },
  {
    label: "Engagement",
    items: [
      { href: "/dashboard/leads", label: "Leads" },
      { href: "/dashboard/conversations", label: "Conversations" },
      { href: "/dashboard/calls", label: "Calls" },
    ],
  },
  {
    label: "Property & CRM",
    items: [
      { href: "/dashboard/properties", label: "Properties" },
      { href: "/dashboard/crm", label: "CRM" },
      { href: "/dashboard/agents", label: "AI Agents" },
    ],
  },
  {
    label: "Account",
    items: [
      { href: "/dashboard/integrations", label: "Integrations" },
      { href: "/dashboard/billing", label: "Billing" },
      { href: "/dashboard/settings", label: "Settings" },
    ],
  },
];

const ICONS: Record<string, React.ReactNode> = {
  "/dashboard": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
  "/dashboard/analytics": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M3 20h18M7 20V10m5 10V4m5 16v-7" />
    </svg>
  ),
  "/dashboard/leads": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </svg>
  ),
  "/dashboard/conversations": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
    </svg>
  ),
  "/dashboard/calls": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z" />
    </svg>
  ),
  "/dashboard/properties": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  "/dashboard/crm": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M9 10v10" />
    </svg>
  ),
  "/dashboard/agents": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M12 7V4M9 4h6M9 13h.01M15 13h.01" />
    </svg>
  ),
  "/dashboard/integrations": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="7" cy="12" r="3" />
      <circle cx="17" cy="6" r="3" />
      <circle cx="17" cy="18" r="3" />
      <path d="M9.5 10.5 14.5 7M9.5 13.5l5 3.5" />
    </svg>
  ),
  "/dashboard/billing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
  "/dashboard/settings": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.4.67.73.86.3.18.64.27 1 .27H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  ),
};

export default function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={`app-sidebar flex flex-col py-5 px-4 sticky top-0 h-screen ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="flex items-center justify-between mb-6">
        <Link href="/dashboard" className="flex items-center gap-2 px-2">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            <BrandMark />
          </span>
          <span className="font-display text-lg" style={{ color: "var(--navy-foreground)" }}>
            Arqon
          </span>
        </Link>
        <button className="lg:hidden p-1" style={{ color: "var(--navy-foreground)" }} onClick={onClose} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto scrollbar-thin">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <p
              className="px-3 pt-4 pb-1 text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: "color-mix(in oklab, var(--navy-foreground) 45%, transparent)" }}
            >
              {group.label}
            </p>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`sidebar-link ${active ? "active" : ""}`} onClick={onClose}>
                  {ICONS[item.href]}
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <Link
        href="/"
        className="sidebar-link mt-4"
        style={{ borderTop: "1px solid color-mix(in oklab, var(--navy-foreground) 12%, transparent)", paddingTop: ".9rem" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to site
      </Link>
    </aside>
  );
}

"use client";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="app-topbar sticky top-0 z-10 flex items-center gap-4 px-6 py-3.5">
      <button className="btn-ghost btn p-2 lg:hidden" aria-label="Toggle menu" onClick={onMenuClick}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="relative flex-1 max-w-md">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          style={{ color: "var(--muted-foreground)" }}
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.2-3.2" />
        </svg>
        <input
          type="search"
          placeholder="Search leads, properties, calls..."
          className="field-input pl-9"
          style={{ backgroundColor: "var(--muted)", borderColor: "transparent" }}
        />
      </div>

      <button className="relative p-2 rounded-lg" style={{ color: "var(--muted-foreground)" }} aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--destructive)" }} />
      </button>

      <div className="flex items-center gap-2.5 pl-3" style={{ borderLeft: "1px solid var(--border)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://i.pravatar.cc/64?img=47" alt="" className="w-8 h-8 rounded-full object-cover" />
        <div className="hidden sm:block leading-tight">
          <p className="text-sm font-medium">Petros A.</p>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Agency Admin
          </p>
        </div>
      </div>
    </header>
  );
}

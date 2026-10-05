export default function DashboardView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Good afternoon, Petros</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
            Here&apos;s what your AI team handled today, Oct 5.
          </p>
        </div>
        <button className="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 5v14M5 12h14" />
          </svg>
          New Lead
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="surface-card kpi-card">
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>New leads today</p>
            <span className="badge badge-converted">+18%</span>
          </div>
          <p className="font-display text-3xl mt-2">47</p>
        </div>
        <div className="surface-card kpi-card">
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>AI conversations active</p>
            <span className="badge badge-ai">live</span>
          </div>
          <p className="font-display text-3xl mt-2">12</p>
        </div>
        <div className="surface-card kpi-card">
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Calls in progress</p>
            <span className="badge badge-muted">2 of 5 lines</span>
          </div>
          <p className="font-display text-3xl mt-2">2</p>
        </div>
        <div className="surface-card kpi-card">
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Conversion rate</p>
            <span className="badge badge-converted">+4.1%</span>
          </div>
          <p className="font-display text-3xl mt-2">31.2%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="surface-card lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg">Recent activity</h2>
            <a href="/dashboard/conversations" className="text-sm font-medium" style={{ color: "var(--primary)" }}>
              View all
            </a>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--ai-soft)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--ai)" }}>
                  <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">Chatbot</span> qualified <span className="font-medium">Elena Dimitrova</span> as a hot lead for a 2BR in Vake
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>2 minutes ago</p>
              </div>
              <span className="badge badge-new">New</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--secondary)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">AI Voice Agent</span> completed a 4m32s call with <span className="font-medium">Giorgi Beridze</span> — booked viewing
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>14 minutes ago</p>
              </div>
              <span className="badge badge-converted">Converted</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--viber-soft)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--viber)" }}>
                  <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">Viber Assistant</span> flagged a question it couldn&apos;t answer for <span className="font-medium">Nino Kapanadze</span>
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>26 minutes ago</p>
              </div>
              <span className="badge badge-human">Needs human</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--accent)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--accent-foreground)" }}>
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18M9 10v10" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">CRM sync</span> created 6 new contact records from today&apos;s conversations
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>1 hour ago</p>
              </div>
              <span className="badge badge-muted">Automated</span>
            </li>
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="font-display text-lg mb-4">AI employees</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <span className="relative flex w-2 h-2">
                  <span
                    className="absolute inline-flex w-full h-full rounded-full"
                    style={{ backgroundColor: "var(--success)", opacity: 0.5, animation: "pulse-dot 1.6s infinite" }}
                  />
                  <span className="relative inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
                </span>
                <span className="text-sm font-medium">Website Chatbot</span>
              </div>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>12 active</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
                <span className="text-sm font-medium">Voice Agent</span>
              </div>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>2 on call</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
                <span className="text-sm font-medium">Viber Assistant</span>
              </div>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>5 threads</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--muted-foreground)" }} />
                <span className="text-sm font-medium">Property Matcher</span>
              </div>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>idle</span>
            </li>
          </ul>
          <a href="/dashboard/agents" className="btn btn-secondary w-full mt-4 justify-center text-sm">
            Configure agents
          </a>
        </div>
      </div>
    </>
  );
}

export default function AnalyticsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Analytics</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Last 30 days</p>
        </div>
        <select className="field-select w-auto"><option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option></select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {[
          ["Leads captured", "1,284"],
          ["Avg. response time", "8s"],
          ["Conversion rate", "31.2%"],
          ["Call minutes used", "2,140 / 3,000"],
        ].map(([label, value]) => (
          <div key={label} className="surface-card kpi-card">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{label}</p>
            <p className="font-display text-2xl mt-1">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="surface-card p-6 lg:col-span-2">
          <p className="font-display text-lg mb-4">Lead volume over time</p>
          <svg viewBox="0 0 600 220" className="w-full h-56">
            <line x1="0" y1="40" x2="600" y2="40" stroke="var(--border)" />
            <line x1="0" y1="100" x2="600" y2="100" stroke="var(--border)" />
            <line x1="0" y1="160" x2="600" y2="160" stroke="var(--border)" />
            <polyline fill="none" stroke="var(--primary)" strokeWidth={2.5}
              points="0,180 50,165 100,170 150,140 200,150 250,110 300,120 350,90 400,95 450,70 500,60 550,45 600,50" />
            <polyline fill="color-mix(in oklab, var(--primary) 12%, transparent)" stroke="none"
              points="0,180 50,165 100,170 150,140 200,150 250,110 300,120 350,90 400,95 450,70 500,60 550,45 600,50 600,210 0,210" />
          </svg>
          <div className="flex justify-between text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
            <span>Sep 6</span><span>Sep 14</span><span>Sep 22</span><span>Sep 30</span><span>Oct 5</span>
          </div>
        </div>

        <div className="surface-card p-6">
          <p className="font-display text-lg mb-4">Channel performance</p>
          <div className="space-y-3">
            {[
              ["Website Chat", 48, "var(--ai)"],
              ["Voice Agent", 29, "var(--primary)"],
              ["Viber", 16, "var(--viber)"],
              ["Manual", 7, "var(--gold)"],
            ].map(([label, pct, color]) => (
              <div key={label as string}>
                <div className="flex justify-between text-sm mb-1"><span>{label}</span><span style={{ color: "var(--muted-foreground)" }}>{pct}%</span></div>
                <div className="h-2 rounded-full" style={{ backgroundColor: "var(--muted)" }}>
                  <div className="h-2 rounded-full" style={{ width: `${pct}%`, backgroundColor: color as string }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="surface-card p-6">
        <p className="font-display text-lg mb-4">Conversion funnel</p>
        <div className="grid grid-cols-5 gap-3 text-center">
          {[
            ["1,284", "New", "h-28", "var(--primary)", "var(--primary-foreground)"],
            ["860", "Qualified", "h-24", "color-mix(in oklab, var(--primary) 85%, white)", "var(--primary-foreground)"],
            ["520", "Viewing", "h-20", "color-mix(in oklab, var(--primary) 65%, white)", "var(--foreground)"],
            ["310", "Negotiating", "h-14", "color-mix(in oklab, var(--primary) 45%, white)", "var(--foreground)"],
            ["401", "Converted", "h-10", "var(--success)", "white"],
          ].map(([value, label, height, bg, fg]) => (
            <div key={label}>
              <div className={`${height} rounded-lg flex items-end justify-center text-xs font-medium pb-2`} style={{ backgroundColor: bg, color: fg }}>{value}</div>
              <p className="text-xs mt-2" style={{ color: "var(--muted-foreground)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

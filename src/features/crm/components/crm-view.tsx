export default function CrmView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">CRM</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Pipeline synced with HubSpot · last sync 2 min ago</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge badge-converted">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6 9 17l-5-5" /></svg>
            Sync healthy
          </span>
          <button className="btn btn-secondary text-sm">Sync now</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <p className="text-sm font-medium mb-3 flex items-center justify-between">New <span className="badge badge-muted">128</span></p>
          <div className="space-y-3">
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Elena Dimitrova</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>2BR · Vake · $180k</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-ai text-[10px] px-1.5">Chatbot</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>2m</span>
              </div>
            </div>
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Levan Jorbenadze</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>1BR · Saburtalo</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-muted text-[10px] px-1.5">Voice</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>3h</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 flex items-center justify-between">Qualified <span className="badge badge-muted">86</span></p>
          <div className="space-y-3">
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Nino Kapanadze</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>Studio · Saburtalo</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-gold text-[10px] px-1.5">Viber</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>26m</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 flex items-center justify-between">Viewing booked <span className="badge badge-muted">52</span></p>
          <div className="space-y-3">
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Giorgi Beridze</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>3BR House · Mtatsminda</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-muted text-[10px] px-1.5">Voice</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Sat 11AM</span>
              </div>
            </div>
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Sopo Gelashvili</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>2BR · Vake</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-muted text-[10px] px-1.5">Voice</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Tomorrow</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 flex items-center justify-between">Negotiating <span className="badge badge-muted">31</span></p>
          <div className="space-y-3">
            <div className="surface-card p-3.5">
              <p className="font-medium text-sm">Ana Petriashvili</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>2BR · Old Tbilisi</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-muted text-[10px] px-1.5">Manual</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>1h</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 flex items-center justify-between">Converted <span className="badge badge-converted">15</span></p>
          <div className="space-y-3">
            <div className="surface-card p-3.5" style={{ borderColor: "var(--success)" }}>
              <p className="font-medium text-sm">David Chikovani</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>4BR Penthouse · Vake</p>
              <div className="flex items-center justify-between mt-2.5">
                <span className="badge badge-ai text-[10px] px-1.5">Chatbot</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-card p-6 mt-8">
        <h2 className="font-display text-lg mb-4">Field mapping</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          {[
            ["lead_score", "lifecyclestage"],
            ["property_interest", "custom_property"],
            ["channel", "lead_source"],
          ].map(([a, b]) => (
            <div key={a} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "var(--muted)" }}>
              <span>Arqon: <span className="font-medium">{a}</span></span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: "var(--muted-foreground)" }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <span className="font-medium">HubSpot: {b}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

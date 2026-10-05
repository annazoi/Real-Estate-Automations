import { INTEGRATIONS } from "@/features/integrations/data";

export default function IntegrationsView() {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-display text-2xl">Integrations</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Connect your CRM, telephony, and messaging channels</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTEGRATIONS.map((item) => (
          <div key={item.name} className="surface-card p-5">
            <div className="flex items-center justify-between mb-3">
              {item.icon === "viber" ? (
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--viber-soft)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--viber)" }}>
                    <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
                  </svg>
                </span>
              ) : item.icon === "voice" ? (
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--ai-soft)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--ai)" }}>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z" />
                  </svg>
                </span>
              ) : (
                <span className="w-10 h-10 rounded-xl flex items-center justify-center font-display" style={{ backgroundColor: item.bg, color: item.fg }}>{item.letter}</span>
              )}
              <span className={`badge ${item.connected ? "badge-converted" : "badge-muted"}`}>{item.connected ? "Connected" : "Not connected"}</span>
            </div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
            <button className={`btn text-sm w-full mt-4 ${item.connected ? "btn-secondary" : "btn-primary"}`}>{item.connected ? "Manage" : "Connect"}</button>
          </div>
        ))}
      </div>
    </>
  );
}

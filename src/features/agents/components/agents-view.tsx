export default function AgentsView() {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-display text-2xl">AI Agents</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Configure the persona, knowledge, and tone of each AI employee</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        <div className="surface-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--ai-soft)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--ai)" }}>
                <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
              </svg>
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <span className="w-10 h-5.5 rounded-full peer-checked:bg-[var(--primary)]" style={{ backgroundColor: "var(--border)" }} />
            </label>
          </div>
          <p className="font-medium">Website Chatbot</p>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Engages visitors, qualifies leads, books viewings</p>
        </div>
        <div className="surface-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--secondary)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z" />
              </svg>
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <span className="w-10 h-5.5 rounded-full peer-checked:bg-[var(--primary)]" style={{ backgroundColor: "var(--border)" }} />
            </label>
          </div>
          <p className="font-medium">Voice Agent</p>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Makes &amp; receives calls, schedules callbacks</p>
        </div>
        <div className="surface-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--viber-soft)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color: "var(--viber)" }}>
                <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z" />
              </svg>
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <span className="w-10 h-5.5 rounded-full peer-checked:bg-[var(--primary)]" style={{ backgroundColor: "var(--border)" }} />
            </label>
          </div>
          <p className="font-medium">Viber Assistant</p>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Continues conversations over Viber/WhatsApp</p>
        </div>
      </div>

      <div className="surface-card p-6">
        <div className="flex items-center gap-2 mb-5" style={{ borderBottom: "1px solid var(--border)" }}>
          <button className="px-4 py-2.5 text-sm font-medium" style={{ borderBottom: "2px solid var(--primary)", color: "var(--primary)" }}>Website Chatbot</button>
          <button className="px-4 py-2.5 text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>Voice Agent</button>
          <button className="px-4 py-2.5 text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>Viber Assistant</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="field-label">Agent name</label>
              <input type="text" defaultValue="Keystone Assistant" className="field-input" />
            </div>
            <div>
              <label className="field-label">Tone</label>
              <select className="field-select">
                <option>Warm &amp; professional</option>
                <option>Concise &amp; direct</option>
                <option>Friendly &amp; casual</option>
              </select>
            </div>
            <div>
              <label className="field-label">Knowledge base</label>
              <select className="field-select">
                <option>All active listings + FAQ docs</option>
                <option>Active listings only</option>
              </select>
            </div>
            <div>
              <label className="field-label">Escalate to human when</label>
              <textarea className="field-textarea" rows={3} defaultValue="Lead asks about legal/contract terms, requests a discount beyond 5%, or expresses frustration." />
            </div>
          </div>

          <div>
            <label className="field-label">Opening message</label>
            <div className="rounded-lg p-4" style={{ backgroundColor: "var(--muted)" }}>
              <div className="flex justify-start">
                <div className="surface-card px-3.5 py-2.5 max-w-[85%] text-sm">Hi there! 👋 I&apos;m the Keystone Assistant. Looking to buy, rent, or just browsing? I can help you find the right place in seconds.</div>
              </div>
            </div>
            <button className="btn btn-secondary text-sm mt-3">Edit script</button>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
          <button className="btn btn-secondary text-sm">Discard</button>
          <button className="btn btn-primary text-sm">Save changes</button>
        </div>
      </div>
    </>
  );
}

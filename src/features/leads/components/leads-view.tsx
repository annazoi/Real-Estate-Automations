import { LEADS } from "@/features/leads/data";

export default function LeadsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Leads</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>312 total · 47 captured today</p>
        </div>
        <button className="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 5v14M5 12h14" /></svg>
          Add Lead
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        {[
          ["128", "New"],
          ["86", "Qualified"],
          ["52", "Viewing booked"],
          ["31", "Negotiating"],
        ].map(([n, l]) => (
          <div key={l} className="surface-card p-4 text-center">
            <p className="font-display text-2xl">{n}</p>
            <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{l}</p>
          </div>
        ))}
        <div className="surface-card p-4 text-center">
          <p className="font-display text-2xl" style={{ color: "var(--success)" }}>15</p>
          <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>Converted</p>
        </div>
      </div>

      <div className="surface-card">
        <div className="flex flex-wrap items-center gap-3 p-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <input type="search" placeholder="Search by name, email, phone..." className="field-input max-w-xs" />
          <select className="field-select w-auto">
            <option>All sources</option>
            <option>Website Chat</option>
            <option>Voice Agent</option>
            <option>Viber</option>
            <option>Manual</option>
          </select>
          <select className="field-select w-auto">
            <option>All statuses</option>
            <option>New</option>
            <option>Qualified</option>
            <option>Converted</option>
          </select>
          <button className="btn btn-ghost ml-auto text-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Lead</th>
                <th>Source</th>
                <th>Interest</th>
                <th>Score</th>
                <th>Status</th>
                <th>Last contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {LEADS.map((lead) => (
                <tr key={lead.name}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://i.pravatar.cc/64?img=${lead.img}`} alt="" className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{lead.sub}</p>
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge ${lead.sourceClass}`}>{lead.source}</span></td>
                  <td className="text-sm">{lead.interest}</td>
                  <td><span className="font-medium" style={{ color: lead.scoreColor }}>{lead.score}</span></td>
                  <td><span className={`badge ${lead.statusClass}`}>{lead.status}</span></td>
                  <td className="text-sm" style={{ color: "var(--muted-foreground)" }}>{lead.last}</td>
                  <td><button className="btn-ghost btn p-1.5">⋯</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4 text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--muted-foreground)" }}>
          <p>Showing 1–5 of 312 leads</p>
          <div className="flex items-center gap-2">
            <button className="btn-secondary btn text-sm px-3 py-1.5">Previous</button>
            <button className="btn-secondary btn text-sm px-3 py-1.5">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

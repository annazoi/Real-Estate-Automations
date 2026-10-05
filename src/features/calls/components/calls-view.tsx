import { CALL_LOG } from "@/features/calls/data";

export default function CallsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Calls</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>AI Voice Agent call log and live lines</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="surface-card p-6 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <span className="badge badge-ai">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--ai)" }} />
              Live call
            </span>
            <span className="text-sm font-mono" style={{ color: "var(--muted-foreground)" }}>02:47</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.pravatar.cc/64?img=12" alt="" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-medium">Giorgi Beridze</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>+995 555 11 22 33</p>
            </div>
          </div>
          <div className="flex items-end justify-center gap-1 h-12 mb-5">
            {[40, 70, 100, 55, 85, 40, 65].map((h, i) => (
              <div
                key={i}
                className="wave-bar w-1 rounded-full bg-ai"
                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="rounded-lg p-3 text-sm mb-4" style={{ backgroundColor: "var(--muted)", maxHeight: 120, overflowY: "auto" }} aria-live="polite">
            <p className="mb-1.5"><span className="font-medium">AI:</span> So Saturday at 2pm works for the viewing?</p>
            <p><span className="font-medium">Giorgi:</span> Perfect, see you then. Thanks for the quick call.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary flex-1 text-sm">Listen in</button>
            <button className="btn text-sm flex-1" style={{ backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" }}>End call</button>
          </div>
        </div>

        <div className="surface-card lg:col-span-2">
          <div className="flex items-center gap-3 p-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <input type="search" placeholder="Search calls..." className="field-input max-w-xs" />
            <select className="field-select w-auto ml-auto">
              <option>All outcomes</option>
              <option>Booked</option>
              <option>Callback</option>
              <option>Missed</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr><th>Contact</th><th>Duration</th><th>Outcome</th><th>Sentiment</th><th>When</th><th></th></tr>
              </thead>
              <tbody>
                {CALL_LOG.map((c) => (
                  <tr key={c.name}>
                    <td className="font-medium">{c.name}</td>
                    <td className="font-mono text-sm">{c.duration}</td>
                    <td><span className={`badge ${c.outcomeClass}`}>{c.outcome}</span></td>
                    <td>{c.sentiment ? <span className={`badge ${c.sentimentClass}`}>{c.sentiment}</span> : "—"}</td>
                    <td className="text-sm" style={{ color: "var(--muted-foreground)" }}>{c.when}</td>
                    <td><button className="btn-ghost btn p-1.5">▶</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

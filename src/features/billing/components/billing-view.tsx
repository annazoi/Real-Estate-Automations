import { INVOICES } from "@/features/billing/data";

export default function BillingView() {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-display text-2xl">Billing</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Manage your plan, usage, and invoices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="surface-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-1">
            <p className="font-display text-xl">Growth plan</p>
            <span className="badge badge-converted">Active</span>
          </div>
          <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>$349/month · renews Nov 5, 2026</p>

          <div className="space-y-4">
            {[
              ["Call minutes", "2,140 / 3,000", 71, "var(--primary)"],
              ["Conversations", "4,820 / 10,000", 48, "var(--ai)"],
              ["Seats", "6 / 10", 60, "var(--gold)"],
            ].map(([label, usage, pct, color]) => (
              <div key={label as string}>
                <div className="flex justify-between text-sm mb-1.5"><span>{label}</span><span style={{ color: "var(--muted-foreground)" }}>{usage}</span></div>
                <div className="h-2 rounded-full" style={{ backgroundColor: "var(--muted)" }}>
                  <div className="h-2 rounded-full" style={{ width: `${pct}%`, backgroundColor: color as string }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button className="btn btn-primary text-sm">Upgrade plan</button>
            <button className="btn btn-secondary text-sm">View all plans</button>
          </div>
        </div>

        <div className="surface-card p-6">
          <p className="font-medium mb-4">Payment method</p>
          <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "var(--muted)" }}>
            <span className="w-10 h-7 rounded flex items-center justify-center text-xs font-medium" style={{ backgroundColor: "var(--navy)", color: "var(--navy-foreground)" }}>VISA</span>
            <div>
              <p className="text-sm font-medium">•••• 4242</p>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Expires 09/28</p>
            </div>
          </div>
          <button className="btn btn-secondary text-sm w-full mt-4">Update payment method</button>
        </div>
      </div>

      <div className="surface-card">
        <div className="p-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <p className="font-display text-lg">Invoice history</p>
        </div>
        <table className="data-table">
          <thead><tr><th>Invoice</th><th>Date</th><th>Amount</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {INVOICES.map((inv) => (
              <tr key={inv.id}>
                <td className="font-medium">{inv.id}</td>
                <td className="text-sm">{inv.date}</td>
                <td className="text-sm">{inv.amount}</td>
                <td><span className="badge badge-converted">Paid</span></td>
                <td><button className="btn-ghost btn text-sm">Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

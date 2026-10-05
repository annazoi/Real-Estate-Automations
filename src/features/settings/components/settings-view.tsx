import { TEAM } from "@/features/settings/data";

export default function SettingsView() {
  return (
    <>
      <div className="mb-6">
        <h1 className="font-display text-2xl">Settings</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Manage your account, team, and security preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <nav className="flex lg:flex-col gap-1 overflow-x-auto">
          <button className="text-left px-3.5 py-2.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "var(--secondary)" }}>Profile</button>
          <button className="text-left px-3.5 py-2.5 rounded-lg text-sm" style={{ color: "var(--muted-foreground)" }}>Team members</button>
          <button className="text-left px-3.5 py-2.5 rounded-lg text-sm" style={{ color: "var(--muted-foreground)" }}>Notifications</button>
          <button className="text-left px-3.5 py-2.5 rounded-lg text-sm" style={{ color: "var(--muted-foreground)" }}>API keys</button>
          <button className="text-left px-3.5 py-2.5 rounded-lg text-sm" style={{ color: "var(--muted-foreground)" }}>Security</button>
        </nav>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <p className="font-display text-lg mb-4">Profile</p>
            <div className="flex items-center gap-4 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.pravatar.cc/80?img=47" alt="" className="w-16 h-16 rounded-full object-cover" />
              <button className="btn btn-secondary text-sm">Change photo</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="field-label">Full name</label><input type="text" defaultValue="Petros A." className="field-input" /></div>
              <div><label className="field-label">Email</label><input type="email" defaultValue="petros@hosperly.com" className="field-input" /></div>
              <div><label className="field-label">Role</label><input type="text" defaultValue="Agency Admin" className="field-input" disabled /></div>
              <div><label className="field-label">Agency name</label><input type="text" defaultValue="Arqon Realty Group" className="field-input" /></div>
            </div>
            <div className="flex justify-end mt-5">
              <button className="btn btn-primary text-sm">Save changes</button>
            </div>
          </div>

          <div className="surface-card p-6">
            <p className="font-display text-lg mb-4">Team members</p>
            <table className="data-table">
              <thead><tr><th>Member</th><th>Role</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {TEAM.map((m) => (
                  <tr key={m.name}>
                    <td className="flex items-center gap-3 py-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://i.pravatar.cc/64?img=${m.img}`} alt="" className="w-8 h-8 rounded-full object-cover" />
                      <span className="font-medium">{m.name}</span>
                    </td>
                    <td className="text-sm">{m.role}</td>
                    <td><span className={`badge ${m.status === "Active" ? "badge-converted" : "badge-muted"}`}>{m.status}</span></td>
                    <td>{m.name !== "Petros A." && <button className="btn-ghost btn p-1.5">⋯</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-secondary text-sm mt-4">Invite team member</button>
          </div>
        </div>
      </div>
    </>
  );
}

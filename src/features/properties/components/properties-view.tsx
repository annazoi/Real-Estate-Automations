import { PROPERTIES } from "@/features/properties/data";

export default function PropertiesView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Properties</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>86 active listings · AI matching enabled</p>
        </div>
        <button className="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 5v14M5 12h14" /></svg>
          Add Property
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input type="search" placeholder="Search properties..." className="field-input max-w-xs" />
        <select className="field-select w-auto"><option>All types</option><option>Apartment</option><option>House</option><option>Studio</option></select>
        <select className="field-select w-auto"><option>All districts</option><option>Vake</option><option>Saburtalo</option><option>Old Tbilisi</option></select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROPERTIES.map((p) => (
          <div key={p.title} className="surface-card overflow-hidden">
            <div className="relative h-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://images.unsplash.com/${p.img}?w=600&h=400&fit=crop`} alt={p.title} className="w-full h-full object-cover" />
              <span className={`badge ${p.matchClass} absolute top-3 left-3`}>{p.match}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg">{p.price}</p>
                <span className="badge badge-muted">Active</span>
              </div>
              <p className="text-sm mt-0.5">{p.title}</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{p.meta}</p>
            </div>
          </div>
        ))}

        <div className="surface-card overflow-hidden flex items-center justify-center text-center p-8" style={{ borderStyle: "dashed" }}>
          <div>
            <p className="font-display text-lg mb-1">Import your listings</p>
            <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>Connect your CRM or upload a CSV to sync properties automatically</p>
            <button className="btn btn-secondary text-sm">Import now</button>
          </div>
        </div>
      </div>
    </>
  );
}

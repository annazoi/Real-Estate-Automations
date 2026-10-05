export default function ConversationsView() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl">Conversations</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Unified inbox across chatbot and Viber</p>
        </div>
      </div>

      <div className="surface-card overflow-hidden" style={{ height: "68vh" }}>
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-full">
          <div className="border-r h-full flex flex-col" style={{ borderColor: "var(--border)" }}>
            <div className="p-3" style={{ borderBottom: "1px solid var(--border)" }}>
              <input type="search" placeholder="Search conversations..." className="field-input" style={{ backgroundColor: "var(--muted)", borderColor: "transparent" }} />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              <button className="w-full flex items-start gap-3 p-3.5 text-left" style={{ backgroundColor: "var(--muted)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/64?img=5" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm truncate">Elena Dimitrova</p>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>2m</span>
                  </div>
                  <p className="text-xs truncate mt-0.5" style={{ color: "var(--muted-foreground)" }}>Yes, I&apos;d like to see it this weekend</p>
                </div>
                <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: "var(--ai)" }} />
              </button>
              <button className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-[var(--muted)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/64?img=32" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm truncate">Nino Kapanadze</p>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>26m</span>
                  </div>
                  <p className="text-xs truncate mt-0.5" style={{ color: "var(--muted-foreground)" }}>Can you tell me about parking?</p>
                </div>
                <span className="badge badge-human text-[10px] px-1.5 shrink-0">Human</span>
              </button>
              <button className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-[var(--muted)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/64?img=12" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm truncate">Giorgi Beridze</p>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>1h</span>
                  </div>
                  <p className="text-xs truncate mt-0.5" style={{ color: "var(--muted-foreground)" }}>Perfect, see you Saturday at 2pm</p>
                </div>
              </button>
              <button className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-[var(--muted)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/64?img=23" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm truncate">David Chikovani</p>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>1d</span>
                  </div>
                  <p className="text-xs truncate mt-0.5" style={{ color: "var(--muted-foreground)" }}>Deal closed — thank you!</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/64?img=5" alt="" className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-sm">Elena Dimitrova</p>
                  <p className="text-xs flex items-center gap-1" style={{ color: "var(--muted-foreground)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--ai)" }} />
                    Website Chatbot · active
                  </p>
                </div>
              </div>
              <button className="btn btn-secondary text-sm">Take over</button>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-3" style={{ backgroundColor: "var(--muted)" }}>
              <div className="flex justify-start">
                <div className="surface-card px-3.5 py-2.5 max-w-[75%] text-sm">Hi! I&apos;m looking for a 2-bedroom in Vake, budget around $180k. Do you have anything?</div>
              </div>
              <div className="flex justify-end">
                <div className="px-3.5 py-2.5 max-w-[75%] text-sm rounded-2xl" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                  I found 3 matching listings in Vake within your budget. Would you like me to send details, or book a viewing directly?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="surface-card px-3.5 py-2.5 max-w-[75%] text-sm">Send details please, and I&apos;d like to see the best one this weekend</div>
              </div>
              <div className="flex justify-end">
                <div className="px-3.5 py-2.5 max-w-[75%] text-sm rounded-2xl" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                  Great choice — Vake Residence, 2BR/85m², $178,000. I&apos;ve booked a viewing for Saturday at 11:00 AM with agent Tamar. Confirmation sent to your email.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="surface-card px-3.5 py-2.5 max-w-[75%] text-sm">Yes, I&apos;d like to see it this weekend</div>
              </div>
            </div>

            <div className="p-3 flex items-center gap-2" style={{ borderTop: "1px solid var(--border)" }}>
              <input type="text" placeholder="Type a message..." className="field-input" />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

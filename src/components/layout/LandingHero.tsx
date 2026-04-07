"use client";

export function LandingHero() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="border-b border-white/[0.06] bg-[#0a0a0a]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 h-14 max-w-7xl mx-auto">
        <span className="text-sm font-semibold tracking-tight">ScreenDiet</span>
        <button
          onClick={scrollToGenerator}
          className="text-sm font-medium text-white/50 hover:text-white transition-colors"
        >
          Get started
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">

          {/* Left — Text */}
          <div className="flex-1 lg:pr-16">
            <p className="text-sm text-white/40 font-medium mb-5">
              Screen time cards for social media
            </p>

            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.03em] mb-6">
              Your screen time,
              <br />
              <span className="italic font-light text-white/40">but make it</span>
              <br />
              worth posting.
            </h1>

            <p className="text-base text-white/50 max-w-md leading-relaxed mb-8">
              Pick your apps, set the time, choose a theme — export a card that
              actually looks good. No account, no uploads, nothing saved.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={scrollToGenerator}
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-all active:scale-95"
              >
                Create your card
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex items-center gap-5 text-xs text-white/30 self-center">
                <span>Free forever</span>
                <span>·</span>
                <span>No signup</span>
                <span>·</span>
                <span>PNG export</span>
              </div>
            </div>
          </div>

          {/* Right — Card previews */}
          <div className="lg:w-[420px] flex-shrink-0 flex items-end gap-3 select-none pointer-events-none">
            {/* Card 1 — Midnight */}
            <div
              className="flex-1 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #0D0D1A 0%, #1E1040 100%)",
                aspectRatio: "9/16",
              }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-semibold text-white/50">ScreenDiet</span>
                  <span className="text-[8px] text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded-full">Today</span>
                </div>
                <div className="text-xl font-bold text-white mb-0.5">5h 34m</div>
                <div className="text-[9px] text-white/40 mb-3">total · 4 apps</div>
                <div className="space-y-2 flex-1">
                  {[
                    { name: "TikTok", pct: 82, color: "#7C3AED" },
                    { name: "Instagram", pct: 52, color: "#6D28D9" },
                    { name: "YouTube", pct: 38, color: "#4C1D95" },
                    { name: "Twitter", pct: 24, color: "#3B0764" },
                  ].map((a) => (
                    <div key={a.name}>
                      <div className="flex justify-between text-[8px] text-white/60 mb-0.5">
                        <span>{a.name}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10">
                        <div className="h-full rounded-full" style={{ width: `${a.pct}%`, backgroundColor: a.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-3 text-[7px] text-white/30 text-center">screendiet.app</div>
              </div>
            </div>

            {/* Card 2 — Sunset (taller) */}
            <div
              className="flex-1 rounded-2xl overflow-hidden -mb-6"
              style={{
                background: "linear-gradient(160deg, #2D0A00 0%, #8B2500 100%)",
                aspectRatio: "9/16",
              }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-semibold text-white/50">ScreenDiet</span>
                  <span className="text-[8px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded-full">This Week</span>
                </div>
                <div className="text-xl font-bold text-white mb-0.5">24h 12m</div>
                <div className="text-[9px] text-white/40 mb-3">total · 5 apps</div>
                <div className="space-y-2 flex-1">
                  {[
                    { name: "Netflix", pct: 88, color: "#FF6B35" },
                    { name: "YouTube", pct: 65, color: "#E85D04" },
                    { name: "Instagram", pct: 44, color: "#DC2F02" },
                    { name: "Spotify", pct: 30, color: "#9D0208" },
                  ].map((a) => (
                    <div key={a.name}>
                      <div className="flex justify-between text-[8px] text-white/60 mb-0.5">
                        <span>{a.name}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10">
                        <div className="h-full rounded-full" style={{ width: `${a.pct}%`, backgroundColor: a.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-3 text-[7px] text-white/30 text-center">screendiet.app</div>
              </div>
            </div>

            {/* Card 3 — Neon */}
            <div
              className="flex-1 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #050505 0%, #0A1A0A 100%)",
                aspectRatio: "9/16",
              }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-semibold text-[#00FF87]/50">ScreenDiet</span>
                  <span className="text-[8px] text-[#00FF87] bg-[#00FF87]/10 px-1.5 py-0.5 rounded-full">Month</span>
                </div>
                <div className="text-xl font-bold text-[#00FF87] mb-0.5">68h 5m</div>
                <div className="text-[9px] text-[#00FF87]/40 mb-3">total · 6 apps</div>
                <div className="space-y-2 flex-1">
                  {[
                    { name: "Discord", pct: 90, color: "#00FF87" },
                    { name: "Roblox", pct: 72, color: "#00CC6A" },
                    { name: "YouTube", pct: 55, color: "#009950" },
                    { name: "TikTok", pct: 35, color: "#006633" },
                  ].map((a) => (
                    <div key={a.name}>
                      <div className="flex justify-between text-[8px] text-[#00FF87]/50 mb-0.5">
                        <span>{a.name}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5">
                        <div className="h-full rounded-full" style={{ width: `${a.pct}%`, backgroundColor: a.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-3 text-[7px] text-[#00FF87]/20 text-center">screendiet.app</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

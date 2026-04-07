"use client";

export function LandingHero() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 border-b border-zinc-900">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-950/60 border border-violet-800/50 rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm">📱</span>
          <span className="text-sm font-medium text-violet-300">
            Screen time, but make it aesthetic
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
          Turn your screen time
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            into art.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Beautiful, shareable screen time cards in seconds.
          No account. No nonsense. Just vibes.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToGenerator}
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/40"
        >
          Create your card
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Social proof / indicators */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-zinc-600">
          <span>✦ No login</span>
          <span>✦ Free forever</span>
          <span>✦ Instant PNG export</span>
        </div>
      </div>
    </section>
  );
}

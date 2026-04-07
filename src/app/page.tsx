import { LandingHero } from "@/components/layout/LandingHero";
import { GeneratorLayout } from "@/components/layout/GeneratorLayout";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <GeneratorLayout />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm font-semibold text-white/20">ScreenDiet</span>
          <span className="text-xs text-white/15">screendiet.app</span>
        </div>
      </footer>
    </main>
  );
}

import { LandingHero } from "@/components/layout/LandingHero";
import { GeneratorLayout } from "@/components/layout/GeneratorLayout";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <GeneratorLayout />

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-6 text-center">
        <p className="text-sm text-zinc-700">
          Made with ♥ by{" "}
          <a
            href="https://screendiet.app"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ScreenDiet
          </a>
        </p>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScreenDiet — Turn your screen time into art",
  description:
    "Create beautiful, shareable screen time cards in seconds. No account required. Just select your apps, assign time, pick a theme, and export.",
  openGraph: {
    title: "ScreenDiet — Turn your screen time into art",
    description: "Beautiful screen time cards in seconds. Wrapped energy for your digital habits.",
    type: "website",
    url: "https://screendiet.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScreenDiet — Turn your screen time into art",
    description: "Create shareable screen time cards in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}

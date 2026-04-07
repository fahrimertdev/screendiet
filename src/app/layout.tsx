import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

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
    <html lang="en" className={`h-full ${spaceGrotesk.variable}`}>
      <body className="min-h-full bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}

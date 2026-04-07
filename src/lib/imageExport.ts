import { SizePreset } from "@/types";

const SIZE_MAP: Record<SizePreset, { width: number; height: number }> = {
  story: { width: 1080, height: 1920 },
  square: { width: 1080, height: 1080 },
  landscape: { width: 1200, height: 675 },
};

export async function exportCardAsBlob(
  element: HTMLElement,
  preset: SizePreset
): Promise<Blob> {
  // Dynamic import to prevent SSR crash
  const { toPng } = await import("html-to-image");
  const { width, height } = SIZE_MAP[preset];

  const dataUrl = await toPng(element, {
    width,
    height,
    pixelRatio: 2,
    cacheBust: true,
    skipFonts: false,
    style: {
      transform: "scale(1)",
      transformOrigin: "top left",
    },
  });

  const response = await fetch(dataUrl);
  return response.blob();
}

export async function downloadCard(
  element: HTMLElement,
  preset: SizePreset
): Promise<void> {
  const blob = await exportCardAsBlob(element, preset);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `screendiet-${preset}-${Date.now()}.png`;
  link.click();
  URL.revokeObjectURL(url);
}

export async function copyCardToClipboard(
  element: HTMLElement,
  preset: SizePreset
): Promise<void> {
  if (!navigator.clipboard?.write) {
    throw new Error("Clipboard API not supported in this browser");
  }
  const blob = await exportCardAsBlob(element, preset);
  await navigator.clipboard.write([
    new ClipboardItem({ "image/png": blob }),
  ]);
}

export async function shareCard(
  element: HTMLElement,
  preset: SizePreset
): Promise<void> {
  const blob = await exportCardAsBlob(element, preset);
  const file = new File([blob], "screendiet.png", { type: "image/png" });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: "My Screen Time — ScreenDiet",
      text: "Check out my screen time card! Made with screendiet.app",
      files: [file],
    });
  } else {
    // Fallback: download
    await downloadCard(element, preset);
  }
}

export function getCardSize(preset: SizePreset): { width: number; height: number } {
  return SIZE_MAP[preset];
}

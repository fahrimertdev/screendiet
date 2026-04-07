"use client";

import { useCallback, useRef, useState } from "react";
import { SizePreset } from "@/types";
import { downloadCard, copyCardToClipboard, shareCard } from "@/lib/imageExport";

type ExportStatus = "idle" | "exporting" | "success" | "error";

export function useExport() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<ExportStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const withStatus = useCallback(async (fn: () => Promise<void>) => {
    setStatus("exporting");
    setErrorMessage(null);
    try {
      await fn();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Export failed";
      setErrorMessage(msg);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, []);

  const download = useCallback(
    (preset: SizePreset) => {
      if (!cardRef.current) return;
      const el = cardRef.current;
      withStatus(() => downloadCard(el, preset));
    },
    [withStatus]
  );

  const copy = useCallback(
    (preset: SizePreset) => {
      if (!cardRef.current) return;
      const el = cardRef.current;
      withStatus(() => copyCardToClipboard(el, preset));
    },
    [withStatus]
  );

  const share = useCallback(
    (preset: SizePreset) => {
      if (!cardRef.current) return;
      const el = cardRef.current;
      withStatus(() => shareCard(el, preset));
    },
    [withStatus]
  );

  return { cardRef, status, errorMessage, download, copy, share };
}

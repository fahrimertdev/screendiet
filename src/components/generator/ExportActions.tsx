"use client";

import { SizePreset } from "@/types";

type ExportStatus = "idle" | "exporting" | "success" | "error";

interface ExportActionsProps {
  sizePreset: SizePreset;
  status: ExportStatus;
  errorMessage: string | null;
  onDownload: (preset: SizePreset) => void;
  onCopy: (preset: SizePreset) => void;
  onShare: (preset: SizePreset) => void;
  hasApps: boolean;
}

export function ExportActions({
  sizePreset,
  status,
  errorMessage,
  onDownload,
  onCopy,
  onShare,
  hasApps,
}: ExportActionsProps) {
  const isExporting = status === "exporting";
  const isSuccess = status === "success";

  return (
    <div>
      <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
        Export
      </h2>

      <div className="flex gap-2">
        {/* Download */}
        <button
          onClick={() => onDownload(sizePreset)}
          disabled={isExporting || !hasApps}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
            !hasApps
              ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
              : isSuccess
              ? "bg-green-600 text-white"
              : "bg-violet-600 hover:bg-violet-500 text-white"
          } disabled:opacity-60`}
        >
          {isExporting ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Exporting...
            </>
          ) : isSuccess ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Saved!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v9M4.5 6.5L8 10l3.5-3.5M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download
            </>
          )}
        </button>

        {/* Copy */}
        <button
          onClick={() => onCopy(sizePreset)}
          disabled={isExporting || !hasApps}
          title="Copy to clipboard"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-7A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12H4" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>

        {/* Share */}
        <button
          onClick={() => onShare(sizePreset)}
          disabled={isExporting || !hasApps}
          title="Share"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="12.5" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12.5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="3.5" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5 7.2L11 3.4M5 8.8L11 12.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {!hasApps && (
        <p className="mt-2 text-xs text-zinc-600 text-center">
          Add at least one app to export your card
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="mt-2 text-xs text-red-400 text-center">{errorMessage}</p>
      )}
    </div>
  );
}

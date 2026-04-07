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
      <h2 className="text-base font-semibold text-white mb-4">Export</h2>

      {/* Primary download button */}
      <button
        onClick={() => onDownload(sizePreset)}
        disabled={isExporting || !hasApps}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
          !hasApps
            ? "bg-white/5 text-white/20 cursor-not-allowed"
            : isSuccess
            ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
            : "bg-white text-black hover:bg-white/90 active:scale-[0.98]"
        }`}
      >
        {isExporting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Generating...
          </>
        ) : isSuccess ? (
          <>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5L5.5 10.5L12.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Downloaded
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 1.5v9M4 7l3.5 3.5L11 7M1.5 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download PNG
          </>
        )}
      </button>

      {/* Secondary actions */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onCopy(sizePreset)}
          disabled={isExporting || !hasApps}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M9 4V2.5A1.5 1.5 0 007.5 1h-6A1.5 1.5 0 000 2.5v6A1.5 1.5 0 001.5 10H3" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Copy
        </button>
        <button
          onClick={() => onShare(sizePreset)}
          disabled={isExporting || !hasApps}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="10.5" cy="2" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="10.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="2.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M4 5.8L9 3.2M4 7.2L9 9.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Share
        </button>
      </div>

      {!hasApps && (
        <p className="mt-3 text-xs text-white/20 text-center">
          Add at least one app to export
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="mt-2 text-xs text-red-400 text-center">{errorMessage}</p>
      )}
    </div>
  );
}

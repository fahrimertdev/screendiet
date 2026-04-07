"use client";

import { useState, useRef, useEffect } from "react";
import { useGeneratorState } from "@/hooks/useGeneratorState";
import { useExport } from "@/hooks/useExport";
import { getCardSize } from "@/lib/imageExport";

import { AppPicker } from "@/components/generator/AppPicker";
import { SelectedAppsList } from "@/components/generator/SelectedAppsList";
import { PeriodSelector } from "@/components/generator/PeriodSelector";
import { ThemeSelector } from "@/components/generator/ThemeSelector";
import { SizePresetSelector } from "@/components/generator/SizePresetSelector";
import { ExportActions } from "@/components/generator/ExportActions";
import { CustomAppModal } from "@/components/generator/CustomAppModal";
import { ScreenCard } from "@/components/card/ScreenCard";

export function GeneratorLayout() {
  const gen = useGeneratorState();
  const exp = useExport();
  const [showCustomModal, setShowCustomModal] = useState(false);
  const previewPanelRef = useRef<HTMLDivElement>(null);
  const [previewScale, setPreviewScale] = useState(0.3);

  // Compute preview scale from panel width
  useEffect(() => {
    const el = previewPanelRef.current;
    if (!el) return;

    const update = () => {
      const panelWidth = el.clientWidth - 48; // account for padding
      const { width } = getCardSize(gen.state.sizePreset);
      setPreviewScale(Math.min(1, panelWidth / width));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [gen.state.sizePreset]);

  const { width, height } = getCardSize(gen.state.sizePreset);
  const previewHeight = height * previewScale;

  const toggleApp = (app: Parameters<typeof gen.addApp>[0]) => {
    if (gen.isAppSelected(app.id)) {
      gen.removeApp(app.id);
    } else {
      gen.addApp(app);
    }
  };

  return (
    <section id="generator" className="bg-zinc-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[480px_1fr] gap-8 items-start">

          {/* ─── Left: Controls ─── */}
          <div className="w-full space-y-8">

            {/* App Picker */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <AppPicker
                isAppSelected={gen.isAppSelected}
                isAtLimit={gen.isAtLimit}
                onToggle={toggleApp}
                onAddCustom={() => setShowCustomModal(true)}
                selectedCount={gen.state.selectedApps.length}
                maxApps={gen.MAX_APPS}
              />
            </div>

            {/* Selected Apps + Time */}
            {gen.state.selectedApps.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <SelectedAppsList
                  apps={gen.state.selectedApps}
                  totalMinutes={gen.totalMinutes}
                  onSetMinutes={gen.setMinutes}
                  onRemove={gen.removeApp}
                />
              </div>
            )}

            {/* Period */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <PeriodSelector
                selected={gen.state.period}
                customLabel={gen.state.customPeriodLabel}
                onSelect={gen.setPeriod}
                onCustomLabel={gen.setCustomLabel}
              />
            </div>

            {/* Theme */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <ThemeSelector
                selected={gen.state.theme}
                onSelect={gen.setTheme}
              />
            </div>

            {/* Size preset */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <SizePresetSelector
                selected={gen.state.sizePreset}
                onSelect={gen.setSizePreset}
              />
            </div>

            {/* Export */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <ExportActions
                sizePreset={gen.state.sizePreset}
                status={exp.status}
                errorMessage={exp.errorMessage}
                onDownload={exp.download}
                onCopy={exp.copy}
                onShare={exp.share}
                hasApps={gen.state.selectedApps.length > 0}
              />
            </div>
          </div>

          {/* ─── Right: Preview ─── */}
          <div
            ref={previewPanelRef}
            className="w-full lg:sticky lg:top-6"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                Preview
              </span>
              <span className="text-xs text-zinc-600">
                {width} × {height}
              </span>
            </div>

            {/* Preview container — clips to preview size */}
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800"
              style={{ height: `${previewHeight + 48}px`, padding: "24px" }}
            >
              {/* Scale wrapper */}
              <div
                style={{
                  transformOrigin: "top left",
                  transform: `scale(${previewScale})`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
              >
                {/* Actual full-res card — this is what gets exported */}
                <ScreenCard ref={exp.cardRef} state={gen.state} />
              </div>
            </div>

            {/* Preview hint */}
            <p className="mt-2 text-center text-xs text-zinc-700">
              This is exactly what you&apos;ll get when you export
            </p>
          </div>
        </div>
      </div>

      {/* Custom app modal */}
      {showCustomModal && (
        <CustomAppModal
          onAdd={gen.addCustomApp}
          onClose={() => setShowCustomModal(false)}
        />
      )}
    </section>
  );
}

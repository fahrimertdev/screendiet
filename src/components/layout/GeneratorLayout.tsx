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

  useEffect(() => {
    const el = previewPanelRef.current;
    if (!el) return;
    const update = () => {
      const panelWidth = el.clientWidth - 48;
      const panelHeight = el.clientHeight - 100; // subtract header/footer space
      const { width, height } = getCardSize(gen.state.sizePreset);
      const scaleByWidth = panelWidth / width;
      const scaleByHeight = panelHeight / height;
      setPreviewScale(Math.min(1, scaleByWidth, scaleByHeight));
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
    <section id="generator" className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-0 min-h-screen lg:items-start">

          {/* ─── Left panel: Controls ─── */}
          <div className="w-full lg:w-[440px] lg:flex-shrink-0 lg:border-r border-white/[0.06] lg:pr-10 py-10">

            {/* App selection */}
            <div className="mb-8">
              <AppPicker
                isAppSelected={gen.isAppSelected}
                isAtLimit={gen.isAtLimit}
                onToggle={toggleApp}
                onAddCustom={() => setShowCustomModal(true)}
                selectedCount={gen.state.selectedApps.length}
                maxApps={gen.MAX_APPS}
              />
            </div>

            {/* Time sliders */}
            {gen.state.selectedApps.length > 0 && (
              <div className="mb-8 pt-8 border-t border-white/[0.06]">
                <SelectedAppsList
                  apps={gen.state.selectedApps}
                  totalMinutes={gen.totalMinutes}
                  onSetMinutes={gen.setMinutes}
                  onRemove={gen.removeApp}
                />
              </div>
            )}

            {/* Period */}
            <div className="mb-8 pt-8 border-t border-white/[0.06]">
              <PeriodSelector
                selected={gen.state.period}
                customLabel={gen.state.customPeriodLabel}
                onSelect={gen.setPeriod}
                onCustomLabel={gen.setCustomLabel}
              />
            </div>

            {/* Theme */}
            <div className="mb-8 pt-8 border-t border-white/[0.06]">
              <ThemeSelector
                selected={gen.state.theme}
                onSelect={gen.setTheme}
              />
            </div>

            {/* Format */}
            <div className="mb-8 pt-8 border-t border-white/[0.06]">
              <SizePresetSelector
                selected={gen.state.sizePreset}
                onSelect={gen.setSizePreset}
              />
            </div>

            {/* Export */}
            <div className="pt-8 border-t border-white/[0.06]">
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

          {/* ─── Right panel: Preview ─── */}
          <div
            ref={previewPanelRef}
            className="flex-1 lg:pl-10 py-10 lg:sticky lg:top-0 lg:self-start flex flex-col"
            style={{ maxHeight: "100vh" }}
          >
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-medium text-white/30">Preview</p>
              <p className="text-xs text-white/20">{width} × {height}</p>
            </div>

            {/* Preview frame */}
            <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
              <div
                className="relative"
                style={{ width: `${width * previewScale}px`, height: `${previewHeight}px` }}
              >
                {/* Subtle shadow behind card */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                />
                {/* Actual card */}
                <div
                  style={{
                    transformOrigin: "top left",
                    transform: `scale(${previewScale})`,
                    width: `${width}px`,
                    height: `${height}px`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <ScreenCard ref={exp.cardRef} state={gen.state} />
                </div>
              </div>
            </div>

            {/* Hint */}
            {gen.state.selectedApps.length === 0 && (
              <p className="text-center text-xs text-white/20 mt-5">
                Select apps from the left to start building
              </p>
            )}
          </div>

        </div>
      </div>

      {showCustomModal && (
        <CustomAppModal
          onAdd={gen.addCustomApp}
          onClose={() => setShowCustomModal(false)}
        />
      )}
    </section>
  );
}

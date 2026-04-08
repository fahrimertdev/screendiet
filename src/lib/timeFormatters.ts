import { PeriodOption } from "@/types";

export function minutesToDisplay(minutes: number): string {
  if (minutes === 0) return "0m";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export function minutesToShort(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m > 0 ? `${m}m` : ""}`.trim();
}

export function percentOf(part: number, total: number): number {
  if (total === 0) return 0;
  return Math.min(100, Math.max(0, Math.round((part / total) * 100)));
}

export function periodLabel(period: PeriodOption, custom?: string): string {
  switch (period) {
    case "today":
      return "Today";
    case "week":
      return "This Week";
    case "month":
      return "This Month";
    case "custom":
      return custom || "Custom Period";
  }
}

export function normalizeMinutes(value: number): number {
  return Math.max(0, Math.min(720, Math.round(value / 15) * 15));
}

export function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();
}

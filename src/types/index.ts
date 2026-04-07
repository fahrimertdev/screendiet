export type AppCategory =
  | "social"
  | "video"
  | "messaging"
  | "gaming"
  | "productivity"
  | "music"
  | "other";

export type PeriodOption = "today" | "week" | "month" | "custom";

export type SizePreset = "story" | "square" | "landscape";

export type ThemeId =
  | "midnight"
  | "sunset"
  | "ocean"
  | "forest"
  | "neon"
  | "candy"
  | "minimal-dark"
  | "minimal-light";

export type AppDefinition = {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: AppCategory;
};

export type SelectedApp = AppDefinition & {
  minutes: number;
  isCustom?: boolean;
};

export type ThemeConfig = {
  id: ThemeId;
  name: string;
  background: string;
  surface: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
  barBackground: string;
  barFill: string;
  gradientFrom?: string;
  gradientTo?: string;
  decorativeClassNames?: string[];
};

export type FunFactInput = {
  totalMinutes: number;
  topAppId?: string;
  topCategory?: string;
};

export type FunFactRule = {
  id: string;
  condition: (input: FunFactInput) => boolean;
  messages: string[];
  priority: number;
};

export type GeneratorState = {
  selectedApps: SelectedApp[];
  period: PeriodOption;
  customPeriodLabel?: string;
  theme: ThemeId;
  sizePreset: SizePreset;
};

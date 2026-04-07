"use client";

import { useReducer, useCallback } from "react";
import {
  GeneratorState,
  SelectedApp,
  AppDefinition,
  PeriodOption,
  SizePreset,
  ThemeId,
} from "@/types";
import { THEME_REGISTRY } from "@/lib/themeRegistry";
import { getFunFact } from "@/lib/funFactEngine";

const MAX_APPS = 8;

type Action =
  | { type: "ADD_APP"; app: AppDefinition }
  | { type: "REMOVE_APP"; id: string }
  | { type: "SET_MINUTES"; id: string; minutes: number }
  | { type: "SET_PERIOD"; period: PeriodOption }
  | { type: "SET_CUSTOM_LABEL"; label: string }
  | { type: "SET_THEME"; theme: ThemeId }
  | { type: "SET_SIZE_PRESET"; preset: SizePreset }
  | { type: "ADD_CUSTOM_APP"; app: SelectedApp };

const initialState: GeneratorState = {
  selectedApps: [],
  period: "today",
  theme: "midnight",
  sizePreset: "story",
};

function reducer(state: GeneratorState, action: Action): GeneratorState {
  switch (action.type) {
    case "ADD_APP": {
      if (state.selectedApps.length >= MAX_APPS) return state;
      if (state.selectedApps.some((a) => a.id === action.app.id)) return state;
      return {
        ...state,
        selectedApps: [
          ...state.selectedApps,
          { ...action.app, minutes: 30 },
        ],
      };
    }
    case "REMOVE_APP": {
      return {
        ...state,
        selectedApps: state.selectedApps.filter((a) => a.id !== action.id),
      };
    }
    case "SET_MINUTES": {
      return {
        ...state,
        selectedApps: state.selectedApps.map((a) =>
          a.id === action.id ? { ...a, minutes: action.minutes } : a
        ),
      };
    }
    case "SET_PERIOD": {
      return { ...state, period: action.period };
    }
    case "SET_CUSTOM_LABEL": {
      return { ...state, customPeriodLabel: action.label };
    }
    case "SET_THEME": {
      return { ...state, theme: action.theme };
    }
    case "SET_SIZE_PRESET": {
      return { ...state, sizePreset: action.preset };
    }
    case "ADD_CUSTOM_APP": {
      if (state.selectedApps.length >= MAX_APPS) return state;
      return {
        ...state,
        selectedApps: [...state.selectedApps, action.app],
      };
    }
    default:
      return state;
  }
}

export function useGeneratorState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Derived values
  const totalMinutes = state.selectedApps.reduce(
    (sum, app) => sum + app.minutes,
    0
  );

  const sortedApps = [...state.selectedApps].sort(
    (a, b) => b.minutes - a.minutes
  );

  const topApp = sortedApps[0];

  const funFact = getFunFact({
    totalMinutes,
    topAppId: topApp?.id,
    topCategory: topApp?.category,
  });

  const activeTheme = THEME_REGISTRY[state.theme];
  const isAtLimit = state.selectedApps.length >= MAX_APPS;
  const isAppSelected = useCallback(
    (id: string) => state.selectedApps.some((a) => a.id === id),
    [state.selectedApps]
  );

  const addApp = useCallback((app: AppDefinition) => {
    dispatch({ type: "ADD_APP", app });
  }, []);

  const removeApp = useCallback((id: string) => {
    dispatch({ type: "REMOVE_APP", id });
  }, []);

  const setMinutes = useCallback((id: string, minutes: number) => {
    dispatch({ type: "SET_MINUTES", id, minutes });
  }, []);

  const setPeriod = useCallback((period: PeriodOption) => {
    dispatch({ type: "SET_PERIOD", period });
  }, []);

  const setCustomLabel = useCallback((label: string) => {
    dispatch({ type: "SET_CUSTOM_LABEL", label });
  }, []);

  const setTheme = useCallback((theme: ThemeId) => {
    dispatch({ type: "SET_THEME", theme });
  }, []);

  const setSizePreset = useCallback((preset: SizePreset) => {
    dispatch({ type: "SET_SIZE_PRESET", preset });
  }, []);

  const addCustomApp = useCallback((app: SelectedApp) => {
    dispatch({ type: "ADD_CUSTOM_APP", app });
  }, []);

  return {
    state,
    totalMinutes,
    funFact,
    activeTheme,
    isAtLimit,
    isAppSelected,
    addApp,
    removeApp,
    setMinutes,
    setPeriod,
    setCustomLabel,
    setTheme,
    setSizePreset,
    addCustomApp,
    MAX_APPS,
  };
}

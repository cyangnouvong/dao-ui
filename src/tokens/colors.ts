export const colors = {
  dark: {
    bg: "#1a1a17",
    ink: "#e4e4df",
    inkMid: "#a8a899",
    inkMuted: "#6b6b5e",
    inkFaint: "#4a4a40",
  },
  light: {
    bg: "#e4e4df",
    ink: "#1a1a17",
    inkMid: "#54533a",
    inkMuted: "#8a8a7c",
    inkFaint: "#aaaaa0",
  },
  validation: {
    success: "#4a7c59",
    error: "#c0392b",
  },
} as const;

export type ThemeKey = keyof typeof colors;
export type ThemeValues = (typeof colors)[ThemeKey];

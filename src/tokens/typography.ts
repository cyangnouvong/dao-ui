export const typography = {
  fontDisplay: '"Cormorant Garamond", serif',
  fontUI: '"Inter", sans-serif',
  size: {
    xs: "clamp(0.625rem, 0.8vw, 0.875rem)",
    sm: "clamp(0.8125rem, 1vw, 1rem)",
    base: "clamp(1rem, 1.2vw, 1.25rem)",
    lg: "clamp(1.125rem, 1.8vw, 2rem)",
    xl: "clamp(2rem, 3vw, 3rem)",
    xxl: "clamp(2rem, 4vw, 5rem)",
    xxxl: "clamp(4.5rem, 7vw, 10rem)",
  },
  tracking: {
    tight: "-0.2em",
    normal: "0",
    wide: "0.2em",
    wider: "0.3em",
  },

  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export declare const typography: {
    readonly font: {
        readonly display: "\"Cormorant Garamond\", serif";
        readonly ui: "\"Inter\", sans-serif";
    };
    readonly size: {
        readonly xs: "clamp(0.625rem, 0.8vw, 0.875rem)";
        readonly sm: "clamp(0.875rem, 1vw, 1rem)";
        readonly base: "clamp(1rem, 1.2vw, 1.25rem)";
        readonly lg: "clamp(1.125rem, 1.8vw, 2rem)";
        readonly xl: "clamp(2rem, 3vw, 3rem)";
        readonly xxl: "clamp(2rem, 4vw, 5rem)";
        readonly xxxl: "clamp(4.5rem, 7vw, 10rem)";
    };
    readonly tracking: {
        readonly tight: "-0.2em";
        readonly normal: "0";
        readonly wide: "0.2em";
        readonly wider: "0.3em";
    };
    readonly weight: {
        readonly light: 300;
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
};
export type TypographyKey = keyof typeof typography;
export type TypographyFont = keyof typeof typography.font;
export type TypographySizeKey = keyof typeof typography.size;
export type TypographyTrackingKey = keyof typeof typography.tracking;
export type TypographyWeightKey = keyof typeof typography.weight;

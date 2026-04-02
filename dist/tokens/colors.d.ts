export declare const colors: {
    readonly dark: {
        readonly bg: "#1a1a17";
        readonly ink: "#e4e4df";
        readonly inkMid: "#a8a899";
        readonly inkMuted: "#6b6b5e";
        readonly inkFaint: "#4a4a40";
    };
    readonly light: {
        readonly bg: "#e4e4df";
        readonly ink: "#1a1a17";
        readonly inkMid: "#54533a";
        readonly inkMuted: "#8a8a7c";
        readonly inkFaint: "#aaaaa0";
    };
};
export declare const validationColors: {
    readonly success: "#4a7c59";
    readonly error: "#c0392b";
};
export type ThemeKey = keyof typeof colors;
export type ThemeValues = (typeof colors)[ThemeKey];
export type ValidationColors = typeof validationColors;

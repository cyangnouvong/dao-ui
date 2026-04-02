import React from "react";
import type { TypographyFont, TypographySizeKey, TypographyTrackingKey, TypographyWeightKey } from "../../tokens";
type TextProps = {
    children: React.ReactNode;
    as?: React.ElementType;
    size?: TypographySizeKey;
    font?: TypographyFont;
    tracking?: TypographyTrackingKey;
    weight?: TypographyWeightKey;
    color?: "ink" | "ink-mid" | "ink-muted" | "ink-faint";
    className?: string;
    style?: React.CSSProperties;
    theme?: "light" | "dark";
};
declare const Text: ({ children, as: Tag, size, font, tracking, weight, color, className, style, theme, }: TextProps) => import("react/jsx-runtime").JSX.Element;
export default Text;

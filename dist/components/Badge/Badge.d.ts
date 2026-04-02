import React from "react";
import type { ThemeKey } from "../../tokens";
type BadgeProps = {
    children: React.ReactNode;
    theme?: ThemeKey;
    variant?: "outline" | "subtle" | "solid";
    size?: "sm" | "md" | "lg";
    className?: string;
    style?: React.CSSProperties;
};
declare const Badge: ({ children, theme, variant, size, className, style, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;

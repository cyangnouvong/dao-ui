import React from "react";
import type { ThemeKey } from "../../tokens";
type TooltipProps = {
    label: string;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    theme?: ThemeKey;
    className?: string;
    style?: React.CSSProperties;
};
declare const Tooltip: ({ label, children, placement, theme, className, style, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;

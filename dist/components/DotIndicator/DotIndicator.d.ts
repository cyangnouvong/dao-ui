import React from "react";
import { type SpacingKey } from "../../tokens/spacing";
import type { ThemeKey } from "../../tokens";
type DotIndicatorProps = {
    count: number;
    active: number;
    onChange?: (index: number) => void;
    direction?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
    gap?: SpacingKey;
    theme?: ThemeKey;
    getLabel?: (index: number) => string;
    className?: string;
    style?: React.CSSProperties;
};
declare const DotIndicator: ({ count, active, onChange, direction, size, gap, theme, getLabel, className, style, }: DotIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export default DotIndicator;

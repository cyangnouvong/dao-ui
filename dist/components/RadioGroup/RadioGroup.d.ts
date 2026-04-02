import React from "react";
import { type SpacingKey } from "../../tokens/spacing";
import type { ThemeKey } from "../../tokens";
type Option = {
    label: string;
    value: string;
};
type RadioGroupProps<T extends string> = {
    options: Option[];
    value: T;
    onChange: (value: T) => void;
    direction?: "horizontal" | "vertical";
    gap?: SpacingKey;
    theme?: ThemeKey;
    size?: "sm" | "md" | "lg";
    className?: string;
    style?: React.CSSProperties;
};
declare const RadioGroup: <T extends string>({ options, value, onChange, direction, gap, theme, size, className, style, }: RadioGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
export default RadioGroup;

import React from "react";
import type { ThemeKey } from "../../tokens";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    theme?: ThemeKey;
    variant?: "primary" | "outline" | "emphasis";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    showArrow?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;

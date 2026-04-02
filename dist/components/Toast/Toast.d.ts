import React from "react";
import type { ThemeKey } from "../../tokens";
type ToastVariant = "default" | "success" | "error";
type ToastContextValue = {
    toast: (message: string, variant?: ToastVariant) => void;
};
export declare const useToast: () => ToastContextValue;
type ToastProviderProps = {
    children: React.ReactNode;
    theme?: ThemeKey;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    duration?: number;
};
export declare const ToastProvider: ({ children, theme, position, duration, }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};

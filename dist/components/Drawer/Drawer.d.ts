import React from "react";
import type { ThemeKey } from "../../tokens";
type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: "left" | "right";
    theme?: ThemeKey;
    hideCloseButton?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
declare const Drawer: ({ open, onClose, children, side, theme, hideCloseButton, className, style, }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;

import React from "react";
import styles from "./Badge.module.css";
import type { ThemeKey } from "../../tokens";

type BadgeProps = {
  children: React.ReactNode;
  theme?: ThemeKey;
  variant?: "outline" | "subtle" | "solid";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
};

const Badge = ({
  children,
  theme,
  variant = "outline",
  size = "md",
  className = "",
  style,
}: BadgeProps) => {
  return (
    <span
      data-theme={theme}
      className={[
        styles["badge"],
        styles[variant],
        styles[`size-${size}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </span>
  );
};

export default Badge;

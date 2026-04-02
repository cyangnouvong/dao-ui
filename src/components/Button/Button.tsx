import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import type { ThemeKey } from "../../tokens/colors";

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
  hideArrow?: boolean;
};

/* forward ref because we might need to directly control the button from the outside */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      style,
      theme, // inherit theme from parent by default, but can be overridden by props
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      hideArrow = false,
    },
    ref,
  ) => {
    const isDisabled = disabled;

    return (
      <button
        ref={ref}
        data-theme={theme}
        className={[
          styles["btn-base"],
          styles[variant],
          styles[`size-${size}`],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={onClick}
        disabled={isDisabled}
      >
        {variant === "emphasis" && (
          <div className={styles["emphasis-shadow"]} />
        )}

        <div className={styles["btn-front"]}>
          {children}
          {!hideArrow && (
            <span className={styles["arrow"]} aria-hidden="true">
              →
            </span>
          )}
        </div>
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;

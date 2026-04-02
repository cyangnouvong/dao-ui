import React from "react";
import styles from "./RadioGroup.module.css";
import { spacing, type SpacingKey } from "../../tokens/spacing";
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

const RadioGroup = <T extends string>({
  options,
  value,
  onChange,
  direction = "horizontal",
  gap,
  theme,
  size = "md",
  className = "",
  style,
}: RadioGroupProps<T>) => {
  return (
    <div
      data-theme={theme}
      className={[
        styles["radio-group"],
        styles[direction],
        styles[`size-${size}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        ...(gap !== undefined &&
          ({ "--radio-gap": spacing[gap] } as React.CSSProperties)),
      }}
      role="radiogroup"
    >
      {options.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value as T)}
            className={[
              styles["radio-option"],
              active ? styles["radio-option-active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className={styles["radio-indicator"]} aria-hidden="true" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RadioGroup;

import React from "react";
import styles from "./DotIndicator.module.css";
import { spacing, type SpacingKey } from "../../tokens/spacing";
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

const DotIndicator = ({
  count,
  active,
  onChange,
  direction = "vertical",
  size = "md",
  gap,
  theme,
  getLabel,
  className = "",
  style,
}: DotIndicatorProps) => {
  const isClickable = typeof onChange === "function";

  return (
    <div
      data-theme={theme}
      role={isClickable ? "radiogroup" : undefined}
      className={[
        styles["dot-group"],
        styles[direction],
        styles[`size-${size}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        ...(gap !== undefined &&
          ({ "--dot-gap": spacing[gap] } as React.CSSProperties)),
      }}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          role={isClickable ? "radio" : undefined}
          aria-checked={isClickable ? active === i : undefined}
          aria-label={getLabel ? getLabel(i) : `Item ${i + 1}`}
          disabled={!isClickable}
          onClick={() => onChange?.(i)}
          className={[
            styles["dot"],
            active === i ? styles["dot-active"] : "",
            isClickable ? styles["dot-clickable"] : styles["dot-static"],
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
};

export default DotIndicator;

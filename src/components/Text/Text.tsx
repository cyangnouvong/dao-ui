import React from "react";
import styles from "./Text.module.css";
import type {
  TypographyFont,
  TypographySizeKey,
  TypographyTrackingKey,
  TypographyWeightKey,
} from "../../tokens";

type TextProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  size?: TypographySizeKey;
  font?: TypographyFont;
  tracking?: TypographyTrackingKey;
  weight?: TypographyWeightKey;
  color?: "ink" | "ink-mid" | "ink-muted" | "ink-faint";
  className?: string;
  style?: React.CSSProperties;
  theme?: "light" | "dark";
};

const Text = ({
  children,
  as: Tag = "p",
  size = "base",
  font = "ui",
  tracking = "normal",
  weight = "normal",
  color = "ink",
  className = "",
  style,
  theme,
}: TextProps) => {
  return (
    <Tag
      data-theme={theme}
      className={[
        styles["text"],
        styles[`size-${size}`],
        styles[`font-${font}`],
        styles[`tracking-${tracking}`],
        styles[`weight-${weight}`],
        styles[`color-${color}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Text;

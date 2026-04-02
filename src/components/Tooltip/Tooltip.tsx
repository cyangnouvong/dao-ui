import React, { useId, useState } from "react";
import styles from "./Tooltip.module.css";
import type { ThemeKey } from "../../tokens";

type TooltipProps = {
  label: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  theme?: ThemeKey;
  className?: string;
  style?: React.CSSProperties;
};

const Tooltip = ({
  label,
  children,
  placement = "top",
  theme,
  className = "",
  style,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  // render unique id for aria-describedby
  const tooltipId = useId();

  return (
    <div
      data-theme={theme}
      className={[styles["tooltip-wrapper"], className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocusCapture={() => setVisible(true)}
      onBlurCapture={() => setVisible(false)}
    >
      {React.isValidElement(children)
        ? React.cloneElement(
            children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
            {
              "aria-describedby": tooltipId,
            },
          )
        : children}

      <div
        id={tooltipId}
        role="tooltip"
        className={[
          styles["tooltip"],
          styles[`placement-${placement}`],
          visible ? styles["tooltip-visible"] : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </div>
    </div>
  );
};

export default Tooltip;

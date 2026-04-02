import React, { useEffect } from "react";
import styles from "./Drawer.module.css";
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

const Drawer = ({
  open,
  onClose,
  children,
  side = "right",
  theme,
  hideCloseButton = false,
  className = "",
  style,
}: DrawerProps) => {
  // close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  // no scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={[styles["backdrop"], open ? styles["backdrop-open"] : ""]
          .filter(Boolean)
          .join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        data-theme={theme}
        role="dialog"
        aria-modal="true"
        className={[
          styles["drawer"],
          styles[side],
          open ? styles["drawer-open"] : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        {/* Close button */}
        {!hideCloseButton && (
          <button
            className={styles["close-btn"]}
            onClick={onClose}
            aria-label="Close drawer"
          >
            ×
          </button>
        )}

        {/* Consumer content */}
        <div className={styles["drawer-content"]}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;

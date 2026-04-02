import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import styles from "./Toast.module.css";
import type { ThemeKey } from "../../tokens/colors";

// ----- Types -----

type ToastVariant = "default" | "success" | "error";

type ToastItem = {
  id: string;
  message: string;
  variant: ToastVariant;
  exiting: boolean;
};

type ToastContextValue = {
  toast: (message: string, variant?: ToastVariant) => void;
};

// ----- Context -----

const ToastContext = createContext<ToastContextValue | null>(null);

// ----- Hook -----

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
};

// ----- Provider -----

type ToastProviderProps = {
  children: React.ReactNode;
  theme?: ThemeKey;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  duration?: number; // ms before auto-dismiss
};

export const ToastProvider = ({
  children,
  theme,
  position = "top-right",
  duration = 3500,
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    // mark as exiting to play out animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)),
    );
    // remove after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 280);
  }, []);

  const toast = useCallback(
    (message: string, variant: ToastVariant = "default") => {
      const id = `toast-${Date.now()}-${Math.random()}`;

      setToasts((prev) => [...prev, { id, message, variant, exiting: false }]);

      const timer = setTimeout(() => dismiss(id), duration);
      timers.current.set(id, timer);
    },
    [dismiss, duration],
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        data-theme={theme}
        className={[
          styles["toast-container"],
          styles[`position-${position}`],
        ].join(" ")}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            aria-live="polite"
            className={[
              styles["toast"],
              styles[t.variant],
              t.exiting ? styles["toast-exiting"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span>{t.message}</span>
            <button
              className={[styles["dismiss"], styles[`${t.variant}-dismiss`]]
                .filter(Boolean)
                .join(" ")}
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

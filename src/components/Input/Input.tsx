import React, { forwardRef } from "react";
import styles from "./Input.module.css";
import type { ThemeKey } from "../../tokens";

type InputVariant = "underline" | "outline";

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  variant?: InputVariant;
  theme?: ThemeKey;
  size?: "sm" | "md" | "lg";
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      error,
      helperText,
      disabled = false,
      variant = "underline",
      theme,
      size = "md",
      type = "text",
      name,
      id,
      className = "",
      style,
    },
    ref,
  ) => {
    const inputId = id ?? name;

    return (
      <div
        data-theme={theme}
        className={[
          styles["input-wrapper"],
          styles[`variant-${variant}`],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        {label && (
          <label className={styles["label"]} htmlFor={inputId}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={[
            styles["input"],
            styles[`size-${size}`],
            error ? styles["input-error"] : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {error && <span className={styles["error-text"]}>{error}</span>}
        {!error && helperText && (
          <span className={styles["helper-text"]}>{helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;

import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import type { CheckboxProps } from "./Checkbox.interface";

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  size = "md",
  name,
  value,
  className,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={classNames("inline-flex items-center gap-2", className)}>
      <input
        ref={ref}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={classNames(
          "accent-blue-600 border border-gray-300 rounded",
          sizeMap[size],
          {
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
      />
      {label && (
        <span
          className={classNames("text-gray-800", {
            "text-gray-400": disabled,
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
};

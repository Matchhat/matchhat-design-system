import React from "react";
import classNames from "classnames";
import type { SwitchProps } from "./Switch.interface";

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = "md",
  className,
  labelPosition = "right",
}) => {
  return (
    <label
      className={classNames("inline-flex items-center gap-2", className, {
        "opacity-50 cursor-not-allowed": disabled,
        "flex-row-reverse": labelPosition === "left",
      })}
    >
      <span
        className={classNames(
          "relative inline-block transition-colors duration-300 ease-in-out",
          {
            "w-10 h-6": size === "md",
            "w-12 h-7": size === "lg",
            "w-8 h-5": size === "sm",
          }
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <span
          className={classNames(
            "absolute inset-0 transition rounded-full",
            checked ? "bg-blue-600" : "bg-gray-300"
          )}
        ></span>
        <span
          className={classNames(
            "absolute top-0.5 bg-white rounded-full shadow transform transition",
            {
              "left-0.5": !checked,
              "left-5": checked && size === "md",
              "left-6": checked && size === "lg",
              "left-4": checked && size === "sm",
              "w-5 h-5": size === "md",
              "w-6 h-6": size === "lg",
              "w-4 h-4": size === "sm",
            }
          )}
        ></span>
      </span>
      {label && (
        <span
          className={classNames("select-none", {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
            "text-gray-400": disabled,
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
};

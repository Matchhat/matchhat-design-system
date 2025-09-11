import React, { useState } from "react";
import { useField } from "formik";
import type { FieldHookConfig } from "formik";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import type { Option, SelectProps } from "./Select.interface";

export const Select: React.FC<SelectProps & FieldHookConfig<string>> = ({
  label,
  options,
  iconLeft,
  className,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  const hasError = !!meta.error && meta.touched;
  const isDisabled = disabled ?? props.disabled ?? false;

  const [focused, setFocused] = useState(false);
  const showFloating = focused || !!field.value;

  return (
    <div className="relative w-full">
      {/* Select Wrapper */}
      <div
        className={classNames(
          "relative border rounded-md w-full transition-all px-3 pt-5 pb-2 bg-white flex items-center",
          {
            "border-gray-300": !hasError && !isDisabled,
            "border-red-500": hasError,
            "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed": isDisabled,
            "ring-1 ring-primary border-primary": focused && !hasError,
          },
          className
        )}
      >
        {iconLeft && <div className="mr-2 text-gray-400">{iconLeft}</div>}

        {/* Select Field */}
        <select
          {...field}
          {...props}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            field.onBlur(e);
            setFocused(false);
          }}
          className={classNames(
            "w-full appearance-none bg-transparent outline-none text-sm pr-6",
            {
              "text-gray-500": !field.value,
              "text-red-500": hasError,
              "text-gray-400": isDisabled,
            }
          )}
        >
          <option value="" disabled hidden>
            {props.placeholder || "Select"}
          </option>
          {options.map((opt: Option) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <ChevronDown className="absolute right-3 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>

      {/* Floating Label */}
      {label && (
        <label
          className={classNames(
            "absolute left-2 text-xs transition-all px-1 pointer-events-none bg-white",
            {
              "top-1 text-xs text-primary -translate-y-1 scale-90":
                showFloating,
              "top-0.5 text-sm text-gray-400": !showFloating,
              "text-red-500": hasError,
            }
          )}
        >
          {label}
        </label>
      )}

      {/* Error */}
      {hasError && (
        <span className="text-xs text-red-500 mt-1 block">{meta.error}</span>
      )}
    </div>
  );
};

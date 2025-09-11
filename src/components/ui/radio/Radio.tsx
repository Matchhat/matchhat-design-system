import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import type { RadioGroupProps } from "./Radio.interface";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  disabled = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}

      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const checked = field.value === opt.value;

          return (
            <label
              key={opt.value}
              className={classNames(
                "inline-flex items-center gap-2 text-sm cursor-pointer",
                {
                  "text-gray-400 cursor-not-allowed": disabled,
                  "text-black": !disabled,
                }
              )}
            >
              <input
                type="radio"
                {...field}
                value={opt.value}
                checked={checked}
                disabled={disabled}
                className={classNames(
                  "w-4 h-4 border rounded-full appearance-none bg-white checked:bg-primary checked:border-primary checked:ring-2 checked:ring-offset-2 checked:ring-primary",
                  {
                    "opacity-50 cursor-not-allowed": disabled,
                  }
                )}
              />
              {opt.label}
            </label>
          );
        })}
      </div>

      {hasError && <span className="text-xs text-red-500">{meta.error}</span>}
    </div>
  );
};

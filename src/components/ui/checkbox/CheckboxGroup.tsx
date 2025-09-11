import React from "react";
import classNames from "classnames";
import type { CheckboxGroupProps } from "./Checkbox.interface";
import { Checkbox } from "./Checkbox";

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  values,
  onChange,
  disabled = false,
  orientation = "vertical",
  size = "md",
  name,
  className,
}) => {
  const handleToggle = (val: string) => {
    if (!onChange) return;
    const next = values.includes(val)
      ? values.filter((v) => v !== val)
      : [...values, val];
    onChange(next);
  };

  return (
    <div className={classNames(className)}>
      {label && <div className="text-sm text-gray-500 mb-1">{label}</div>}
      <div
        className={classNames(
          "flex gap-4",
          orientation === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        {options.map((opt) => (
          <Checkbox
            key={opt.value}
            label={opt.label}
            value={opt.value}
            checked={values.includes(opt.value)}
            onChange={() => handleToggle(opt.value)}
            disabled={disabled}
            size={size}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

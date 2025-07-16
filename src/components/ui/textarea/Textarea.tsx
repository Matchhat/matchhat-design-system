import React from "react";
import { useField } from "formik";
import type { FieldHookConfig } from "formik";
import classNames from "classnames";
import type { TextareaProps } from "./Textarea.interface";

export const Textarea: React.FC<TextareaProps & FieldHookConfig<string>> = ({
  label,
  className,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  const hasError = !!meta.error && meta.touched;
  const isDisabled = disabled ?? props.disabled ?? false;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <textarea
        {...field}
        {...props}
        disabled={isDisabled}
        className={classNames(
          "w-full rounded-md border px-3 py-2 text-sm resize-none transition bg-white",
          {
            "border-gray-300": !hasError && !isDisabled,
            "border-red-500": hasError,
            "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed": isDisabled,
            "focus:border-primary focus:ring-1 focus:ring-primary":
              !hasError && !isDisabled,
          },
          className
        )}
        rows={props.rows || 4}
      />

      {hasError && (
        <span className="text-xs text-red-500 mt-1">{meta.error}</span>
      )}
    </div>
  );
};

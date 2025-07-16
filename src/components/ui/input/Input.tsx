import React, { useEffect, useState } from "react";
import type { FieldHookConfig } from "formik";
import { useField } from "formik";
import classNames from "classnames";
import { X } from "lucide-react";
import type { InputProps } from "./Input.interface";

export const Input: React.FC<InputProps & FieldHookConfig<string>> = ({
  label,
  iconLeft,
  iconRight,
  className,
  disabled,
  suggestions = [],
  tags = [],
  onTagAdd,
  onTagRemove,
  onCustomTagAdd,
  onSearch,
  ...props
}) => {
  const [field, meta] = useField(props);
  const hasError = !!meta.error && meta.touched;
  const isDisabled = disabled ?? props.disabled ?? false;

  const [query, setQuery] = useState("");

  // Trigger external search on input
  useEffect(() => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  }, [query, onSearch]);

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();

      const trimmed = query.trim();
      const matchedSuggestion = suggestions.find(
        (s: string) => s.toLowerCase() === trimmed.toLowerCase()
      );

      if (matchedSuggestion) {
        onTagAdd?.(matchedSuggestion);
      } else {
        await onCustomTagAdd?.(trimmed); // <-- e.g., POST to API
        onTagAdd?.(trimmed); // <-- Add to UI list anyway
      }

      setQuery("");
    }
  };

  const baseInputClass =
    "flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Input Field */}
      <div
        className={classNames(
          "flex items-center px-3 py-2 rounded-md border w-full bg-white text-sm transition",
          {
            "border-gray-300": !hasError && !isDisabled,
            "border-red-500": hasError,
            "border-gray-200 bg-gray-100 cursor-not-allowed": isDisabled,
            "focus-within:border-primary focus-within:ring-1 focus-within:ring-primary":
              !hasError && !isDisabled,
          },
          className
        )}
      >
        {iconLeft && <div className="mr-2 text-gray-400">{iconLeft}</div>}

        <input
          {...field}
          {...props}
          disabled={isDisabled}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            field.onChange(e); // sync Formik
          }}
          onKeyDown={handleEnter}
          className={baseInputClass}
          placeholder={props.placeholder || "Search or add"}
        />

        {iconRight && <div className="ml-2 text-gray-400">{iconRight}</div>}
      </div>

      {/* Suggestion Pills */}
      {suggestions.length > 0 && (
        <div className="border rounded-md p-2 bg-white flex flex-wrap gap-2 mt-1">
          {suggestions.map((tag: string) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                onTagAdd?.(tag);
                setQuery("");
              }}
              className="text-sm border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition"
            >
              {tag} <span className="ml-1 text-primary font-bold">+</span>
            </button>
          ))}
        </div>
      )}

      {/* Selected Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="flex items-center bg-primary/10 text-primary text-xs rounded-full px-2 py-1"
            >
              {tag}
              {onTagRemove && (
                <button
                  type="button"
                  onClick={() => onTagRemove(tag)}
                  className="ml-1 hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Error Message */}
      {hasError && (
        <span className="text-xs text-red-500 mt-1">{meta.error}</span>
      )}
    </div>
  );
};

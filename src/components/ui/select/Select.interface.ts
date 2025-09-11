import type { SelectHTMLAttributes, ReactNode } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  iconLeft?: ReactNode;
}

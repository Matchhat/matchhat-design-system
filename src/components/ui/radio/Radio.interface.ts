import type { InputHTMLAttributes } from "react";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: RadioOption[];
  disabled?: boolean;
}

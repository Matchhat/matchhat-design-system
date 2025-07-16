import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  error?: boolean;
  suggestions?: string[];
  tags?: string[];
  onTagAdd?: (tag: string) => void;
  onTagRemove?: (tag: string) => void;
  onSearch?: (query: string) => void;
  onCustomTagAdd?: (query: string) => Promise<void> | void;
}

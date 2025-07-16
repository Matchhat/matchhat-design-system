import React from "react";
import classNames from "classnames";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "text" | "danger" | "outline" | "link";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover disabled:bg-primary-disabled",
  secondary:
    "bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400",
  text: "bg-transparent text-gray-600 hover:text-black disabled:text-gray-400",
  danger:
    "bg-danger text-white hover:bg-danger-hover disabled:bg-danger-disabled",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary-outline disabled:border-primary-disabled disabled:text-primary-hover",
  link: "bg-transparent text-primary hover:underline disabled:text-gray-400 disabled:no-underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-2.5",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        baseStyles,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin w-4 h-4" />}
      {!loading && iconLeft && <span className="mr-1">{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className="ml-1">{iconRight}</span>}
    </button>
  );
};

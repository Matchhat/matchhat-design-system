import React from "react";
import { X } from "lucide-react";
import classNames from "classnames";
import type { ModalProps } from "./Modal.interface";

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = "md",
  hideCloseIcon = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={classNames(
          "bg-white w-full mx-4 rounded-lg shadow-lg relative p-6",
          sizeMap[size],
          className
        )}
      >
        {!hideCloseIcon && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};
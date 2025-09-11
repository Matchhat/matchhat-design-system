import React from "react";
import classNames from "classnames";
import type { NavigationItemProps } from "./Navigation.interface";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  label,
  selected,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
        {
          "text-primary font-semibold": selected,
          "text-gray-400 cursor-not-allowed": disabled,
          "hover:bg-gray-100 text-gray-700": !selected && !disabled,
        }
      )}
    >
      <Icon className="w-5 h-5" />
      {label && <span>{label}</span>}
    </button>
  );
};

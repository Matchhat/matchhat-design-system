import React from "react";
import classNames from "classnames";
import { NavigationItem } from "./NavigationItem";
import type { NavigationProps } from "./Navigation.interface";


export const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = "vertical",
  className,
}) => {
  return (
    <nav
      className={classNames(
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-row gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <NavigationItem key={idx} {...item} />
      ))}
    </nav>
  );
};
import React from "react";
import type { SwitchGroupProps } from "./Switch.interface";
import { Switch } from "./Switch";

export const SwitchGroup: React.FC<SwitchGroupProps> = ({
  label,
  switches,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="text-sm text-gray-400 font-medium mb-1">{label}</div>
      )}
      {switches.map((props: SwitchGroupProps["switches"][number], idx: number) => (
        <Switch key={idx} {...props} />
      ))}
    </div>
  );
};

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  labelPosition?: "left" | "right";
}

export interface SwitchGroupProps {
  label?: string;
  switches: SwitchProps[];
}

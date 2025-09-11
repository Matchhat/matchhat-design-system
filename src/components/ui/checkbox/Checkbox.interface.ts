export interface CheckboxProps {
label?: string;
checked?: boolean;
onChange?: (checked: boolean) => void;
disabled?: boolean;
indeterminate?: boolean;
size?: "sm" | "md" | "lg";
name?: string;
value?: string;
className?: string;
}

export interface CheckboxGroupProps {
label?: string;
values: string[];
options: { label: string; value: string }[];
onChange?: (values: string[]) => void;
disabled?: boolean;
orientation?: "vertical" | "horizontal";
size?: "sm" | "md" | "lg";
name?: string;
className?: string;
}
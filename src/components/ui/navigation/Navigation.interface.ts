import type { LucideIcon } from "lucide-react";

export interface NavigationItemProps {
    label?: string;
    icon: LucideIcon;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export interface NavigationProps {
    items: NavigationItemProps[];
    orientation?: "horizontal" | "vertical";
    className?: string;
}
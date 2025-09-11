export type BadgeVariant = 'solid' | 'outline';
export type BadgeColor = 'blue' | 'orange' | 'gray';


export interface BadgeProps {
label: string;
avatarSrc?: string;
showDot?: boolean;
closable?: boolean;
doubleIcon?: boolean;
variant?: BadgeVariant;
color?: BadgeColor;
disabled?: boolean;
className?: string;
onClose?: () => void;
}
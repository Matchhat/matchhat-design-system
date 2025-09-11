export interface AvatarProps {
src?: string;
alt?: string;
size?: 'sm' | 'md' | 'lg';
name?: string;
showText?: boolean;
className?: string;
}


export interface AvatarGroupProps {
avatars: AvatarProps[];
max?: number;
size?: 'sm' | 'md' | 'lg';
className?: string;
}
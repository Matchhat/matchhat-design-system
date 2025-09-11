import React from 'react';
import classNames from 'classnames';
import type { AvatarProps } from './Avatar.interface';
import { User } from 'lucide-react';


const sizeMap = {
sm: 'w-6 h-6 text-sm',
md: 'w-10 h-10 text-base',
lg: 'w-14 h-14 text-lg',
};


export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', name, showText, className }) => {
const initials = name ? name.split(' ').map(n => n[0]).join('') : '';
return (
<div className={classNames('flex items-center gap-2', className)}>
<div
className={classNames(
'rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-white font-semibold border border-white shadow-md',
sizeMap[size]
)}
>
{src ? <img src={src} alt={alt || ''} className="object-cover w-full h-full" /> : initials || <User className="w-4 h-4" />}
</div>
{showText && name && <span className="text-gray-900">{name}</span>}
</div>
);
};
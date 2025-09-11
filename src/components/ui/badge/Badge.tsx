import React from 'react';
import classNames from 'classnames';
import type { BadgeProps } from './Badge.interface';
import { X, Plus } from 'lucide-react';

export const Badge: React.FC<BadgeProps> = ({
  label,
  avatarSrc,
  showDot,
  closable,
  doubleIcon,
  variant = 'solid',
  color = 'blue',
  disabled = false,
  className,
  onClose,
}) => {
  const baseColor = disabled ? 'gray' : color;
  const colorMap = {
    solid: {
      blue: 'bg-blue-100 text-blue-600',
      orange: 'bg-orange-100 text-orange-600',
      gray: 'bg-gray-200 text-gray-500',
    },
    outline: {
      blue: 'border border-blue-500 text-blue-600',
      orange: 'border border-orange-500 text-orange-600',
      gray: 'border border-gray-300 text-gray-500',
    },
  };

  return (
    <span
      className={classNames(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-all',
        colorMap[variant][baseColor],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {avatarSrc && (
        <img
          src={avatarSrc}
          className="w-5 h-5 rounded-full object-cover"
          alt="avatar"
        />
      )}
      {showDot && <span className="w-2 h-2 bg-current rounded-full" />}
      {doubleIcon && (
        <span className="flex gap-1">
          <span className="w-3 h-3 rounded-full border border-current" />
          <span className="w-3 h-3 rounded-full border border-current" />
        </span>
      )}
      <span>{label}</span>
      {closable && (
        <button onClick={onClose} className="ml-1 focus:outline-none">
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};

import React from "react";
import type { UserProps } from "./User.interface";
import cn from "classnames"; // or your utility for class merging

export const User: React.FC<UserProps> = ({
  name,
  role,
  avatarUrl,
  matchi,
  likedText,
  condensed,
}) => {
  return (
    <div
      className={cn(
        "flex items-start gap-2",
        condensed && "items-center gap-1 text-sm"
      )}
    >
      <div className="relative shrink-0">
        <img
          src={avatarUrl}
          alt={name}
          className={cn("w-10 h-10 rounded-full", condensed && "w-6 h-6")}
        />
        {matchi && (
          <span className="absolute -bottom-1 -right-1 text-[10px] bg-blue-500 text-white rounded-full px-1">
            Matchi
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-medium leading-none">{name}</span>
        {role && <span className="text-xs text-muted-foreground">{role}</span>}
        {likedText && (
          <span className="text-xs text-muted-foreground">{likedText}</span>
        )}
      </div>
    </div>
  );
};

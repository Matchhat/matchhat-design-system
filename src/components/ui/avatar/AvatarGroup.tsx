import React from "react";
import classNames from "classnames";
import type { AvatarGroupProps } from "./Avatar.interface";
import { Avatar } from "./Avatar";

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  size = "md",
  className,
}) => {
  const displayedAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={classNames("flex items-center -space-x-2", className)}>
      {displayedAvatars.map((avatar, idx) => (
        <Avatar
          key={idx}
          {...avatar}
          size={size}
          className="border-2 border-white"
        />
      ))}
      {remaining > 0 && (
        <div
          className={classNames(
            "rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold border border-white",
            size === "sm"
              ? "w-6 h-6 text-xs"
              : size === "lg"
              ? "w-10 h-10 text-base"
              : "w-8 h-8 text-sm"
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

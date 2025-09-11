import React from "react";
import type { UserGroupProps } from "./User.interface";
import { User } from "./User";

export const UserGroup: React.FC<UserGroupProps> = ({ users, condensed }) => {
  return (
    <div className="grid gap-4">
      {users.map((user, index) => (
        <User key={index} {...user} condensed={condensed} />
      ))}
    </div>
  );
};

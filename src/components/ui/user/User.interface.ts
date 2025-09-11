export interface UserProps {
  name: string;
  role?: string;
  avatarUrl: string;
  matchi?: boolean;
  likedText?: string;
  condensed?: boolean;
}

export interface UserGroupProps {
  users: UserProps[];
  condensed?: boolean;
}

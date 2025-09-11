import type { Meta, StoryObj } from "@storybook/react";
import { User, UserGroup } from ".";

const meta: Meta<typeof User> = {
  title: "UI/User",
  component: User,
};
export default meta;

const sampleUsers = [
  {
    name: "Anne-Marie Cooper",
    role: "Floral Designer",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Adries Senna",
    role: "Writer",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    likedText: "liked your post · 2h",
  },
  {
    name: "Gian-Luca Rosso",
    role: "Sport Reporter",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    matchi: true,
  },
];

export const Default: StoryObj<typeof User> = {
  args: sampleUsers[0],
};

export const MatchiBadge: StoryObj<typeof User> = {
  args: sampleUsers[2],
};

export const LikedText: StoryObj<typeof User> = {
  args: sampleUsers[1],
};

export const Group: StoryObj<typeof User> = {
  render: () => <UserGroup users={sampleUsers} />,
};

export const CondensedGroup: StoryObj<typeof User> = {
  render: () => <UserGroup users={sampleUsers} condensed />,
};

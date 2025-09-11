import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from ".";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => <Avatar name="Anna Rogers" />,
};

export const InitialsSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="Anna Rogers" size="sm" />
      <Avatar name="Anna Rogers" size="md" />
      <Avatar name="Anna Rogers" size="lg" />
    </div>
  ),
};

export const WithNameText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Avatar name="Anna Rogers" src="https://randomuser.me/api/portraits/women/45.jpg" size="sm" showText />
      <Avatar name="John Smith" src="https://randomuser.me/api/portraits/women/44.jpg" size="md" showText />
      <Avatar name="Zeeshan Tariq" src="https://randomuser.me/api/portraits/women/46.jpg" size="lg" showText />
    </div>
  ),
};

export const ImageAvatar: Story = {
  render: () => (
    <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" name="Anna Wayne" />
  ),
};

export const ImageSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Anna"
        size="sm"
      />
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Anna"
        size="md"
      />
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="Anna"
        size="lg"
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup
      avatars={[
        { name: "Anna Wayne" },
        { name: "John Smith" },
        { src: "https://randomuser.me/api/portraits/men/44.jpg" },
        { name: "Zeeshan Tariq" },
        { src: "https://randomuser.me/api/portraits/women/46.jpg" },
      ]}
      max={4}
    />
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const AllBadges: Story = {
  render: () => (
    <div className="space-y-4">
      {/* Variants and states */}
      <div className="flex gap-4">
        <Badge label="Badge" color="blue" />
        <Badge label="Badge" color="blue" showDot />
        <Badge label="Badge" color="blue" avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" color="blue" variant="outline" />
        <Badge label="Badge" color="blue" variant="outline" doubleIcon />
        <Badge label="Badge" color="blue" closable />
      </div>

      <div className="flex gap-4">
        <Badge label="Badge" color="orange" />
        <Badge label="For you" color="orange" showDot />
        <Badge label="Badge" color="orange" avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" color="orange" variant="outline" />
        <Badge label="Badge" color="orange" variant="outline" doubleIcon />
        <Badge label="Badge" color="orange" closable />
      </div>

      <div className="flex gap-4">
        <Badge label="Badge" disabled />
        <Badge label="Badge" disabled showDot />
        <Badge label="Badge" disabled avatarSrc="https://i.pravatar.cc/30" />
        <Badge label="Badge" disabled variant="outline" />
        <Badge label="Badge" disabled variant="outline" doubleIcon />
        <Badge label="Badge" disabled closable />
      </div>
    </div>
  ),
};

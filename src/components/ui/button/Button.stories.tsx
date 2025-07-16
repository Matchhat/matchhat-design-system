import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ChevronDown, ChevronRight, Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'danger', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
    loading: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {['primary', 'secondary', 'text', 'danger', 'outline'].map((variant) => (
        <div className="flex gap-4" key={variant}>
          <Button variant={variant as any}>Default</Button>
          <Button variant={variant as any} disabled>
            Disabled
          </Button>
          <Button variant={variant as any} loading>
            Loading
          </Button>
          <Button variant={variant as any} iconLeft={<Plus size={16} />}>
            Icon
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const LinkVariants: Story = {
  render: () => (
    <div className="flex gap-6">
      <Button variant="link" iconRight={<ChevronRight size={14} />}>
        More
      </Button>
      <Button variant="link">Edit</Button>
      <Button variant="link" disabled iconRight={<ChevronDown size={14} />}>
        Community
      </Button>
    </div>
  ),
};

export const IconPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button iconLeft={<Plus size={16} />}>Left Icon</Button>
      <Button iconRight={<ChevronRight size={16} />}>Right Icon</Button>
      <Button iconLeft={<Plus size={16} />} iconRight={<ChevronDown size={16} />}>
        Both Icons
      </Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
}
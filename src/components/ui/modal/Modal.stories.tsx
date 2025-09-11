import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

const Template = (args: any) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded bg-primary text-white"
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: () => (
    <Template title="Default Modal">
      <p>This is a basic modal content.</p>
    </Template>
  ),
};

export const Large: Story = {
  render: () => (
    <Template title="Large Modal" size="lg">
      <p>Modal with larger max-width.</p>
    </Template>
  ),
};

export const NoCloseIcon: Story = {
  render: () => (
    <Template title="Modal without Close Icon" hideCloseIcon>
      <p>User has to close using an outside button or method.</p>
    </Template>
  ),
};

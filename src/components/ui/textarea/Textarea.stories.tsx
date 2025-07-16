import type { Meta, StoryObj } from "@storybook/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Textarea>;

const BaseTemplate = (args: any) => (
  <Formik initialValues={{ message: "" }} onSubmit={() => {}}>
    <Form className="max-w-md space-y-4">
      <Textarea name="message" {...args} />
    </Form>
  </Formik>
);

export const Default: Story = {
  render: BaseTemplate,
  args: {
    label: "Message",
    placeholder: "Type your message here...",
  },
};

export const WithError: Story = {
  render: () => (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={Yup.object({
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={() => {}}
    >
      <Form className="max-w-md">
        <Textarea
          name="message"
          label="Message"
          placeholder="Write something important..."
        />
      </Form>
    </Formik>
  ),
};

export const Disabled: Story = {
  render: BaseTemplate,
  args: {
    label: "Notes",
    disabled: true,
    placeholder: "This is read-only",
  },
};

export const WithCustomRows: Story = {
  render: BaseTemplate,
  args: {
    label: "Description",
    placeholder: "Minimum2 rows",
    rows: 2,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Form, Formik } from "formik";
import { User } from "lucide-react";
import * as Yup from "yup";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

const BaseTemplate = (args: any) => (
  <Formik initialValues={{ role: "" }} onSubmit={() => {}}>
    <Form className="max-w-sm space-y-4">
      <Select name="role" {...args} />
    </Form>
  </Formik>
);

export const Default: Story = {
  render: BaseTemplate,
  args: {
    label: "User Role",
    placeholder: "Select role",
    options,
  },
};

export const WithIcon: Story = {
  render: BaseTemplate,
  args: {
    label: "User Type",
    placeholder: "Choose type",
    iconLeft: <User className="w-4 h-4" />,
    options,
  },
};

export const WithInitialValue: Story = {
  render: (args: any) => (
    <Formik initialValues={{ role: "editor" }} onSubmit={() => {}}>
      <Form className="max-w-sm space-y-4">
        <Select name="role" {...args} />
      </Form>
    </Formik>
  ),
  args: {
    label: "Preselected",
    placeholder: "Choose role",
    options,
  },
};

export const WithError: Story = {
  render: () => (
    <Formik
      initialValues={{ role: "" }}
      validationSchema={Yup.object({
        role: Yup.string().required("Please select a role"),
      })}
      onSubmit={() => {}}
    >
      <Form className="max-w-sm space-y-4">
        <Select
          name="role"
          label="User Role"
          placeholder="Choose one"
          options={options}
        />
         <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary text-white text-sm"
          >
            Submit
          </button>
      </Form>
    </Formik>
  ),
};

export const Disabled: Story = {
  render: BaseTemplate,
  args: {
    label: "Role (Disabled)",
    disabled: true,
    options,
  },
};

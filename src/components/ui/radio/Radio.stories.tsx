// src/components/ui/radio/Radio.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Formik } from "formik";
import { RadioGroup } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { label: "Radio button", value: "option1" },
  { label: "Radio button", value: "option2" },
];

export const Default: Story = {
  render: () => (
    <Formik initialValues={{ role: "option1" }} onSubmit={() => {}}>
      <RadioGroup name="role" label="Radio button" options={options} />
    </Formik>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Formik initialValues={{ role: "option1" }} onSubmit={() => {}}>
      <RadioGroup name="role" label="Disabled radio group" options={options} disabled />
    </Formik>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Formik
      initialValues={{ role: "" }}
      validate={(values) => {
        const errors: { role?: string } = {};
        if (!values.role) {
          errors.role = "Please select an option";
        }
        return errors;
      }}
      onSubmit={() => {
        alert("Form submitted");
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup name="role" label="Radio button with error" options={options} />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary text-white text-sm"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  ),
};

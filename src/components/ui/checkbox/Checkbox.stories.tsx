import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
};
export default meta;

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

export const Indeterminate: StoryObj = {
  render: () => <Checkbox label="Indeterminate" indeterminate />,
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked" disabled checked />
    </div>
  ),
};

export const Group: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState(["1"]);
    return (
      <CheckboxGroup
        label="Group Label"
        values={selected}
        onChange={setSelected}
        options={[
          { label: "Checkbox", value: "1" },
          { label: "Checkbox", value: "2" },
          { label: "Checkbox", value: "3" },
        ]}
      />
    );
  },
};

export const HorizontalGroup: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState(["1"]);
    return (
      <CheckboxGroup
        label="Label"
        orientation="horizontal"
        values={selected}
        onChange={setSelected}
        options={[
          { label: "Checkbox", value: "1" },
          { label: "Checkbox", value: "2" },
          { label: "Checkbox", value: "3" },
        ]}
      />
    );
  },
};

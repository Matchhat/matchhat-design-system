import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch, SwitchGroup } from ".";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
};
export default meta;

export const Sizes: StoryObj = {
  render: () => {
    const [state, setState] = useState([true, false, true]);
    return (
      <div className="flex gap-6">
        <Switch
          size="sm"
          checked={state[0]}
          onChange={(v: boolean) => setState([v, state[1], state[2]])}
        />
        <Switch
          size="md"
          checked={state[1]}
          onChange={(v: boolean) => setState([state[0], v, state[2]])}
        />
        <Switch
          size="lg"
          checked={state[2]}
          onChange={(v: boolean) => setState([state[0], state[1], v])}
        />
      </div>
    );
  },
};

export const WithLabel: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} label="Switch" />;
  },
};

export const Disabled: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <Switch checked={false} onChange={() => {}} label="Switch" disabled />
        <Switch checked={true} onChange={() => {}} label="Switch" disabled />
      </div>
    );
  },
};

export const LabelLeft: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Switch"
        labelPosition="left"
      />
    );
  },
};

export const Group: StoryObj = {
  render: () => {
    const [states, setStates] = useState([true, false, false]);
    return (
      <SwitchGroup
        label="Label"
        switches={states.map((value, i) => ({
          checked: value,
          onChange: (v) =>
            setStates((prev) => prev.map((p, j) => (i === j ? v : p))),
          label: "Switch",
        }))}
      />
    );
  },
};

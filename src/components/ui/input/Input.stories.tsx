import type { Meta, StoryObj } from "@storybook/react";
import { Form, Formik } from "formik";
import { ChevronRight, Search, Smile } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

const BaseTemplate = (args: any) => (
  <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
    <Form className="max-w-md space-y-3">
      <Input name="input" {...args} />
    </Form>
  </Formik>
);

// Default Input
export const Default: Story = {
  render: BaseTemplate,
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
  },
};

// Left Icon
export const WithLeftIcon: Story = {
  render: BaseTemplate,
  args: {
    label: "Search",
    placeholder: "Search here...",
    iconLeft: <Search className="w-4 h-4" />,
  },
};

// Right Icon
export const WithRightIcon: Story = {
  render: BaseTemplate,
  args: {
    label: "Next",
    placeholder: "Continue...",
    iconRight: <ChevronRight className="w-4 h-4" />,
  },
};

// Disabled Input
export const Disabled: Story = {
  render: BaseTemplate,
  args: {
    label: "Disabled Input",
    placeholder: "You can't type here",
    disabled: true,
  },
};

// Error Input with Yup
export const WithError: Story = {
  render: () => (
    <Formik
      initialValues={{ input: "" }}
      validationSchema={Yup.object({
        input: Yup.string().required("This field is required"),
      })}
      onSubmit={() => {}}
    >
      <Form className="max-w-md">
        <Input name="input" label="Email" placeholder="you@example.com" />
      </Form>
    </Formik>
  ),
};

// Input with Static Tags
export const WithTags: Story = {
  render: () => {
    const [tags, setTags] = useState(["React", "Design System"]);

    return (
      <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input
            name="input"
            label="Skills"
            tags={tags}
            onTagRemove={(tag: string) => setTags(tags.filter((t) => t !== tag))}
            placeholder="Type a skill"
          />
        </Form>
      </Formik>
    );
  },
};

// Input with Suggestions and Tags
export const WithSuggestions: Story = {
  render: () => {
    const [tags, setTags] = useState(["Kyoto", "Producer", "Anime Style"]);
    const suggestions = ["Illustrator", "Photographer", "Developer"];

    return (
      <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
        <Form className="max-w-md space-y-3">
          <Input
            name="input"
            label="Search & Select Tags"
            iconLeft={<Search className="w-4 h-4" />}
            iconRight={<Smile className="w-4 h-4" />}
            suggestions={suggestions}
            tags={tags}
            onTagAdd={(tag: string) => setTags([...tags, tag])}
            onTagRemove={(tag: string) => setTags(tags.filter((t) => t !== tag))}
            placeholder="Search tags..."
          />
        </Form>
      </Formik>
    );
  },
};

// Overflowing Tags (Wrapping)
export const WithLongTags: Story = {
  render: () => {
    const [tags, setTags] = useState([
      "Front-End",
      "Back-End",
      "TypeScript",
      "Tailwind",
      "Design Systems",
      "Form Validation",
    ]);

    return (
      <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input
            name="input"
            label="Expertise"
            tags={tags}
            onTagAdd={(tag: string) => {
              if (!tags.includes(tag)) {
                setTags([...tags, tag]);
              }
            }}
            onTagRemove={(tag: string) =>
              setTags(tags.filter((t) => t !== tag))
            }
            placeholder="Search topics..."
          />
        </Form>
      </Formik>
    );
  },
};


// No Tags or Suggestions (Empty)
export const EmptyState: Story = {
  render: () => {
    return (
      <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
        <Form className="max-w-md">
          <Input
            name="input"
            label="Start Typing"
            suggestions={[]}
            tags={[]}
            placeholder="Nothing added yet"
          />
        </Form>
      </Formik>
    );
  },
};

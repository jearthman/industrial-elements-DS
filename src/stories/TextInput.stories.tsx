import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Search, SendHorizonal } from "lucide-react";

import TextInput from "../design-system/TextInput";
import Button from "../design-system/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const WithPrepend: Story = {
  args: {
    placeholder: "Enter your name",
    prepend: (
      <Search
        height={16}
        width={16}
        color="var(--tds-on-bg)"
        style={{ opacity: "50%" }}
      />
    ),
  },
};

export const WithAppend: Story = {
  args: {
    placeholder: "Enter your name",
    append: (
      <Button variant="primary" size="icon" material="birch-wood">
        <SendHorizonal height={16} width={16} />
      </Button>
    ),
  },
};

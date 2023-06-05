import { Meta, Story } from "@storybook/react/types-6-0";
import UserDropdown, { UserDropdownProps } from "./index";

export default {
  title: "UserDropdown",
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    username: "Renata",
  },
} as Meta;

export const Default: Story<UserDropdownProps> = (args) => (
  <div
    style={{
      margin: "auto",
      maxWidth: "98%,",
      display: "flex",
      justifyContent: "end",
    }}
  >
    <UserDropdown {...args} />
  </div>
);

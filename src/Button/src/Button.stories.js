import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("Default", () => (
  <Button
    onClick={() => {
      alert("You are the best! =)");
    }}
  >
    Click me
  </Button>
));

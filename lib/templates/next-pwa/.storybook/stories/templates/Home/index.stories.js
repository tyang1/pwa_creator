import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./index.js";

storiesOf("templates/Home", module).add("default", () => (
  <Home
    cards={[
      { title: "foo", description: "bar" },
      { title: "baz", description: "craz" },
      { title: "saz", description: "taz" },
    ]}
  />
));

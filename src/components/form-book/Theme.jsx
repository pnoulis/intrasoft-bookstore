import * as React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey: "var(--grey-light)",
    blue: "var(--info-strong)",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { Theme };

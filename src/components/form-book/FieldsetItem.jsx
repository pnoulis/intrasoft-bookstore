import * as React from "react";
import styled from "styled-components";

function FieldsetItem({ children }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <StyledItem
      className="fieldset-item"
      $focus={focus}
      onFocus={(e) => setFocus((focus) => !focus)}
    >
      {children({ focus })}
    </StyledItem>
  );
}

const StyledItem = styled("li")`
  border-width: 4px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ theme, $focus }) =>
    `${$focus ? theme.colors.blue : theme.colors.grey}`};
  margin: auto;
  cursor: pointer;
  width: max-content;
  height: max-content;
`;

export { FieldsetItem };

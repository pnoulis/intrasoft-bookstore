import styled from "styled-components";

function Fieldset({ label, children }) {
  return (
    <StyledFieldset>
      <legend className="fieldset-title">{label}</legend>
      <ul className="fieldset-list">{children}</ul>
    </StyledFieldset>
  );
}

const StyledFieldset = styled("fieldset")``;

export { Fieldset };

import * as React from "react";
import styled from "styled-components";
import { SelectOnlyCombobox } from "react_utils/comboboxes";

const Combobox = SelectOnlyCombobox.Provider;
const StyleTrigger = styled(SelectOnlyCombobox.Trigger)`
  border-radius: var(--br-lg);
  height: 50px;
  width: 100%;
  height: 55px;
  padding: 0 15px;
  border-radius: var(--br-lg);
  font-size: var(--tx-md);
  letter-spacing: 1.5px;
  outline: none;
  font-weight: 550;
  &:hover {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected
      ? `
color: white;
background-color: var(--primary-base);
`
      : `
background-color: var(--grey-light);
`}
`;
const StyleListbox = styled(SelectOnlyCombobox.Listbox)`
  margin-top: 10px;
  border-top-left-radius: var(--br-lg);
  border-top-right-radius: var(--br-lg);
  background-color: var(--grey-light);
  padding: 20px 15px;
  outline: none;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  max-height: 200px;
  z-index: 100;
  gap: 15px;
  font-weight: 550;
`;
const StyleOption = styled(SelectOnlyCombobox.Option)`
  border: 4px solid transparent;
  padding: 10px 10px;
  border-radius: var(--br-md);
  background-color: white;

  ${({ selected, active }) => {
    if (selected) {
      return `
border-color: var(--primary-base);
`;
    } else if (active) {
      return `
border-color: var(--primary-base);
cursor: pointer;
`;
    } else {
      return `
&: hover {
cursor: pointer;
border-color: var(--primary-base);
}
`;
    }
  }}
`;

function ComboboxCategory({
  name,
  value,
  options,
  onSelect,
  labelledBy,
  selected,
  className,
  style,
}) {
  return (
    <Combobox
      name="combobox-category"
      value={value}
      options={options}
      labelledBy={labelledBy}
      onSelect={onSelect}
      getLabels={() => options}
    >
      <StyleTrigger
        style={style}
        className={className}
        placeholder="category"
      />
      <StyleListbox renderOption={(props) => <StyleOption {...props} />} />
    </Combobox>
  );
}
export { ComboboxCategory };

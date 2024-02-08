import * as React from "react";
import styled from "styled-components";
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import { BOOK_CATEGORIES } from "../constants.js";

const Trigger = styled(Combobox.Trigger)`
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;

const ListBox = styled(Combobox.Listbox)`
  margin-top: 15px;
  border-radius: var(--br-lg);
  outline: none;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: var(--sd-2);
  background-color: white;
  height: max-content;
  max-height: 300px;
  gap: 15px;
  &:not(:empty) {
    padding: 25px;
  }
  width: 100%;
  scrollbar-gutter: stable both-edges;
`;

const Option = styled(Combobox.Option)`
  color: black;
  padding: 4px 10px;
  font-size: var(--tx-lg);
  text-align: center;
  letter-spacing: 1px;
  font-weight: 550;
  cursor: pointer;

  ${({ selected, active }) => {
    if (selected) {
      return `
color: var(--info-light);
`;
    } else if (active) {
      return `
color: var(--info-strong);
cursor: pointer;
`;
    }
  }}
`;

const Wrapper = styled("div")`
  position: relative;
  border-radius: var(--br-lg);
  pointer-events: auto;
  text-transform: lowercase;
  width: 300px;
  background-color: white;
  // max-width: 100%;
  height: 55px;
  text-align: center;
  outline: none;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: var(--tx-lg);
  border: var(--sc-xt) solid var(--grey-strong);
  color: var(--info-strong);

  &:hover {
    cursor: pointer;
  }

  label {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 40%);
    color: black;
    text-transform: capitalize;
  }

  &:focus-within > label,
  input:not(:placeholder-shown) ~ label {
    left: 0;
    background-color: white;
    z-index: 2;
    transform: translate(0, -60%);
    border-top-left-radius: var(--br-lg);
    border-top-right-radius: var(--br-lg);
    padding: 0 15px;
  }
`;

function ComboboxCategory({ onSelect }) {
  return (
    <>
      <Wrapper>
        <Combobox.Provider
          name="book-categories"
          options={BOOK_CATEGORIES}
          getLabels={() => BOOK_CATEGORIES}
          labelledBy="book-categories-trigger"
          onSelect={onSelect}
        >
          <Trigger placeholder={""} />
          <label htmlFor="book-categories-trigger">categories</label>
          <ListBox
            renderOption={(props) => <Option {...props}>{props.option}</Option>}
          />
        </Combobox.Provider>
      </Wrapper>
    </>
  );
}

export { ComboboxCategory };

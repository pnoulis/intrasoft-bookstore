import * as React from "react";
// import { ComboboxCategory } from "./ComboboxCategory.jsx";
import styled, { css } from "styled-components";
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import { BOOK_CATEGORIES } from "../constants.js";

const InputCategory = React.forwardRef((props, ref) => {
  const [focus, setFocus] = React.useState(false);
  const [categories, setCategories] = React.useState([]);

  return (
    <>
      <Fieldset $focus={focus}>
        <legend id="book-categories">book categories</legend>
        <Combobox.Provider
          name="book-categories"
          options={BOOK_CATEGORIES.filter(
            (category) => !categories.includes(category),
          )}
          labelledBy="book-categories"
          onSelect={(category, set) => {
            setCategories(categories.concat(category));
          }}
        >
          <Trigger
            onFocus={() => {
              setFocus(true);
            }}
            /* onInputValueChange={(e) => { */
            /*   if (!!e.target.value !== focus) { */
            /*     setFocus(!focus); */
            /*   } */
            /* }} */
          />
          <ListCategories
            renderOption={(props) => <Option {...props}>{props.action}</Option>}
          />
        </Combobox.Provider>
        {/* <ListSelected> */}
        {/*   {categories.map((category) => ( */}
        {/*     <ItemSelected key={category}>{category}</ItemSelected> */}
        {/*   ))} */}
        {/* </ListSelected> */}
      </Fieldset>
    </>
  );
});

const Fieldset = styled("fieldset")`
  position: relative;
  border: var(--sc-xxt) solid black;
  height: 55px;

  legend {
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    color: black;
    text-transform: capitalize;
  }

  ${({ $focus }) =>
    $focus &&
    css`
      border: var(--sc-tn) solid var(--info-medium);

      legend {
        left: 0;
        background-color: white;
        z-index: 2;
        transform: translate(5%, -55%);
        padding: 0 15px;
        color: var(--info-medium);
        font-size: var(--tx-sm);
      }
    `}
`;

const Trigger = styled(Combobox.Trigger)`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  position: absolute;
`;

const ListCategories = styled(Combobox.Listbox)`
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

const ListSelected = styled("ul")`
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
`;

const ItemSelected = styled("li")``;

export { InputCategory };

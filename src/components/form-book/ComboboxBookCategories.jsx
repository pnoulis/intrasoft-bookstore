import * as React from "react";
import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import AssetExpand from "/assets/expand.svg?react";
import { Svg } from "react_utils/svgs";
import styled, { css } from "styled-components";
import { BOOK_CATEGORIES } from "../../constants.js";

function ComboboxBookCategories({ focus, labelledBy }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Combobox.Provider
      open={open}
      onOpenChange={setOpen}
      name="book-categories"
      options={BOOK_CATEGORIES}
      labelledBy="book-categories-trigger"
    >
      <Label htmlFor="book-categories-trigger">
        <ShowListCategories placeholder="select" />
        <ListCategories renderOption={(props) => <Category {...props} />} />
        <IconExpand $focus={focus} $up={!open}>
          <AssetExpand />
        </IconExpand>
      </Label>
    </Combobox.Provider>
  );
}
const Label = styled("label")`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 55px;
  width: 200px;
`;

const ShowListCategories = styled(Combobox.Trigger)`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
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
  background-color: #f0f4f9;
  text-transform: capitalize;
  height: max-content;
  max-height: 300px;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  gap: 15px;
  scrollbar-gutter: stable both-edges;
`;

const Category = styled(Combobox.Option)`
  padding: 2px 15px;
  background-color: ${({ selected, active, theme }) =>
    `${selected ? "#CEE0FC" : "#E5E9EE"}`};
`;

const IconExpand = styled(Svg)`
  width: 20px;
  height: 20px;
  position: relative;
  right: 10px;
  transition: transform 0.3s;
  transform: ${({ $up }) => ($up ? "rotate(180deg)" : "rotate(0deg)")};
  fill: ${({ $focus, theme }) => `${$focus ? theme.colors.blue : "black"}`};
`;

export { ComboboxBookCategories };

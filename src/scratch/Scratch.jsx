import { SelectOnlyCombobox as Combobox } from "react_utils/comboboxes";
import * as React from "react";
import AssetExpand from "/assets/expand.svg?react";
import { Svg } from "react_utils/svgs";
import styled from "styled-components";
import { BOOK_CATEGORIES } from "../constants.js";
import { ThemeProvider } from "styled-components";
import { ComboboxCategory } from "../components/ComboboxCategory.jsx";
import { FieldsetCategories } from "../components/form-book/FieldsetCategories.jsx";

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

function Scratch() {
  return (
    <div>
      <h1>scratch page</h1>
      <div>
        <Theme>
          <FieldsetCategories />
          {/* <AddBookFieldset> */}
          {/*   <legend>book categories</legend> */}
          {/*   <ListFieldSubsets> */}
          {/*     <FieldSubset> */}
          {/*       <AddBookInputField>{ComboboxBookCategories}</AddBookInputField> */}
          {/*       <AddBookInputField>{ComboboxBookCategories}</AddBookInputField> */}
          {/*       <AddBookInputField>{ComboboxBookCategories}</AddBookInputField> */}
          {/*     </FieldSubset> */}
          {/*   </ListFieldSubsets> */}
          {/* </AddBookFieldset> */}
        </Theme>
      </div>
    </div>
  );
}

// const AddBookFieldset = styled("fieldset")`
//   display: flex;
//   flex-flow: row nowrap;
//   padding-left: 100px;
//   position: relative;
//   legend {
//     position: absolute;
//     background-color: green;
//     left: 0;
//     top: 50%;
//     transform: translate(0, -50%);
//   }
// `;

// const InputGroup = styled("div")``;

// function AddBookInputField({ children }) {
//   const [focus, setFocus] = React.useState(false);
//   return (
//     <BlueBorders onFocus={(e) => setFocus((focus) => !focus)}>
//       {children({ focus })}
//     </BlueBorders>
//   );
// }

// const BlueBorders = styled("div")`
//   border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
//   border-radius: 8px;
//   &:focus-within {
//     border: ${({ theme }) => `4px solid ${theme.colors.blue}`};
//   }
//   margin: auto;
//   cursor: pointer;
//   width: max-content;
//   height: max-content;
// `;

// function ComboboxBookCategories({ focus, labelledBy }) {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <Combobox.Provider
//       open={open}
//       onOpenChange={setOpen}
//       name="book-categories"
//       options={BOOK_CATEGORIES}
//       labelledBy="book-categories-trigger"
//     >
//       <LabelList htmlFor="book-categories-trigger">
//         <ShowListCategories placeholder="select" />
//         <ListCategories renderOption={(props) => <Category {...props} />} />
//         <IconExpand $focus={focus} $up={!open}>
//           <AssetExpand />
//         </IconExpand>
//       </LabelList>
//     </Combobox.Provider>
//   );
// }

// const LabelList = styled("label")`
//   position: relative;
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   height: 55px;
//   width: 200px;
// `;

// const ShowListCategories = styled(Combobox.Trigger)`
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   font-size: ${({ theme }) => `${theme.fontSizes.small}`};
// `;
// const ListCategories = styled(Combobox.Listbox)`
//   margin-top: 15px;
//   border-radius: var(--br-lg);
//   outline: none;
//   overflow-y: auto;
//   overflow-x: none;
//   display: flex;
//   flex-flow: column nowrap;
//   box-shadow: var(--sd-2);
//   background-color: #f0f4f9;
//   text-transform: capitalize;
//   height: max-content;
//   max-height: 300px;
//   font-size: ${({ theme }) => `${theme.fontSizes.small}`};
//   gap: 15px;
//   scrollbar-gutter: stable both-edges;
// `;
// //#F0F4F9
// // #E5E9EE
// // # CEE0FC
// // #F0F4F9
// const Category = styled(Combobox.Option)`
//   padding: 2px 15px;
//   ${({ selected, active, theme }) => {
//     if (selected) {
//       return `
// background-color: #CEE0FC;
// `;
//     } else if (active) {
//       return `
// background-color: #E5E9EE;
// `;
//     }
//   }}
// `;

// const IconExpand = styled(Svg)`
//   width: 20px;
//   height: 20px;
//   position: relative;
//   right: 10px;
//   transition: transform 0.3s;
//   transform: ${({ $up }) => ($up ? "rotate(180deg)" : "rotate(0deg)")};
//   fill: ${({ $focus, theme }) => `${$focus ? theme.colors.blue : "black"}`};
// `;

export { Scratch };

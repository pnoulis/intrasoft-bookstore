import * as React from "react";
import { Form } from "../components/Form.jsx";
import styled from "styled-components";
import { ComboboxCategory } from "../components/ComboboxCategory.jsx";
import { BOOK_CATEGORIES } from "../constants.js";

function AddBook() {
  return (
    <Form
      fields={{
        title: "",
        description: "",
        categories: {
          value: BOOK_CATEGORIES,
        },
        authors: "",
        publisher: "",
        year: "",
        pages: "",
        options: "",
        rating: "",
        isbn10: "",
        isbn13: "",
      }}
    >
      {({ fields }) => (
        <>
          <ListFields>
            {fields.map((field) => {
              switch (field.name) {
                case "categories":
                  return <InputCategory key={field.name} {...field} />;
                default:
                  return <InputText key={field.name} {...field} />;
              }
            })}
          </ListFields>
        </>
      )}
    </Form>
  );
}

const ListFields = styled("ul")`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

const InputCategory = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor="combobox-category-trigger">
        <ComboboxCategory
          options={props.value}
          onSelect={(selected) => {
            console.log(selected);
            console.log("selected");
          }}
        />
      </label>
    </>
  );
});

const InputText = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id={props.name}
        name={props.name}
        ref={ref}
        onChange={props.handleChange}
      />
    </>
  );
});

// function AddBook() {
//   const [form, setForm] = useForm({
//     submitting: false,
//     fields: {
//       title: "",
//       description: "",
//       categories: "",
//       authors: "",
//       publisher: "",
//       year: "",
//       pageNumbers: "",
//       options: "",
//       rating: "",
//       isbn10: "",
//       isbn13: "",
//     },
//   });

//   return (
//     <>
//       <FormProvider value={{ ...form, setForm }}>
//         <Form>
//           <legend>add book</legend>
//           <TextInput name="title" />
//           <TextInput name="description" />
//           <TextInput name="categories" />
//           <TextInput name="authors" />
//           <TextInput name="publisher" />
//           <TextInput name="year" />
//           <TextInput name="pageNumbers" />
//           <TextInput name="options" />
//           <TextInput name="rating" />
//           <TextInput name="isbn10" />
//           <TextInput name="isbn13" />
//         </Form>
//       </FormProvider>
//     </>
//   );
// }

// function TextInput({ id, name }) {
//   return (
//     <>
//       <label htmlFor={id} />
//       <input type="text" id={id} name={name}></input>
//     </>
//   );
// }

// const Form = styled("form")`
//   display: flex;
//   flex-flow: column wrap;
//   row-gap: 40px;
// `;

// // const TextInput = styled(TextInput_0)`
// //   text-transform: uppercase !important;
// //   & > * {
// //     font-size: 0.8rem !important;
// //   }

// //   & .label {
// //     left: 50%;
// //     transform: translate(-50%, -50%);
// //   }
// //   & input {
// //     background-color: white;
// //     border-color: white !important;
// //     border-radius: var(--br-nl);
// //   }

// //   .input:focus ~ label,
// //   input:not(:placeholder-shown) ~ label {
// //     background-color: white;
// //     left: 0;
// //     transform: translate(1px, -50%);
// //   }

// //   .input:focus ~ .optional,
// //   input:not(:placeholder-shown) ~ .optional {
// //     right: 1px;
// //     background-color: white;
// //   }
// // `;

export { AddBook };

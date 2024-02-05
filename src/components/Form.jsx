import * as React from "react";
import { isObject } from "js_utils/misc";
import { validate } from "./validate.js";

function useForm(form) {
  const [{ fields, submitting }, dispatch] = React.useReducer(
    reducer,
    form,
    initializer,
  );

  React.useMemo(() => {
    for (let i = 0; i < fields.length; i++) {
      fields[i].handleChange = ({ target }) => {
        let errors;
        if (target.value) {
          errors = validate(fields[i].name, target.value);
        }
        fields[i].node.value = target.value;
        if (!!fields[i].errors !== !!errors) {
          dispatch(actions.errors(fields[i], errors));
        }
      };
    }
  }, [fields.length]);

  const set = (action, ...args) => dispatch(actions[action](...args));
  return { fields, submitting, set };
}

function reducer(state, action) {
  switch (action.type) {
    case "errors":
      return {
        ...state,
        fields: state.fields.map((field) => {
          if (field.name === action.field.name) {
            action.field.errors = action.errors;
          }
          return field;
        }),
      };
    case "input":
    case "field":
      return { ...state, [action.name]: action.value ?? "" };
    case "submit":
      return { ...state, submitting: !state.submitting };
    default:
      return state;
  }
}

function initializer(form) {
  const submitting = form.submitting ?? false;
  const fields = Array.from(Object.keys(form.fields));
  for (let i = 0; i < fields.length; i++) {
    const name = fields[i];
    fields[i] = {
      name,
      ref: (node) => (fields[i].node = node),
    };
    const props = form.fields[name];
    if (isObject(props)) {
      Object.assign(fields[i], props);
    } else {
      fields[i].value = props;
    }
  }
  return { fields, submitting };
}

const actions = {
  errors: (field, errors) => ({ type: "errors", field, errors }),
  submit: (submitting) => ({ type: "submit", submitting }),
};

const Context = React.createContext();

function Form({ children, ...form } = {}) {
  const state = useForm(form);
  return <Context.Provider value={state}>{children(state)}</Context.Provider>;
}

export { Form };

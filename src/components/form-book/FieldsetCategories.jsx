import { Fieldset } from "./Fieldset.jsx";
import { FieldsetItem } from "./FieldsetItem.jsx";
import { ComboboxBookCategories } from "./ComboboxBookCategories.jsx";

function FieldsetCategories() {
  return (
    <Fieldset>
      <FieldsetItem>{ComboboxBookCategories}</FieldsetItem>
    </Fieldset>
  );
}

export { FieldsetCategories };

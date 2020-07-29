import React, { useState } from "react";
import { Form } from "react-bulma-components/dist";

export default function OptionList(props) {
  const { searchTerm, options, className, innerClassName, name, id } = props;
  console.log(searchTerm);
  const filtered = options.filter(
    (element) => element.toLowerCase().includes(searchTerm) && element
  );

  let [value, setValue] = useState("");

  let updateValue = (event) => {
    setValue(event.target.value);
    localStorage.setItem("currentIngredient", `${event.target.value}`);
  };

  return (
    <>
      <Form.Input
        className="input-text"
        type="text"
        name={name}
        id={name}
        value={value}
        list={id}
        onChange={updateValue}
      />
      <datalist className={className} id={id}>
        {filtered.map((option, idx) => {
          return (
            <option className={innerClassName} key={idx} value={option}>
              {option}
            </option>
          );
        })}
      </datalist>
    </>
  );
}

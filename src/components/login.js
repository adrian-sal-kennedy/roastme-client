import React, { Component } from "react";
import {
  Container,
  Button,
  Field,
  Control,
  Label,
  Input,
} from "react-bulma-components/dist";

export default class login extends Component {
  render() {
  const [form, setForm] = useState({ name: "", password: "" });
  const update = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });
    return (
      <>
        <div>
          <p>login component</p>
        </div>

        <Field>
          <Control>
            <Label>Name</Label>
            <Input name="name" value={form.name} onChange={update} />
          </Control>
        </Field>
      </>
    );
  }
}

// const Element = () => {
//   const [form, setForm] = useState({ name: "", password: "" });
//   const update = ({ target }) =>
//     setForm({ ...form, [target.name]: target.value });
//   return (
//     <>
//       <Field>
//         <Control>
//           <Label>Name</Label>
//           <Input name="name" value={form.name} onChange={update} />
//         </Control>
//       </Field>
//       <Field>
//         <Control>
//           <Label>Password</Label>
//           <Input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={update}
//           />
//         </Control>
//       </Field>
//       <Button.Group>
//         <Button
//           fullwidth
//           rounded
//           color="primary"
//           onClick={() => console.log(form)}
//         >
//           Login
//         </Button>
//       </Button.Group>
//     </>
//   );
// };

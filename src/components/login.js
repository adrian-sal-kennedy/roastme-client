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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  async componentDidMount() {
    await this.update();
  }

  async update() {
    // this.setState({ form: {name: }})
    console.log("update!");
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">Roastme!</h1>
          <h2 className="subtitle">A social cookbook.</h2>
          <div>{/* put a nice pic here, or even a random nice pic */}</div>
          {/* example from https://bulma.io/documentation/form/general/ */}
          <div className="panel">
            <div className="panel-heading">Log in to Roastme!</div>
            <div className="field">
              <label type="email" className="label">
                Email address
              </label>
              <div className="control">
                <input type="text" className="is-large" placeholder="Miguel Sanchez" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="is-large"
                  placeholder="jigglypuff1989"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input type="submit" className="button is-link" />
              </div>
            </div>
          </div>
          {/* <Field> */}
          {/* <Control> */}
          {/* <Label>Name</Label> */}
          {/* <Input name="name" value={form.name} onChange={update} />
              <Input name="name" value="test" onChange={this.update()} /> */}
          {/* </Control>  */}
          {/* </Field> */}
        </div>
      </>
    );
  }
}

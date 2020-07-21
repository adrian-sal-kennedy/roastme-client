import React, { Component } from "react";
import {
  Container,
  Hero,
  Heading,
  Columns,
  Button,
  Form,
  Message,
} from "react-bulma-components";
import { RandomPicUrl } from "../shared/corePics";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errMessage: "",
    bgPicUrl: `${RandomPicUrl()}`,
  };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };
  onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const body = {
      auth: { email, password },
    };
    console.log(email,password)
    try {
      // const response = await fetch(
      //   "https://roastme-recipes.herokuapp.com/login",
      const response = await fetch(
        "http://220.240.139.117:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("Wrong email or password!");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/secrets");
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    const { Label, Input, Field, Control } = Form;
    const { Column } = Columns;
    //getting around bulma-component import problems

    const { email, password, errMessage } = this.state;
    return (
      <>
        <Container className="has-text-centered">
          <Hero
            size="large"
            color="dark"
            style={{
              backgroundImage: `url('${this.state.bgPicUrl}')`,
              backgroundSize: "cover",
              textShadow: "2px 2px #00000080",
            }}
          >
            <Column size={10} color="#00000080">
              <Heading size={2} renderAs="h1">
                Roastme!
              </Heading>
              <Heading subtitle renderAs="h2">
                A social cookbook.
              </Heading>
              {/* <RandomPic /> */}
              <Heading size={4}>Log in to Roastme!</Heading>
              {errMessage && (
                <Message color="danger">
                  <Message.Header>Error! {errMessage}</Message.Header>
                </Message>
              )}

              <form onSubmit={this.onFormSubmit}>
                <Field>
                  <Label type="email">Email address</Label>
                  <Control>
                    <Input
                      type="text"
                      className="is-large"
                      name="email"
                      id="email"
                      value={email}
                      onChange={this.onInputChange}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label type="password">Password</Label>
                  <Control>
                    <Input
                      type="password"
                      className="is-large"
                      name="password"
                      id="password"
                      value={password}
                      onChange={this.onInputChange}
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Button type="primary" className="button is-link">
                      Submit
                    </Button>
                  </Control>
                </Field>
                {/* <pre>
                  <code>{JSON.stringify(this.state, null, 2)}</code>
                </pre> */}
              </form>
            </Column>
          </Hero>
        </Container>
      </>
    );
  }
}

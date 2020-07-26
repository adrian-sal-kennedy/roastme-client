import React, { Component } from "react";
import {
  Container,
  Hero,
  Heading,
  Columns,
  Button,
  Form,
  Message,
  Section,
} from "react-bulma-components";
import { RandomPicUrl } from "../shared/corePics";

export default class Signup extends Component {
  state = {
    username: "",
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
    const { username, email, password } = this.state;
    const body = {
      user: { username, email, password },
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("Wrong email or password!");
      } else {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auth: { email, password }}),
        })
        const { jwt } = await response.json()
        localStorage.setItem("token", jwt);
        this.props.history.push("/");
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

    const { username, email, password, errMessage } = this.state;
    return (
      <Container
        style={{
          background: `grey url('${this.state.bgPicUrl}') center no-repeat`,
          backgroundSize: "cover",
          textShadow: "2px 2px #00000080"
        }}
      >
        <Container>
          <Hero className="center-children" color="dark" style={{ backgroundColor: "unset" }}>
            <Hero.Body>
              <Heading size={2} renderAs="h1">
                Roastme!
              </Heading>
              <Heading subtitle renderAs="h2">
                A social cookbook.
              </Heading>
              <Heading size={4}>Log in to Roastme!</Heading>
              {errMessage && (
                <Message color="danger">
                  <Message.Header>Error! {errMessage}</Message.Header>
                </Message>
              )}
            </Hero.Body>
          </Hero>
          <Section>
            <Container className="center-children">
              <Column size="two-thirds" className="login-column">
                <form onSubmit={this.onFormSubmit}>
                <Field>
                  <Label type="username">Name</Label>
                  <Control>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={this.onInputChange}
                    />
                  </Control>
                </Field>
                  <Field>
                    <Label type="email">Email address</Label>
                    <Control>
                      <Input
                        type="text"
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
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.onInputChange}
                      />
                    </Control>
                  </Field>
                  <Field kind="group">
                    <Control>
                      <Button
                        type="primary"
                        className="button is-link"
                        style={{
                          margin: "0.75em",
                        }}
                      >
                        Submit
                      </Button>
                      <Button
                        className="button is-link"
                        style={{
                          margin: "0.75em",
                        }}
                      >
                        Sign up
                      </Button>
                    </Control>
                  </Field>
                  {/* <pre>
                  <code>{JSON.stringify(this.state, null, 2)}</code>
                </pre> */}
                </form>
              </Column>
            </Container>
          </Section>
        </Container>
      </Container>
    );
  }
}

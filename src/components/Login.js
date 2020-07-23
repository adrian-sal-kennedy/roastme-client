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
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("Wrong email or password!");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/");
      }
    } catch (err) {
      console.log(`fetching error: ${err.message}`)
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
      <Container className="has-text-centered">
        <Hero
          size="large"
          color="dark"
          style={{
            backgroundImage: `url('${this.state.bgPicUrl}')`,
            backgroundSize: "cover",
            textShadow: "2px 2px #00000080",
            paddingTop: "1rem",
          }}
        >
          <Column size={10} color="dark">
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

            <Column
              style={{
                backgroundImage: "unset",
                backgroundColor: "#00000080",
                borderRadius: "2rem",
                margin: "2rem",
                padding: "1rem",
              }}
              size="auto"
            >
              <form onSubmit={this.onFormSubmit}>
                <Field>
                  <Label type="email" color="white"><p className="white">Email address</p></Label>
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
                    <Button type="primary" className="button is-link" style={{
                      margin: "0.75em",
                    }}>
                      Submit
                    </Button>
                  </Control>
                </Field>
                {/* <pre>
                  <code>{JSON.stringify(this.state, null, 2)}</code>
                </pre> */}
              </form>
            </Column>
          </Column>
        </Hero>
      </Container>
    );
  }
}

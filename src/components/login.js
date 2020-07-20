import React, { Component } from "react";
import {
  Container,
  Panel,
  Hero,
  Heading,
  Columns,
  Button,
  Field,
  Control,
  Label,
  Input,
  Form,
} from "react-bulma-components";
import RandomPic, { RandomPicUrl } from "../shared/corePics";

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
        <Container className="has-text-centered">
          <Hero
            size="large"
            color="dark"
            style={{
              backgroundImage: `url('${RandomPicUrl()}')`,
              backgroundSize: "cover",
              textShadow: "2px 2px #00000080",
            }}
          >
            <Columns.Column size={10} color="#00000080">
            <Heading size={2} renderAs="h1">Roastme!</Heading>
            <Heading subtitle renderAs="h2">
              A social cookbook.
            </Heading>
              {/* <RandomPic /> */}
              <Heading size={4}>Log in to Roastme!</Heading>
              <Form.Field>
                <Form.Label type="email">
                  Email address
                </Form.Label>
                <Form.Control>
                  <Form.Input
                    type="text"
                    className="is-large"
                    placeholder="miguel-sanchez@springfield.com"
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label type="password">
                  Password
                </Form.Label>
                <Form.Control>
                   <Form.Input
                    type="password"
                    className="is-large"
                    placeholder="jigglypuff1989"
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Button type="primary" className="button is-link">Submit</Button>
                </Form.Control>
              </Form.Field>
            </Columns.Column>
          </Hero>
        </Container>
      </>
    );
  }
}

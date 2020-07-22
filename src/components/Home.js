import React, { Component } from "react";
import RandomPic from "../shared/corePics";
import {
  Heading,
  Hero,
  Container,
  Content,
  Columns,
} from "react-bulma-components";
// import { Column } from "react-bulma-components/lib/components/columns";
// import Card from '../shared/card';

export default class Home extends Component {
  render() {
    return (
      <Container className="has-text-centered">
        <Hero
          size="large"
          color="dark"
          style={{
            backgroundSize: "cover",
            textShadow: "2px 2px #00000080",
            paddingTop: "1rem",
          }}
        >
          <Heading size={2} renderAs="h1">
            Roastme!
          </Heading>
          <Heading subtitle renderAs="h2">
            A social cookbook.
          </Heading>
          <Content renderAs="p">
            Find, create, share and modify your favourite recipes.
          </Content>
        </Hero>
        <Hero className="has-text-centered">
          <RandomPic />
        </Hero>
      </Container>
    );
  }
}

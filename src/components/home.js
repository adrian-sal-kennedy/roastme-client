import React, { Component } from "react";
import RandomPic from "../shared/corePics";
import { Heading, Hero, Container, Content, Columns } from "react-bulma-components";
// import { Column } from "react-bulma-components/lib/components/columns";
// import Card from '../shared/card';

export default class home extends Component {
  render() {
    return (
      <Hero className="has-text-centered">
        <Columns.Column>
          <Heading className="bd-notification" renderAs="h1" weight="bold">Roastme!</Heading>
          <Heading subtitle renderAs="h2" weight="bold">
            A social cookbook.
          </Heading>
        </Columns.Column>
        <Columns.Column>
          <Content renderAs="p">
            Find, create, share and modify your favourite recipes.
          </Content>
        </Columns.Column>
        <Columns.Column>
          <RandomPic />
        </Columns.Column>
      </Hero>
    );
  }
}

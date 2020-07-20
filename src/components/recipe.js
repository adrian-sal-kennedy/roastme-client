import React, { Component } from "react";
import {
  Container,
  Button
} from "react-bulma-components/dist";

export default class recipe extends Component {
  render() {
    return (
      <Container>
        <div>
          <p>recipe component</p><Button>click me!</Button>
        </div>
      </Container>
    );
  }
}

import React, { Component } from "react";
import RandomPic from "../shared/corePics";
// import Card from '../shared/card';

export default class home extends Component {
  render() {
    return (
      <section className="hero">
        <h1 className="title">Roastme!</h1>
        <h2 className="subtitle">A social cookbook.</h2>
        <div className="hero-body">
          <RandomPic />
        </div>
      </section>
    )
  }
}

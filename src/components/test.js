import React, { Component } from "react";

export default class test extends Component {
  constructor(props) {
    super(props);
    const loadmsg = "loading...";
    this.state = { data: { name: loadmsg, age: loadmsg } };
  }

  componentDidMount = () => {
    // fetch('http://220.240.139.117:3000/test')
    fetch("https://roastme-recipes.herokuapp.com/test")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    return (
      <div>
        <p>name: {this.state?.data.name}</p>
        <p>age: {this.state?.data.age}</p>
      </div>
    );
  }
}

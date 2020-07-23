import React, { Component } from "react";

export default class test extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount = () => {
    // fetch('http://220.240.139.117:3000/test')
      fetch("https://roast-me-recipes.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    console.log(this.state?.data)
    const recipes = this.state?.data.map(recipe => {
      return(
        <>
        <p>{recipe.recipe.title}</p>
        <p>{recipe.author.username}</p>
        </>
      )
    })
    return (
      <div>
        {recipes || "loading"}
      </div>
    );
  }
}

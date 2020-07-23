import React, { Component } from "react";
import moment from "moment";
import {
  Content,
  Media,
  Heading,
  Columns,
  Box,
} from "react-bulma-components/dist";
// import Card from "../shared/altCard";

export default class recipe extends Component {
  state = {
    errorMessage: "",
    recipe: "",
    ingredients: [],
    tags: [],
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`
    );
    const recipe = await response.json();
    this.setState({ recipe: recipe });
  }
  render() {
    const { recipe, ingredients, author, tags } = this.state.recipe;
    const createdAt = moment(this.state.recipe.created_at)
      .startOf("hour")
      .fromNow();
    console.log(this.state.recipe);
    return (
      <Box>
        <Columns breakpoint="mobile">
          <Columns.Column>
            <div className="is-dark">
              {recipe && <Heading size={3}>{recipe.title}</Heading>}
              {recipe && <Content size="medium">{recipe.blog}</Content>}
              {recipe && <Content size="medium">{author.username}</Content>}
              <time>{`${createdAt}`}</time>
            </div>
          </Columns.Column>
        </Columns>
      </Box>
    );
  }
}

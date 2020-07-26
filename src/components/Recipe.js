import React, { Component } from "react";
import moment from "moment";
import { Content, Heading, Container, Box } from "react-bulma-components/dist";
import Markdown from "react-markdown";
import IngredientList from "../shared/IngredientList";
import Taglist from "../shared/TagList";

// import Card from "../shared/altCard";

export default class Recipe extends Component {
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
    const { recipe, ingredients, author, tags } = this.state?.recipe;
    const createdAt = moment(this.state.recipe.created_at)
      .startOf("hour")
      .fromNow();
    return (
      <div className="main-component flex-tile">
        <Box style={{ margin: "0.25rem" }}>
          {recipe && <Heading size={3}>{recipe.title}</Heading>}
          {recipe && (
            <Content size="medium">
              <Markdown>{recipe.blog}</Markdown>
            </Content>
          )}
          {recipe && <Content size="medium">{author.username}</Content>}
          <Heading size={4}>Ingredients:</Heading>
          {ingredients && <IngredientList ingredients={ingredients} />}
          <time>{`${createdAt}`}</time>
          <Container>
            {tags && console.log("recipe.js", tags)}
            {tags && <Taglist tags={tags} />}
          </Container>
        </Box>
      </div>
    );
  }
}

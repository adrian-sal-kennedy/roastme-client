import React, { Component } from "react";
import moment from "moment";
import { Content, Heading, Container, Box } from "react-bulma-components/dist";
import Markdown from "react-markdown";
import IngredientList from "../shared/IngredientList";
import MethodList from "../shared/MethodList";
import Taglist from "../shared/TagList";

// import Card from "../shared/altCard";
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export default class Recipe extends Component {
  state = {
    errorMessage: "",
    recipe: "",
    ingredients: [],
    tags: [],
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`
    );
    const recipe = await response.json();
    this.setState({ recipe: recipe });
  }
  render() {
    const { recipe, ingredients, author, tags } = this.state?.recipe;
    const method = isJson(recipe?.method)
      ? JSON.parse(recipe.method)
      : { "bad method": recipe?.method };
    const createdAt = moment(this.state.recipe.created_at)
      .startOf("hour")
      .fromNow();
    return (
      <div className="main-component">
        <Box style={{ minHeight: "100%", margin: "1px" }}>
          {recipe && (
            <>
              <div className="inline justify-baseline">
                <Heading size={3}>{recipe.title}</Heading>
                <Content size="medium">
                  <p>{`recipe by ${author.username}, ${createdAt}`}</p>
                </Content>
              </div>
              <Content size="medium">
                <Markdown className="md text-columns">{recipe.blog}</Markdown>
              </Content>
            </>
          )}
          <Heading className="md" size={4}>
            Ingredients:
          </Heading>
          {ingredients && <IngredientList className="text-columns md" ingredients={ingredients} />}
          <Heading size={4}>Method:</Heading>
          {method && <MethodList method={method} />}
          <Container>
            {tags && <Taglist tags={tags.map((tag) => tag.tag)} />}
          </Container>
        </Box>
      </div>
    );
  }
}

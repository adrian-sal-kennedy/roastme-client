import React, { Component } from "react";
import {
  Content,
  Heading,
  Container,
  Box,
  Form,
} from "react-bulma-components/dist";
import Markdown from "react-markdown";
// import { Link } from "react-router-dom";
import IngredientList from "../shared/IngredientList";
import Taglist from "../shared/TagList";

// import Card from "../shared/altCard";

export default class NewRecipe extends Component {
  state = {
    errorMessage: "",
    recipe: "",
    ingredients: [],
    tags: [],
  };
  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };
  render() {
    const { Input, Field, Control, Textarea } = Form;
    const { blog, ingredients, title, tags } = this.state;
    return (
      <div className="main-component flex-tile">
        <Box style={{ margin: "0.25rem", flex: "0 1 58rem" }}>
          <Heading size={3}>Create New Recipe</Heading>
          <form onSubmit={this.onFormSubmit}>
            <Heading size={4}>Recipe title</Heading>
            <Field>
              <Control>
                <Input
                  className="input-text"
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.onInputChange}
                />
              </Control>
            </Field>
            <Heading size={5}>Introduction</Heading>
            <Content
              style={{
                marginTop: "-1.5rem",
                marginBottom: "0",
                fontStyle: "italic",
                fontSize: "0.8rem",
              }}
              renderAs="p"
            >
              hint: you can type{" "}
              <a
                href="https://www.markdownguide.org/cheat-sheet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                markdown
              </a>{" "}
              here
            </Content>
            <Field>
              <Control>
                <Textarea
                  className="input-text"
                  type="textarea"
                  name="blog"
                  id="blog"
                  value={blog}
                  onChange={this.onInputChange}
                />
              </Control>
            </Field>
            <Heading size={4}>Ingredients:</Heading>
          </form>
          {ingredients && <IngredientList ingredients={ingredients} />}
          <Container>
            {tags && console.log("recipe.js", tags)}
            {tags && <Taglist tags={tags} />}
          </Container>
        </Box>
        <Box style={{ margin: "0.25rem", flex: "0 1 58rem" }}>
          <Markdown className="md" source={this.state.blog} />
        </Box>
      </div>
    );
  }
}

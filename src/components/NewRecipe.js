import React, { Component } from "react";
import {
  Content,
  Heading,
  Box,
  Form,
  Button,
  Message,
  Container,
} from "react-bulma-components/dist";
import Markdown from "react-markdown";
import OptionList from "../shared/OptionList";
import Taglist from "../shared/TagList";

export default class NewRecipe extends Component {
  state = {
    errorMessage: "",
    recipe: "",
    ingredients: [],
    ingredient: "",
    tags: [],
    blog: "",
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/ingredients`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("Something went wrong NewRecipe.js!");
      } else {
        const ingredients = await response.json();
        // ingredients && console.log(ingredients);
        localStorage.setItem("ingredients", ingredients);
        this.setState({
          ingredientList: ingredients,
        });
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }
  onInputChange = (event) => {
    try {
      const key = event.target.id;
      this.setState({
        [key]: event.target.value,
      });
    } catch {
      console.log(event);
    }
  };
  onAddIngredient = (event) => {
    event.preventDefault();
    const ingredient = localStorage.getItem(
      "currentIngredient",
      `${event.target.value}`
    );
    this.setState((oldState) => ({
      ingredients: [...oldState.ingredients, ingredient],
    }));
  };
  onFormSubmit = async (event) => {
    event.preventDefault();
    const { title, blog, method, ingredients } = this.state;
    const body = {
      recipe: { title, blog, method },
    };
    const body2 = {
      ingredients: { list: `"${[...ingredients].join('","')}"` },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/recipe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(body),
        }
      );
      const { recipe } = await response.json();
      if (response.status >= 400) {
        throw new Error("Couldn't store recipe!");
      } else {
        const response2 = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/ingredients/${recipe}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(body2),
          }
        );
        if (response2.status >= 400) {
          throw new Error("Couldn't store ingredients!");
        }
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  };
  componentWillUnmount() {
    localStorage.removeItem("ingredients");
    localStorage.removeItem("currentIngredient");
  }
  render() {
    const { Input, Field, Control, Textarea } = Form;
    const {
      method,
      blog,
      ingredientList,
      ingredients,
      ingredient,
      title,
      errMessage,
    } = this.state;
    return (
      <div className="main-component flex-tile">
        <Box style={{ margin: "0.25rem", flex: "0 1 58rem" }}>
          <Heading size={3}>Create New Recipe</Heading>
          <Heading size={5}>Recipe title</Heading>
          <Content
            style={{
              marginTop: "-1.7rem",
              marginBottom: "0",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
            renderAs="p"
          >
            A nice name or tasty short description
          </Content>
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
              marginTop: "-1.7rem",
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
          <Heading size={5}>Ingredients</Heading>
          {/* {this.state.ingredients.map((ingredient,idx) => {
            return (
              <div key={idx}>
                {ingredient}
              </div>
            )
          })} */}
          <Container>
            <Taglist className="font-1rem" tags={ingredients} />
          </Container>
          <form onSubmit={this.onAddIngredient}>
            <Field
              className="has-addons"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Control>
                {ingredientList && (
                  <OptionList
                    searchTerm={this.state.ingredient}
                    options={ingredientList}
                    className="pos-absolute dropdown-nav"
                    innerClassName="select"
                    name={ingredient}
                    id="ingredient"
                    onChange={this.onInputChange}
                  />
                )}
              </Control>
              <Control>
                <Button className="button is-link">add ingredient</Button>
              </Control>
            </Field>
          </form>
          <Heading size={5}>Method</Heading>
          <Field>
            <Control>
              <Input
                className="input-text"
                type="text"
                name="method"
                id="method"
                value={method}
                onChange={this.onInputChange}
              />
            </Control>
          </Field>
          <form onSubmit={this.onFormSubmit}>
            {errMessage && (
              <Message color="danger">
                <Message.Header>Error! {errMessage}</Message.Header>
              </Message>
            )}
            <Field kind="group">
              <Control>
                <Button
                  type="primary"
                  className="button is-link"
                  style={{
                    margin: "0.75em",
                  }}
                >
                  Submit
                </Button>
              </Control>
            </Field>
          </form>
        </Box>
        <Box style={{ margin: "0.25rem", flex: "0 1 58rem" }}>
          <Content
            style={{
              marginTop: "-1rem",
              marginBottom: "0",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
            renderAs="p"
          >
            Preview
          </Content>
          <Markdown includeNodeIndex={true} className="md" source={blog} />
        </Box>
      </div>
    );
  }
}

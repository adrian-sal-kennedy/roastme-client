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
import genericFetch from "../shared/genericFetch";
export default class NewRecipe extends Component {
  state = {
    recipe: "",
    ingredients: [],
    ingredient: "",
    tags: [],
    blog: "",
  };
  constructor(props) {
    super(props);
    localStorage.removeItem("errMessage");
  }
  componentDidMount() {
    genericFetch(
      {
        route: "/ingredients",
        method: "GET",
        auth: true,
        errMessage: "Something went wrong NewRecipe.js!",
      },
      (ingredients) => {
        localStorage.setItem("ingredients", ingredients);
        this.setState({
          ingredientList: ingredients,
        });
      }
    );
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
    genericFetch(
      {
        route: "/recipe",
        method: "POST",
        auth: true,
        body: JSON.stringify(body),
        errMessage: "Couldn't store recipe!",
      },
      async (recipe) => {
        const recipeId = recipe.recipe;
        if (recipe && recipeId !== "n/a") {
          return genericFetch(
            {
              route: `/ingredients/${recipeId}`,
              method: "POST",
              auth: true,
              body: JSON.stringify({
                ingredients: { list: `${[...ingredients].join(",")}` },
              }),
              errMessage: "Couldn't store ingredients!",
            },
            () => {
              this.props.history.push("/cookbook");
            }
          );
        } else {
          localStorage.setItem("errMessage", "Couldn't store ingredients!")
        }
      }
    );
  };
  componentWillUnmount() {
    localStorage.removeItem("ingredients");
    localStorage.removeItem("currentIngredient");
    // localStorage.removeItem("errMessage");
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
    } = this.state;
    return (
      <div className="flex-tile main-component">
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
          {localStorage.getItem("errMessage") && (
            <Message color="danger">
              <Message.Header>
                Error! {localStorage.getItem("errMessage")}
              </Message.Header>
            </Message>
          )}
          <Field kind="group">
            <Control>
              <Button
                type="primary"
                className="button is-link"
                onClick={this.onFormSubmit.bind(this)}
                style={{
                  margin: "0.75em",
                }}
              >
                Submit
              </Button>
            </Control>
          </Field>
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
          <Markdown
            includeNodeIndex={true}
            className="md text-columns rem14"
            source={blog}
          />
        </Box>
      </div>
    );
  }
}

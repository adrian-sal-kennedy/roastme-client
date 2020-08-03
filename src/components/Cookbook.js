import React, { Component } from "react";
import RandomPic from "../shared/corePics";
import {
  Heading,
  Hero,
  Section,
  Container,
  Content,
  Button,
  Message,
  Tabs,
} from "react-bulma-components";
import { Link } from "react-router-dom";
// import { Column } from "react-bulma-components/lib/components/columns";
import Card from "../shared/RecipeCard";

export default class Cookbook extends Component {
  state = {
    recipesIndex: [],
    page: 1,
  };
  async componentDidMount() {
    this.getRecipes();
  }
  async getRecipes(props) {
    const order = "old";
    const limit = 10;
    const { page } = props || this.state;
    const offset = (page - 1) * limit;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/cookbook?limit=${limit}&offset=${offset}&order=${order}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("You must be logged in to do this!");
      } else {
        const { list, count } = await response.json();
        this.setState({
          recipesIndex: [...this.state.recipesIndex, ...list],
          count: count,
        });
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }
  getNextPage() {
    const page = this.state.page + 1;
    this.setState({
      page: page,
    });
    this.getRecipes({ page });
  }
  render() {
    const recipes = this.state.recipesIndex;
    const { errMessage } = this.state;
    return (
      <>
        <Section className="flex" color="black">
          <Tabs style={{ width: "100%" }}>
            <Tabs.Tab renderAs="div">
              <Link className="navbar-item" to="/">
                All Recipes
              </Link>
            </Tabs.Tab>
            <Tabs.Tab className="navbar-item" active>My Cookbook</Tabs.Tab>
          </Tabs>
          {errMessage && (
            <Container>
              <Message color="danger">
                <Message.Header>
                  Error! {errMessage}
                  <Link
                    to="/login"
                    className="button is-link"
                    style={{
                      margin: "0.75em",
                    }}
                  >
                    Log in
                  </Link>
                </Message.Header>
              </Message>
            </Container>
          )}

          {!errMessage && (
            <Button className="add-new-button">
              <Link to={"recipe/new"}>+</Link>
            </Button>
          )}
          {recipes[0] && recipes.length < 1 && (
            <Card
              recipe={{
                recipe: {
                  title: "You don't have any recipes yet!",
                  id: "new",
                  blog: "## Click here or the green plus sign to get started.",
                },
              }}
            />
          )}
          {recipes.length > 0 &&
            recipes.map((recipe, idx) => {
              return (
                <div
                  className="main-component flex-tile recipe-card"
                  key={idx + 1}
                >
                  {recipes[idx] && <Card recipe={recipe} />}
                </div>
              );
            })}
          {recipes && recipes.length > 0 && (
            <div
              className="scrollcatcher"
              onClick={this.getNextPage.bind(this)}
            >
              <Heading className="is-dark has-text-centered" size={2}>
                Click here for more!
              </Heading>
            </div>
          )}
        </Section>
        {/* recipe list above ^^^ | vvv footer stuff below */}
        <Section>
          <Hero className="has-text-centered">
            <RandomPic />
          </Hero>
          <Hero
            size="large"
            color="dark"
            style={{
              backgroundSize: "cover",
              textShadow: "2px 2px #00000080",
            }}
          >
            <Container fluid>
              <Heading size={2} renderAs="h1">
                Roastme!
              </Heading>
              <Heading subtitle renderAs="h2">
                A social cookbook.
              </Heading>
              <Content renderAs="p">
                Find, create, share and modify your favourite recipes.
              </Content>
            </Container>
          </Hero>
        </Section>
      </>
    );
  }
}

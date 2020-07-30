import React, { Component } from "react";
import RandomPic from "../shared/corePics";
// Columns,
import {
  Heading,
  Hero,
  Section,
  Container,
  Content,
  Button,
  Tabs,
} from "react-bulma-components";
import { Link } from "react-router-dom";
// import { Column } from "react-bulma-components/lib/components/columns";
import Card from "../shared/RecipeCard";

export default class Home extends Component {
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
        `${process.env.REACT_APP_BACKEND_URL}?limit=${limit}&offset=${offset}&order=${order}`
      );
      if (response.status >= 400) {
        throw new Error("Not logged in!");
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
    return (
      <>
        <Section className="flex" color="black">
          <Tabs style={{ width: "100%" }}>
            <Tabs.Tab active>All Recipes</Tabs.Tab>
            <Tabs.Tab renderAs="div">
              <Link className="navbar-item" to="/cookbook">
                My Cookbook
              </Link>
            </Tabs.Tab>
          </Tabs>
          <Button className="add-new-button">
            <Link to={"recipe/new"}>+</Link>
          </Button>
          {recipes &&
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

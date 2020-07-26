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
  };
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`);
    const recipesIndex = await response.json();
    this.setState({ recipesIndex: recipesIndex });
  }
  render() {
    const recipes = this.state.recipesIndex;
    return (
      <>
        <Section className="flex" color="black">
          <Tabs style={{width: "100%"}}>
            <Tabs.Tab active>All Recipes</Tabs.Tab>
            <Tabs.Tab>My Recipes</Tabs.Tab>
          </Tabs>
          <Button className="add-new-button">
            <Link to={"recipe/new"}>+</Link>
          </Button>
          {recipes.map((recipe, idx) => {
            return (
              <div className="main-component flex-tile" key={idx + 1}>
                {recipes[idx] && <Card recipe={recipe} />}
              </div>
            );
          })}
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

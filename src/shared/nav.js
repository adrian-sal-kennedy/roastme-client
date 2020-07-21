import React from "react";
import { Navbar } from "react-bulma-components";
// import { Link } from "react-router-dom"; // Navbar.Link replaces this

export default class nav extends React.Component {
  render() {
    const { Container, Brand, Burger, Item, Menu, Link } = Navbar;
    console.log(process.env);
    return (
      <Navbar color="primary">
        <Brand>
          <Item href="/">Roast me!</Item>
          <Burger />
        </Brand>
        <Menu>
          <Container>
            <Item href="/">
              <Link arrowless={true}>Home</Link>
            </Item>
            <Item href="/cookbook">
              <Link arrowless={true}>
                Cookbook
              </Link>
            </Item>
            <Item href="/dashboard">
              <Link arrowless={true}>
                Dashboard
              </Link>
            </Item>
            <Item href="/profile">
              <Link arrowless={true}>
                Profile
              </Link>
            </Item>
          </Container>
          <Container position="end">
            <Item href="/login">
              <Link arrowless={true}>
                Log in
              </Link>
            </Item>
            <Item href="/signup">
              <Link arrowless={true}>
                Sign up
              </Link>
            </Item>
          </Container>
        </Menu>
      </Navbar>
    );
  }
}

import React from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class nav extends React.Component {
  render() {
    const { Container, Brand, Burger, Item, Menu } = Navbar;
    return (
      <Navbar color="primary">
        <Container position="end">
          <Brand href="/">
            <h2>Roast me!</h2>
            <Burger />
          </Brand>
        </Container>
        <Menu>
          <Container>
            <Item href="#">
              <Link to="/">Home</Link>
            </Item>

            <Item href="#">
              <Link to="/cookbook">Cookbook</Link>
            </Item>

            <Item href="#">
              <Link to="/dashboard">Dashboard</Link>
            </Item>

            <Item href="#">
              <Link to="/profile">Profile</Link>
            </Item>
          </Container>
          <Container position="end">
            <Item>
              <Link to="/login">Log in</Link>
            </Item>
            <Item>
              <Link to="/signup">Sign up</Link>
            </Item>
          </Container>
        </Menu>
      </Navbar>
    );
  }
}

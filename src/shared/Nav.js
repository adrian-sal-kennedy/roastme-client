import React from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom"; // Navbar.Link replaces this

export default class Nav extends React.Component {
  state = {
    burgerActive: "",
    token: this.props.token,
  };
  onBurgerClick = (event) => {
    if (event.target.className === "navbar-burger is-active") {
      event.target.className = "navbar-burger";
    } else {
      event.target.className = "navbar-burger is-active";
    }
  };
  logOut = async (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
  };
  renderLoginToggle = () => {
    const { Container } = Navbar;
    if (this.state.token && true) {
      return (
        <Container position="end">
          <Navbar.Link className="navbar-item" onClick={this.logOut}>
            Logout
          </Navbar.Link>
        </Container>
      );
    } else {
      return (
        <Container position="end">
          <Link className="navbar-item" to="/login">
            <Navbar.Link arrowless={true}>Log in</Navbar.Link>
          </Link>
          <Link className="navbar-item" to="/signup">
            <Navbar.Link arrowless={true}>Sign up</Navbar.Link>
          </Link>
        </Container>
      );
    }
  };
  render() {
    const { Container, Brand, Burger, Menu } = Navbar;
    return (
      <Navbar color="primary">
        <Brand>
          <Link className="navbar-item roastme" to="/">
            Roast me!
          </Link>
          {/* <Burger className={cond && "is-active"} /> */}
          <Burger onClick={this.onBurgerClick.bind(this)}>
            <Menu id="menu-elements">
              <Container>
                <Link className="navbar-item" to="/">
                  <Navbar.Link arrowless={true}>Home</Navbar.Link>
                </Link>
                <Link className="navbar-item" to="/cookbook">
                  <Navbar.Link arrowless={true}>Cookbook</Navbar.Link>
                </Link>
                <Link className="navbar-item" to="/dashboard">
                  <Navbar.Link arrowless={true}>Dashboard</Navbar.Link>
                </Link>
                <Link className="navbar-item" to="/profile">
                  <Navbar.Link arrowless={true}>Profile</Navbar.Link>
                </Link>
              </Container>
              {this.renderLoginToggle()}
            </Menu>
          </Burger>
        </Brand>
        <Menu>
          <Container>
            <Link className="navbar-item" to="/">
              <Navbar.Link arrowless={true}>Home</Navbar.Link>
            </Link>
            <Link className="navbar-item" to="/cookbook">
              <Navbar.Link arrowless={true}>Cookbook</Navbar.Link>
            </Link>
            <Link className="navbar-item" to="/dashboard">
              <Navbar.Link arrowless={true}>Dashboard</Navbar.Link>
            </Link>
            <Link className="navbar-item" to="/profile">
              <Navbar.Link arrowless={true}>Profile</Navbar.Link>
            </Link>
          </Container>
          {this.renderLoginToggle()}
        </Menu>
      </Navbar>
    );
  }
  static defaultProps = {
    token: localStorage.getItem("token"),
  };
}

import React from "react";
import { Navbar, Dropdown } from "react-bulma-components";
import { Link, withRouter } from "react-router-dom"; // Navbar.Link replaces this
import LinkList from "./LinkList.js"

function RenderLoginOut(props) {
  const { Container } = Navbar;
  const { loggedIn, onClick } = props;
  console.log("RenderLoginOut", props);
  if (loggedIn && true) {
    return (
      <Container position="end">
        <Navbar.Link
          arrowless={true}
          className={props.className}
          onClick={onClick}
        >
          Logout
        </Navbar.Link>
      </Container>
    );
  } else {
    return (
      <Container position="end">
        <Link to="/login">
          <Navbar.Link className={props.className} arrowless={true}>
            Log in
          </Navbar.Link>
        </Link>
        <Link to="/signup">
          <Navbar.Link className={props.className} arrowless={true}>
            Sign up
          </Navbar.Link>
        </Link>
      </Container>
    );
  }
}
class Nav extends React.Component {
  state = {
    burgerActive: false,
    loggedIn: false,
    token: null,
  };
  constructor(props) {
    super(props);
    this.state = { loggedIn: props.loggedIn, token: props.token };
    console.log(`Navbar: loggedIn state = ${props.loggedIn}`);
  }
  onBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive });
  };
  turnBurgerOff = () => {
    this.setState({ burgerActive: false });
  };
  logOut = async (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    this.turnBurgerOff();
    this.props.history.push("/login");
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.setState({ loggedIn: true, token: token });
    console.log("Nav.js props: ", this.props);
    console.log("Nav.js state: ", this.state);
  }
  render() {
    const { Container, Brand, Burger, Menu } = Navbar;
    return (
      <>
        <Navbar color="primary">
          <Brand>
            <Link className="navbar-item roastme" to="/">
              Roast me!
            </Link>
            <Burger
              onClick={this.onBurgerClick.bind(this)}
              className={`${this.state.burgerActive && "is-active"}`}
            >
            </Burger>
          </Brand>
          <Menu>
            <Container>
              <Link className="navbar-item" to="/">
                <Navbar.Link arrowless={true}>Home</Navbar.Link>
              </Link>
              <LinkList
                className="navbar-item is-dark"
                innerClassName="navbar-item"
              />
            </Container>
            <RenderLoginOut
              className="navbar-item"
              loggedIn={this.state.loggedIn}
              onClick={this.logOut}
            />
          </Menu>
        </Navbar>

        {this.state.burgerActive && (
          <div>
            <Navbar.Dropdown
              renderAs="div"
              className="dropdown-nav deepbrown pos-absolute"
            >
              <LinkList innerClassName="navbar-item is-dark is-dropdown-item" />
              <RenderLoginOut
                loggedIn={this.state.loggedIn}
                onClick={this.logOut}
                className="navbar-item is-dark is-dropdown-item"
              />
              {/* {this.renderLoginToggle()} */}
              {/* This here is the dropdown navbar */}
              <div
                className="clickmeaway pos-absolute"
                onMouseEnter={this.turnBurgerOff}
              ></div>
            </Navbar.Dropdown>
          </div>
        )}
      </>
    );
  }
  static defaultProps = {
    token: localStorage.getItem("token"),
  };
}

export default withRouter(Nav);

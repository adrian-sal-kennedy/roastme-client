import React from "react";
import { Navbar } from "react-bulma-components";
import { Link, withRouter } from "react-router-dom"; // Navbar.Link replaces this
import LinkList from "./LinkList.js";

function RenderLoginOut(props) {
  const loggedIn = (localStorage.getItem("token") && true) || false;
  if (loggedIn && true) {
    return <RenderLogOut {...props} />;
  } else {
    return <RenderLogin {...props} />;
  }
}
function RenderLogOut(props) {
  const { Container } = Navbar;
  const { onClick, className, innerClassName } = props;
  return (
    <Container position="end">
      <Link to="#" className={className}>
        <Navbar.Link
          className={innerClassName}
          arrowless={true}
          onClick={onClick}
        >
          Logout
        </Navbar.Link>
      </Link>
    </Container>
  );
}
function RenderLogin(props) {
  const { Container } = Navbar;
  const { className, innerClassName } = props;
  return (
    <Container position="end">
      <Link to="/login" className={className}>
        <Navbar.Link className={innerClassName} arrowless={true}>
          Log in
        </Navbar.Link>
      </Link>
      <Link to="/signup" className={className}>
        <Navbar.Link className={innerClassName} arrowless={true}>
          Sign up
        </Navbar.Link>
      </Link>
    </Container>
  );
}

class Nav extends React.Component {
  state = {
    burgerActive: false,
    loggedIn: false,
    token: null,
  };
  onBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive });
  };
  turnBurgerOff = () => {
    this.setState({ burgerActive: false });
  };
  logOut = async (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    this.turnBurgerOff.bind(this)();
    this.props.history.push("/login");
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.setState({ loggedIn: true, token: token });
  }
  componentDidUpdate() {}
  render() {
    const { Container, Brand, Burger, Menu } = Navbar;
    const { burgerActive } = this.state;
    return (
      <>
        <Navbar color="primary">
          <Brand>
            <Link className="navbar-item roastme" to="/">
              Roast me!
            </Link>
            <Burger
              onClick={this.onBurgerClick.bind(this)}
              className={`${burgerActive && "is-active"}`}
            ></Burger>
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
              onClick={this.logOut.bind(this)}
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
                innerClassName="navbar-item is-dark is-dropdown-item"
                onClick={this.logOut.bind(this)}
              />
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

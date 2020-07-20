import React from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar className="is-primary has-text-black">
          <Navbar.Container position="end">
            <Navbar.Item href="/">
              <h2>Roast me!</h2>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item renderAs="div" href="#">
                <Link className="nav-link has-text-black" to="/">
                  Home
                </Link>
              </Navbar.Item>

              <Navbar.Item renderAs="div" href="#">
                <Link className="nav-link has-text-black" to="/cookbook">
                  Cookbook
                </Link>
              </Navbar.Item>

              <Navbar.Item renderAs="div" href="#">
                <Link className="nav-link has-text-black" to="/dashboard">
                  Dashboard
                </Link>
              </Navbar.Item>

              <Navbar.Item renderAs="div" href="#">
                <Link className="nav-link has-text-black" to="/profile">
                  Profile
                </Link>
              </Navbar.Item>

              <Navbar.Item renderAs="div" href="#">
                <div>
                  <p>
                    <Link className="nav-link has-text-black" to="/login">
                      Log in
                    </Link>
                  </p>
                  <p>
                    <Link className="nav-link has-text-black" to="/signup">
                      Sign up
                    </Link>
                  </p>
                </div>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

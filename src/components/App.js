import React from "react";
import { Route, Switch } from "react-router-dom";

import aha from "./test";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cookbook from "./Cookbook";
import Recipe from "./Recipe";
import NewRecipe from "./NewRecipe";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Navbar from "../shared/Nav";
import User from "./user";
import "react-bulma-components/dist/react-bulma-components.min.css";
export default class App extends React.Component {
  state = {
    loggedIn: false,
    token: null,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.setState({ loggedIn: true, token: token });
  }
  componentDidUpdate() {
    console.log(this.state.loggedIn, this.state.token);
  }
  render() {
    this.state?.loggedIn && console.log("logged in!");
    this.state?.loggedIn || console.log("logged out!");
    return (
      <>
        <Navbar token={this.state.token} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/test" component={aha} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cookbook" component={Cookbook} />
          <Route exact path="/recipe/new" component={NewRecipe} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user/:id" component={User} />
        </Switch>
      </>
    );
  }
}

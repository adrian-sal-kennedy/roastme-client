import React from "react";
import { Route, Switch } from "react-router-dom";

import aha from "./test";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cookbook from "./cookbook";
import Recipe from "./recipe";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Navbar from "../shared/Nav";
import User from "./user";
import "react-bulma-components/dist/react-bulma-components.min.css";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/test" component={aha} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cookbook" component={Cookbook} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user/:id" component={User} />
        </Switch>
      </>
    );
  }
}

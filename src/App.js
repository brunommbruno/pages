import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;

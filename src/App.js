import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp/SignUp";
import Reservation from "./Components/Reservation";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Switch>
            <Route exact path="/">
              <Nav />
              <Home />
            </Route>
            <Route exact path="/sign-up">
              <Nav />
              <SignUp />
            </Route>
            <Route exact path="/reservation">
              <Reservation />
            </Route>
          </Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;

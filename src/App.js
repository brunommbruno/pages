import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Nav />
          <Switch></Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;

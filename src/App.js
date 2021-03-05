import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <>
          <Switch></Switch>
        </>
      </HashRouter>
    );
  }
}

export default App;

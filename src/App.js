import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/layouts/Dashboard";
import CreateTransaction from "./components/layouts/CreateTransaction";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/create" component={CreateTransaction}></Route>
            <Route path="/update/:id" component={CreateTransaction}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

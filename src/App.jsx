import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";

import "normalize.css";
import "./App.less";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

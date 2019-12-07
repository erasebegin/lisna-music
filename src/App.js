import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FreeStuff from "./components/FreeStuff";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/free-stuff" component={FreeStuff} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

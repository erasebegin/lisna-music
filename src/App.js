import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Samples from "./components/Samples";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/samples" component={Samples} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

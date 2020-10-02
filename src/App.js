import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./view/Home";
import Add from "./view/page/Add";
import Edit from "./view/page/Edit";
import TableData from "./view/components/TableData";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/delete"></Route>
          <Route path="/">
            <TableData />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

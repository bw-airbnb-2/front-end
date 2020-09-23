//packages
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//material UI
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

//components
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import { PrivateRoute } from './Components/PrivateRoute';
import NavBar from './Components/NavBar';

function App() {

  return (
    <Router>
      <div >
        <NavBar />
        <Switch>
          <Route path="/log-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

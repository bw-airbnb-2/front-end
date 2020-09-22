//packages
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

//components
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";

//material UI
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function App() {
  let history = useHistory();

  return (
    <Router>
      <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              UpPrice
            </Typography>
            <Button color="inherit">
              <Link to="/log-in">Log in</Link>
            </Button>
            <Button color="inherit">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
            <Button color="inherit">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </Toolbar>
        </AppBar>
        {/* <header>
          <nav>
          </nav>
        </header> */}
        <Switch>
          <Route path="/log-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

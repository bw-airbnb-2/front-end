import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function NavBar() {
  let history = useHistory();

  const logOut = () => {
    localStorage.setItem("token", "");
    console.log(history);
    history.push('/log-in');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">UpPrice</Typography>
        <Button color="inherit">
          <Link to="/log-in">Log in</Link>
        </Button>
        <Button color="inherit">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
        <Button color="inherit">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
        <Button onClick={() => logOut()} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

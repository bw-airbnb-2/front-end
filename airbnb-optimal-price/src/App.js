//packages
import React, { useState } from "react";
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
import User from './Components/SignUp/User'

//material UI
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function App() {
  let history = useHistory();
  const [userList, setUserList] = useState([
    {
      name: 'James',
      email: 'sunkist@gmail.com',
      phone: '9097894567',
      password: '123456789',
    }
  ])

  // this function ONLY for SignUp
  const addUserList = (userInfo) => {

      setUserList([...userList, userInfo])

  }

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
            <SignUp addUserList={addUserList}/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path='/user-list'>
            {
              userList.map( (eachUser) => {

                return <User key={eachUser.id} user={eachUser} />

              })
            }
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

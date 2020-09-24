//packages
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//components
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import User from './Components/SignUp/User'
import { PrivateRoute } from './Components/PrivateRoute';
import NavBar from './Components/NavBar';

//redux
import { connect } from 'react-redux';

//actions
//material UI
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function App() {

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
        <NavBar />
        <Switch>
          <Route path="/log-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp addUserList={addUserList}/>
          </Route>
          <Route path='/user-list'>
            {
              userList.map( (eachUser) => {

                return <User key={eachUser.id} user={eachUser} />

              })
            }
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

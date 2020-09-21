//packages
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
    <div>
      <header>
        <nav>
          <Link to='/log-in'>Log in</Link>
          <Link to='/sign-up'>Sign Up</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/log-in'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

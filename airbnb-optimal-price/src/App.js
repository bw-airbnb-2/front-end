import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to='/log-in'>Log in</Link>
          <Link to='/sign-up'>Sign Up</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

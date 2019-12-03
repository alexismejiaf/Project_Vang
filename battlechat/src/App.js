import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import login from './components/login/login';
import signup from './components/signup/signup';
//import routes from '/.routes';

function App() {
  return (

    <Router>
          <div>
            <Route exact path="/" component={login}></Route>
            <Route exact path="/SignUp" component={signup}></Route>

          </div>
    </Router>



  );
}

export default App;

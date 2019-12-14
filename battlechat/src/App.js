import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import login from './components/login/login';
import signup from './components/signup/signup';
//import routes from '/.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAUKHmmzRQhpH78dkgLN4vkttPaBlcuDuM",
  authDomain: "battlechat-33023.firebaseapp.com",
  databaseURL: "https://battlechat-33023.firebaseio.com",
  projectId: "battlechat-33023",
  storageBucket: "battlechat-33023.appspot.com",
  messagingSenderId: "154606618801",
  appId: "1:154606618801:web:07c09c667819573c86fa90",
  measurementId: "G-0VB69STL5Z"
};
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


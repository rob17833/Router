import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/index';
import History from './History/index';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <li><NavLink activeClassName="active" exact to="/">Acceuil</NavLink></li>
        <li><NavLink activeClassName="active" to="/notre-histoire">History</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/notre-histoire" component={History}/>
      </Switch>
    </div> 


  );
}

export default App;

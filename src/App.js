import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Start from './Start';

import './App.css';
import './css/style.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/start" component={Start}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;

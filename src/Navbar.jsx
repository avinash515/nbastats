import React, { Component } from 'react';
import './css/style.css';

class Navbar extends Component {
  render(){
    return (
      <header id="header">
      <div className="container">

      <div id="logo" className="pull-left">
        <h1><a href="/">1 V 1</a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a href="/">Home</a></li>
          <li><a href="/start">Start</a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default Navbar;
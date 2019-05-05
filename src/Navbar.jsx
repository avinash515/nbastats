import React, { Component } from 'react';
import './css/style.css';

class Navbar extends Component {

  componentDidMount(){
    var path = window.location.pathname;
      if (path.includes('/start')) {
        if (document.getElementById('start')) {
          document.getElementById('start').classList.toggle('menu-active')
        }
      }
      else if(path.includes('/tools')){
        if (document.getElementById('tools')) {
          document.getElementById('tools').classList.toggle('menu-active')
        }
      }
      else {
        if (document.getElementById('home')) {
          document.getElementById('home').classList.toggle('menu-active')
        }
      }
  }

  render(){
    return (
      <header id="header">
      <div className="container">

      <div id="logo" className="pull-left">
        <h1><a href="/">1 V 1</a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu" id="home"><a href="/">Home</a></li>
          <li className="menu" id="start"><a href="/start">Start</a></li>
          <li className="menu" id="tools"><a href="/tools">Tools</a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default Navbar;
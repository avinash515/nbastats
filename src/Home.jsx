import React, { Component } from 'react';
import './css/style.css';

class Home extends Component {
  render() {
    return (
        <div id="hero">
          <div className="hero-container">
            <h1>Welcome to 1 V 1</h1>
            <h2>This is a NBA player comparison tool built on cloud computing.</h2>
            <a href="#about" className="btn-get-started">Get Started</a>
          </div>
        </div>
    );
  }
}
export default Home;

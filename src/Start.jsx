import React, { Component } from 'react';
import Select from 'react-select';
import './css/style.css';

class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: null
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="about">
      <div className="container">
        <div className="row about-container">
          <div className="col-lg-12 content order-lg-1 order-2">
            <h2 className="title">Pick Your Player</h2>
            <p>
              Select two players and compare their stats from this current season.
            </p>

          <Select name="Player 1" placeholder="Player Name" />

          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
        </div>

      </div>
    </div>
    );
  }
}
export default Start;

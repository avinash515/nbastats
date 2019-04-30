import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './css/style.css';

class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: null
    }
  }

  componentDidMount() {
    var players = [];
    axios.get("http://localhost:5000/").then(response => {
      var data = response.data;
      if (data != null){
        for(var index in data){
          players.push({value: data[index]["player"], label: data[index]["player"]});
        }
        this.setState({items: players})
      }
    });
  }

  render() {

    if(this.state.items != null){
      var playerOptions = this.state.items;
    }

    return (
      <div id="about">
      <div className="container">
        <div className="row about-container">
          <div className="col-lg-12 content">
            <h2 className="title">Pick Your Player</h2>
            <p>
              Select two players and compare their stats from this current season.
            </p>
          </div>
          <div className="col-lg-6">
            <Select name="Player 1" placeholder="Select a Player" options={playerOptions}/>
          </div>
          <div className="col-lg-6">
            <Select name="Player 2" placeholder="Select a Player" options={playerOptions}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Start;

import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import './css/style.css';

class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: null,
      player1: [],
      player2: []
    }
    this.selectPlayer1 = this.selectPlayer1.bind(this);
    this.selectPlayer2 = this.selectPlayer2.bind(this);
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

  selectPlayer1(p){
    var player = p.value;
    let url = "http://localhost:5000/?player=" + player.replace(" ", "%20");
    axios.get(url).then(response => {
      this.setState({player1: response.data});
    });
  }

  selectPlayer2(p){
    var player = p.value;
    let url = "http://localhost:5000/?player=" + player.replace(" ", "%20");
    axios.get(url).then(response => {
      this.setState({player2: response.data});
    });
  }

  render() {

    if(this.state.items != null){
      var playerOptions = this.state.items;
    }

    if(this.state.player1 != null){
      var player1 = this.state.player1;
      console.log(player1);
    }

    if(this.state.player2 != null){
      var player2 = this.state.player2;
      console.log(player2);
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
            <Select name="Player 1" placeholder="Select a Player" options={playerOptions} onChange={this.selectPlayer1}/>
          </div>
          <div className="col-lg-6">
            <Select name="Player 2" placeholder="Select a Player" options={playerOptions} onChange={this.selectPlayer2}/>
          </div>
        </div>
        <div className="card-deck">
          <div className="col-lg-6">
              { player1.map(person => <PlayerCard key={person.rk} player={person}/>) }
          </div>
          <div className="col-lg-6">
              { player2.map(person => <PlayerCard key={person.rk} player={person}/>) }
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Start;

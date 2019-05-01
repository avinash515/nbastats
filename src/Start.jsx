import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import './css/style.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
    document.getElementById("barchart").style.display = "flex";
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
    const temp = { twoplayers: -1, ptbool: null, astbool: null, trbbool: null, stlbool: null, blkbool: null}
    var player1points
    var player2points
    var player1assists
    var player2assists
    var player1rebounds
    var player2rebounds
    var player1steals
    var player2steals
    var player1blocks
    var player2blocks
    if(this.state.player1.length !== 0 && this.state.player2.length !== 0){
      // if(parseFloat(player1[0]["pts"]) > parseFloat(player2[0]["pts"])) {
      //   console.log("player1 is greater")
      // }
      temp.twoplayers = 1;
      temp.ptbool = parseFloat(player1[0]["pts"]) - parseFloat(player2[0]["pts"]);
      temp.astbool = parseFloat(player1[0]["ast"]) - parseFloat(player2[0]["ast"]);
      temp.trbbool = parseFloat(player1[0]["trb"]) - parseFloat(player2[0]["trb"]);
      temp.stlbool = parseFloat(player1[0]["stl"]) - parseFloat(player2[0]["stl"]);
      temp.blkbool = parseFloat(player1[0]["blk"]) - parseFloat(player2[0]["blk"]);
      player1points = parseFloat(player1[0]["pts"])
      player2points = parseFloat(player2[0]["pts"])
      player1assists = parseFloat(player1[0]["ast"])
      player2assists = parseFloat(player2[0]["ast"])
      player1rebounds = parseFloat(player1[0]["trb"])
      player2rebounds = parseFloat(player2[0]["trb"])
      player1steals = parseFloat(player1[0]["stl"])
      player2steals = parseFloat(player2[0]["stl"])
      player1blocks = parseFloat(player1[0]["blk"])
      player2blocks = parseFloat(player2[0]["blk"])
    }
    const temp2 = { twoplayers: temp.twoplayers, ptbool: -temp.ptbool, astbool: -temp.astbool, trbbool: -temp.trbbool, stlbool: -temp.stlbool, blkbool: -temp.blkbool}

    const data = [
      {
        name: 'Points', Player1: player1points, Player2: player2points,
      },
      {
        name: 'Assists', Player1: player1assists, Player2: player2assists,
      },
      {
        name: 'Rebounds', Player1: player1rebounds, Player2: player2rebounds,
      },
      {
        name: 'Steals', Player1: player1steals, Player2: player2steals,
      },
      {
        name: 'Blocks', Player1: player1blocks, Player2: player2blocks,
      },
    ];





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
              { player1.map(person => <PlayerCard key={person.rk} player={person} bools={temp}/>) }
          </div>
          <div className="col-lg-6">
              { player2.map(person => <PlayerCard key={person.rk} player={person} bools={temp2}/>) }
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 col-centered" id="barchart" style={{display: "none", justifyContent: "center"}}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Player1" fill="#8884d8"  id="player1name"/>
              <Bar dataKey="Player2" fill="#82ca9d" id="player2name"/>
            </BarChart>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Start;

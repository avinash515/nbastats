import React from 'react';
import PropTypes from 'prop-types';
// import { prependOnceListener } from 'cluster';

const PlayerCard = props => {
  const { player: player = '', tm = null, pts = null, ast = null, trb = null, stl = null, blk = null } = props.player 
  const { twoplayers = false, ptbool = null, astbool = null, trbbool = null, stlbool = null, blkbool = null} = props.bools || {};

  return (
    <div className="col-lg-12" style={{marginBottom: '2.5%'}}>
      <div className="card">
          <div className="card h-10">
            {/* <img className="img-thumbnail" src={picture} alt={name}
              style={{width: '90%', height: '230px', marginTop: '5%', marginLeft: '5%', objectFit: "scale-down"}}>
            </img> */}
            <div className="card-body">
              <h4 className="card-title">
              {player}
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">
              {tm}
              </h6>
              {twoplayers === true &&
                <div>
                  <p className="card-subtitle" style={{backgroundColor: ptbool  ? "rgb(200, 244, 188)" : "rgb(244, 200, 188)", margin: 0, borderTop: "thin solid gray", borderBottom: "thin solid gray"}}><b>Points: </b>{pts}</p>
                  <p className="card-subtitle" style={{backgroundColor: astbool  ? "rgb(200, 244, 188)" : "rgb(244, 200, 188)", margin: 0, borderTop: "thin solid gray", borderBottom: "thin solid gray"}}><b>Assists: </b>{ast}</p>
                  <p className="card-subtitle" style={{backgroundColor: trbbool  ? "rgb(200, 244, 188)" : "rgb(244, 200, 188)", margin: 0, borderTop: "thin solid gray", borderBottom: "thin solid gray"}}><b>Rebounds: </b>{trb}</p>
                  <p className="card-subtitle" style={{backgroundColor: stlbool  ? "rgb(200, 244, 188)" : "rgb(244, 200, 188)", margin: 0, borderTop: "thin solid gray", borderBottom: "thin solid gray"}}><b>Steals: </b>{stl}</p>
                  <p className="card-subtitle" style={{backgroundColor: blkbool  ? "rgb(200, 244, 188)" : "rgb(244, 200, 188)", margin: 0, borderTop: "thin solid gray", borderBottom: "thin solid gray"}}><b>Blocks: </b>{blk}</p> 
                </div>
              }
              {twoplayers === false && 
                <div>
                <p className="card-subtitle" style={{margin: 0}}><b>Points: </b>{pts}</p>
                <p className="card-subtitle" style={{margin: 0}}><b>Assists: </b>{ast}</p> 
                <p className="card-subtitle" style={{margin: 0}}><b>Rebounds: </b>{trb}</p> 
                <p className="card-subtitle" style={{margin: 0}}><b>Steals: </b>{stl}</p>
                <p className="card-subtitle" style={{margin: 0}}><b>Blocks: </b>{blk}</p>
                </div>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

PlayerCard.propTypes = {
  player: PropTypes.shape({
    player: PropTypes.string.isRequired,
    tm: PropTypes.string.isRequired,
  }).isRequired
};

export default PlayerCard;

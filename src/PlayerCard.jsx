import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = props => {
  const { player: player = '', tm = null, pts = null, ast = null, trb = null, stl = null, blk = null } = props.player || {};

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
              <p className="card-subtitle"><b>Points: </b>{pts}</p>
              <p className="card-subtitle"><b>Assists: </b>{ast}</p>
              <p className="card-subtitle"><b>Rebounds: </b>{trb}</p>
              <p className="card-subtitle"><b>Steals: </b>{stl}</p>
              <p className="card-subtitle"><b>Blocks: </b>{blk}</p>
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

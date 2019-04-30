import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = props => {
  const { player: name = null, tm = null} = props.state || {};

  return (
    <div className="col-lg-6" style={{marginBottom: '2.5%'}}>
      <div className="card">
          <div className="card h-10">
            {/* <img className="img-thumbnail" src={picture} alt={name}
              style={{width: '90%', height: '230px', marginTop: '5%', marginLeft: '5%', objectFit: "scale-down"}}>
            </img> */}
            <div className="card-body">
              <h4 className="card-title"><font color="black">
              {name}
              </font></h4>
              <h6 className="card-subtitle mb-2 text-muted">
              {tm}
              </h6>
            </div>
        </div>
      </div>
    </div>
  )
}

PlayerCard.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tm: PropTypes.string.isRequired,
  }).isRequired
};

export default PlayerCard;

import React from 'react';
import PropTypes from 'prop-types';

import {Players} from '../api/players';

export default class Player extends React.Component {
  render() {
    const itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div className={ itemClassName }>
        <div className="player">
          <div>
            <h3 className="player__name">{ this.props.player.name } </h3>
            <p className="player__stats">{ this.props.player.rank } { this.props.player.position } place { this.props.player.score } points.</p>
          </div>
          <div className="player__actions">
            <button className='button button--round' onClick={ () => {this.addPoint(this.props.player._id);} }>+1</button>
            <button className='button button--round' onClick={ () => {this.removePoint(this.props.player._id);} }>-1</button>
            <button className='button button--round' onClick={() => {this.removePlayer(this.props.player._id);}}>x</button>
          </div>
        </div>
      </div>
    );
  }

  addPoint (id) {
    Players.update({
      _id: id
    }, { $inc: {
      score: 1
    }});
  }

  removePoint (id) {
    Players.update({
      _id: id
    }, { $inc: {
      score: -1
    }});
  }

  removePlayer (id) {
    Players.remove({
      _id: id
    });
  }

}

Player.propTypes = {
  player: PropTypes.object.isRequired
};

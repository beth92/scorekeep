import React from 'react';

import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
  render() {
    return (
      <div className='item'>
        <form className="form" onSubmit={ this.addPlayer.bind(this) }>
        <input className="form__input" type ="text" name="playerName" placeholder="Player name"/>
        <button className='button'>Add Player</button>
        </form>
      </div>
    );
  }

  // does not bind 'this' keyword
  addPlayer (e) {
    e.preventDefault();
    const name = e.target.playerName.value;
    if (name) {
      e.target.playerName.value = "";
      Players.insert({
        name,
        score: this.props.score
      });
    }
  }
}

AddPlayer.defaultProps = {
  score: 0
};

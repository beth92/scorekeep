import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index, arr) => {
    if (index !== 0 && arr[index - 1].score > player.score) {
      rank++;
    }
    return {
      // jshint ignore: start
      ...player,
      rank,
      position: numeral(rank).format('0o')
      // jshint ignore: end
    };
  });
};

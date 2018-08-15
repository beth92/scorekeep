import React from 'react';
import ReactDOM from 'react-dom';

// meteor imports are stored under meteor/ tp prevent conflict
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// local imports
import {Players, calculatePlayerPositions} from './../imports/api/players';
// components
import App from './../imports/ui/App';


Meteor.startup(() => {
  // automatically listens for the specified db query
  Tracker.autorun(() => {
    const players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    const title = "Score Keep";
    // babel transpiles jsx into valid JS
    ReactDOM.render(<App title= { title } players = { positionedPlayers }/>, document.getElementById('app'));
  });
});

import './main.html';
import './semantic.css'
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/startup/route';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});

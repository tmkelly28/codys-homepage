'use strict';

import React, { Component } from 'react';
import App from '../components/App';

const radioheadevents = [
  { 
    name: 'Radiohead plays at Grace Hopper'
  }
]

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pictures: [],
      favoriteToys: [{ name: 'tennis ball' }, { name: 'ducky' }],
      friends: [],
      bestFriend: 'Chris',
      bandsCodyWantsToSee: []
    };
    this.collectToyInfo = this.collectToyInfo.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    let bandName = 'Radiohead';
    Promise.resolve(radioheadevents)
      .then(events => {
        this.setState({
          bandsCodyWantsToSee: radioheadevents
        })
      });
  }

  collectToyInfo (evt) {
    this.newToy = evt.target.value;
  }

  submit () {
    this.setState(prevState => ({
      favoriteToys: [...prevState.favoriteToys, {name: this.newToy}]
    }), () => {
      this.newToy = '';
    });
  }

  render () {

    return <App favoriteToys={this.state.favoriteToys} collectToyInfo={this.collectToyInfo} submit={this.submit} bands={this.state.bandsCodyWantsToSee} />
  }
} 

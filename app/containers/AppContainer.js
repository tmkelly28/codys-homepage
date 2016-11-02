'use strict';

import React, { Component } from 'react';
import App from '../components/App';

const initialState = { favoriteThings: [] };

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;
    this.getInput = this.getInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  getInput (evt) {
    this._input = evt.target.value;
  }

  submit () {
    this.setState(prevState => ({
      favoriteThings: [...prevState.favoriteThings, {name: this._input}]
    }), () => this._input = '');
  }

  render () {
    const { state, getInput, submit } = this;
    const { favoriteThings } = state;
    console.log('!!!!')
    return (
      <App 
        favoriteThings={favoriteThings} 
        getInput={getInput} 
        submit={submit} 
      />
    )
  }
} 

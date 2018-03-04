import React, { Component } from 'react';
import './App.css';
import Key from './Key.js';
import Display from './Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {beingClicked: false};

    this.beingClicked = this.beingClicked.bind(this);
  }

  beingClicked() {
    this.setState({beingClicked: !this.state.beingClicked})
  }

  render() {
    return (
      <div>
        <Key changeDisplay={this.beingClicked}/>
        <Display displayText={this.state.beingClicked ? "clicked" : "not clicked"}/>
      </div>
    );
  }
}

export {App};

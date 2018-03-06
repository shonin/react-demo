import React, { Component } from 'react';
import './App.css';
import Key from './Key.js';
import Display from './Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {beingClicked: "none"};

    this.beingClicked = this.beingClicked.bind(this);
    this.notBeingClicked = this.notBeingClicked.bind(this);
  }

  beingClicked(color) {
    this.setState({beingClicked: color})
  }

  notBeingClicked() {
    this.setState({beingClicked: "none"})
  }

  render() {
    return (
      <div>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="red"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="orange"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="yellow"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="green"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="blue"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="indigo"/>
        <Key changeDisplay={this.beingClicked} resetDisplay={this.notBeingClicked} color="violet"/>
        <Display displayText={this.state.beingClicked}/>
      </div>
    );
  }
}

export {App};

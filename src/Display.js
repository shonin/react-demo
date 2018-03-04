import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <p>{this.props.displayText}</p>
    );
  }
}

export default Display;

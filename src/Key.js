import React, { Component } from 'react';

class Key extends Component {
  render() {
    return(
      <div
        onMouseDown={this.props.changeDisplay}
        onMouseUp={this.props.changeDisplay}
        style={{width: '200px', height: '200px', backgroundColor: 'red'}}
      />
    );
  }
}

export default Key;

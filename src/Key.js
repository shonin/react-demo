import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.triggerDisplayChange = this.triggerDisplayChange.bind(this);
  }

  triggerDisplayChange() {
    this.props.changeDisplay(this.props.color)
  }

  render() {
    return(
      <div
        onMouseDown={this.triggerDisplayChange}
        onMouseUp={this.props.resetDisplay}
        style={{
          display: 'inline-block',
          width: '50px',
          height: '200px',
          backgroundColor: this.props.color}}
      />
    );
  }
}

export default Key;

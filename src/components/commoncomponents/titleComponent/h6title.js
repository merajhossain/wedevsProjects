import React, { Component } from 'react';

class H6 extends Component {
  render() {
    return (
        <h6 className={ this.props.className  }>{this.props.headingText}</h6>
    );
  }
}

export default H6;
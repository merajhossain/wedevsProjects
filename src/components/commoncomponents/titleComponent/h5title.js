import React, { Component } from 'react';

class H5 extends Component {
  render() {
    return (
        <h5 className={ this.props.className  }>{this.props.headingText}</h5>
    );
  }
}

export default H5;

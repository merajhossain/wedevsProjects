import React, { Component } from 'react';

class H2 extends Component {
  render() {
    return (
        <h2 className={ this.props.className  }>{this.props.headingText}</h2>
    );
  }
}

export default H2;

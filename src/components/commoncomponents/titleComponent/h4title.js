import React, { Component } from 'react';

class H4 extends Component {
  render() {
    return (
        <h4 className={ this.props.className  }>{this.props.headingText}</h4>
    );
  }
}

export default H4;

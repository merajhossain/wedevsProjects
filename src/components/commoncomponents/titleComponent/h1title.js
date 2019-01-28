import React, { Component } from 'react';

class H1title extends Component {
  render() {
    return (
        <h1 className={ this.props.className  }>{this.props.headingText}</h1>
    );
  }
}

export default H1title;

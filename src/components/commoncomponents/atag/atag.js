import React, { Component } from 'react';

class ATAG extends Component {
  render() {
      
    return (
        
        <a className={ this.props.className} href={this.props.TAGurl}>{this.props.ATAGText}</a>
    );
  }
}

export default ATAG;

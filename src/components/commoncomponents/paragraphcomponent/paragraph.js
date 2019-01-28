import React, { Component } from 'react';

class Paragraph extends Component {
  render() {
      
    return (
        
        <p className={ this.props.className  }>{ this.props.paraText }</p>
    );
  }
}

export default Paragraph;

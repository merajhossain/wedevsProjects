import React, { Component } from 'react';

class Button extends Component {
  render() {
      
    return (
        
        <button className={ this.props.className  }>{this.props.buttonText}</button>
    );
  }
}

export default Button;

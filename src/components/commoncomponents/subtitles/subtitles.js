import React, { Component } from 'react';


class Subtitle extends Component {
    render() {
        return (
            <p className={this.props.leftTextClass}>{this.props.leftText} <span className={this.props.middleTextClass}>{this.props.middleText}</span> {this.props.rightText}</p>
        );
    }
}

export default Subtitle;

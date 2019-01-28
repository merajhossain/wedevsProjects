import React, { Component } from 'react';

class Cardblock extends Component {
  render() {
      
    return (

            <div className={this.props.HightLightClass} >
                <div className="card-body text-center">
                    <div className="card-img card-min-height">
                        <img src={this.props.Imagesrc} className="img-fluid"/>
                    </div>
                    <h2 className={this.props.TitleClassname}>{this.props.Title}</h2>
                    <p className={this.props.blockTextClassname}>{this.props.blockText}</p>
                </div>
            </div>
    );
  }
}

export default Cardblock;
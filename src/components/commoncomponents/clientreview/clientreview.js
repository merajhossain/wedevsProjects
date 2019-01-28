import React, { Component } from 'react';
class Clientreviewblock extends Component {
    render() {

        return (

            <div className="card p-lg-3 mb-5 box-shadow-default">
                <div className="card-body">
                    <div className="card-img mb-4 text-center">
                        <img src={this.props.src} className="rounded-circle p-sm-1 box-shadow-default" />
                    </div>
                    <p className="text-dark-gray mb-4 quationIcon">{this.props.Clientreview}</p>
                    <div className="text-center">
                        <p className="font-size-20 text-dark-gray mb-0">{this.props.ClientName}</p>
                        <p className="font-size-20 text-blue mb-0">{this.props.ClientPosition}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clientreviewblock;


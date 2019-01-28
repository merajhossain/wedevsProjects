import React, { Component } from 'react';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Asset51 from '../../components/styles/img/Asset51.svg';
import Subtitle from '../commoncomponents/subtitles/subtitles';
class Notification extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="media">
                    <div className="media-body custom-notification white-bg box-shadow-default">
                        <img src={Asset51} height="70" width="60" className="img-fluid mr-4"/>
                        <Subtitle leftTextClass="text-gray font-size-25" leftText="Trusted by" middleTextClass="text-blue-second font-size-25" middleText="3000+ Businesses" rightTextClass="" rightText="over 100 countries"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Notification;

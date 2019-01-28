
import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Button from '../commoncomponents/buttoncomponents/button';
import ATAG from '../commoncomponents/atag/atag';
import homefeaturethumb from '../../components/styles/img/homefeaturethumb.png';
import Subtitle from '../commoncomponents/subtitles/subtitles';
class Slider extends Component {
  render() {
    return (
        <section className="gradientBG">
            <div className="slider-space">
                <div className="container ">
                    <div className="row vertical-center">
                        <div className="col-lg-6 col-md-12 flex-column">
                            <div className="slider-content mt-5">
                                <div className="slider-title">
                                    <H1title className="text-white font-size-50 font-weight-900" headingText="Supercharge your growing business"/>
                                </div>
                                <div className="mb-4 mt-3">
                                    <Subtitle leftTextClass="font-size-35 text-blue-third" leftText="from your" middleTextClass="text-blue-second font-size-35" middleText="WordPress" rightTextClass="" rightText="dashboard"/>
                                </div>
                                <div>
                                    <Paragraph className="text-blue-third font-size-18" paraText="WP ERP optimizes your small to medium businesses with powerful HR Manager, CRM & Accounting – Unlock more with 20+ extensions & Project Management module. "/>  
                                </div>
                                <div className="siler-buttons mt-5">
                                    <Button className="btn custom-success-btn-icon mr-3 box-shadow" buttonText="Download Free"/>  
                                    <Button className="btn custom-primary-btn-icon mr-3 box-shadow" buttonText="Demo"/> 
                                    <ATAG className="btn mr-3 color-white" ATAGText="Documentation" TAGurl="#"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 flex-column">
                            <div className="slider-bg-image">
                                <div className="slider-img">
                                    <img src={homefeaturethumb} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Slider;
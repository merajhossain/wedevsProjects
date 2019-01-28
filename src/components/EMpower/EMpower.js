import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Button from '../commoncomponents/buttoncomponents/button';
import Accordion from '../commoncomponents/accordion/accordion';
import CRM from '../../components/styles/img/crm.png';
class EMpower extends Component {
  render() {
    return (
        <section className="sec-space">
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-details-content mt-5">
                            <H1title className="text-dark mb-3" headingText="Every Customer is Important in CRM"/>
                            <Paragraph className="text-green" paraText="We make it the simplest! Not only you get happy customers, create loyal and a potential fan base with your hospitality."/>
                            <div id="EmpowerHrm" className="mt-5">
                                <Accordion daraParent="#EmpowerHrm" dataTarget="#collapseSeven" Iconclass="fa fa-database" Iconballclass="iconBall-one mr-3" className="collapse show" Id="collapseSeven" Titletext="Take it Step by Step" AccordionText="Schedule your meetings and keep notes, hints on all communications for a better service with email alerts. With the individual logging, check your progress and assess how your..." />
                                <Accordion daraParent="#EmpowerHrm" dataTarget="#collapseEight" Iconclass="fa fa-eye" Iconballclass="iconBall-second mr-3" className="collapse" Id="collapseEight" Titletext="Prepare for Follow Ups" AccordionText="Prepare for Follow Ups" AccordionText="Schedule your meetings and keep notes, hints on all communications for a better service with email alerts. With the individual logging, check your progress and assess how your..." />
                                <Accordion daraParent="#EmpowerHrm" dataTarget="#collapseNIne" Iconclass="fa fa-bars" Iconballclass="iconBall-third mr-3" className="collapse" Id="collapseNIne" Titletext="Build Relationships with Companies" AccordionText="Build Relationships with Companies" AccordionText="Schedule your meetings and keep notes, hints on all communications for a better service with email alerts. With the individual logging, check your progress and assess how your..." />
                            </div>
                            <Button className="btn custom-btn-info margin-top-lg mb-5" buttonText="View Details" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <div className="product-screen-short right-line-cross-image box-shadow-default">
                            <img src={CRM} className="img-fluid"/>
                            <div className="product-screen-short-icon-left">
                                <span className="pulseblue gradientBG font-size-45 text-center pt-1"><i className="fa fa-handshake-o text-white p-lg-2"></i></span>
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

export default EMpower;

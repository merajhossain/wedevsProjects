import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Button from '../commoncomponents/buttoncomponents/button';
import Accordion from '../commoncomponents/accordion/accordion';
import HRMIllustration from '../../components/styles/img/HRMIllustration1.png';

class HRMmanagement extends Component {
    render() {
        return (
            <section className="sec-space greenBg">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-screen-short left-line-cross-image box-shadow-default">
                                    <img src={HRMIllustration} className="img-fluid" />
                                    <div className="product-screen-short-icon-right">
                                        <span className="pulsegreen gradientGreen font-size-45 text-center pt-1"><i className="fa fa-handshake-o text-white p-lg-2"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div className="product-details-content mt-5">
                                    <H1title className="text-dark mb-3" headingText="Empower your workforce with HRM" />
                                    <Paragraph className="text-green" paraText="Individual profiles and work logs for each employee allow you to manage their payrolls, emphasis workload, promotion and leave – everything can be monitored and managed online with absolute clarity." />
                                    <div id="Empoweraccordion" className="mt-2">
                                        <Accordion daraParent="#Empoweraccordion" dataTarget="#collapseOne" Iconclass="fa fa-database" Iconballclass="iconBall-one mr-3" className="collapse show" Id="collapseOne" Titletext="Evolving Database" AccordionText="Track / Import employee attendances and manage their leaves. Make important announcements when you need everyone to is heard." />
                                        <Accordion daraParent="#Empoweraccordion" dataTarget="#collapseTwo" Iconclass="fa fa-eye" Iconballclass="iconBall-second mr-3" className="collapse" Id="collapseTwo" Titletext="Keep a Keen Eye" AccordionText="Track / Import employee attendances and manage their leaves. Make important announcements when you need everyone to is heard." />
                                        <Accordion daraParent="#Empoweraccordion" dataTarget="#collapseThree" Iconclass="fa fa-bars" Iconballclass="iconBall-third mr-3" className="collapse" Id="collapseThree" Titletext="Get Organized in a Flip" AccordionText="Track / Import employee attendances and manage their leaves. Make important announcements when you need everyone to is heard." />
                                    </div>
                                    <Button className="btn custom-btn-success margin-top-lg" buttonText="View Details" />
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HRMmanagement;

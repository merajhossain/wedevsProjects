import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Button from '../commoncomponents/buttoncomponents/button';
import Accordion from '../commoncomponents/accordion/accordion';
import Management from '../../components/styles/img/projectmanagement.png';
class Managementsystem extends Component {
    render() {
        return (
            <section className="sec-space">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="product-details-content mt-5">
                                    <H1title className="text-dark mb-3" headingText="Integrated Project Management System" />
                                    <Paragraph className="text-green" paraText="No need to use expensive solutions like Basecamp or any other task and project management system. We got you covered with everything that you might need." />
                                    <div id="Managementsystem" className="mt-5">
                                    <Accordion daraParent="#Managementsystem" dataTarget="#collapseFour" Iconclass="fa fa-database" Iconballclass="iconBall-one mr-3" className="collapse" Id="collapseFour" Titletext="Birds Eye View with Calendar" AccordionText="Set message, to-do list, to-do and milestones as private if you don’t want them to see by certain user levels." />
                                    <Accordion daraParent="#Managementsystem" dataTarget="#collapseFive" Iconclass="fa fa-eye" Iconballclass="iconBall-second mr-3" className="collapse show" Id="collapseFive" Titletext="Privacy in Everything" AccordionText="Set message, to-do list, to-do and milestones as private if you don’t want them to see by certain user levels." />
                                    <Accordion daraParent="#Managementsystem" dataTarget="#collapseSix" Iconclass="fa fa-bars" Iconballclass="iconBall-third mr-3" className="collapse" Id="collapseSix" Titletext="Totally synced with ERP" AccordionText="Set message, to-do list, to-do and milestones as private if you don’t want them to see by certain user levels." />
                                    </div>
                                    <Button className="btn custom-btn-info margin-top-lg mb-5" buttonText="View Details" />
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <div className="product-screen-short right-line-cross-image box-shadow-default">
                                    <img src={Management} className="img-fluid" />
                                    <div className="product-screen-short-icon-left">
                                        <span className="pulseDarkBlue gradientPurpal font-size-45 text-center pt-1"><i className="fa fa-line-chart text-white p-lg-2"></i></span>
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

export default Managementsystem;

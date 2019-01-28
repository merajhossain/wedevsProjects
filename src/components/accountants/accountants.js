import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Button from '../commoncomponents/buttoncomponents/button';
import Accordion from '../commoncomponents/accordion/accordion';
import Accounting from '../../components/styles/img/accounting.png';

class Accounttants extends Component {
    render() {
        return (
            <section className="sec-space bgRed">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                                <div className="product-screen-short left-line-cross-image box-shadow-default">
                                    <img src={Accounting} className="img-fluid" />
                                    <div className="product-screen-short-icon-right">
                                        <span className="pulseorange gradientOrange font-size-45 text-center pt-2"><i className="fa fa-calculator text-white p-lg-2"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div className="product-details-content mt-5">
                                    <H1title className="text-dark mb-3" headingText="Get Balanced with Accounting" />
                                    <Paragraph className="text-green" paraText="Take total control of your company’s finances in real time with the Accounting module. You can generate live and detailed reports and make transactions, generate invoices and pay employees." />
                                    <div id="Accountingaccordion" className="mt-5">
                                        <Accordion daraParent="#Accountingaccordion" dataTarget="#collapseTen" Iconclass="fa fa-database" Iconballclass="iconBall-one mr-3" className="collapse show" Id="collapseTen" Titletext="Speedy Stats" AccordionText="Customers, vendors or suppliers – create invoices, make and take payments from your every client and see the data react with your finances instantly. All your transactions are easy to read, logged and secure with our solution." />
                                        <Accordion daraParent="#Accountingaccordion" dataTarget="#collapseEleven" Iconclass="fa fa-eye" Iconballclass="iconBall-second mr-3" className="collapse" Id="collapseEleven" Titletext="Make Payments Easy" AccordionText="Prepare for Follow Ups" AccordionText="Customers, vendors or suppliers – create invoices, make and take payments from your every client and see the data react with your finances instantly. All your transactions are easy to read, logged and secure with our solution." />
                                        <Accordion daraParent="#Accountingaccordion" dataTarget="#collapseTwelve" Iconclass="fa fa-bars" Iconballclass="iconBall-third mr-3" className="collapse" Id="collapseTwelve" Titletext="Many Reports" AccordionText="Build Relationships with Companies" AccordionText="Customers, vendors or suppliers – create invoices, make and take payments from your every client and see the data react with your finances instantly. All your transactions are easy to read, logged and secure with our solution." />
                                    </div>
                                    <Button className="btn custom-btn-danger margin-top-lg" buttonText="View Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Accounttants;

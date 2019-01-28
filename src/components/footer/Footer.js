import React, { Component } from 'react';
import H2title from '../commoncomponents/titleComponent/h2title';
import Newsletter from '../commoncomponents/newsletter/newsletter'
import Paragraph from '../commoncomponents/paragraphcomponent/paragraph';
import Footermenu from '../commoncomponents/footermenu/footermenu';
class Footer extends Component {
    render() {
     
            var ERP = [{id: 1, title: 'About'},{id: 2, title: 'Pricing'}, {id: 3, title: 'Partners'}, {id: 4, title: 'Refund Policy'}, {id: 5, title: 'Support Policy'} ];
            var Product = [{id: 6, title: 'Request A Demo'},{id: 7, title: 'HRM'}, {id: 8, title: 'CRM'}, {id: 9, title: 'Accounting'}, {id: 10, title: 'Project Management'} ];
            var Resources = [{id: 11, title: 'Documentation'},{id: 12, title: 'Discussion Forum'}, {id: 13, title: 'Terms of Service'}, {id: 14, title: 'Translate Extension'}, {id: 15, title: 'FAQ'} ];
        
        /*var ERP = ['About', 'Pricing', 'Partners', 'Refund Policy', 'Support Policy'];
        var Product = ['Request A Demo', 'HRM', 'CRM', 'Accounting', 'Project Management'];
        var Resources = ['Documentation', 'Discussion Forum', 'Terms of Service', 'Translate Extension', 'FAQ'];*/
        return (
            <footer className="">
                <div className="container-fluid sec-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <H2title className="font-size-22 mb-4" headingText="WP ERP" />
                                <Footermenu Menuitem={ERP}/>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <H2title className="font-size-22 mb-4" headingText="Products" />
                                <Footermenu Menuitem={Product}/>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <H2title className="font-size-22 mb-4" headingText="Resources" />
                                <Footermenu Menuitem={Resources}/>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <H2title className="font-size-22 mb-4" headingText="Newsletter" />
                                <Newsletter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid grayBg p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <ul className="nav social-nav">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <Paragraph className="copyRightText font-size-15 text-dark-gray" paraText="2016 WP ERP. Built by the folks at weDevs." />
                             </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

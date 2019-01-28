import React, { Component } from 'react';
import Clientreviewblock from '../commoncomponents/clientreview/clientreview';
import H1title from '../commoncomponents/titleComponent/h1title';
import Button from '../commoncomponents/buttoncomponents/button';
import Client1 from '../../components/styles/img/client-1.png';
import Client2 from '../../components/styles/img/client-2.png';
import Client3 from '../../components/styles/img/client-3.png';

export class Clientreview extends Component {
    render() {
        return (
            <section className="sec-space grayBg">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <H1title classNameName="text-dark font-size-35 text-center" headingText="Reviews by our clients"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Clientreviewblock alt="" src={Client1} ClientName="Toma Fong" ClientPosition="CEO" Clientreview="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply."/>
                            </div>
                            <div className="col-md-4">
                                <Clientreviewblock alt="" src={Client2} ClientName="Toma Fong" ClientPosition="CEO" Clientreview="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply."/>
                            </div>
                            <div className="col-md-4">
                                <Clientreviewblock alt="" src={Client3} ClientName="Toma Fong" ClientPosition="CEO" Clientreview="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center mt-lg-3">
                                <Button className="btn btn-primary mt-lg-3" buttonText="Read All The Testimonials"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clientreview;
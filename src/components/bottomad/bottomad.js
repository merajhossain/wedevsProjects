import React, { Component } from 'react';
import H1title from '../commoncomponents/titleComponent/h1title';
import Button from '../commoncomponents/buttoncomponents/button';
import Rocket from '../../components/styles/img/rocket-icon.png';
import bottomAdbg from '../../components/styles/img/BottomCTABG1.svg';
import Subtitle from '../commoncomponents/subtitles/subtitles';
class Bottomad extends Component {
    render() {
        return (
            <section className="gradientBlue">
                <div className="rocket-icon-wrapper">
                    <div className="rocket-icon text-center vertical-center pulseWhite">
                        <img src={Rocket} />
                    </div>
                </div>
                <div className="container-fluid bottom-ad-section sec-space" style={{ backgroundImage: "url(" + bottomAdbg + ")" }}>
                    <div className="container">
                        <div className="col-md-12 p-lg-3">
                            <div className="text-center pt-5">
                                <H1title className="text-white font-size-50 font-weight-900" headingText="Supercharge your growing business" />
                                <div className="mb-5 mt-4">
                                <Subtitle leftTextClass="font-size-35 text-blue-third" leftText="from your" middleTextClass="text-blue-second font-size-35" middleText="WordPress" rightTextClass="" rightText="dashboard"/>
                                </div>
                                <div className="mb-4 mt-4">
                                    <Button className="btn custom-btn-default" buttonText="Get Started Free" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Bottomad;

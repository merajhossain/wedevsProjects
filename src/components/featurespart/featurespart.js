import React, { Component } from 'react';
import Cardblock from '../commoncomponents/cardblock/cardblock';
import OpenSource1 from '../../components/styles/img/OpenSource1.png';
import FeatureFilledModules1 from '../../components/styles/img/FeatureFilledModules1.png'
import SupportandDocs1 from '../../components/styles/img/SupportandDocs1.png'
class Features extends Component {
  render() {
    return (
        <section className="sec-space">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Cardblock Title="Open Source" Imagesrc={OpenSource1} HightLightClass="card mb-5" TitleClassname="mb-3" blockTextClassname="text-gray" blockText="The Core plugin and HR, CR modules are absolutely free to use, free to customize and you can add enhancements depending on your ideas and needs."/>
                        </div>
                        <div className="col-md-4">
                            <Cardblock Title="Feature Filled Modules" Imagesrc={FeatureFilledModules1} HightLightClass="card mb-5 gradientBG box-shadow-blue" TitleClassname="mb-3 text-white" blockTextClassname="text-white" blockText="Modules are designed to take your business to the next level. If you have a small business, this is ideal for keeping your budget tight but yet get professional results."/>
                        </div>
                        <div className="col-md-4">
                        <Cardblock Title="Support and Docs" Imagesrc={SupportandDocs1} HightLightClass="card mb-5" TitleClassname="mb-3" blockTextClassname="text-gray" blockText="The Core plugin and HR, CR modules are absolutely free to use, free to customize and you can add enhancements depending on your ideas and needs."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Features;
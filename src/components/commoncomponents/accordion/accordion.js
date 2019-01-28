import React, { Component } from 'react';

class Accordion extends Component {
    render() {
        return (
            //Iconclass="fa fa-database" Iconcolor="iconBall-one" Id="Empower1" Titletext="Evolving Database" AccordionText="Track / Import employee attendances and manage their leaves. Make important announcements when you need everyone to is heard."

            
                <div className="card mb-2">
                    <div className="card-header custom-card-header" id="headingOne">
                        <h3 className="mb-0 float-left" href="#" data-toggle="collapse" data-target={this.props.dataTarget} aria-expanded="true" aria-controls="headingtwo">
                            <span className="collapsed" data-toggle="collapse" data-target={this.props.dataTarget} aria-expanded="false" aria-controls="collapseTwo">
                                <span className={this.props.Iconballclass}><i className={this.props.Iconclass}></i> </span><span className="font-size-20">{this.props.Titletext}</span>
                            </span>
                        </h3>
                    </div>

                    <div id={this.props.Id} className={this.props.className} aria-labelledby="headingtwo" data-parent={this.props.daraParent}>
                        <div className="card-body custom-card-body">
                            {this.props.AccordionText}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Accordion;


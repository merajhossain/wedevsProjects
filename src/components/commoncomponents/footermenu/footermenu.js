import React, { Component } from 'react';


class Footermenu extends Component {
    render() {
        const { Menuitem } = this.props;
        const menuList = Menuitem.map(name => {
            return (
                <li><a href="#">{ name.title }</a></li>
            )
        })
        return (
            <ul className="nav widget-nav">
                {menuList}
            </ul>
        );
    }
}

export default Footermenu;

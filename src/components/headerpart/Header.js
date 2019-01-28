import React, { Component } from 'react';
import wperpWhiteLogo from '../../components/styles/img/wperpwhitelogo.svg';
class Header extends Component {
  render() {
    
    return (
        <header className="top-menu-wrapper">
            <div className="container">
                <nav className="navbar navbar-expand-lg top-menu">
                <a className="navbar-brand" href="index.html"><img src={wperpWhiteLogo} alt="logo" className="logo" name="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">
                                    Modules
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">
                                    Extensions
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Docs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Forum</a>
                                </li>
                            </ul>
                            <button className="btn custom-outline-btn no-bg mr-3">Join Free</button>
                            <button className="btn custom-btn-default">Sign In</button>
                        </div>
                    </nav>
            </div>
        </header>
    );
  }
}

export default Header;

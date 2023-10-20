import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import headLogo from '../../assets/images/logo.jpeg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo-box">
                        <div onClick={() => navigate('/')}>
                            <img src={headLogo} className="head-logo" />
                        </div>
                    </div>
                    <div className="nav-top">
                        <input className="side-menu" type="checkbox" id="side-menu" />
                        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
                        <nav className="nav">
                            <ul className="menu">
                                <li>
                                    <Link to="/" className="link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="link">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/services" className="link">Services</Link>
                                </li>
                                <li>
                                    <Link to="/projects" className="link">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/teams" className="link">Teams</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="link">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
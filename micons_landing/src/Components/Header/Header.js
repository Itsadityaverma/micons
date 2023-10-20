import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import headLogo from '../../assets/images/logo.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Header = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={isScrolled ? 'header scrolled' : 'header'}>
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
                                    <AnchorLink href="#home" className="link">Home</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#about-us" className="link">About Us</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#our-services" className="link">Services</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#our-projects" className="link">Projects</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#our-teams" className="link">Teams</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#contact-us" className="link">Contact Us</AnchorLink>
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
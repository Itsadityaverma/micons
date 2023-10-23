import React from "react";
import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import Teams from "../Components/Teams/Teams";
import ContactUs from "../Components/ContactUs/ContactUs";
import whatsappBtn from "../../src/assets/images/whatsappGreen.png";

const LandingPage = () => {

    return (
        <div className="home-wrap">
            <div className="main-wrapper">
                <Header />
                <div className="content-wrapper">
                    <Home />
                    <AboutUs />
                    <Services />
                    <Projects />
                    <Teams />
                    <ContactUs />
                    <div className="app-btn">
                        <h3>Any Query ?</h3>
                        <a href="https://api.whatsapp.com/send?phone=919997479054&text=Hi%20Achintya" target="_blank">
                            <img src={whatsappBtn} alt="whatsapp icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
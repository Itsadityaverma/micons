import React from "react";
import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import Teams from "../Components/Teams/Teams";
import ContactUs from "../Components/ContactUs/ContactUs";

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
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
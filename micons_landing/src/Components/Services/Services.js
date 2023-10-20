import React from "react";
import serviceOne from "../../assets/images/service1.png";
import serviceTwo from "../../assets/images/service2.png";
import serviceThree from "../../assets/images/service3.png";
import serviceFour from "../../assets/images/service3.png";
import serviceImg1 from "../../assets/images/about.jpg";
import serviceImg2 from "../../assets/images/serviceCard2.jpg";
import serviceImg3 from "../../assets/images/serviceCard3.jpg";
import serviceImg4 from "../../assets/images/serviceCard4.jpg";


const Services = () => {
    return (
        <div id="our-services">
            <div className="service-wrap bg-white">
                <div className="sec-space text-center">
                    <div className="container">
                        <h1 className="heading-title">Our Services</h1>
                        <div className="row">
                            <div className="col-12 col-md-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img className="icons" src={serviceOne} alt="serviceImage" />
                                <h3 className="icon-title">Architecture services</h3>
                            </div>
                            <div className="col-12 col-md-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img className="icons" src={serviceTwo} alt="serviceImage" />
                                <h3 className="icon-title">Construction services</h3>
                            </div>
                            <div className="col-12 col-md-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img className="icons" src={serviceThree} alt="serviceImage" />
                                <h3 className="icon-title">Project management services</h3>
                            </div>
                            <div className="col-12 col-md-3" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img className="icons" src={serviceFour} alt="serviceImage" />
                                <h3 className="icon-title">Real Estate</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="make-box">
                    <div className="container-fluid">
                        <div className="col-md-11 m-auto pos-rel">
                            <div className="make-bg">
                                <div className="col-md-10 m-auto">
                                    <h4 className="heading-title">what we make</h4>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-xl-3 pos-box" data-aos="fade-up"
                                            data-aos-duration="2000">
                                            <div className="card-grp g1">
                                                <div className="card">
                                                    <img src={serviceImg1} alt="serviceImage" />
                                                    <div className="card-body">
                                                        <h5 className="card-text">Architecture services</h5>
                                                        <ul>
                                                            <li>Design</li>
                                                            <li>Planning</li>
                                                            <li> Elevations</li>
                                                            <li> MEP</li>
                                                            <li> 3D Rendering</li>
                                                            <li> Interior</li>
                                                            <li> Structural design</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3 pos-box" data-aos="fade-up"
                                            data-aos-duration="2000" data-aos-delay="100">
                                            <div className="card-grp g2">
                                                <div className="card">
                                                    <img src={serviceImg2} alt="serviceImage" />
                                                    <div className="card-body">
                                                        <h5 className="card-text">Construction Services</h5>
                                                        <ul>
                                                            <li>Residential building</li>
                                                            <li>construction</li>
                                                            <li>Commercial building cons</li>
                                                            <li>Government contracts</li>
                                                            <li>Industrial building cons</li>
                                                            <li>Bill auditing</li>
                                                            <li>Material reconciliation</li>
                                                            <li>Renovation work</li>
                                                            <li>Interior work</li>
                                                            <li>Road</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3 pos-box" data-aos="fade-up"
                                            data-aos-duration="2000" data-aos-delay="200">
                                            <div className="card-grp g3">
                                                <div className="card">
                                                    <img src={serviceImg3} alt="serviceImage" />
                                                    <div className="card-body">
                                                        <h5 className="card-text">Project Management Services</h5>
                                                        <ul>
                                                            <li>Site visit</li>
                                                            <li>Material management</li>
                                                            <li>Tender preapration</li>
                                                            <li>Labour management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3 pos-box" data-aos="fade-up"
                                            data-aos-duration="2000" data-aos-delay="300">
                                            <div className="card-grp g4">
                                                <div className="card">
                                                    <img src={serviceImg4} alt="serviceImage" />
                                                    <div className="card-body">
                                                        <h5 className="card-text">Real Estate</h5>
                                                        <ul>
                                                            <li>Residental Plots</li>
                                                            <li>Commerical Plots</li>
                                                            <li>Agriculture Land</li>
                                                            <li>Duplex</li>
                                                            <li>Flats</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
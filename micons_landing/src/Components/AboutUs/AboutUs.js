import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import visionImg from "../../assets/images/vision.jpg";

const AboutUs = () => {
    return (
        <div id="about-us">
            <div className="about-wrap sec-space bg-white">
                <div className="container">
                    <h1 className="heading-title">about us</h1>
                    <div className="text-box">
                        <div className="row">
                            <div className="col-12 col-md-7 lft-box">
                                <p>We are team of like minded and driven civil
                                    engineers with a vision of creating
                                    sustainably.
                                </p>
                                <p>
                                    We offer every service within the book - from
                                    building to maintenance, no work is too small
                                    for us.
                                </p>
                                <p>We are enthusiastic about employing the
                                    latest trends in our building practice and we
                                    work with only the best material and
                                    associates.</p>
                            </div>
                            <div className="col-12 col-md-5" data-aos="fade-left" data-aos-duration="2000">
                                <img className="abt-img" src={aboutImg} alt="aboutImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visi-wrap sec-space">
                <div className="container">
                    <h1 className="heading-title">our vision</h1>
                    <div className="text-box">
                        <div className="row mt-5">
                            <div className="col-12 col-md-5" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
                                <img className="abt-img w-100" src={visionImg} alt="aboutImage" />
                            </div>
                            <div className="col-12 col-md-7 rit-box">
                                <p>
                                    To make a difference to our clients through delivering well-managed projects, on time and within the estimated economics, while maintaining excellent communications throughout
                                </p>
                                <p>
                                    To develop our business in line with our strategy to ensure sustainability and profitability.
                                    We are committed, open and honest in approach to our clients and will ensure we deliver excellent
                                    results exceeding our client's expectations. Above all we enjoy our challenging projects that make
                                    us push the limts of our imagination
                                </p>
                                <p>To deliver through value, quality and service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
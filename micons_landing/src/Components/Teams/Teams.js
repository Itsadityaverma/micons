import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import teamImg from "../../assets/images/user1.png";
import collabOne from "../../assets/images/collab1.jpg";
import collabTwo from "../../assets/images/collab2.jpg";
import collabThree from "../../assets/images/collab1.jpg";
import collabFour from "../../assets/images/collab1.jpg";
import affilOne from "../../assets/images/affil1.png";
import affilTwo from "../../assets/images/affil2.jpg";
import affilThree from "../../assets/images/affil2.jpg";


const Teams = () => {
    const TeamSlider = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className="">
            <div className="team-wrap text-center sec-space">
                <div className="container">
                    <h1 className="heading-title">Our Teams</h1>
                    <div className="pos-rel">
                        <Carousel
                            className="team-caros"
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={TeamSlider}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            keyBoardControl={true}
                            customTransition="all 1.2s ease 0s"
                            transitionDuration={1000}
                            containerClass="carousel-container carousel-list"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            slidesToSlide="1"
                            arrows={false}
                        >
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Achintya Mishra, Proprietor</h4>
                                </div>
                            </div>
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Deepak Raj Jindal, Civil Engineer</h4>
                                </div>
                            </div>
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Er.Pradeep kumar Mishra, Mentor </h4>
                                </div>
                            </div>
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Ar.Shivam Goyal, Architect</h4>
                                </div>
                            </div>
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Er.Avdesh Singh Negi, Structure Consultant</h4>
                                </div>
                            </div>
                            <div className="team-box">
                                <img src={teamImg} />
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <h4>Singh Electricals, HVAC Consultant</h4>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="collab-wrap text-center sec-space">
                <div className="container">
                    <h1 className="heading-title">collaboration</h1>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img className="icons" src={collabOne} alt="collaborationImage" />
                            <h3 className="icon-title">Anecs Design</h3>
                        </div>
                        <div className="col-12 col-md-3">
                            <img className="icons" src={collabTwo} alt="collaborationImage" />
                            <h3 className="icon-title">KRIEA Design</h3>
                        </div>
                        <div className="col-12 col-md-3">
                            <img className="icons" src={collabThree} alt="collaborationImage" />
                            <h3 className="icon-title">Arira Build tech Pvt Ltd</h3>
                        </div>
                        <div className="col-12 col-md-3">
                            <img className="icons" src={collabFour} alt="collaborationImage" />
                            <h3 className="icon-title">Reality Studios</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="affil-wrap text-center sec-space">
                <div className="container">
                    <h1 className="heading-title"> affiliations</h1>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img className="icons" src={affilOne} alt="affiliationsImage" />
                            <h3 className="icon-title">Haridwar Roorkee DevelopmentAuthority (HRDA)</h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="icons" src={affilTwo} alt="affiliationsImage" />
                            <h3 className="icon-title">NagamNigam, Haridwar</h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="icons" src={affilThree} alt="affiliationsImage" />
                            <h3 className="icon-title">KumbhMela, Haridwar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
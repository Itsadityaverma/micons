import React, { useState } from "react";
import homeImg from "../../assets/images/home.png";
import phoneImg from "../../assets/images/iphone.png";
import emailImg from "../../assets/images/email.png";
import facebookImg from "../../assets/images/facebook.png";
import instaImg from "../../assets/images/instagram.png";
import whatsappImg from "../../assets/images/whatsapp.png";

const ContactUs = () => {

    return (
        <div id="contact-us">
            <div className="sec-space pb-4">
                <div className="con-wrap">
                    <div className="container">
                        <div className="con-sec">
                            <div className="con-box">
                                <img src={homeImg} alt="address" />
                                <div>
                                    <h4>Address 1</h4>
                                    <p>I-15 , Nehru Colony,
                                        Dehradun, Uttarakhand
                                        Pincode - 248001
                                    </p>
                                </div>
                            </div>
                            <div className="con-box">
                                <img src={homeImg} alt="address" />
                                <div className="">
                                    <h4>Address 2</h4>
                                    <p>Haridwar office- SFH/04, World Bank Colony,
                                        Singhdwar,  Haridwar,  Uttarakhand
                                        Pincode - 248404
                                    </p>
                                </div>
                            </div>
                            <div className="con-box">
                                <img src={phoneImg} alt="phone" />
                                <div>
                                    <h4>Phone</h4>
                                    <p className="mb-1">Achintya Mishra : <br />
                                        <a href="tel:8920676368">8920676368</a>
                                        <br />
                                        <a href="tel:9997479054">9997479054</a>
                                    </p>
                                </div>
                            </div>
                            <div className="con-box">
                                <img src={phoneImg} alt="phone" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>Deepak Raj Jindal : <a href="tel:7417386006">7417386006</a></p>
                                </div>
                            </div>
                            <div className="con-box">
                                <img src={emailImg} alt="email" />
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:achintya@micons.in">achintya@micons.in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foot-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <span>© Micons 2023, All Rights Reserved.</span>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="ico-box">
                                        <div>
                                            <a href="https://www.facebook.com/profile.php?id=100090166256643&mibextid=ZbWKwL" target="_blank">
                                                <img src={facebookImg} alt="facebook" />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com/miconsconstructions/" target="_blank">
                                                <img src={instaImg} alt="instagram" />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://api.whatsapp.com/send?phone=919997479054&text=Hi%20Achintya" target="_blank">
                                                <img src={whatsappImg} alt="whatsapp" />
                                            </a>
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

export default ContactUs;
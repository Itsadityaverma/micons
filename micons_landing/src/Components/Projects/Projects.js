import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import projects1 from "../../assets/images/proj1.jpg";
import projects2 from "../../assets/images/proj2.jpg";
import projects3 from "../../assets/images/proj3.jpg";
import projects4 from "../../assets/images/proj4.jpg";
import projects5 from "../../assets/images/proj5.jpg";
import projects6 from "../../assets/images/proj6.jpg";
import projects7 from "../../assets/images/proj7.jpg";
import addImg from "../../assets/images/add.png";
import buildings1 from "../../assets/images/build1.jpg";
import buildings2 from "../../assets/images/build2.jpg";
import buildings3 from "../../assets/images/build3.jpg";


const Projects = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    let images = [
        {
            url: projects1,
            title: "Renovation in Rajpur Road Enclave, Dehradun"
        },
        {
            url: projects2,
            title: "Kotla, Firozabad - G+3 School building with classroom and hostel"
        },
        {
            url: projects3,
            title: "Soil testing done at Dwara site"
        },
        {
            url: projects4,
            title: "Ongoing project at Raipur Greens ( DUPLEX)"
        },
        {
            url: projects5,
            title: "Construction of Vatsalya Vatika School, Bahadarabad"
        },
        {
            url: projects6,
            title: "Dwara vacation homedesigning and construction"
        },
        {
            url: projects7,
            title: "Dwara vacation homedesigning and construction"
        },
        {
            url: buildings1,
            title: "Building 1"
        },
        {
            url: buildings3,
            title: "Building 2"
        }
    ]
    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };


    return (
        <div id="our-projects">
            <div className="sec-space">
                <div className="proj-wrap text-center">
                    <h1 className="heading-title">Our projects</h1>
                    <div className="container">
                        <div className="gallery-sec">
                            <div className="row">
                                {images.map((image, index) => (
                                    <div className="col-12 col-md-4">
                                        <div
                                            key={index}
                                            onClick={() => openLightbox(index)}
                                            style={{ cursor: "pointer" }}
                                            className="pos-rel"
                                        >

                                            <img src={image.url} alt={image.title}
                                                data-aos="zoom-in" data-aos-duration="1000" />
                                            <div className="overlay">
                                                <div className="text-box">
                                                    <img src={addImg} alt="addIcon" />
                                                    <h6>{image.title}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {lightboxOpen && (
                                <Lightbox
                                    images={images}
                                    startIndex={currentImage}
                                    onClose={closeLightbox}
                                />
                            )}
                        </div>
                        <div className="proj-txt">
                            <h4>Projects Done</h4>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Project</h5>
                                            <p>Renovation in Rajpur Road Enclave, Dehradun</p>
                                            <h5>Key Features</h5>
                                            <p>Interior Design, Fabrication Work, Modular Kitchen</p>
                                            <h5>Project Value</h5>
                                            <p>Rs. 5,45,000 - Rs. 7,00,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Project</h5>
                                            <p>Construction of SDBC Road at HarilokPhase 2, Haridwar</p>
                                            <h5>Key Features</h5>
                                            <p>200 mm thick WBM Road</p>
                                            <h5>Project Value</h5>
                                            <p>Rs. 7,50,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="proj-txt mt-md-4">
                            <h4>Ongoing Projects</h4>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Project</h5>
                                            <p>Design and Built project at Raipur greens</p>
                                            <h5>Key Features</h5>
                                            <p>3BHK in 2200sqft covered area</p>
                                            <h5>Project Value</h5>
                                            <p>Rs. 60,00,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Project</h5>
                                            <p>Construction of Vatsalya Vatika School, Bahadarabad</p>
                                            <h5>Key Features</h5>
                                            <p>Playground Design, Classroom Remodelling</p>
                                            <h5>Project Value</h5>
                                            <p>Rs. 10, 45, 000</p>
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

export default Projects;
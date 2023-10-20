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

const Projects = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    let images = [
        {
            url: projects1,
            title: "image title 1"
        },
        {
            url: projects2,
            title: "image title 2"
        },
        {
            url: projects3,
            title: "image title 1"
        },
        {
            url: projects4,
            title: "image title 2"
        },
        {
            url: projects5,
            title: "image title 1"
        },
        {
            url: projects6,
            title: "image title 2"
        },
        {
            url: projects7,
            title: "image title 1"
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

                                        <img src={image.url} alt={image.title} />
                                        <div className="overlay">
                                            <div className="text-box">
                                                <img src={addImg} alt="addIcon" />
                                                <h6>text</h6>
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
                </div>
            </div>
        </div>
    );
}

export default Projects;
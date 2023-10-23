import React, { useRef } from "react";
import { Player, ControlBar } from 'video-react';
import banrVideo from "../../assets/video/MICONS.mp4";
import posterVideoImg from "../../assets/video/posterImg.png"

const Home = () => {
    return (
        <div id="home">
            <div className="home-wrap">
                <div className="video-banner pos-rel">
                    <Player
                        poster={posterVideoImg}
                        className="mi-video" autoPlay muted loop src={banrVideo}>
                        <ControlBar autoHide={true} disableDefaultControls={true} />
                    </Player>
                    <div className="text-box">
                        <h1>We're Building Your Future</h1>
                        <p>Take a step towards the future of construction with Micons</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
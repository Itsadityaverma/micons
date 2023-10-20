import React, { useRef } from "react";
import { Player, ControlBar } from 'video-react';
import banrVideo from "../../assets/video/sampleVideo.mp4";


const Home = () => {
    return (
        <div className="home-wrap">
            <div className="video-banner">
                <Player autoPlay muted loop src={banrVideo}>
                    <ControlBar autoHide={true}  disableDefaultControls={true} />
                </Player>
            </div>
        </div>
    );
}

export default Home;
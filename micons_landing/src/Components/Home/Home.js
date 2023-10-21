import React, { useRef } from "react";
import { Player, ControlBar } from 'video-react';
import banrVideo from "../../assets/video/MICONS.mp4";


const Home = () => {
    return (
        <div id="home">
            <div className="home-wrap">
                <div className="video-banner">
                    <Player className="mi-video"  autoPlay muted loop src={banrVideo}>
                        <ControlBar autoHide={true} disableDefaultControls={true} />
                    </Player>
                </div>
            </div>
        </div>
    );
}

export default Home;
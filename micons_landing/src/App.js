import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from "./Pages/LandingPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="App">
        <LandingPage />
    </div>
  );
}

export default App;
import React from "react";
import styling from "./Home.module.css";
import CoverPage from "./CoverPage/CoverPage";
import AboutPage from "./AboutPage/AboutPage";
import Transmission from "./Transmission/Transmission";
import Symptoms from "./Symptoms/Symptoms";
import Protect from "./Protect/Protect";
import TakeSteps from "./Take-steps/TakeSteps";
import Handwash from "./HandWash/HandWash.js";
import Treatment from "./Treatment/Treatment";
import DoDonts from "./DoDonts/DoDonts";
import { Link } from "react-router-dom";
import updatesLogo from "../../images/updates-logo.png";

export default function Home() {
  return (
    <div className={styling.Home}>
      <CoverPage />
      <AboutPage />
      <Transmission />
      <Symptoms />
      <Protect />
      <TakeSteps />
      <Handwash />
      <Treatment />
      <DoDonts />
      <div className={styling.moveTo}>
        <Link to="/cases">
          <img src={updatesLogo} alt="" srcset="" />
        </Link>
      </div>
    </div>
  );
}

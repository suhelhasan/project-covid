import React from "react";
import styling from "./DoDonts.module.css";
import mainImage from "../../../images/do-donts/protect.png";
import does1 from "../../../images/do-donts/dos-a.png";
import does2 from "../../../images/do-donts/dos-b.png";
import does3 from "../../../images/do-donts/dos-c.png";
import dont1 from "../../../images/do-donts/donts-a.png";
import dont2 from "../../../images/do-donts/donts-b.png";
import dont3 from "../../../images/do-donts/donts-c.png";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function DoDonts() {
  return (
    <div className={styling.DoDonts} id="protectYourself">
      <div className={styling.TextSection}>
        <h3>DO’S & DON’TS</h3>
        <h1>PROTECT YOURSELF</h1>
        <p>
          The best thing you can do now is plan for how you can adapt your daily
          routine. Take few steps to protect yourself as Clean your hands often,
          Avoid close contact, Cover coughs and sneezes, clean daily used
          surfaces etc. The best way to prevent illness is to avoid being
          exposed to this virus
        </p>
      </div>
      <div className={styling.imageSection}>
        <div className={styling.Dos}>
          <div>
            <div className={styling.DosLogo}>
              <FaCheckCircle />
            </div>
            <h4>Wash Your Hands</h4>

            <img src={does1} alt="" srcset="" />
          </div>
          <div>
            <div className={styling.DosLogo}>
              <FaCheckCircle />
            </div>
            <h4>Drink Much Watar</h4>
            <img src={does2} alt="" srcset="" />
          </div>
          <div>
            <div className={styling.DosLogo}>
              <FaCheckCircle />
            </div>
            <h4>Use Face Mask</h4>
            <img src={does3} alt="" srcset="" />
          </div>
        </div>
        {/* kmxn ckjxcn kjxcnvknv jdff */}
        <div className={styling.MainImage}>
          <img src={mainImage} alt="" srcset="" />
        </div>
        {/* kmxn ckjxcn kjxcnvknv jdff */}

        <div className={styling.Donts}>
          <div>
            <div className={styling.DontLogo}>
              <FaTimesCircle />
            </div>
            <img src={dont1} alt="" srcset="" />
            <h4>Avoid Close Contact</h4>
          </div>
          <div>
            <div className={styling.DontLogo}>
              <FaTimesCircle />
            </div>
            <img src={dont2} alt="" srcset="" />
            <h4>Don’t Touch Face</h4>
          </div>
          <div>
            <div className={styling.DontLogo}>
              <FaTimesCircle />
            </div>
            <img src={dont3} alt="" srcset="" />
            <h4>Social Distancing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styling from "./Footer.module.css";
import logo from "../../images/logo.png";

export default function Footer() {
  return (
    <div className={styling.Footer}>
      <div>
        <div>
          <img src={logo} alt="logo" srcset="" />
          <p>
            This website is for health information and advice about coronavirus
            (COVID-19), how to prevent and protect yourself from disease.
          </p>
        </div>

        <div className={styling.additional}>
          <h3>IMPORTANT LINK</h3>
          <a href="https://www.who.int/">WHO Website</a>
          <a href="https://www.cdc.gov/">CDC Website</a>
          <a href="https://www.nhs.uk/">NHS Website</a>
          <a href="https://www.health.harvard.edu/">Harvard Health</a>
        </div>
      </div>
      <div>
        <div className={styling.additional}>
          <h3>HELPFULL LINK</h3>
          <a href="#coverPage">Healthcare Professionals</a>
          <a href="#coverPage">Healthcare Facilities</a>
          <a href="#coverPage">Older Adults & Medical Conditions</a>
          <a href="#coverPage">Repare your Family</a>
        </div>
        <div className={styling.additional}>
          <h3>QUICK LINK</h3>
          <a href="#coverPage">Symptoms</a>
          <a href="#coverPage">Prevention</a>
          <a href="#coverPage">Protect Youself</a>
          <a href="#coverPage">About Corona</a>
        </div>
      </div>
    </div>
  );
}

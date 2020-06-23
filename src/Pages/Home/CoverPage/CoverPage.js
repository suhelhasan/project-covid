import React from "react";
import styling from "./CoverPage.module.css";
import image from "../../../images/header-a.png";
import coronaIcon from "../../../images/corona.png";
import { FaFan, FaCaretRight } from "react-icons/fa";

export default function CoverPage() {
  return (
    <div className={styling.CoverPage}>
      <div className={styling.textSection}>
        <div className={styling.Heading}>
          <div>
            <h1>CORONA</h1>
          </div>
          <div>
            <div>
              <h1>COVID-19</h1>
            </div>
            <div>
              <h1>VIRUS</h1>
            </div>
          </div>
        </div>
        <div className={styling.punchLine}>
          <p>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020
          </p>
        </div>
        <div className={styling.buttons}>
          <button>How to Protect</button>
          <h3>
            <a href="home page">
              About COVID-19 <FaCaretRight />
            </a>
          </h3>
        </div>
      </div>

      <div className={styling.imgSection}>
        <img src={image} alt="happy" srcset="" />
      </div>
    </div>
  );
}

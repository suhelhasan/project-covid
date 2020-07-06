import React from "react";
import styling from "./Handwash.module.css";
import hand1 from "../../../images/Handwash/hand-1.png";
import hand2 from "../../../images/Handwash/hand-2.png";
import hand3 from "../../../images/Handwash/hand-3.png";
import hand4 from "../../../images/Handwash/hand-4.png";
import hand5 from "../../../images/Handwash/hand-5.png";
import hand6 from "../../../images/Handwash/hand-6.png";

export default function HandWash() {
  return (
    <div id="symptoms" className={styling.HandWash}>
      <div className={styling.TextSection}>
        <h1>Follow steps to wash hands</h1>
        <h3>It is necessary step to avoid corona</h3>
      </div>
      <div className={styling.ImageSection}>
        <div>
          <img src={hand1} alt="" srcset="" />
          <h4>Focus on Wrist</h4>
        </div>
        <div>
          <img src={hand2} alt="" srcset="" />
          <h4>Clean with Water</h4>
        </div>
        <div>
          <img src={hand3} alt="" srcset="" />
          <h4>Back to Hands</h4>
        </div>
        <div>
          <img src={hand4} alt="" srcset="" />
          <h4>Between Fingers</h4>
        </div>
        <div>
          <img src={hand5} alt="" srcset="" />
          <h4>Palm to Palm</h4>
        </div>
        <div>
          <img src={hand6} alt="" srcset="" />
          <h4>Soap on Hand</h4>
        </div>
      </div>
    </div>
  );
}

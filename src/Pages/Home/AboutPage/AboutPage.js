import React from "react";
import styling from "./AboutPage.module.css";
import { FaCaretRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className={styling.AboutPage}>
      <div className={styling.ImageSection}>
        <div>
          <div>What you need to know</div>
          <div>
            <a href="#spread">How corona virus spread</a>
            <FaCaretRight />
          </div>
          <div>
            <a href="#symptoms">Symptoms of coronavirus</a>
            <FaCaretRight />
          </div>
          <div>
            <a href="njk">How to protect yourself</a>
            <FaCaretRight />
          </div>
          <div>
            <a href="njk">Treatment of coronavirus</a>
            <FaCaretRight />
          </div>
          <div>
            <a href="njk">Myth-Busters of coronavirus</a>
            <FaCaretRight />
          </div>
          <div>
            <a href="njk">Questions & Answers</a>
            <FaCaretRight />
          </div>
        </div>
      </div>
      <div className={styling.TextSection}>
        <div>
          <h3>ABOUT THE DISEASE</h3>
          <h1>CORONAVIRUS (COVID-19)</h1>
        </div>
        <div>
          <h3>
            COVID-19 is a new illness that can affect your lungs and airways.
            It's caused by a virus called coronavirus. It was discovered in
            December 2019 in Wuhan, Hubei, China.
          </h3>
        </div>
        <div>
          <p>
            Common signs of infection include respiratory symptoms, fever,
            cough, shortness of breath and breathing difficulties. In more
            severe cases, infection can cause pneumonia, severe acute
            respiratory syndrome, kidney failure and even death.
          </p>
          <p>
            Standard recommendations to prevent infection spread include regular
            hand washing, covering mouth and nose when coughing and sneezing,
            thoroughly cooking meat and eggs. Avoid close contact with anyone
            showing symptoms of respiratory illness such as coughing and
            sneezing.
          </p>
        </div>
      </div>
    </div>
  );
}

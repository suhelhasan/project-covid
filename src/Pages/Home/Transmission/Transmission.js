import React from "react";
import styling from "./Transmission.module.css";
import cough from "../../../images/cough.png";
import contacting from "../../../images/contacting.png";
import person from "../../../images/person.png";

export default function Transmission() {
  return (
    <div className={styling.Transmission}>
      <div className={styling.TextSection}>
        <h3>HOW CORONAVIRUS IS SPREAD</h3>
        <h1>TRANSMISSION OF COVID-19</h1>
        <p>
          Because it's a new illness, we do not know exactly how coronavirus
          spreads. from person to person. Similar viruses are spread in cough
          droplets.
        </p>
      </div>
      <div className={styling.ImageSection}>
        <div>
          <img src={cough} alt="" srcset="" />

          <h3>Droplets that from infected person coughs or sneezes</h3>
          <p>
            The coronavirus is thought to spread mainly from person to person.
            This can happen between people who are in close contact with one
            another.
          </p>
        </div>
        <div>
          <img src={contacting} alt="" srcset="" />

          <h3>Touching or contact with infected surfaces or objects</h3>
          <p>
            A person can get COVID-19 by touching a surface or object that has
            the virus on it and then touching their own mouth, nose, or possibly
            their eyes.
          </p>
        </div>
        <div>
          <img src={person} alt="" srcset="" />

          <h3>Person-to-person spread as close contact with infected</h3>
          <p>
            The coronavirus is thought to spread mainly from person to person.
            This can happen between people who are in close contact with one
            another
          </p>
        </div>
      </div>
    </div>
  );
}

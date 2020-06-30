import React from "react";
import symptom1 from "../../../images/cough.png";
import symptom2 from "../../../images/contacting.png";
import symptom3 from "../../../images/person.png";
import Transmissio from "../../../UI/ReusablePage/ReusablePage";
export default function Transmission() {
  return (
    <div id="spread">
      <Transmissio
        subHeading="HOW CORONAVIRUS IS SPREAD"
        heding="TRANSMISSION OF COVID-19"
        textHeading="Because it's a new illness, we do not know exactly how coronavirus
          spreads. from person to person. Similar viruses are spread in cough
          droplets."
        imageSection1={{
          image: symptom1,
          heading: "Droplets that from infected person coughs or sneezes",
          text:
            "The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.",
        }}
        imageSection2={{
          image: symptom2,
          heading: "Touching or contact with infected surfaces or objects",
          text:
            "A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.",
        }}
        imageSection3={{
          image: symptom3,
          heading: "Person-to-person spread as close contact with infected",
          text:
            "The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another",
        }}
      />
    </div>
  );
}

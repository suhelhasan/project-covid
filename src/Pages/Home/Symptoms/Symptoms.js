import React from "react";
import Transmission from "../../../UI/ReusablePage/ReusablePage";
import symptom1 from "../../../images/Symptom/symptom1.png";
import symptom2 from "../../../images/Symptom/symptom2.png";
import symptom3 from "../../../images/Symptom/symptom3.png";

export default function Symptoms() {
  return (
    <div id="symptoms">
      <Transmission
        addClassForImg="additionClassForImages"
        subHeading="WHAT ARE THE SYMPTOMS OF COVID-19"
        heding="SYMPTOMS OF CORONAVIRUS"
        textHeading="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure. "
        imageSection1={{
          image: symptom1,
          heading: "Shortness of breath",
          text:
            "Difficulty breathing – Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.",
        }}
        imageSection2={{
          image: symptom2,
          heading: "Cough",
          text:
            "Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)",
        }}
        imageSection3={{
          image: symptom3,
          heading: "Fever",
          text:
            "High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected ",
        }}
      />
    </div>
  );
}

import React from "react";
import Transmission from "../../../UI/ReusablePage/ReusablePage";
import symptom1 from "../../../images/Protect/advice1.png";
import symptom2 from "../../../images/Protect/advice2.png";
import symptom3 from "../../../images/Protect/advice3.png";
import symptom4 from "../../../images/Protect/advice4.png";

export default function Protect() {
  return (
    <div id="prevention">
      <Transmission
        addClassForImg="additionClassForImages"
        addClassForMultiple="addClassForBg"
        subHeading="HOW TO PROTECT YOURSELF?"
        heding="PREVENTION & ADVICE"
        textHeading="There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority."
        imageSection1={{
          image: symptom1,
          heading: "Practice respiratory hygiene",
          text:
            "Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.",
        }}
        imageSection2={{
          image: symptom2,
          heading: "Avoid touching face",
          text:
            "Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.",
        }}
        imageSection3={{
          image: symptom3,
          heading: "Maintain social distancing",
          text:
            "Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.",
        }}
        imageSection4={{
          image: symptom4,
          heading: "Wash your hands frequently",
          text:
            "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds",
        }}
      />
    </div>
  );
}

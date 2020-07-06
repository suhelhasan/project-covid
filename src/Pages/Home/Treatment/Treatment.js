import React from "react";
import styling from "./Treatment.module.css";
import { FaCaretRight } from "react-icons/fa";

export default function Treatment() {
  return (
    <div className={styling.Treatment}>
      <div className={styling.TreatmentBox}>
        <div>
          <h3>Self Care</h3>
          <p>
            If you have mild symptoms, stay at home until you’ve recovered. You
            can relieve your symptoms if you:
          </p>
          <p>
            <FaCaretRight />
            Rest and sleep
          </p>
          <p>
            <FaCaretRight />
            Keep warm
          </p>
          <p>
            <FaCaretRight />
            Drink plenty of liquids
          </p>
          <p>
            <FaCaretRight />
            Use a room humidifier or take a hot shower to help ease a sore
            throat and cough
          </p>
        </div>
        <div>
          <h3>Medical Treatments</h3>
          <p>
            If you develop a fever, cough, and have difficulty breathing,
            promptly seek medical care. Call in advance and tell your health
            provider of any recent travel or recent contact with travelers
          </p>
        </div>
      </div>
      <div className={styling.TreatmentText}>
        <h3>BE CAREFULL & STAY SAFE</h3>
        <h1>TREATMENT FOR CORONAVIRUS</h1>
        <p>
          <b>
            To date, there is no vaccine and no specific antiviral medicine to
            prevent or treat COVID-2019.
          </b>{" "}
          However, those affected should receive care to relieve symptoms.
          People with serious illness should be hospitalized. Most patients
          recover thanks to supportive care
        </p>
        <p>
          <b>Antibiotics do not help, as they do not work against viruses.</b>
          Treatment aims to relieve the symptoms while your body fights the
          illness. You'll need to stay in isolation, away from other people,
          until you have recovered
        </p>
      </div>
    </div>
  );
}

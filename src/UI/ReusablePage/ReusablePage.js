import React from "react";
import styling from "./Reusable.module.css";

export default function Transmission(props) {
  return (
    <div id="spread" className={styling.Transmission}>
      <div className={styling.TextSection}>
        <h3>{props.subHeading}</h3>
        <h1>{props.heding}</h1>
        <p>{props.textHeading}</p>
      </div>
      <div className={styling.ImageSection}>
        <div
          className={props.addClassForMultiple ? styling.addClassForBg : null}
        >
          <img
            src={props.imageSection1.image}
            className={props.addClassForImg ? styling.addClassForImg : null}
            alt=""
            srcset=""
          />

          <h3>{props.imageSection1.heading}</h3>
          <p>{props.imageSection1.text}</p>
        </div>
        <div
          className={props.addClassForMultiple ? styling.addClassForBg : null}
        >
          <img
            src={props.imageSection2.image}
            className={props.addClassForImg ? styling.addClassForImg : null}
            alt=""
            srcset=""
          />

          <h3>{props.imageSection2.heading}</h3>
          <p>{props.imageSection2.text}</p>
        </div>
        <div
          className={props.addClassForMultiple ? styling.addClassForBg : null}
        >
          <img
            src={props.imageSection3.image}
            className={props.addClassForImg ? styling.addClassForImg : null}
            alt=""
            srcset=""
          />

          <h3>{props.imageSection3.heading}</h3>
          <p>{props.imageSection3.text}</p>
        </div>
        {props.addClassForMultiple && !props.addClassForSix ? (
          <div
            className={props.addClassForMultiple ? styling.addClassForBg : null}
          >
            <img
              src={props.imageSection4.image}
              className={props.addClassForImg ? styling.addClassForImg : null}
              alt=""
              srcset=""
            />

            <h3>{props.imageSection4.heading}</h3>
            <p>{props.imageSection4.text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

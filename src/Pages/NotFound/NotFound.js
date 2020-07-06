import React from "react";
import styling from "./NotFound.module.css";
import NotFoundImage from "../../images/Not-Found/404.png";

export default function NotFound() {
  return (
    <div className={styling.NotFound}>
      <img src={NotFoundImage} alt="" />
    </div>
  );
}

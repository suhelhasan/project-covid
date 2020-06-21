import React from "react";
import styling from "./NotFound.module.css";
import NotFoundImage from "../../images/404.png";

export default function NotFound() {
  return (
    <div className={styling.NotFound}>
      <img src={NotFoundImage} alt="" />
    </div>
  );
}

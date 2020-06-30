import React from "react";
import styling from "./Home.module.css";
import CoverPage from "./CoverPage/CoverPage";
import AboutPage from "./AboutPage/AboutPage";
import Transmission from "./Transmission/Transmission";
import Symptoms from "./Symptoms/Symptoms";

export default function Home() {
  return (
    <div className={styling.Home}>
      <CoverPage />
      <AboutPage />
      <div className={styling.emptySpace}></div>

      <Transmission />
      <div className={styling.emptySpace}></div>

      <Symptoms />
      <div className={styling.emptySpace}></div>
    </div>
  );
}

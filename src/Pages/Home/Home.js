import React from "react";
import styling from "./Home.module.css";
import CoverPage from "./CoverPage/CoverPage";
import AboutPage from "./AboutPage/AboutPage";
import Transmission from "./Transmission/Transmission";

export default function Home() {
  return (
    <div className={styling.Home}>
      <CoverPage />
      <AboutPage />
      <Transmission />
    </div>
  );
}

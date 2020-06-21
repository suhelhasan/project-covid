import React from "react";
import styling from "./Home.module.css";
import CoverPage from "./CoverPage/CoverPage";
import AboutPage from "./AboutPage/AboutPage";

export default function Home() {
  return (
    <div className={styling.Home}>
      <CoverPage />
      <AboutPage />
    </div>
  );
}

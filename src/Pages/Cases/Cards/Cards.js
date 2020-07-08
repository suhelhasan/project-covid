import React from "react";
import styling from "./Cards.module.css";
import CountUp from "react-countup";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styling.Cards}>
      <div className={styling.Card1}>
        <h2>Infected</h2>
        <h2>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={1.5}
            separator=","
          />
        </h2>
        <h4>{new Date(lastUpdate).toDateString()}</h4>
        <p>Number of active cases of COVID-19</p>
      </div>
      <div className={styling.Card2}>
        <h2>Recoverd</h2>
        <h2>
          <CountUp
            start={0}
            end={recovered.value}
            duration={1.5}
            separator=","
          />
        </h2>
        <h4>{new Date(lastUpdate).toDateString()}</h4>
        <p>Number of recoveries cases of COVID-19</p>
      </div>
      <div className={styling.Card3}>
        <h2>Deaths</h2>
        <h2>
          <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
        </h2>
        <h4>{new Date(lastUpdate).toDateString()}</h4>
        <p>Number of deaths caused by COVID-19</p>
      </div>
    </div>
  );
}

import React from "react";
import styling from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

export default function Chart({
  dailyData,
  country,
  data: { confirmed, deaths, recovered },
}) {
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            fill: true,
            borderColor: "#056cc4",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            fill: true,
            borderColor: "#ff5363",
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#056cc4", "#3dca93", "#ff5363"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div className={styling.Chart}>{country ? barChart : lineChart}</div>;
}

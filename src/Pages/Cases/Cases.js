import React, { useEffect, useState } from "react";
import styling from "./Cases.module.css";

import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";

import { fetchData, fetchDailyData, countriesData } from "../../API/index";

export default function Cases() {
  let [data, setData] = useState({});
  const [dailyData, setDailyData] = useState({});
  let [countries, setCountries] = useState([]);
  let [country, setCountry] = useState("");

  useEffect(() => {
    (async () => {
      setData(await fetchData(country));
    })();
  }, [country]);

  useEffect(() => {
    (async () => {
      setDailyData(await fetchDailyData());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setCountries(await countriesData());
    })();
  }, []);

  let handleCountryChange = async (countryName) => {
    setCountry(countryName);
  };

  return (
    <div className={styling.Cases}>
      <Cards data={data} />
      <CountryPicker
        changeCountry={handleCountryChange}
        countries={countries}
      />
      <Chart dailyData={dailyData} data={data} country={country} />
    </div>
  );
}

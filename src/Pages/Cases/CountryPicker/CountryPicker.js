import React from "react";
import styling from "./CountryPicker.module.css";

export default function CountryPicker({ countries, changeCountry }) {
  return (
    <div className={styling.CountryPicker}>
      <select defaultValue="" onChange={(e) => changeCountry(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

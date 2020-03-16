import React, { useState } from "react";
import useStats from "./useStats";
import Stats from "./stats";

export default function CountrySelector() {
  const [country, setCountry] = useState("USA");
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );

  if (!countries) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="statBlock">
      <h3>Select a country:</h3>
      <select
        onChange={e => {
          setCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={country === countries.iso3[code]}
            key={code + country}
            value={countries.iso3[code]}
          >
            {country} - {countries.iso3[code]}
          </option>
        ))}
      </select>

      {country ? <h3>Currently showing: {country}</h3> : null}
      <Stats url={`https://covid19.mathdro.id/api/countries/${country}`} />
    </div>
  );
}

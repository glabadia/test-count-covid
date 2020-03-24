import React, { useState } from "react";
import useStats from "./useStats";
import GetCountryData from "./getCountryData";
import fetchNormal from "./fetchNormal";

const CountryList = () => {
  const url = "https://covid19.mathdro.id/api/countries";
  // const { stats: countries, loading, error } = useStats(url);
  const { stats: countries, isLoading, error } = useStats(url);
  const { confirmed, deaths, recovered } = GetCountryData(
    "https://covid19.mathdro.id/api/countries/USA"
  );

  if (!countries) return <p>Error retrieving countries..</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Country Code</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(countries.countries).map(([country, code]) => {
            // const { confirmed, deaths, recovered } = GetCountryData(
            //   `https://covid19.mathdro.id/api/countries/${countries.iso3[code]}`
            // );
            return (
              <tr key={country + code}>
                <td>{country}</td>
                <td>{countries.iso3[code]}</td>
                <td>{confirmed}</td>
                <td>{deaths}</td>
                <td>{recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;

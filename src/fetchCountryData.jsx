import React, { useState, useEffect, useMemo } from "react";
import fetchNormal from "./fetchNormal";

export default function FetchCountryData({ url }) {
  const [countries, setCountries] = useState();
  const [iso3, setIso3] = useState();
  const [results, setResults] = useState();

  // 1. Get all countries
  // 2. after fetching all countries, get each country's data
  // and store in a row
  // 3. return all data

  const GetCountryList = data => {
    const response = Object.entries(data).map(([k, v]) => {
      let obj = {};
      obj[k] = v;
      return obj;
    });

    return response;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      // const { countries: c, iso3: i } = data;
      // setCountries(c);
      // setIso3(i);
      setResults(data["countries"]);
    }
    fetchData();
  }, [url]);

  // console.log("Countries: ", countries);

  if (!countries) return <p>Loading Countries...</p>;
  if (!iso3) return <p>Loading Iso3...</p>;
  console.log(iso3);

  return (
    <>
      {GetCountryList(iso3).map(([k, v]) => (
        <p key={k}>{v}</p>
      ))}
    </>
  );
}

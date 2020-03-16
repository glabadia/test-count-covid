import React, { useState } from "react";
import CountrySelector from "./countrySelector";

export default function App() {
  const [country, setCountry] = useState();
  return (
    <div>
      {/* <Stats url="https://covid19.mathdro.id/api/countries/USA" /> */}
      <CountrySelector country={country} />
    </div>
  );
}

import useStats from "./useStats";
import fetchNormal from "./fetchNormal";

const GetCountryData = url => {
  const { stats: country, loading, error } = useStats(url);
  // const { stats: country, isLoading, error } = fetchNormal(url);
  // console.log("Data: ", country, isLoading, error);
  if (!country) return { confirmed: "", deaths: "", recovered: "" };
  if (error) return { confirmed: "", deaths: "", recovered: "" };

  return {
    confirmed: country.confirmed.value,
    deaths: country.deaths.value,
    recovered: country.recovered.value
  };
};

export default GetCountryData;

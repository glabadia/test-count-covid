import React from "react";
import useStats from "./useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  display: grid;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  align-items: center;
  justify-items: center;
  background: #f2f2f2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

const ErrorBlock = styled.div`
  display: grid;
  color: red;
  font-size: 1.2rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  align-items: center;
  justify-items: center;
  background: #f2f2f2;
  font-family: "Courier New", Courier, monospace;
`;

const Info = styled.div`
  background: #f2f2f2;
  border-radius: 0.5 rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (!stats) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (stats.error) return <ErrorBlock>{stats.error.message}</ErrorBlock>;

  return (
    <>
      <StatGrid>
        <StatBlock style={{ color: "steelblue" }}>
          <h3>Confirmed:</h3>
          <span>{stats.confirmed.value}</span>
        </StatBlock>

        <StatBlock style={{ color: "#929292" }}>
          <h3>Deaths:</h3>
          <span>{stats.deaths.value}</span>
        </StatBlock>

        <StatBlock style={{ color: "green" }}>
          <h3>Recovered:</h3>
          <span>{stats.recovered.value}</span>
        </StatBlock>
      </StatGrid>
      <Info>
        <p>Last Update: </p>
        <span>{new Date(Date.parse(stats.lastUpdate)).toString()}</span>
      </Info>
    </>
  );
}

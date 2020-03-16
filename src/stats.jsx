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

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (!stats) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (stats.error) return <StatBlock>{stats.error.message}</StatBlock>;

  return (
    <>
      <StatGrid>
        <StatBlock>
          <h3>Confirmed:</h3>
          <span>{stats.confirmed.value}</span>
        </StatBlock>

        <StatBlock>
          <h3>Deaths:</h3>
          <span>{stats.deaths.value}</span>
        </StatBlock>

        <StatBlock>
          <h3>Recovered:</h3>
          <span>{stats.recovered.value}</span>
        </StatBlock>
      </StatGrid>
      <div>
        <p>Last Update: </p>
        <span>{stats.lastUpdate}</span>
      </div>
    </>
  );
}

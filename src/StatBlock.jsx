import React from "react";

const StatBlock = ({ label, data }) => {
  return (
    <>
      <h3>{label}</h3>
      <span>{data}</span>
    </>
  );
};

export default StatBlock;

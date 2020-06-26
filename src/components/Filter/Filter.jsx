import React from "react";

import "./style.css";

const Filter = (props) => {
  const { getFilter } = props;

  return (
    <div className="filter">
      <p>Or filter</p>
      <button
        id="Brazil"
        type="button"
        onClick={() => {
          getFilter("Brazil");
        }}
      >
        Brazil
      </button>
      <button
        type="button"
        id="Kenya"
        onClick={() => {
          getFilter("Kenya");
        }}
      >
        Kenya
      </button>
      <button
        type="button"
        id="Columbia"
        onClick={() => {
          getFilter("Columbia");
        }}
      >
        Columbia
      </button>
    </div>
  );
};

export default Filter;

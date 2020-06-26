import React from "react";

import "./style.css";

const Search = (props) => {
  const { searchFunc } = props;

  return (
    <div className="search">
      <p>Looking for</p>
      <input
        onInput={searchFunc}
        type="text"
        placeholder="start typing here..."
      />
    </div>
  );
};

export default Search;

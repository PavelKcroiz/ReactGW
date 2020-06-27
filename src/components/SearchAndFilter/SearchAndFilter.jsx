import React from "react";
import Search from "../Search";
import Filter from "../Filter";

import "./style.css";

const SearchAndFilter = (props) => {
  const { getFilter, searchFunc } = props;

  return (
    <div className="search_filter">
      <Search searchFunc={searchFunc} />
      <Filter getFilter={getFilter} />
    </div>
  );
};

export default SearchAndFilter;

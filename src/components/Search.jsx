import React from "react";
import { CiSearch } from "react-icons/ci";
import "./search.css";
const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <CiSearch className="search-icon" />
    </div>
  );
};

export default Search;

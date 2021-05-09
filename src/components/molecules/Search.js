import React from "react";
import Input from "../atoms/Input";

const Search = ({ icon, placeholder, className, onInputChange }) => (
  <div className={`search ${className}`}>
    <span className="search__icon">
      {require(`../../utils/icons/${icon}.js`).default()}
    </span>
    <span className="search__input">
      <Input placeholder={placeholder} onInputChange={onInputChange} />
    </span>
  </div>
);

export default Search;

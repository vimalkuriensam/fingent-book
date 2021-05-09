import React from "react";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

const Search = ({ icon = "search", placeholder, className, onInputChange }) => (
  <div className={`search ${className}`}>
    <span className="search__icon">
      <Icon
        content={icon}
        onHandleButtonClick={() => {
          console.log("clicked");
        }}
        link="search"
      />
    </span>
    <span className="search__input">
      <Input
        className="search__input"
        placeholder={placeholder}
        onInputChange={onInputChange}
      />
    </span>
  </div>
);

export default Search;

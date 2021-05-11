import React, { useState } from "react";
import Button from "../../../components/atoms/Button";

import Dropdown from "../../../components/atoms/Dropdown";
import Search from "../../../components/molecules/Search";
import history from "../../../utils/history";
import { DROPDOWN_DATA, INPUT_PLACEHOLDER } from "../data";

const Filter = () => {
  const [sortBy, setSortBy] = useState(undefined);

  const setSort = (val) => setSortBy(val);
  return (
    <div className="home__filter">
      <div className="home__filter--1">
        <Search icon="search" placeholder={INPUT_PLACEHOLDER} />
        <Dropdown
          className="home__dropdown"
          data={DROPDOWN_DATA}
          onHandleClick={setSort}
          value={sortBy}
        />
      </div>
      <div className="home__filter--2">
        <Button
          variant="primary"
          content="Add New Book"
          onHandleButtonClick={() => history.push("/add")}
        />
      </div>
    </div>
  );
};

export default Filter;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addSortFilter, addTextFilter } from "../../../actions/filter.action";
import Button from "../../../components/atoms/Button";

import Dropdown from "../../../components/atoms/Dropdown";
import Search from "../../../components/molecules/Search";
import history from "../../../utils/history";
import { DROPDOWN_DATA, INPUT_PLACEHOLDER } from "../data";

const Filter = ({ dispatch, text, sort, selected }) => {
  const [sortBy, setSortBy] = useState(sort);

  const setSort = (val) => {
    setSortBy(val);
    dispatch(addSortFilter(val));
  };

  const onHandleSearchFilter = ({ target }) =>
    dispatch(addTextFilter(target.value));
  return (
    <div className="home__filter">
      <div className="home__filter--1">
        <Search
          icon="search"
          placeholder={INPUT_PLACEHOLDER}
          onInputChange={onHandleSearchFilter}
          value={text}
        />
        <Dropdown
          className="home__dropdown"
          data={DROPDOWN_DATA}
          onHandleClick={setSort}
          value={sortBy}
        />
      </div>
      <div className="home__filter--2">
        {selected && (
          <Button
            variant="secondary"
            content="Edit"
            color="#fff"
            onHandleButtonClick={() =>
              history.push({
                pathname: "/add",
                state: {
                  selected,
                },
              })
            }
          />
        )}
        <Button
          variant="primary"
          content="Add New Book"
          onHandleButtonClick={() => history.push("/add")}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selected: state.books.selected,
  text: state.filters.text,
  sort: state.filters.sorting,
});

export default connect(mapStateToProps)(Filter);

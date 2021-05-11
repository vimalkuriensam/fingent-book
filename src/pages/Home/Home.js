import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addBooks, resetSelected } from "../../actions/books.action";
import Book from "./container/Book";
import Filter from "./container/Filter";
import List from "./container/List";

const Home = ({ dispatch }) => {
  useEffect(() => {
    dispatch(resetSelected());
  }, []);
  return (
    <div className="home">
      <Filter />
      <div className="home__contents">
        <List />
        <Book />
      </div>
    </div>
  );
};

export default connect()(Home);

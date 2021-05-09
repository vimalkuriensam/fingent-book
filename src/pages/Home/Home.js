import React from "react";
import Book from "./container/Book";
import Filter from "./container/Filter";
import List from "./container/List";

const Home = () => {
  return (
    <div className="home">
      <Filter />
      <div>
        <List />
        <Book />
      </div>
    </div>
  );
};

export default Home;

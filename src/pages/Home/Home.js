import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addBooks, resetSelected } from "../../actions/books.action";
import Book from "./container/Book";
import Filter from "./container/Filter";
import List from "./container/List";

const Home = ({ dispatch }) => {
  useEffect(() => {
    
    dispatch(
      addBooks({
        ebno: "1",
        title: "The art of war",
        author: "Sun Tzu",
        date: 123,
        pageContent: "ancient book of the art of war",
      })
    );

    dispatch(
      addBooks({
        ebno: "2",
        title: "Harry Potter",
        author: "J. K. Rowling",
        date: 321,
        pageContent: "book on the wizard boy",
      })
    );

    dispatch(
      addBooks({
        ebno: "3",
        title: "Harry Potter",
        author: "J. K. Rowling",
        date: 321,
        pageContent: "book on the wizard boy",
      })
    );

    dispatch(
      addBooks({
        ebno: "4",
        title: "Harry Potter",
        author: "J. K. Rowling",
        date: 321,
        pageContent: "book on the wizard boy",
      })
    );

    dispatch(
      addBooks({
        ebno: "5",
        title: "Harry Potter",
        author: "J. K. Rowling",
        date: 321,
        pageContent: "book on the wizard boy",
      })
    );

    dispatch(
      addBooks({
        ebno: "6",
        title: "Harry Potter",
        author: "J. K. Rowling",
        date: 321,
        pageContent: "book on the wizard boy",
      })
    );
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

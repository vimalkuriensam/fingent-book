import React from "react";
import { connect } from "react-redux";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";

const Book = ({ selected, book, selectedPage }) => {
  const stringToHTML = (str) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body;
  };

  const convertCommentFromJSONToHTML = (text) => {
    return stateToHTML(convertFromRaw(JSON.parse(text)));
  };
  const getBookInfo = () => {
    const selectedBook = book.find((val) => val.ebno === selected);
    const title = selectedBook.title;
    const author = selectedBook.author;
    const date = selectedBook.date;
    const pageContent = selectedBook.pages[selectedPage];
    return (
      <div>
        <div className="home__book--title">
          <Title variant="primary-1" content={title} />
          <Text variant="primary-1" content={author} />
          {console.log(pageContent)}
          <div className="home__pageContent" dangerouslySetInnerHTML={{ __html: pageContent }}></div>
        </div>
      </div>
    );
  };
  return (
    <div className="home__book">
      {selected ? (
        getBookInfo()
      ) : (
        <div className="home__book--empty">Please select a book</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedPage: state.books.selectedPage,
  selected: state.books.selected,
  book: state.books.book,
});

export default connect(mapStateToProps)(Book);

import React from "react";
import { connect } from "react-redux";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const Book = ({ selected, book, selectedPage }) => {
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
          <Text variant="primary-1" content={pageContent} />
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

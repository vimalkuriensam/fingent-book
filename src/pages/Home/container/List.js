import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addSelected } from "../../../actions/books.action";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import { filter } from "../../../selectors/filter";

const List = ({ bookList, dispatch }) => {
  const setSelected = (id) => dispatch(addSelected({ selected: id }));
  return (
    <div className="home__lists">
      {bookList.map((lists, index) => (
        <div
          key={index}
          className="home__listDetails"
          onClick={setSelected.bind(this, lists.ebno)}
        >
          <div className="home__list">
            <Title className="home__list--title" variant="primary-2" content={lists.title} />
            -
            <Text className="home__list--author" variant="primary-1" content={lists.author} />
          </div>
          <div className="home__lists--date">
            {moment(lists.date).format("DD-MM-YYYY")}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: filter(state.books.book, state.filters.text, state.filters.sorting),
});

export default connect(mapStateToProps)(List);

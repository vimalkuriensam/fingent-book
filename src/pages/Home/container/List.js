import React from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { addSelected } from "../../../actions/books.action";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

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
            <Title variant="primary-2" content={lists.title} />
            -
            <Text variant="primary-1" content={lists.author} />
          </div>
          <div className="home__lists--date">{moment(lists.date).format('DD-MM-YYYY')}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.books.book,
});

export default connect(mapStateToProps)(List);

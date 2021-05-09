import React from "react";
import { connect } from "react-redux";
import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";

const List = ({ bookList }) => {
  return (
    <div className="home__lists">
      {bookList.map((lists, index) => (
        <div key={index} className="home__listDetails">
          <div className="home__list">
            <Title variant="primary-2" content={lists.title} />
            -
            <Text variant="primary-1" content={lists.author} />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.books,
});

export default connect(mapStateToProps)(List);

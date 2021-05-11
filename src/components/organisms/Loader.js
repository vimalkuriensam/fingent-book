import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";

const Loader = ({ loader, overide }) => (
  <Fragment>
    {(loader || overide) && (
      <div className="sk-loader-container">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    )}
  </Fragment>
);

const mapStateToProps = (state) => ({ loader: state.utils.loader });

export default connect(mapStateToProps)(Loader);

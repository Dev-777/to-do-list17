import React from "react";
import { connect } from "react-redux";

const StateHOC = (Component) => {
  const mapStateToProps = (state) => {
    return { state: state };
  };
  return connect(mapStateToProps)((props) => <Component {...props} />);
};

export default StateHOC;

import React from "react";
import "./Employees.css";

import { connect } from "react-redux";
import { loadEmployees } from "../store/actions/index.js";
import { withRouter } from "react-router";

const Employees = () => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadEmployees: () => dispatch(loadEmployees()()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Employees));

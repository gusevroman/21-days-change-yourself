import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Target from "./target/Target";

class HomeAuth extends React.Component {

  render() {
    return (
      <>
         <h2  style={{ textAlign: "center", margin: "30px 0px" }}>Tut component target</h2>
        <Target />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggined: state.isLoggined,
  login: state.login,
  allPoints: state.allPoints
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeAuth)
);

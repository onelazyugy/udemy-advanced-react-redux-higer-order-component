import React, { Component } from "react";
import { Link } from "react-router";

import { connect } from "react-redux";
import * as actions from "../actions";

class Test extends Component {
  render() {
    console.log('render Test');
    return (
      <div>Test page, have you logged in yet? {this.props.authenticated.toString()}</div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps from Test');
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Test);

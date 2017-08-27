import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import BodyTop from './bodyTop';

class Body extends Component {
  render() {
    console.log("render Body");
    return (
      <div>
          <BodyTop />
        Body page, have you logged in yet? {this.props.authenticated.toString()}<br />
        Body page, BobyTop clicked? {this.props.bobyTop.toString()}<br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps from Body");
  return { 
            authenticated: state.authenticated, 
            bobyTop: state.bobyTop
        };
}

export default connect(mapStateToProps, actions)(Body);

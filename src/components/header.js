import React, { Component } from "react";
import { Link } from "react-router";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticate } from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  authButton() {
    debugger;
    if (this.props.authenticated) {
      return (
        <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
      );
    }
    return (
      <button onClick={() => this.props.authenticate(true)}>Sign In</button>
    );
  }

  render() {
    console.log("render Header");
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/test">Test</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
          <li className="nav-item">
            <span>
              Login Status: {this.props.authenticated.toString()} | Body Top clicked: {this.props.bobyTop.toString()}
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps from Header");
  return {
    authenticated: state.authenticated,
    bobyTop: state.bobyTop
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

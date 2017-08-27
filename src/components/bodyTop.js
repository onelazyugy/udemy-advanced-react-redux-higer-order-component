import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bodyTopClicked } from "../actions";

class BodyTop extends Component {
  constructor(props) {
    super(props);
    this.bodyTopClick = this.bodyTopClick.bind(this);
  }

  bodyTopClick() {
    debugger;
    console.log("clicked");
    this.props.bodyTopClicked(true);
  }

  render() {
    debugger;
    console.log("render from Body");
    return (
      <div>
        <button onClick={this.bodyTopClick}>Body Top</button>
        <br />
        <label>
          Body Top, have you logged in yet?
          {this.props.authenticated.toString()}
        </label>
        <br />
        <label>Body Top clicked? {this.props.bobyTop.toString()}</label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  console.log("mapStateToProps from BodyTop");
  return { 
            authenticated: state.authenticated, 
            bobyTop: state.bobyTop
        };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bodyTopClicked }, dispatch);
}

export default connect(mapStateToProps, { bodyTopClicked })(BodyTop);

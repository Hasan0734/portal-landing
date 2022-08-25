import { LeftArrow } from "./../../assets/svg/svg";
import React, { Component } from "react";
import { withRouter } from "react-router";

class StaticButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.history.goBack(-1)}
          className="btn border border-2 px-3 py-1"
        >
          <LeftArrow />
        </button>
      </div>
    );
  }
}

export default withRouter(StaticButton);

import React, { Component } from "react";
import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="layout">
        <Banner />
        <div className="d-flex w-100">
          {/* sidebar start  */}
          <div className="sidebar">
            <LeftSide />
          </div>
        

          {/* main body section */}

          <main className="main_body">
            <h1>Hello world </h1>
          </main>
        </div>
      </div>
    );
  }
}

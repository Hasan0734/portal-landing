import React, { Component } from "react";
import "./Dipendenti.css";
import Banner from "../../Banner/Banner";
import LeftSide from "../../LeftSide/LeftSide";
import Team from "./Team";
import Tutti from "./Tutti";


export default class Dipendenti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tutti",
    };
  }

  handleTab = (name) => {
    this.setState({
      activeTab: name,
    });
  };
  render() {
    return (
      <>
        <div className="layout">
          <Banner />
          <div className="d-flex w-100">
            {/* sidebar start  */}
            <div className="sidebar">
              <LeftSide />
            </div>
            {/* sidebar end  */}

            {/* main body section  start*/}

            <main className="main_body">
              {/* pass the children */}
              {this.state.activeTab === "tutti" && (
                <Tutti
                  activeTab={this.state.activeTab}
                  handleTab={this.handleTab}
                />
              )}
              {this.state.activeTab === "team" && (
                <Team
                  activeTab={this.state.activeTab}
                  handleTab={this.handleTab}
                />
              )}
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

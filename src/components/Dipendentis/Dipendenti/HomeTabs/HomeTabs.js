import React, { Component } from "react";
import "./HomeTabs.css";

export default class HomeTabs extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="home_tab_area">
        <ul className="tabs d-flex gap-3 list-unstyled  w-100">
          <li className="tab_item">
            <button
              className={`tab_link ${
                this.props.activeTab === "tutti" ? "tav_active" : ""
              }`}
              onClick={() => this.props.handleTab("tutti")}
              
            >
              Tutti
            </button>
          </li>
          <li className="tab_item">
            <button
              className={`tab_link ${
                this.props.activeTab === "team" ? "tav_active" : ""
              }`}
              onClick={() => this.props.handleTab("team")}
              
            >
              Team
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

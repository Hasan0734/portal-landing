
import React, { Component } from "react";
import "./Tabs.css";

// const tabs = [
//   { title: "Profilo", hash: "profilo" },
//   { title: "Foglio Presenza", hash: "foglio-presenza" },
//   { title: "Busta Paga", hash: "busta-paga" },
//   { title: "Spese", hash: "spese" },
//   { title: "Rimborso Chilometrico", hash: "rimborso-chilmetrico" },
//   { title: "Ferie", hash: "ferie" },
// ];

export default class Tabs extends Component {

  render() {
    return (
      <div className="tab_area mt-4">
        <ul className="tabs d-flex gap-2 flex-wrap list-unstyled  w-100 m-0">
          {this.props.tabs.map((tab, i) => (
            <li key={i} className="tab_item">
              <button
                onClick={() => this.props.handleActive(tab.hash)}
                className={`tab_link
                
                 ${this.props.state.isActive === tab.hash ? 'tav_active' : ''} `}
                
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

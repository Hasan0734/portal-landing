import React, { Component } from "react";
import DipendentiPage from "./DipendentiPage";
import "./Dipendenti.css";
import Banner from "../../Banner/Banner";
import LeftSide from "../../LeftSide/LeftSide";


export default class Dipendenti extends Component {

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
              <DipendentiPage />
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

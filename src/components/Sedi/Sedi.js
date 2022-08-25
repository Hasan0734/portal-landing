import React, { Component } from "react";
import "./Sedi.css";
import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";
import SediTeam from "./SediTeam/SediTeam";
import AlertSedi from "./AlertSedi/AlertSedi";
import Headquaters from "./Headquaters/Headquaters";
export default class Sedi extends Component {
  render() {
    return (
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
            <div className="sedi_area">
              <div className="mt-4">
                <h3 className="title">Sedi Operative</h3>
                <p className="sub_title mt-2">
                  Imposta le sedi operative per poter pianificare gli <br />
                  orari più velocemente
                </p>
              </div>
              <Headquaters />
              <SediTeam />
              <div className="perosne_area mt-4">
                <h5 className="persone_title">Persone</h5>
                <h6 className="persone_total">11</h6>
              </div>
              <AlertSedi />
              <div className="perosne_area mt-4">
                <h5 className="persone_title">Team</h5>
                <h6 className="persone_title">Nessun team in questa sede</h6>
              </div>
              <div className="perosne_area mt-4">
                <h5 className="persone_title">Persone</h5>
                <h6 className="persone_total">11</h6>
              </div>
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { PeoplesIcon } from "../../assets/svg/svg";
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
            <div className="dashboard_area">
              <h3 className="title">
                Monitora tutte le attività qui in dashboard
              </h3>
              <h4 className="sub_title">
                Qui verranno visualizzate le tue notiche{" "}
              </h4>
              <div className="row mt-5">
                <div className="col-md-6 ">
                  <h4 className="content_title">ATTIVITA’</h4>
                  <div className="activities_area px-2 mt-4">
                    <ul className="mb-0 list-unstyled">
                      <li className="bg-white p-2 my-2">
                        <div className="d-flex justify-content-between">
                          <p className="top_title m-0">OGCI</p>
                          <p className="top_title m-0">09:00-18:00</p>
                        </div>
                        <h3 className="title mt-2">Pulizia scale</h3>
                        <div className="d-flex gap-2 mt-3">
                          <PeoplesIcon /> <h4 className="name">Team Servizi (6)</h4>
                        </div>
                      </li>
                      <li className="bg-white p-2 my-2">
                        <div className="d-flex justify-content-between">
                          <p className="top_title m-0">OGCI</p>
                          <p className="top_title m-0">09:00-18:00</p>
                        </div>
                        <h3 className="title mt-2">Pulizia scale</h3>
                        <div className="d-flex gap-2 mt-3">
                          <PeoplesIcon /> <h4 className="name">Team Servizi (6)</h4>
                        </div>
                      </li>
                      <li className="bg-white p-2 my-2">
                        <div className="d-flex justify-content-between">
                          <p className="top_title m-0">OGCI</p>
                          <p className="top_title m-0">09:00-18:00</p>
                        </div>
                        <h3 className="title mt-2">Pulizia scale</h3>
                        <div className="d-flex gap-2 mt-3">
                          <PeoplesIcon /> <h4 className="name">Team Servizi (6)</h4>
                        </div>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

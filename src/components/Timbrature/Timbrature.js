import React, { Component } from "react";
import "./Timbrature.css";
import { tableData } from "./dummyData";
import TimbratureFilter from "./TimbratureFilter/TimbratureFilter";
import LeftSide from "../LeftSide/LeftSide";
import Banner from "../Banner/Banner";
import TimbratureTable from "./TimbratureTable/TimbratureTable";

export default class Timbrature extends Component {
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
            <div className="timbrature_area">
              <div className="">
                <h3 className="title">Timbrature dei dipendenti</h3>
                <p className="sub_title">
                  Visualizza l’orario d’entrata e uscita.
                </p>
              </div>
              <div className="historical_tramping mt-4">
                <TimbratureFilter />
              </div>

              {/* Table */}

              {tableData.map((dt, i) => (
                <TimbratureTable key={dt.id} data={dt} />
              ))}

              <div className="timbrature_paginate d-flex gap-2 justify-content-center mt-4">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}

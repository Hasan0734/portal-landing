import React, { Component } from "react";
import {ChevronDown, Home, Person, StarIcon } from "../../../assets/svg/svg";
import TuttiForm from "./TuttiForm/TuttiForm";
import TuttiTable from "./TuttiTable/TuttiTable";

export default class Tutti extends Component {
  render() {
    return (
      <div>
        <TuttiForm />

        {/* table data ARCHIVIO  */}

        <div className="attivita_table_area">
          <h4 className="title">ARCHIVIO </h4>
          <div className="d-flex justify-content-end gap-1">
            <button className="btns rounded-start rounded-1">
              <StarIcon/> Tutti
            </button>
            <button className="btns">
              <Home/> <span className="mx-2">Sedi</span> <ChevronDown/>
            </button>
            <button className="btns rounded-end rounded-1">
              <Person/> <span className="mx-2">Persone</span><ChevronDown/>
            </button>
          </div>
          <TuttiTable />
        </div>
      </div>
    );
  }
}

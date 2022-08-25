import React, { Component } from "react";
import { Location } from "../../../../../assets/svg/svg";
import mapsImage from "../../../../../assets/maps.png";
import "./Headquarters.css";

export default class Headquarters extends Component {
  render() {
    return (
      <div className="headequarter_area">
        <div className="m-3 px-2 py-2 badge_area-sub">
          <h3 className="badge_title mt-4">RAGGIO DI TIMBRATURA GEO-APP</h3>
          <p className="content_text">Seleziona sede operativa</p>
          <div className="mt-4">
            <p className="portal_cafe">Portal Cafe</p>
            <button className="location_btn">
              <Location/> <span className="ms-2">Via delle More, 6</span>
            </button>
            <p className="content_text mt-3">Imposta raggio di timbratura</p>
            <span className="map_square">
              14 <span className="content_text">m</span>
            </span>
          </div>
        </div>
        <div className="mt-5 p-3">
          <div>
            <img className="w-100" src={mapsImage} alt="maps" />
          </div>
        </div>
      </div>
    );
  }
}

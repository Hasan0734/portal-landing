import React, { Component } from "react";
import { Plus } from "react-feather";
import "./Mansioni.css";

export default class Mansion extends Component {
  render() {
    return (
      <div className="mansioni_area mt-5">
        <h5 className="title mb-0">MANSIONIS</h5>

        <div className="area">
          <div className=" d-flex flex-wrap  gap-2">
            <button className="btns">Designer</button>
            <button className="btns">Cassiere</button>
            <button className="btns">Visual Merchandise</button>
            <button className="btns">Magazzinere</button>
            <button className="btns">Portiere</button>
            <button className="btns">Pulizie</button>
            <button className="btns">Cassiere</button>
            <button className="btns">Aiuto Cassa</button>
          </div>
          <button className="btns add mt-2"><Plus size={18}/> Aggiungi altre</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { TopologyIcon, WatchIcon } from "../../../../assets/svg/svg";
import { ferieData } from "./dummeData";
import FerieList from "./FerieList";
import "./FeriePermessi.css";
export default class FeriePermessi extends Component {
  render() {
    return (
      <div className="ferie_permessi">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <h3 className="title">VISUALIZZA FERIE E PERMESSI </h3>
            <div>
              <button className="total">{ferieData.length}</button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button className="spese_btn"><WatchIcon/> Ultimi 30 giorni</button>
            <button className="spese_btn"><TopologyIcon/> Tipologia </button>
          </div>
        </div>

        <div className="mt-5">
          <ul className="list-unstyled list_area">
            
            {/* header item */}
            <li className="list_item_header d-flex gap-6 py-3 px-3">
              <span className="list_h_text">Tipologia</span>
              <span className="list_h_text">Dal giorno</span>
              <span className="list_h_text">Dal Giorno</span>
              <span className="list_h_text">Dalle</span>
              <span className="list_h_text">Alle</span>
            </li>

            {/* body item data*/}
           {ferieData.map((data, i) => <FerieList key={i} data={data}/>)}
           
          </ul>
        </div>
      </div>
    );
  }
}

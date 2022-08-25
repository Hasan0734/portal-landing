import React, { Component } from "react";
import { CategoryIcon, WatchIcon } from "../../../../assets/svg/svg";
import ApprovateList from "./ApprovateList";
import { speseApprovate } from "../dummyData";

import "./SpeseApprovate.css";
export default class SpeseApprovate extends Component {
  render() {
    return (
      <div className="spese_approvate_area">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <h3 className="title">SPESE APPROVATE</h3>
            <div>
              <button className="total">{speseApprovate?.length}</button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button className="spese_btn"><WatchIcon/> Ultimi 30 giorni </button>
            <button className="spese_btn"><CategoryIcon/> Categoria </button>
          </div>
        </div>

        {speseApprovate?.length > 0 && (
          <div className="list_area mt-5">
            <ul className="list-unstyled ">
              {speseApprovate?.map((dt, i) => (
                <ApprovateList key={i} data={dt} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

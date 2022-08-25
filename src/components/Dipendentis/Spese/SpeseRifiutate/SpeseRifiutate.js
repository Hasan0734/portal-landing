import React, { Component } from "react";
import { CategoryIcon, WatchIcon } from "../../../../assets/svg/svg";
import { speseRifiutate } from "../dummyData";
import "./SpeseRifiutate.css";
import SpeseRifiutateList from "./SpeseRifiutateList";

export default class SpeseRifiutate extends Component {
  render() {
    return (
      <div className="spese_rifiutate_area">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <h3 className="title">SPESE RIFIUTATE</h3>
            <div>
              <button className="total">{speseRifiutate?.length}</button>
            </div>
          </div>
          {speseRifiutate?.length > 0 && <div className="d-flex gap-3">
            <button className="spese_btn"><WatchIcon/> Ultimi 30 giorni </button>
            <button className="spese_btn"><CategoryIcon/> Categoria </button>
          </div>}
        </div>

        {speseRifiutate?.length > 0 && (
          <div className="list_area mt-5">
            <ul className="list-unstyled ">
              {speseRifiutate?.map((dt, i) => (
                <SpeseRifiutateList key={i} data={dt} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

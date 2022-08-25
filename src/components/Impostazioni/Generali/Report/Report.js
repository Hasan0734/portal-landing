import React, { Component } from "react";
import "./Report.css";
import { ChevronDown } from "react-feather";
export default class Report extends Component {
  render() {
    return (
      <div className="report_area mt-4">
        <h5 className="title mb-0">NOTIFICHE E REPORTS</h5>
        <p className="subtitle">Imposta report automatici</p>

        <form className="mt-4">
          <div className="d-flex align-items-end gap-2 justify-content-between">
            <div>
              <label className="label_text">Seleziona file xls</label>
              <br />
              <button className="select_btn">
                Timbrature <ChevronDown />
              </button>
            </div>
            <div>
              <h6 className="to_title">da inviare a </h6>
            </div>
            <div>
              <label className="label_text">Email</label>
              <br />
              <input type="text" className="input_box" />
            </div>
            <div>
              <h6 className="to_title">con cadenza</h6>
            </div>
            <div>
              <label className="label_text">Seleziona</label>
              <br />
              <button className="select_btn">
              Mesile <ChevronDown />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

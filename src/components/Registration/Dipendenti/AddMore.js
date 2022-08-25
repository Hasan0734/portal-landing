import React, { Component } from "react";
import './Dipendenti.css'
export default class AddMore extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-md-3 ">
          <div className="">
            <label className="label_title">Nome</label>
            <br />
            <input type="text" className="input_box w-100" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="label_title">Cognome</label>
            <br />
            <input type="text" className="input_box w-100" />
          </div>
        </div>
        <div className="col-md-4">
          <label className="label_title">Email</label>
          <br />
          <input type="text" className="input_box w-100" />
        </div>
        <div className="col-md-2">
          <label className="label_title">Sede</label>
          <br />
          <select className="input_select w-100">
            <option>Portal Café</option>
            <option>Portal Café</option>
            <option>Portal Café</option>
          </select>
        </div>
      </div>
    );
  }
}

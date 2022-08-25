import React, { Component } from "react";
import { EditIcon } from "../../../../assets/svg/svg";
import "./InforForm.css";

export default class InfoForm extends Component {
  render() {
    return (
      <>
        <form className="impostazioni_form_area">
          <div className="d-flex justify-content-between mt-5 mb-4">
            <h4 className="title">ACCOUNT MANAGER</h4>
            <button className="edit_btn"><EditIcon/> Modifica</button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="label_text">Nome</label>
              <br />
              <input
                className="input_box"
                type="text"
                value="Eleonora"
                readOnly
              />
            </div>
            <div className="col-md-4">
              <label className="label_text">Cognome</label>
              <br />
              <input
                className="input_box"
                type="text"
                value="Galluzzo"
                readOnly
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <label className="label_text">Email</label>
              <br />
              <a className="input_box" href="#mail">
                sandra@getportal.ai
              </a>
            </div>
            <div className="col-md-4">
              <label className="label_text">Numero di telefono</label>
              <br />
              <input
                className="input_box"
                type="number"
                value="366200000"
                readOnly
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="label_text">Password</label>
            <br />
            <input
              className="input_box"
              type="password"
              value="366200000"
              readOnly
            />
          </div>
          <div className="mt-2">
            <a href="/cambia-password" className="label_link">
              cambia password
            </a>
            <br />
            <a href="/recupera-password" className="label_link">
              recupera password
            </a>
          </div>
        </form>
      </>
    );
  }
}

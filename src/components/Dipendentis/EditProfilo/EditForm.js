import React, { Component } from "react";

export default class EditForm extends Component {
  render() {
    return (
      <div className="edit_form_area">
        <div className="d-flex justify-content-between pt-5">
          <h3 className="pro_name pt-3">Sandra Sabia</h3>
        </div>
        <div className="pt-4">
          <div className="row  ">
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Email
                </label>
                <input type="text" id="email" className="input_value" />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="telephone" className="label_text ">
                  Numero di telefono
                </label>
                <input type="text" id="telephone" className="input_value" />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="telephone" className="label_text ">
                  Geo App
                </label>
                <br />
                <label class="switch mt-3">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <br />
          <hr className="border" />

          <div className="row ">
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Mansione
                </label>
                <br />
                <select className="from_select">
                  <option>Designer</option>
                  <option>Developer</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Team di Appartenenza
                </label>
                <br />
                <select className="from_select">
                  <option>Seleziona</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Sede Lavorativa
                </label>
                <br />
                <select className="from_select">
                  <option>Portal Cafe</option>
                </select>
              </div>
            </div>
          </div>

          <br />
          <hr className="border" />

          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Tipo Contratto
                </label>
                <br />
                <select className="from_select">
                  <option>Full time</option>
                  <option>Part time</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="email" className="label_text ">
                  Ore da contratto
                </label>
                <input
                  type="number"
                  id="telephone"
                  className="input_value w-50"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="id" className="label_text ">
                  ID
                </label>
                <br />
                <input type="text" id="id" className="input_value w-50" />
              </div>
            </div>
          </div>

          <br />
          <hr className="border" />

          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="id" className="label_text ">
                  RAL
                </label>
                <br />
                <input type="text" id="id" className="input_value" />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="id" className="label_text ">
                  Inzio Contratto
                </label>
                <input type="date" id="id" className="input_value" />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="id" className="label_text ">
                  Fine Contratto
                </label>
                <input type="date" id="id" className="input_value" />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="email" className="label_text ">
                  Responsabile
                </label>
                <br />
                <select className="from_select">
                  <option>Full time</option>
                  <option>Part time</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-check mt-4">
                <input id="periodo" className="form-check-input" type="checkbox"/>
                <label htmlFor="periodo" className="label_text ms-2">
                  Periodo di Prova
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="id" className="label_text ">
                  Inizio Prova
                </label>
                <br/>
                <input type="date" id="id" className="input_value" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
              <label htmlFor="id" className="label_text ">
                  Fine Prova
                </label>
                <br/>
                <input type="date" id="id" className="input_value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

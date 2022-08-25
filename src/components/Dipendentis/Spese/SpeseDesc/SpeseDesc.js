import React, { Component } from "react";
import "./SpesDesc.css";
export default class SpeseDesc extends Component {
  render() {
    return (
      <div className="col-md-4">
        <form className="desc_area">
          <div className="desc_content">
            <h4 className="title">Descrizione</h4>
            <p className="content">
              Trasferta da Milano a Monza
              <br />
              per cliente xyz
            </p>
          </div>

          <div className="mt-5">
            <label className="label">Inserisci costo rimborsato</label>
            <br/>
            <input className="input_field w-50 mt-1" type="text" />
          </div>
          <div className="mt-5 d-flex justify-content-end">
            <button className="submit_btn">Approva</button>
          </div>
        </form>
      </div>
    );
  }
}

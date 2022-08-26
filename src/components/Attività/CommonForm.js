import React, { Component } from "react";
import { UploadIcon } from "../../assets/svg/svg";

export default class CommonForm extends Component {
  render() {
    return (
      <div>
        <form className="activities_from_area">
          <div className="row mt-5">
            <div className="col-md-6">
              {this.props.children}
              {/* <div className="mb-2">
                <label className="input_label">Seleziona</label>
                <br />
                <select className="seleziona">
                  <option>Portal Cafe</option>
                  <option>Portal Cafe</option>
                  <option>Portal Cafe</option>
                </select>
              </div> */}
              <div>
                <label className="input_label">Nome Attività</label>
                <br />
                <input className="input_box w-75" type="text" />
              </div>
              <div className="mt-3">
                <label className="input_label">Descrizione</label>
                <br />
                <textarea
                  rows={5}
                  className="input_box w-75"
                  type="text"
                ></textarea>
              </div>
              <div className="d-flex gap-3">
                <div className="mt-3">
                  <label className="input_label">Da</label>
                  <br />
                  <input className="input_box" type="date" />
                </div>
                <div className="mt-3">
                  <label className="input_label">Al</label>
                  <br />
                  <input className="input_box" type="date" />
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="mt-3">
                  <label className="input_label">Inizia alle</label>
                  <br />
                  <input className="input_box" type="time" />
                </div>
                <div className="mt-3">
                  <label className="input_label">Termina alle</label>
                  <br />
                  <input className="input_box" type="time" />
                </div>
              </div>
              <div className="d-flex justify-content-end gap-2 mt-5">
                <button className="form_btn reset_btn" type="reset">
                  Annulla
                </button>
                <button className="form_btn submit_btn" type="submit">
                  Invia
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="file_up_top mt-3">
                <label
                  htmlFor="file"
                  className="file_upload_area text-center p-3"
                >
                  <div className="d-flex justify-content-center">
                    <div className="px-2 py-3 badge_area_sub">
                      <div className="upload_icon rounded-circle p-2">
                        <UploadIcon />
                      </div>
                    </div>
                  </div>
                  <p className="upload_text mb-0">CARICA QUI IL CONTRATTO</p>
                  <p className="text mb-0">
                    O <span className="text_highlight">scegli un file</span> da
                    caricare
                  </p>
                </label>
                <input className="d-none" id="file" type="file" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

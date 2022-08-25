import React, { Component } from "react";
import { X } from "react-feather";
import {
  DownloadIcon,
  EuroIcon,
  JPGIcon,
  UploadIcon,
} from "../../../../assets/svg/svg";
import Modals from "../../../Modal/Modals";
import "./AggiungiSpesa.css";

export default class AggiungiSpesa extends Component {
  render() {
    return (
      <>
        <Modals trigger={this.props.trigger} size="xl">
          <div className="note_modal p-5">
            <div className="text-end">
              <button
                onClick={() => this.props.handleTrigger()}
                className="close_btn border-0 outline-none bg-transparent"
              >
                <X />
              </button>
            </div>

            <form className="nuovo_rimborso_form">
              <h4 className="title">Nuovo rimborso</h4>
              <div className="row">
                <div className="col-md-6 pe-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <label className="label">Data</label>
                        <br />
                        <input className="input_field w-75" type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label className="label">Proprietà</label>
                        <br />
                        <select className="input_field w-75">
                          <option>Seleziona</option>
                          <option>Seleziona</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-3 position-relative">
                        <label className="label">Veicolo</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-3 position-relative">
                        <label className="label">Targa</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-3 position-relative">
                        <label className="label">Partenza</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-3 position-relative">
                        <label className="label">Arrivo</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div class="form-check mt-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Andata e ritorno
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-3 position-relative">
                        <label className="label">Partenza</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-3 position-relative">
                        <label className="label">Arrivo</label>
                        <br />
                        <input className="input_field w-100" type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 p-4">
                  <div className="p-5 uploads_top">
                    <label
                      htmlFor="spese_file"
                      className="upload_area text-center w-100"
                    >
                      <div className="d-flex justify-content-center">
                        <div className="m-4 px-2 py-3 badge_area_sub">
                          <div className="upload_icon rounded-circle p-3">
                            <UploadIcon />
                          </div>
                        </div>
                      </div>
                      <p className="upload_text">CARICA QUI IL CONTRATTO</p>
                      <p className="text">
                        O <span className="text_highlight">scegli un file</span>{" "}
                        da caricare
                      </p>
                    </label>

                    <input className="d-none" id="spese_file" type="file" />
                  </div>

                  <div className="">
                    <div className="mt-3">
                      <label className="label mb-3">Allegati</label>
                      <br />
                      <a className="allegati_btn" href="#down" download>
                        <JPGIcon /> Fattura Taxi 11/0... <DownloadIcon />
                      </a>
                      <br />
                    </div>

                    <div className="d-flex gap-4">
                      <div className="mt-3 position-relative">
                        <label className="label">Costo sostenuto</label>
                        <br />
                        <input
                          className="input_field"
                          type="text"
                          style={{ width: "60%" }}
                        />
                        <span className="position-absolute currency_icon">
                          <EuroIcon />
                        </span>
                      </div>

                      <div className="mt-3 position-relative">
                        <label className="label">Costo rimbarsato</label>
                        <br />
                        <input
                          className="input_field"
                          type="text"
                          style={{ width: "60%" }}
                        />
                        <span className="position-absolute currency_icon">
                          <EuroIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-5">
                    <button
                      onClick={() => this.props.handleTrigger()}
                      className="border-0 outline-none ok_btn"
                    >
                      Salava
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modals>
      </>
    );
  }
}

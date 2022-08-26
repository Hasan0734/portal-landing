import React, { Component } from "react";
import mapsImage from "../../../assets/maps.png";
import { Location, UploadIcon } from "../../../assets/svg/svg";
import LeftSide from "../../LeftSide/LeftSide";
import Banner from "../../Banner/Banner";
import Form from "./Form";


export default class NewTutti extends Component {
  render() {
    return (
      <div className="layout">
        <Banner />
        <div className="d-flex w-100">
          {/* sidebar start  */}
          <div className="sidebar">
            <LeftSide />
          </div>
          {/* sidebar end  */}

          {/* main body section  start*/}
          <main className="main_body">
            <div className="new_tutti">
              <h2 className="title">Nuova anagrafica dipendente</h2>
              <p className="sub_title">Lorem ipsum</p>
              <form className="form">
                <div className="row">
                  <div className="col-8">
                    {/* form area */}
                    <Form />
                  </div>
                  <div className="col-4">
                    <div className="px-2">
                      {/* <Headquarters /> */}

                      <div className="headequarter_area">
                        <div className="m-3 px-2 py-2 badge_area-sub">
                          <h3 className="badge_title mt-4">
                            RAGGIO DI TIMBRATURA GEO-APP
                          </h3>
                          <p className="content_text">
                            Seleziona sede operativa
                          </p>
                          <div className="mt-4">
                            <p className="portal_cafe">Portal Cafe</p>
                            <button className="location_btn">
                              <Location />{" "}
                              <span className="ms-2">Via delle More, 6</span>
                            </button>
                            <p className="content_text mt-3">
                              Imposta raggio di timbratura
                            </p>
                            <span className="map_square">
                              14 <span className="content_text">m</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-5 p-3">
                          <div>
                            <img className="w-100" src={mapsImage} alt="maps" />
                          </div>
                        </div>
                      </div>

                      {/* ContactUpload */}

                      <div className="pb-3">
                        <label
                          htmlFor="contact_file"
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
                            O{" "}
                            <span className="text_highlight">
                              scegli un file
                            </span>{" "}
                            da caricare
                          </p>
                        </label>

                        <input
                          className="d-none"
                          id="contact_file"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit_btn_area text-center d-flex gap-2 justify-content-center">
                  <button type="cencel" className="annulla_btn">
                    Annulla
                  </button>
                  <button type="submit" className="submit_btn">
                    Salva
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

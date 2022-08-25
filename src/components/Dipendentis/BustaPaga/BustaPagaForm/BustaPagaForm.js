import React, { Component } from "react";
import { withRouter } from "react-router";
import { EuroIcon, UploadIcon } from "../../../../assets/svg/svg";
import "./BustaPafaForm.css";

 class BustaPagaForm extends Component {
  render() {
        const {
          match: {
            params: { tuttiName },
          },
        } = this.props;
    return (
      <form className="form_busta">
        <div className="row">
          <div className="col-md-7">
            <div>
              <div className="my-5">
                <h2 className="name">{ tuttiName}</h2>
                <h2 className="title">CARICA E CONDIVIDI BUSTA PAGA</h2>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="me-2">
                    <label className="label_text" htmlFor="importo">
                      Importo
                    </label>
                    <br />
                    <input
                      className="input_field"
                      id="importo"
                      type={"text"}
                    />
                    <span className="input_group_icon">
                      <EuroIcon/>
                    </span>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="d-flex gap-6">
                    <div className="">
                      <label className="label_text">Mese di competenza</label>
                      <br />
                      <select className="form_select" id="mese_di_competenza<">
                        <option>Agosto</option>
                      </select>
                    </div>
                    <div className="">
                      <label className="label_text" htmlFor="data_missione">
                        Data Emissione
                      </label>
                      <br />
                      <input
                        className="form_date"
                        id="data_missione "
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-5 file_up_top mt-5">
              <label
                htmlFor="file"
                className="file_upload_area text-center w-100"
              >
                <div className="d-flex justify-content-center">
                  <div className="m-4 px-2 py-3 badge_area_sub">
                    <div className="upload_icon rounded-circle p-3">
                      <UploadIcon/>
                    </div>
                  </div>
                </div>
                <p className="upload_text">CARICA QUI IL CONTRATTO</p>
                <p className="text">
                  O <span className="text_highlight">scegli un file</span> da
                  caricare
                </p>
              </label>
              <input className="d-none" id="file" type="file" />
            </div>
            <div className="text-center pt-4 px-5 d-flex justify-content-end">
              <button className="form_submit">Salava</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default withRouter(BustaPagaForm)


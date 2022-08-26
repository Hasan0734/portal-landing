import React, { Component } from "react";
import { withRouter } from "react-router";
import { DownloadIcon, EditIcon, PDFIcon } from "../../../../assets/svg/svg";

class ProfiloDetails extends Component {
  render() {
    const {match: { params: { tuttiName }}} = this.props;
    
    return (
      <div className="pro_detail_area">
        <div className="d-flex justify-content-between pt-5">
          <h3 className="pro_name pt-3">{tuttiName}</h3>
          <div>
            <button
              onClick={() => this.props.handleEdit()}
              className="modify_btn"
            >
              <EditIcon /> <span className="">Modifica</span>
            </button>
          </div>
        </div>
        <div className="pt-4">
          <div className="row  ">
            <div className="col-md-4">
              <div>
                <p className="label_text">Email</p>
                <p className="detail_value">sandra@getportal.ai</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">Numero di telefono</p>
                <p className="detail_value">366200000</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">Geo App</p>
                <p className="detail_value">Sì</p>
              </div>
            </div>
          </div>
          <br />
          <hr className="border" />
          <div className="row ">
            <div className="col-md-4">
              <div>
                <p className="label_text">Mansione</p>
                <p className="detail_value">Ux Designer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">Team di Appartenenza</p>
                <p className="detail_value">Designers</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">Sede Lavorativa</p>
                <p className="detail_value">Portal Office</p>
              </div>
            </div>
          </div>

          <br />
          <hr className="border" />

          <div className="row">
            <div className="col-md-4">
              <div>
                <p className="label_text">Tipo Contratto</p>
                <p className="detail_value">Full time</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">Ore da contratto</p>
                <p className="detail_value">6</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className="label_text">ID</p>
                <p className="detail_value">CDFASD</p>
              </div>
            </div>
          </div>

          <br />
          <hr className="border" />

          <div className="row">
            <div className="col-md-6">
              <div>
                <p className="label_text">RAL</p>
                <p className="detail_value">-</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="label_text">Inzio - Fine Contratto</p>
                <p className="detail_value">02/05/2022 - 02/05/2025</p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div>
                <p className="label_text">Responsabile</p>
                <p className="detail_value">Roberto Fazio</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="label_text">Periodo di Prova</p>
                <p className="detail_value">02/05/2022 - 02/06/2025</p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div>
                <p className="label_text mb-4">Contratto</p>

                <a
                  className="download_btn_area detail_value"
                  href="#download"
                  download
                >
                  <PDFIcon />
                  <span className="mx-3">file name</span>
                  <DownloadIcon />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="label_text">Aggiunto il</p>
                <p className="detail_value">02/05/21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfiloDetails);

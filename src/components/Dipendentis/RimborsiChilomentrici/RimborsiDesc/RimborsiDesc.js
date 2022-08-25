import React, { Component } from "react";
import "./RimborsiDesc.css";
import image from "./../../../../assets/receipt.png";
import { DownloadIcon, EuroIcon } from "../../../../assets/svg/svg";
export default class RimborsiDesc extends Component {
  render() {
    return (
      <div className="col-md-4">
        <form className="desc_area">
          <div className="desc_content">
            <h4 className="title">Descrizione</h4>
            <p className="content">
              Trasferta da Milano a Monza per cliente xyz
            </p>
          </div>

          <div>
            <div className="mt-5">
              <label className="label mb-1">Anteprima allegato</label>
              <br />
              <div
                className="border d-flex justify-content-between align-items-end p-2"
                style={{ width: "250px", height: "250px" }}
              >
                <img src={image} alt="images" />
                <a
                  href="#down"
                  download
                  className="bg-transparent border-0 outline-none"
                >
                 <DownloadIcon/>
                </a>
              </div>
            </div>
            <div
              className="d-flex justify-content-center gap-2 mt-3"
              style={{ width: "250px" }}
            >
              <button type="button" className="images_btn active_btn ">
                1
              </button>
              <button type="button" className="images_btn ">
                2
              </button>
            </div>
          </div>

          <div className="mt-5 position-relative">
            <label className="label">Inserisci costo rimborsato</label>
            <br />
            <input className="input_field w-25 mt-1" type="text" />
            <span
              className="position-absolute"
              style={{ top: "40px", left: "87px" }}
            >
              <EuroIcon/>
            </span>
          </div>
          <div className="mt-5 d-flex justify-content-end">
            <button className="submit_btn">Approva</button>
          </div>
        </form>
      </div>
    );
  }
}

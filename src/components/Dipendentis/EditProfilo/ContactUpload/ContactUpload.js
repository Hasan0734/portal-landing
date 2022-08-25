import React, { Component } from "react";
import { UploadIcon } from "../../../../assets/svg/svg";
import "./ContactUpload.css";

export default class ContactUpload extends Component {
  render() {
    return (
      <div className="pb-3">
        <label htmlFor="contact_file" className="upload_area text-center w-100">
          <div className="d-flex justify-content-center">
            <div className="m-4 px-2 py-3 badge_area_sub">
              <div className="upload_icon rounded-circle p-3"><UploadIcon/></div>
            </div>
          </div>
          <p className="upload_text">CARICA QUI IL CONTRATTO</p>
          <p className="text">O <span className="text_highlight">scegli un file</span> da caricare</p>
        </label>

        <input className="d-none" id="contact_file" type="file" />
      </div>
    );
  }
}

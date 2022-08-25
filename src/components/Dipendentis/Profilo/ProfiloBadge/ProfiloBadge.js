import React, { Component } from "react";
import "./ProfiloBadge.css";
import qrCode from "../../../../assets/qr.png";
import { MailIcon } from "../../../../assets/svg/svg";
export default class ProfiloBadge extends Component {
  render() {
    return (
      <div className="badge_area d-flex justify-content-center">
        <div className="m-4 px-2 py-3 badge_area-sub">
          <h3 className="badge_title">Digital Badge Sandra Sabia</h3>
          <div className="badge_qr mt-4">
            <img className="w-100" src={qrCode} alt="qr code" />
          </div>
          <div className="text-center mt-5">
            <a className="common_btn main_btn" href="#mail"><MailIcon/> <span>Invia per email</span></a>
            <p className="sub_text mt-5">Il Badge verrà inviato a sandra@getportal.ai</p>
          </div>
        </div>
      </div>
    );
  }
}

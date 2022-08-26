import React, { Component } from "react";
import ProfiloDetails from "./ProfiloDetails";
import qrCode from "../../../../assets/qr.png";
import { MailIcon } from "../../../../assets/svg/svg";
import logo from "../../../../assets/logo-outlined.svg";
import EditProfilo from "../../EditProfilo/EditProfilo";

export default class DipendentiProfilo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  handleEdit = () => {
    this.setState({ isEdit: true });
  };
  render() {
    return (
      <>
        {!this.state.isEdit && (
          <div className="mt-3">
            <div className="row">
              <div className="col-8">
                <ProfiloDetails handleEdit={this.handleEdit} />
              </div>
              <div className="col-4">
                <div className="px-2 profile_badge_area">
                  {/* profilo badge */}

                  <div className="badge_area d-flex justify-content-center">
                    <div className="m-4 px-2 py-3 badge_area-sub">
                      <h3 className="badge_title">
                        Digital Badge Sandra Sabia
                      </h3>
                      <div className="badge_qr mt-4">
                        <img className="w-100" src={qrCode} alt="qr code" />
                      </div>
                      <div className="text-center mt-5">
                        <a className="common_btn main_btn" href="#mail">
                          <MailIcon /> <span>Invia per email</span>
                        </a>
                        <p className="sub_text mt-5">
                          Il Badge verrà inviato a sandra@getportal.ai
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CredenzialiGeoApp  */}
                  <div className="app_area d-flex justify-content-center text-center mt-2">
                    <div className="m-4 px-2 py-3">
                      <h3 className="badge_title">
                        Digital Badge Sandra Sabia
                      </h3>
                      <div className="badge_qr ">
                        <img className="w-50" src={logo} alt="qr code" />
                      </div>
                      <div className="text-center mt-5">
                        <a className="common_btn main_btn" href="#mail">
                          <MailIcon /> <span>Invia per email</span>
                        </a>
                        <p className="sub_text mt-5">
                          Riceverà le credenziali per entrare nell’app a
                          sandra@getportal.ai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.isEdit && <EditProfilo />}
      </>
    );
  }
}

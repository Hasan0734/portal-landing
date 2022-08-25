import React, { Component } from "react";
import "./DipendentiProfilo.css";
import ProfiloDetails from "./ProfiloDetails/ProfiloDetails";
import ProfiloBadge from "./ProfiloBadge/ProfiloBadge";
import CredenzialiGeoApp from "./CredenzialiGeoApp/CredenzialiGeoApp";
import EditProfilo from "../EditProfilo/EditProfilo";

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
                  <ProfiloBadge />
                  <CredenzialiGeoApp />
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

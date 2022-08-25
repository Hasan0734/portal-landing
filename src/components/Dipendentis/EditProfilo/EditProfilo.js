import React, { Component } from "react";
import ContactUpload from "./ContactUpload/ContactUpload";
import EditForm from "./EditForm/EditForm";
import Headquarters from "./Headquarters/Headquarters";
import "./EditProfilo.css";

export default class EditProfilo extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <div className="row">
            <div className="col-8">
              {/* form area */}
              <EditForm />
            </div>
            <div className="col-4">
              <div className="px-2">
                <Headquarters />
                <ContactUpload />
              </div>
            </div>
          </div>

          <div className="submit_btn_area text-center d-flex gap-2 justify-content-center">
            <button type="cencel" className="annulla_btn">Annulla</button>
            <button type="submit" className="submit_btn">Salva</button>
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import ContactUpload from "./ContactUpload/ContactUpload";
import Headquarters from "./Headquarters/Headquarters";
import "./NewTutti.css";
import Form from "./Form/Form";
import LeftSide from "../../../LeftSide/LeftSide";
import Banner from "../../../Banner/Banner";

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
                      <Headquarters />
                      <ContactUpload />
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

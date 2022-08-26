import React, { Component } from "react";
import { X } from "react-feather";
import Modals from "../../../Modal/Modals";
export default class AggiungiNuovo extends Component {
  render() {
    return (
      <>
        <Modals trigger={this.props.trigger} size="lg">
          <div className="note_modal p-5">
            <div className="text-end">
              <button
                onClick={() => this.props.handleTrigger()}
                className="close_btn"
              >
                <X />
              </button>
            </div>

            <form className="nuova_ferie_form">
              <h4 className="title">Aggiungi nuovo</h4>
              <div className="d-flex gap-3 flex-wrap w-75">
                <div>
                  <label className="label">Tipo</label>
                  <br />
                  <select className="input_field">
                    <option>Ferie</option>
                  </select>
                </div>

                <div>
                  <label className="label">Da</label>
                  <br />
                  <input type="date" className="input_field" />
                </div>

                <div className="">
                  <label className="label">Al</label>
                  <br />
                  <input className="input_field" type="date" />
                </div>
                
                <div>
                  <label className="label">Dalle ore</label>
                  <br />
                  <input type="time" className="input_field" />
                </div>

                <div className="">
                  <label className="label">Alle ore</label>
                  <br />
                  <input className="input_field" type="time" />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button
                  onClick={() => this.props.handleTrigger()}
                  className="border-0 outline-none ok_btn"
                >
                  Salava
                </button>
              </div>
            </form>
          </div>
        </Modals>
      </>
    );
  }
}

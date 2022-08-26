import React, { Component } from "react";
import { X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import Modals from "../Modal/Modals";


export default class AddSedi extends Component {
  render() {
    return (
      <Modals trigger={this.props.trigger} size=" ">
        <OutsideClickHandler
          onOutsideClick={() => {
            this.props.handleTrigger();
          }}
        >
          <div className="p-4 sede_edit">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3 className="title">Modifica sede esistente</h3>
              </div>
              <div className="">
                <span
                  className="cursor-pointer"
                  onClick={() => this.props.handleTrigger()}
                >
                  {" "}
                  <X size={30} />
                </span>
              </div>
            </div>

            <form className="mt-3">
              <div className="">
                <label className="input_label">Nome</label>
                <br />
                <input
                  className="input_box w-50"
                  
                  type="text"
                />
              </div>
              <div className="mt-2">
                <label className="input_label">Indirizzo</label>
                <br />
                <input
                  className="input_box w-75"
                 
                  type="text"
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="submit_btn">Salva</button>
              </div>
            </form>
          </div>
        </OutsideClickHandler>
      </Modals>
    );
  }
}

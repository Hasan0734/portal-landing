import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Modals from "../../Modal/Modals";
import alertImg from "../../../assets/alertImg.svg";
import "./AlertModal.css";
import { X } from "react-feather";

export default class AlertModal extends Component {
  render() {
    return (
      <Modals trigger={this.props.trigger} size=" ">
        <OutsideClickHandler
          onOutsideClick={() => {
            this.props.handleTrigger();
          }}
        >
          <div className="p-4 sede_alert">
            <div className="d-flex justify-content-end">
              <span
                className="cursor-pointer"
                onClick={() => this.props.handleTrigger()}
              >
                {" "}
                <X />
              </span>
            </div>
            <div className="mt-5">
              <div className=" d-flex justify-content-center">
                <img src={alertImg} alt="alert logo" />
              </div>
              <div className="text-center">
                <h3 className="title">ATTENZIONE</h3>
                <p className="sub_title">
                  Sei sicuro di voler cancellare questa sede?
                </p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <button
                  onClick={() => this.props.handleTrigger()}
                  className="btn"
                >
                  Annulla
                </button>
                <button className="confirm_btn">Cancella</button>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </Modals>
    );
  }
}

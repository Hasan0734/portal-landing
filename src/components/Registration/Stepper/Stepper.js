import React, { Component } from "react";
import partyPopper from "../../../assets/party-popper.png";
import "./Stepper.css";
export default class Stepper extends Component {
  render() {
    return (
      <>
        <div className="stepper_nav">
          <ul className="mb-0 list-unstyled d-flex justify-content-between">
            {/* step title 1*/}
            <li
              className={`step_progress ${
                this.props.step === 0 ? "active" : ""
              }`}
            >
              <span className="m-1">1</span>
              <span
                className={`m-1 title ${this.props.step === 0 ? "active" : ""}`}
              >
                Azienda e ruoli
              </span>
            </li>
            {/* dashed 1*/}
            <li className="d-flex align-items-center">
              <div
                className={`step_dash ${this.props.step === 0 ? "active" : ""}`}
              >
                ----------
              </div>
            </li>
            {/* step title 2*/}
            <li
              className={`step_progress ${
                this.props.step === 1 ? "active" : ""
              }`}
            >
              <span className="m-1">2</span>
              <span
                className={`m-1 title ${this.props.step === 1 ? "active" : ""}`}
              >
                Sedi lavorative
              </span>
            </li>
            {/* dashed 2*/}
            <li className="d-flex align-items-center">
              <div
                className={`step_dash ${this.props.step === 1 ? "active" : ""}`}
              >
                ----------
              </div>
            </li>
            {/* step title 3 */}
            <li
              className={`step_progress ${
                this.props.step === 2 ? "active" : ""
              }`}
            >
              <span className="m-1">3</span>
              <span
                className={`m-1 title ${this.props.step === 2 ? "active" : ""}`}
              >
                Dipendenti
              </span>
            </li>
            {/* dashed 3*/}
            <li className="d-flex align-items-center">
              <div
                className={`step_dash ${this.props.step === 2 ? "active" : ""}`}
              >
                ----------
              </div>
            </li>
            {/* step title 4 */}
            <li
              className={`step_progress ${
                this.props.step === 3 ? "active" : ""
              }`}
            >
              <span className="m-1">
                <img src={partyPopper} alt="party popper" />
              </span>
              <span
                className={`m-1 title ${this.props.step === 3 ? "active" : ""}`}
              >
                Tutto pronto!
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

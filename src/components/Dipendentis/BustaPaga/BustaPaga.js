import React, { Component } from "react";
import Archivio from "./Archivio/Archivio";
import "./BustaPaga.css";
import BustaPagaForm from "./BustaPagaForm/BustaPagaForm";

export default class BustaPaga extends Component {
  render() {
    return (
      <div className="busta_paga">
        <div className="row">
          <BustaPagaForm />
          <Archivio />
        </div>
      </div>
    );
  }
}

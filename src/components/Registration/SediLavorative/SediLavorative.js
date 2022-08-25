import React, { Component } from "react";
import { Plus } from "react-feather";
import "./SediLavorative.css";
export default class SediLavorative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInput: [],
      workspace: "",
      operano: "",
    };
  }

  handleAddMore() {
    this.setState({
      moreInput: [...this.state.moreInput, this.state.moreInput.length + 1],
    });
  }

  handleSelect(name, type) {
    if (type === "workspace") {
      this.setState({
        workspace: name,
      });
    }
    if (type === "operano") {
      this.setState({
        operano: name,
      });
    }
  }

  render() {
    return (
      <div className="sedi_form p-3 pt-5">
        <h3 className="title">Personalizza la tua esperienza</h3>
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <label className="label_title">
                Quante sedi lavorative ci sono?
              </label>
              <div className="d-flex gap-2 justify-content-between">
                <div
                  onClick={() => this.handleSelect("una", "workspace")}
                  className={`btn_area  mt-3 w-100 
                  ${this.state.workspace === "una" ? "active" : ""}`}
                >
                  Una
                </div>
                <div
                  onClick={() => this.handleSelect("multiple", "workspace")}
                  className={`btn_area  mt-3 w-100 
                  ${this.state.workspace === "multiple" ? "active" : ""}`}
                >
                  Multiple
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="label_title">
                I lavoratori operano in sedi fisse o fuori sede?
              </label>
              <div className="d-flex gap-2 justify-content-between">
                <div
                  onClick={() => this.handleSelect("Fisse", "operano")}
                  className={`btn_area  mt-3 w-100 
                  ${this.state.operano === "Fisse" ? "active" : ""}`}
                >
                  Fisse
                </div>
                <div
                  onClick={() => this.handleSelect("Fuori sede", "operano")}
                  className={`btn_area  mt-3 w-100 
                  ${this.state.operano === "Fuori sede" ? "active" : ""}`}
                >
                  Fuori sede
                </div>
                <div
                  onClick={() =>
                    this.handleSelect("Entrambi i casi", "operano")
                  }
                  className={`btn_area  mt-3 w-100 
                  ${
                    this.state.operano === "Entrambi i casi" ? "active" : ""
                  }`}
                >
                  Entrambi i casi
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-5">
              <lable className="label_title">
                Inserisci Nome e Indirizzo delle altre sedi
              </lable>
              <br />
              <label className="label_subtitle mb-4">
                Puoi farlo anche in un secondo momento.{" "}
              </label>
              <div className="mt-2  d-flex gap-2 justify-content-between ">
                <div className="w-100">
                  <label>Nome Sede</label>
                  <br />
                  <input className="input_box w-100 mt-2" type="text" />
                </div>
                <div className="w-100">
                  <label>Indirizzo sede operativa</label>
                  <br />
                  <input className="input_box w-100 mt-2" type="text" />
                </div>
              </div>
              <div className="mt-2  d-flex gap-2 justify-content-between ">
                <div className="w-100">
                  <label>Nome Sede</label>
                  <br />
                  <input className="input_box w-100 mt-2" type="text" />
                </div>
                <div className="w-100">
                  <label>Indirizzo sede operativa</label>
                  <br />
                  <input className="input_box w-100 mt-2" type="text" />
                </div>
              </div>

              {this.state.moreInput?.map((more, i) => (
                <div
                  key={i}
                  className="mt-2 d-flex gap-2 justify-content-between "
                >
                  <div className="w-100">
                    <label>Nome Sede</label>
                    <br />
                    <input className="input_box w-100 mt-2" type="text" />
                  </div>
                  <div className="w-100">
                    <label>Indirizzo sede operativa</label>
                    <br />
                    <input className="input_box w-100 mt-2" type="text" />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => this.handleAddMore()}
                className="add_more mt-4"
              >
                <Plus size={16} /> Aggiungi altre
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

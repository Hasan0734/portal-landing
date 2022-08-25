import React, { Component } from "react";
import { Plus } from "react-feather";
import "./AziendaERuoli.css";

const sectors = [
  "Retail",
  "Ristorazione",
  "Digitale",
  "Servizi",
  "Sanitario",
  "Turismo",
  "Altro",
];

export default class AziendaERuoli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSector: null,
      addMore: 0,
      rules: [
        "Designer",
        "Cassiere",
        "Visual Merchandiser",
        "Magazzinere",
        "Portiere",
        "Pulizie",
        "Cassiere",
      ],
    };
  }
  handleSelectSector(index) {
    this.setState({
      isSector: index,
    });
  }

  handleAddRole() {
    const addMore = ["Aiuto Cassa", "hello", "hello2"];

    if (addMore.length >= this.state.addMore + 1) {
      this.setState({
        addMore: this.state.addMore + 1,
      });
    }

    if (addMore.length >= this.state.addMore + 1) {
      this.setState({
        rules: [...this.state.rules, addMore[this.state.addMore]],
      });
    }
  }
  render() {
    return (
      <div className="stepper_form">
        <h3 className="title">Personalizza la tua esperienza</h3>

        <div className="row area">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <label className="label_title">Nome azienda*</label>
                <br />
                <input className="input_box" type="tex" />
              </div>
              <div>
                <label className="label_title">Il tuo ruolo</label>
                <br />
                <select className="select_btn">
                  <option>Option 1</option>
                  <option>Option 1</option>
                  <option>Option 1</option>
                </select>
              </div>
              <div>
                <label className="label_title">N. di impegati</label>
                <br />
                <select className="select_btn">
                  <option>Option 1</option>
                  <option>Option 1</option>
                  <option>Option 1</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <label className="label_title">
                Indirizzo sede operativa principale
              </label>
              <br />
              <input type="text" className="input_box w-100" />
            </div>
            <div className="mt-3 ">
              <label className="label_title">Settore azienda</label>
              <br />
              <div className="container">
                <div className="sector row gx-3">
                  {sectors.map((sec, i) => (
                    <div key={i} className=" col-md-4">
                      <div
                        onClick={() => this.handleSelectSector(i)}
                        className={`btn_area mt-3 ${
                          this.state.isSector === i ? "active" : ""
                        }`}
                      >
                        {sec}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 ps-5">
            {this.state.isSector !== null && (
              <div>
                <label className="label_titel">
                  Seleziona i ruoli nella tua azienda
                </label>
                <div className="role_area mt-2">
                  {this.state.rules.map((rule, i) => (
                    <button type="button" key={i} className="btns_btn m-1">
                      {rule}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => this.handleAddRole()}
                    className="btns_btn m-1 add_btn"
                  >
                    <Plus size={16} /> Aggiungi altre
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

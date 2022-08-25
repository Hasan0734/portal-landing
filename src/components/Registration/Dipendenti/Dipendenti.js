import React, { Component } from "react";
import { Plus } from "react-feather";
import { InfoIcon } from "../../../assets/svg/svg";
import AddMore from "./AddMore";
import "./Dipendenti.css";

export default class Dipendenti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMore: [],
    };
  }

  handleAddMore() {
    this.setState({
      addMore: [...this.state.addMore, this.state.addMore.length + 1],
    });
  }
  render() {
    return (
      <div className="dipendenti_form p-3 pt-5">
        <h3 className="title">Inserisci le prime info dei tuoi dipendenti</h3>
        <label className="sub_title">
          Puoi modificare e caricarne altri nella sezione dipendenti.
        </label>

        <div className="row">
          <div className="col-md-8">
            <div className="row ">
              <div className="col-md-3 ">
                <div className="">
                  <label className="label_title">Nome</label>
                  <br />
                  <input type="text" className="input_box w-100" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="">
                  <label className="label_title">Cognome</label>
                  <br />
                  <input type="text" className="input_box w-100" />
                </div>
              </div>
              <div className="col-md-4">
                <label className="label_title">
                  Email{" "}
                  <span className="tooltip_container">
                   <InfoIcon/>
                    <span className="tooltip_text">
                      Il dipendente riceverà le credenziali per accedere all’app
                      e il suo BADGE-QR via email immediatamente
                    </span>
                    <span className="tooltip_indicator"></span>
                  </span>
                </label>
                <br />
                <input type="text" className="input_box w-100" />
              </div>
              <div className="col-md-2">
                <label className="label_title">Sede</label>
                <br />
                <select className="input_select w-100">
                  <option>Portal Café</option>
                  <option>Portal Café</option>
                  <option>Portal Café</option>
                </select>
              </div>
            </div>

            <AddMore />

            {this.state.addMore?.map((more, i) => (
              <AddMore key={i} />
            ))}
            <button
            type="button"
              onClick={() => this.handleAddMore()}
              className="add_btn mt-4"
            >
              <Plus /> Aggiungi altri
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

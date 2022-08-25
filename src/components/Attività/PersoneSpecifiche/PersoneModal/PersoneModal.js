import React, { Component } from "react";
import { XIcon } from "../../../../assets/svg/svg";
import Modals from "../../../Modal/Modals";
import { data } from "./modalData";
import "./PersoneModal.css";
import PersoneTableList from "./PersoneTableList";

export default class PersoneModal extends Component {
  render() {
    return (
      <Modals trigger={this.props.trigger} size="lg">
        <div className="persone_modal p-5">
          <div className="text-end">
            <button
              onClick={() => this.props.handlePersone()}
              className="close_btn"
            >
              <XIcon />
            </button>
          </div>
            <h6 className="title">Dipendenti che hano ricevuto l’attività</h6>
          <table className="persone_table w-100 mt-4">
            <thead>
              <tr>
                <th className="rounded-start">Nome</th>
                <th>Cognome</th>
                <th>Mansione</th>
                <th className="rounded-end">Team</th>
              </tr>
            </thead>
            <tbody>
              {data.map(dt => <PersoneTableList key={dt.id} data={ dt} />) }
            </tbody>
          </table>
        </div>
      </Modals>
    );
  }
}

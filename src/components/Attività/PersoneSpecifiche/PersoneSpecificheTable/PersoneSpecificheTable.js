import React, { Component } from "react";
import "./PersoneSpecificheTable.css";
import PersoneSpecificheTableList from "./PersoneSpecificheTableList";
import { PersoneData } from "./tableData";

export default class PersoneSpecificheTable extends Component {
  render() {
    return (
      <table className="w-100 attività_table mt-3 w-100">
        <thead>
          <tr>
            <th className="rounded">Nome Attività</th>
            <th>Inzio</th>
            <th>Fine</th>
            <th>Assegnato a</th>
            <th>Stato</th>
            <th>Note</th>
            <th className="rounded">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {PersoneData.map((persone) => (
            <PersoneSpecificheTableList key={persone.id} data={ persone} />
          ))}
        </tbody>
      </table>
    );
  }
}

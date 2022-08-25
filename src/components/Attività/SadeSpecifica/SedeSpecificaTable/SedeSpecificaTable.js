import React, { Component } from "react";
import "./SedeSpecificaTable.css";
import SedeSpecificaTableList from "./SedeSpecificaTableList";
import { sedeData } from "./tableData";

export default class SedeSpecificaTable extends Component {
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
          {sedeData.map((sede) => (
            <SedeSpecificaTableList key={sede.id} sede={sede} />
          ))}
         
        </tbody>
      </table>
    );
  }
}

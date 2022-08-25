import React, { Component } from "react";
import { tuttiData } from "./tableData";
import "./TuttiTable.css";
import TuttiTableList from "./TuttiTableList";

export default class TuttiTable extends Component {
  render() {
    return (
      <table className="w-100 tutti_table mt-3 w-100">
        <thead>
          <tr>
            <th className="rounded">Nome Attività</th>
            <th className="text-center">Inzio</th>
            <th className="text-center">Fine</th>
            <th className="text-center">Assegnato a</th>
            <th className="text-center">Stato</th>
            <th className="text-center">Note</th>
          </tr>
        </thead>
        <tbody>
          {tuttiData.map((tutti) => (
            <TuttiTableList key={tutti.id} tutti={tutti} />
          ))}
        </tbody>
      </table>
    );
  }
}

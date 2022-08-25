import React, { Component } from "react";
import "./PersoneModal.css";
export default class PersoneTableList extends Component {
  render() {
    const { nome, cognome, mansione, team } = this.props.data;
    return (
      <tr>
        <td className="border rounded-start border-end-0">{nome}</td>
        <td className="border  border-start-0 border-end-0">{cognome}</td>
        <td className="border border-start-0 border-end-0">{mansione}</td>
        <td className="border rounded-end border-start-0">{team}</td>
      </tr>
    );
  }
}

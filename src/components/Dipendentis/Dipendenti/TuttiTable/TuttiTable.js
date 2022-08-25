import React, { Component } from "react";
import { tuttiTeamData } from "./dummyData";
import "./TuttiTable.css";
import TuttiTableData from "./TuttiTableData";

export default class TuttiTable extends Component {
  render() {
    return (
      <div className="team_table_area mt-2">
        <table className="team_table w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cognome</th>
              <th>Mansione</th>
              <th>Team</th>
              <th>Contratto</th>
              <th>Scadenza</th>
              <th>Busta Paga Luglio</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {tuttiTeamData.map((data, i) => (
              <TuttiTableData
                handleSelectMember={this.props.handleSelectMember}
                key={i}
                data={data}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

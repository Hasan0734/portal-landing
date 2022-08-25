import React, { Component } from "react";
import "./TeamTable.css";
import { teamData } from "./dummyData";
import TeamTableData from './TeamTableData'

export default class TeamTable extends Component {
  render() {
    return (
      <div className="team_table_area mt-2">
        <table className="team_table w-100">
          <thead>
            <tr>
              <th>Nome Team</th>
              <th>N. Dipendenti</th>
              <th>Responsabile</th>
              <th>Sede</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((data, i) => (
              <TeamTableData
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

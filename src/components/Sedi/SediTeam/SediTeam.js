import React, { Component } from "react";
import "./SediTeam.css";
export default class SediTeam extends Component {
  render() {
    return (
      <div className="sedi_team mt-4">
        <h3 className="team_title">Team</h3>
        <div className="sedi_team_table">
          <table className="w-100">
            <thead>
              <tr>
                <th>Nome Team</th>
                <th>N. Dipendenti</th>
                <th>Responsabile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Designer</td>
                <td>4</td>
                <td></td>
              </tr>
              <tr>
                <td>Developer</td>
                <td>6</td>
                <td>Roberto Fazio</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>2</td>
                <td>Giorgia Lettini</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from "react-router";
import { TrushIcon } from "../../../../assets/svg/svg";
import "./TeamTable.css";

 class TeamTableData extends Component {
  render() {
    const { nameTeam, nDipendenti, resposable, sede } = this.props.data;
    const { history } = this.props;
    return (
      <tr className="cursor-pointer" onClick={() => history.push(`/dependenti/team/${nameTeam}`)}>
        <td className="">{nameTeam}</td>
        <td>{nDipendenti}</td>
        <td>{resposable}</td>
        <td>{sede}</td>
        <td className="ps-4">
          <TrushIcon />
        </td>
      </tr>
    );
  }
}

export default withRouter(TeamTableData);
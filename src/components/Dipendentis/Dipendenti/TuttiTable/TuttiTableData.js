import React, { Component } from "react";
import { withRouter } from "react-router";
import { TrushIcon } from "../../../../assets/svg/svg";
import "./TuttiTable.css";

class TuttiTableData extends Component {
  render() {
    const {
      name,
      cognome,
      mansione,
      team,
      contratto,
      scadenza,
      busta_paga_luglio,
    } = this.props.data;
    const { history } = this.props;
    return (
      <tr
        className="cursor-pointer"
        onClick={() =>
          history.push({
            pathname: `/dependenti/tutti/${name}`,
            state: { name: name }
          })
        }
      >
        <td className="">{name}</td>
        <td>{cognome}</td>
        <td>{mansione}</td>
        <td>{team}</td>
        <td>{contratto}</td>
        <td>{scadenza}</td>
        <td>{busta_paga_luglio}</td>
        <td className="ps-4">
          <TrushIcon />
        </td>
      </tr>
    );
  }
}

export default withRouter(TuttiTableData);

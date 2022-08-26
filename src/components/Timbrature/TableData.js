import React, { Component } from "react";
import { EditIcon2, Location as LocationIcon } from "../../assets/svg/svg";
export default class TableData extends Component {
  render() {
    const {data, entrata, uscita, entrata2,uscita2,badge, sede} = this.props.body
    return (
      <tr className="m-2">
        <td className="text-center td_data">{data}</td>
        <td className="text-center td_data">{entrata}</td>
        <td className="text-center td_data">{uscita}</td>
        <td className="text-center td_data">{entrata2}</td>
        <td className="text-center td_data">{uscita2}</td>
        <td className="text-center td_data">{badge}</td>
        <td className="text-center td_data by_location_box">
          <span className="by_location text-center d-flex justify-content-center gap-2 align-items-center">
            <span><LocationIcon/></span>
            <span>{sede}</span>
          </span>
        </td>
        <td className="text-end">
          <EditIcon2/>
        </td>
      </tr>
    );
  }
}

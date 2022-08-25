import React, { Component } from "react";
import { ChevronDown } from "react-feather";
import { DirectionArrrow, ExportIcon } from "../../../../assets/svg/svg";

import "./Table.css";
import TableData from "./TableData";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const {
      body,
      title,
      ore_totali,
      ore_mensili,
      differenza,
      permesi,
      ferie,
      malattia,
      straordirio,
    } = this.props.data;
    return (
      <div className="mt-3 border-bottom ">
        <table className="table_area w-100">
          <thead className="mb-2">
            <tr>
              <th className="table_main_title" rowspan="2">
                {title}
              </th>
              <th className="table_head text-center">Ore totali</th>
              <th className="table_head text-center">Ore Mensili</th>
              <th className="table_head text-center">Differenza</th>
              <th className="table_head text-center">Permesi</th>
              <th className="table_head text-center">Ferie</th>
              <th className="table_head text-center">Malattia</th>
              <th className="table_head text-center">Straordirio</th>
              <th rowspan="2" className="table_head text-center ">
                <span className="export_btn"> <ExportIcon/> Esporta</span>
              </th>
              <th
                style={{ width: "128px" }}
                className="text-center"
                rowspan="2"
              >
                <button
                  onClick={() => this.handleCollapse()}
                  className="table_collapse_btn"
                >
                  {this.state.isOpen ? (
                    <DirectionArrrow/>
                  ) : (
                    <ChevronDown color="#495057" strokeWidth={3} size={30} />
                  )}
                </button>
              </th>
            </tr>
            <tr>
              <th className="table_head_val text-center">{ore_totali}</th>
              <th className="table_head_val text-center">{ore_mensili}</th>
              <th className="table_head_val text-center">{differenza}h</th>
              <th className="table_head_val text-center">{permesi}h</th>
              <th className="table_head_val text-center">{ferie}h</th>
              <th className="table_head_val text-center">{malattia}h</th>
              <th className="table_head_val text-center">{straordirio}h</th>
            </tr>
          </thead>
          <br />

          {body.length > 0 && this.state.isOpen && (
            <tbody className="table_body border-top">
              <tr>
                <td className="text-center td_head">Data</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Badge</td>
                <td className="text-center td_head">Sede</td>
                <td className="text-center td_head"></td>
                <td className="text-center td_head"></td>
                <td className="text-center td_head"></td>
              </tr>

              {/* data list */}
              {body?.map((dt, i) => (
                <TableData key={dt.id} body={dt} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";
import { ChevronDown } from "react-feather";
import { DirectionArrrow } from "../../assets/svg/svg";
import TableData from "./TableData";

export default class TimbratureTable extends Component {
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
    const { body } = this.props.data;

    return (
      <div className="mt-3 border-bottom pb-2 ">
        <table className="table_area w-100">
          <thead className="mb-2">
            <tr>
              <th className="table_head">Name</th>
              <th className="table_head">Cognome</th>
              <th className="table_head">Ore Lavorate</th>
              <th className="table_head">Ore da contratto</th>
              <th className="table_head">Ore Mancanti</th>
              <th className="table_head">Straordinari</th>
              <th className="text-center" rowspan="3" colSpan={3}>
                <button
                  onClick={() => this.handleCollapse()}
                  className="table_collapse_btn"
                >
                  {this.state.isOpen ? (
                    <DirectionArrrow />
                  ) : (
                    <ChevronDown color="#495057" strokeWidth={3} size={30} />
                  )}
                </button>
              </th>
            </tr>
            <tr>
              <th className="table_head_val">Sandra</th>
              <th className="table_head_val">Sabia</th>
              <th className="table_head_val">40h</th>
              <th className="table_head_val">40h</th>
              <th className="table_head_val">0</th>
              <th className="table_head_val">0</th>
            </tr>
          </thead>
        </table>

        {body.length > 0 && this.state.isOpen && (
          <table className="w-100 mt-3">
            <tbody className="table_body border-top">
              <tr>
                <td className="text-center td_head">Data</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Entrata</td>
                <td className="text-center td_head">Uscita</td>
                <td className="text-center td_head">Badge</td>
                <td className="text-center td_head">Sede</td>
                <td className="text-center td_head">Azioni</td>
              </tr>
              {/* data list */}

              {body?.map((dt, i) => (
                <TableData key={dt.id} body={dt} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

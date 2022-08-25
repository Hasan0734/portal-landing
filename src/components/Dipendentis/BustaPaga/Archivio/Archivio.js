import React, { Component } from "react";

import "./Archivio.css";
import { archivioData } from "./dummyData";
import TableList from "./TableList";
export default class Archivio extends Component {
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
    return (
      <div className="archivio_area mt-5">
        <h2 className="title pt-3">Archivio</h2>
        <div>
          <div className="d-flex gap-1 justify-content-end">
            <select className="select_month select_common" id="month">
              <option value=""> Messe</option>
            </select>
            <select className="select_anno select_common" id="month">
              <option value=""> Anno</option>
            </select>
          </div>

          <div className="table_area mt-3">
            <table className="w-100 table_box">
              <thead>
                <tr>
                  <th className="rounded-1">Documento</th>
                  <th>Importo</th>
                  <th className="text-center">Mese di competenza</th>
                  <th className="text-center">Data emissione </th>
                  <th className="text-center rounded-1">Azioni</th>
                </tr>
              </thead>
              <tbody>
                {archivioData.map((archivio, i) => (
                  <TableList key={i} archivio={archivio} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

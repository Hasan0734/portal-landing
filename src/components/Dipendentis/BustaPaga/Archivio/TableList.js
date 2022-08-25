import React, { Component } from "react";
import {
  DeleteOutline,
  DownloadIcon,
  EditIcon,
  PDFIcon,
} from "../../../../assets/svg/svg";
import "./Archivio.css";

export default class Items extends Component {
  render() {
    const { importo, meseDiCompetenza, dataEmissione, file } =
      this.props.archivio;
    return (
      <>
        <tr>
          <td className="border border-end-0 rounded-1">
            <div>
              <a
                className="d-flex gap-3 document_btn w-50"
                href="#down"
                download
              >
                {" "}
                <PDFIcon/> {file} <DownloadIcon/>
              </a>
            </div>
          </td>
          <td className=" border border-start-0 border-end-0">{importo}€</td>
          <td className="text-center border border-start-0 border-end-0">
            {meseDiCompetenza}
          </td>
          <td className="text-center border border-start-0 border-end-0">
            {dataEmissione}
          </td>
          <td className="text-center border border-start-0 rounded-1">
            <span className="d-flex gap-3 justify-content-center">
              {" "}
              <button className="border-0 outline-none bg-transparent">
                <EditIcon/>{" "}
              </button>{" "}
              <button className="border-0 outline-none bg-transparent">
               <DeleteOutline/>
              </button>
            </span>
          </td>
        </tr>
      </>
    );
  }
}

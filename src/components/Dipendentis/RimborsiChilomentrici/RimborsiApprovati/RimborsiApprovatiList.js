import React, { Component } from "react";
import { ChevronDown } from "react-feather";
import {
  DeleteIcon,
  DirectionArrrow,
  DownloadIcon,
  EditIcon,
  FolderOpen,
} from "../../../../assets/svg/svg";
import "./RimborsiApprovati.css";

export default class RimborsiApprovatiList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isTrigger: false,
    };
  }

  handleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleTrigger = () => {
    this.setState({ isTrigger: !this.state.isTrigger });
  };
  render() {
    const {
      data,
      veicolo,
      costoSostenuto,
      rimborsato,
      allegatiName,
      proprietà,
      km,
      costoperKm,
      targa,
      partenza,
      partenza2,
      arrivo,
      arrivo2,
    } = this.props.data;

    return (
      <>
        {/* {this.state.isTrigger && <NoteModal handleTrigger={this.handleTrigger} trigger={this.state.isTrigger}/> } */}
        <li className="my-3 list">
          <div className="border border-2 rounded-2 p-3 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between gap-4">
                <div>
                  <h4 className="title">Data</h4>
                  <h4 className="value">{data}</h4>
                </div>
                <div>
                  <h4 className="title">Veicolo</h4>
                  <h4 className="value">{veicolo}</h4>
                </div>
                <div>
                  <h4 className="title">Proprietà</h4>
                  <h4 className="value">{proprietà}</h4>
                </div>
                <div>
                  <h4 className="title">Km</h4>
                  <h4 className="value">{km}</h4>
                </div>
                <div>
                  <h4 className="title">Costo per Km</h4>
                  <h4 className="value">{costoperKm}</h4>
                </div>
                <div>
                  <h4 className="title">Costo sostenuto</h4>
                  <h4 className="value_bold">{costoSostenuto}€</h4>
                </div>
                <div>
                  <h4 className="title">Rimborsato</h4>
                  <h4 className="value_bold">{rimborsato}€</h4>
                </div>
              </div>
              <div className="w-25 text-end">
                <button
                  onClick={() => this.handleCollapse()}
                  className="collapse_btn"
                >
                  {" "}
                  {this.state.isOpen ? (
                    <DirectionArrrow />
                  ) : (
                    <ChevronDown color="#495057" strokeWidth={3} size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* collapse */}

          <div
            className={`collpse_area py-2 px-3 ${
              this.state.isOpen ? "d-block" : "d-none"
            }`}
          >
            <div className="d-flex justify-content-between bg-white rounded-2 py-3 px-3 align-items-center">
              <div className="d-flex gap-6">
                <div>
                  <h4 className="title">Targa</h4>
                  <h4 className="value">{targa}</h4>
                </div>
                <div>
                  <h4 className="title">Allegati</h4>
                  <a className="btn_download" href="#download" download>
                    <FolderOpen/> {allegatiName} <DownloadIcon/>
                  </a>
                </div>
                <div>
                  <h4 className="title">Partenza</h4>
                  <h4 className="value">{partenza}</h4>
                </div>
                <div>
                  <h4 className="title">Arrivo</h4>
                  <h4 className="value">{arrivo}</h4>
                </div>
                <div>
                  <h4 className="title">Partenza</h4>
                  <h4 className="value">{partenza2}</h4>
                </div>
                <div>
                  <h4 className="title">Arrivo</h4>
                  <h4 className="value">{arrivo2}</h4>
                </div>

                {/* <div>
                  <h4 className="title">Note</h4>
                  <a   onClick={() => this.handleTrigger()}  
                  className="btn_download" href="#down">
                    {eyeIcon} {note}
                  </a>
                </div> */}
              </div>
              <div className="d-flex gap-4">
                <div>
                  <a className="btn_download" href="#down">
                    <EditIcon/> Modifica
                  </a>
                </div>
                <div>
                  <button className="border-0 outline-none bg-transparent">
                    <DeleteIcon/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }
}

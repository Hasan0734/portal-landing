import React, { Component } from "react";
import { ChevronDown } from "react-feather";
import {
  DeleteIcon,
  DirectionArrrow,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  FolderOpen,
} from "../../../../assets/svg/svg";
import NoteModal from "../SpeseApprovate/NoteModal/NoteModal";
import "./SpeseRifiutate.css";

export default class SpeseRifiutateList extends Component {
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
    const { data, categoria, costoSostenuto, rimborsato, allegatiName, note } =
      this.props.data;
    return (
      <>
        {this.state.isTrigger && (
          <NoteModal
            handleTrigger={this.handleTrigger}
            trigger={this.state.isTrigger}
          />
        )}
        <li className="my-3 list">
          <div className="border border-2 rounded-2 p-3 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between gap-4 w-50">
                <div>
                  <h4 className="title">Data</h4>
                  <h4 className="value">{data}</h4>
                </div>
                <div>
                  <h4 className="title">Categoria</h4>
                  <h4 className="value">{categoria}</h4>
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
          <div
            className={`collpse_area py-2 px-3 ${
              this.state.isOpen ? "d-block" : "d-none"
            }`}
          >
            <div className="d-flex justify-content-between bg-white rounded-2 py-3 px-3 align-items-center">
              <div className="d-flex gap-6">
                <div>
                  <h4 className="title">Allegati</h4>
                  <a className="btn_download" href="#download" download>
                    <FolderOpen/> {allegatiName} <DownloadIcon/>
                  </a>
                </div>
                <div>
                  <h4 className="title">Note</h4>
                  <a className="btn_download" href="#down">
                    <EyeIcon/> {note}
                  </a>
                </div>
              </div>
              <div className="d-flex gap-4">
                <div>
                  <a className="btn_download" href="#down">
                    <EditIcon/> Modifica
                  </a>
                </div>
                <div><DeleteIcon/></div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }
}

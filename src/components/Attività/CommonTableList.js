import React, { Component } from "react";
import { DeleteOutline, EditIcon, EyeIcon, PeoplesIcon } from "../../assets/svg/svg";
import NoteModal from "./NoteModal";
import PersoneModal from "./PersoneModal/PersoneModal";

export default class CommonTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isTrigger: false,
    };
  }

  handleTrigger = () => {
    this.setState({ isTrigger: !this.state.isTrigger });
  };
  render() {
    const { name, inzio, fine, assegnatoA, stato, note } = this.props.sede;
    return (
      <>
        {this.state.noteOpen && (
          <NoteModal
            handleNote={this.handleNote}
            trigger={this.state.noteOpen}
          />
        )}
        {this.state.persone && (
          <PersoneModal
            handlePersone={this.handlePersone}
            trigger={this.state.persone}
          />
        )}

        <tr>
          <td className="border border-end-0 rounded-start text-uppercase">
            {name}
          </td>
          <td className="border border-end-0 border-start-0 text-center">
            {inzio}
          </td>
          <td className="border border-end-0 border-start-0 text-center">
            {fine}
          </td>
          <td className="border border-end-0 border-start-0 text-center text-uppercase">
            {typeof assegnatoA === "number" ? (
              <span>
                <span
                  className="same_more cursor-pointer"
                  onClick={() => this.handlePersone()}
                >
                  {" + "} {assegnatoA}
                </span>{" "}
                <PeoplesIcon />
              </span>
            ) : (
              assegnatoA
            )}
          </td>
          <td className="border border-end-0 border-start-0 text-center">
            {stato}
          </td>
          <td
            className="border border-end-0 border-start-0 text-center"
            style={{ width: "130px" }}
          >
            {note}
            {note ? (
              <span
                onClick={() => this.handleNote()}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <EyeIcon />
              </span>
            ) : (
              "-"
            )}
          </td>
          {this.props.name !== 'tutti' && <td className="border border-start-0 rounded-end align-items-center">
            <span>
              <EditIcon />
            </span>{" "}
            <span className="ms-2">
              <DeleteOutline />
            </span>
          </td>}
        </tr>
      </>
    );
  }
}

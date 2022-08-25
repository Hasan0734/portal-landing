
import React, { Component } from "react";
import { EyeIcon, PeoplesIcon } from "../../../../assets/svg/svg";
import NoteModal from "../NoteModal/NoteModal";
import "./TuttiTable.css";

export default class TuttiTableList extends Component {
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
    const { name, inzio, fine, assegnatoA, stato, note } = this.props.tutti;

    return (
      <>
        {this.state.isTrigger && (
          <NoteModal
            handleTrigger={this.handleTrigger}
            trigger={this.state.isTrigger}
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
            {typeof assegnatoA === "number" && "+"} {assegnatoA}{" "}
            {typeof assegnatoA === "number" && <PeoplesIcon />}
          </td>
          <td className="border border-end-0 border-start-0 text-center">
            {stato}
          </td>
          <td
            className="border border-end-1 border-start-0 text-center"
            style={{ width: "130px" }}
          >
            {note}
            {note ? (
              <span
                onClick={() => this.handleTrigger()}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <EyeIcon />
              </span>
            ) : (
              "-"
            )}
          </td>
        </tr>
      </>
    );
  }
}

import React, { Component } from "react";
import { XIcon } from "../../../../../assets/svg/svg";
import Modals from "../../../../Modal/Modals";
import "./NoteModal.css";
export default class NoteModal extends Component {


  render() {
    return (
      <Modals trigger={this.props.trigger} size=" " >
        <div className="note_modal p-3">
          <div className="text-end">
            <button onClick={() => this.props.handleTrigger()} className="close_btn">
              <XIcon/>
            </button>
          </div>
          <div className="p-4">
            <div>
              <h6 className="title">Nota allegata:</h6>
              <p className="note">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h6 className="title">Scritta da:</h6>
              <p className="note">Sandra Sabia</p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button  onClick={() => this.props.handleTrigger()} className="border-0 outline-none ok_btn">Ok</button>
          </div>
        </div>
      </Modals>
    );
  }
}

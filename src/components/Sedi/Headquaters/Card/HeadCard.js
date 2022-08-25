import React, { Component } from "react";
import { EditIcon } from "../../../../assets/svg/svg";
import EditModal from "../../EditModal/EditModal";
import "./HeadCard.css";
export default class HeadCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editSede: false,
    };
  }

  hanldeTrigger = () => {
    this.setState({
      editSede: !this.state.editSede
    });
  };
  render() {
    return (
      <>
        {this.state.editSede && (
          <EditModal
            trigger={this.state.editSede}
            handleTrigger={this.hanldeTrigger}
          />
        )}
        <div className="head_card">
          <div className="card_body">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="card_title mb-0">Portal Tech</h3>
              <button
                onClick={() => this.hanldeTrigger()}
                className="card_edit_icon border-0 outline-none 
              bg-transparent"
              >
                <EditIcon />
              </button>
            </div>
            <p className="card_text mb-0">Via Benetto Accoliti 9, Firenze</p>
          </div>
        </div>
      </>
    );
  }
}

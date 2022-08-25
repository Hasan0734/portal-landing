import React, { Component } from "react";
import { DeleteOutline, EditIcon } from "../../../../assets/svg/svg";
import AlertModal from "../../AlertModal/AlertModal";
import EditModal from "../../EditModal/EditModal";
import "./AlertCard.css";
export default class AlertCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sedeEdit: false,
      deleteSede: false,
    };
  }
  handleEdit = () => {
    this.setState({
      sedeEdit: !this.state.sedeEdit,
    });
  };

  handleRemove = () => {
    this.setState({
      deleteSede: !this.state.deleteSede,
    });
  };

  render() {
    const { sedeEdit, deleteSede } = this.state;
    return (
      <>
        {sedeEdit && (
          <EditModal trigger={sedeEdit} handleTrigger={this.handleEdit} />
        )}
        {deleteSede && (
          <AlertModal trigger={deleteSede} handleTrigger={this.handleRemove} />
        )}

        <div className="col-md-6 mt-4 ">
          <div className="alert_card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="alert_card_title mb-0">{this.props.title}</h3>
              <div className="d-flex gap-2 align-items-center">
                <button
                  onClick={() => this.handleEdit()}
                  className="border-0 outline-none bg-transparent"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => this.handleRemove()}
                  className="border-0 outline-none bg-transparent"
                >
                  <DeleteOutline />
                </button>
              </div>
            </div>
            <p className="alert_card_text mb-0">Viale Morgagni 7, Firenze</p>
          </div>
        </div>
      </>
    );
  }
}

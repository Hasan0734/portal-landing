import React, { Component } from "react";
import "./AlertSedi.css";
import { Plus } from "react-feather";
import AlertCard from "./AlertCard/AlertCard";
import AddSede from "../AddSede/AddSede";
export default class AlertSedi extends Component {
    constructor(props) {
      super(props)
        this.state = {
        addSede: false
      }
    }
     handleTrigger = () => {
       this.setState({
         addSede: !this.state.addSede,
       });
      }

  render() {
    const { addSede } = this.state;
    return (
      <>
        {addSede && (
          <AddSede trigger={addSede} handleTrigger={this.handleTrigger} />
        )}
        <div className="sedi_alert_area mt-5">
          <h3 className="alert_ttile">ALTRE SEDI OPERATIVE</h3>
          <div className="d-flex justify-content-end">
            <button onClick={() => this.handleTrigger()} className="add_btn">
              <Plus /> Aggiungi spesa
            </button>
          </div>
          <div className="row">
            <AlertCard title={"Portal OFFICE"} />
            <AlertCard title={"Portal OFFICE II"} />
            <AlertCard title={"Portal Café"} />
          </div>
        </div>
      </>
    );
  }
}

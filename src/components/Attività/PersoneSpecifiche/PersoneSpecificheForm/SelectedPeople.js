import React, { Component } from "react";
import "./PersoneSpecificheForm.css";

export default class SelectedPeople extends Component {
  render() {
    return (
      <div className="slected_people_area">
        <h4 className="label">Persone selezionate</h4>
        <div className="area">
          <button className="add_btn">+ Aggiungi altre</button>
        </div>
      </div>
    );
  }
}

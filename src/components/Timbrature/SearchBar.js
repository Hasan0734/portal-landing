import React, { Component } from "react";
import { memberList } from "./dummyData";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="position-absolute timbrature_search">
        <div className="form_area border">
          <div className="p-2">
            <input className="input_field w-100 p-1" type="text" />
            <div className="mt-3">
              <h4 className="title ">Nome/Mansione/Team</h4>
            </div>
          </div>
          <ul className="table_data list-unstyled">
            {memberList.map((member, i) => (
              <li key={i} className="d-flex justify-content-between border-top">
                <span className="name ps-2">{member.name}</span>
                <span className="profe">{member.profession}</span>
                <span className="profe pe-2">{member.responsibilities}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

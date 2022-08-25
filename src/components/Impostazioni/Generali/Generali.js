import React, { Component } from "react";
import InfoForm from './InfoForm/InfoForm'
import Report from './Report/Report'
import Mansioni from './Mansioni/Mansioni'

export default class Generali extends Component {
  render() {
    return (
      <div className="info_area">
        <InfoForm />
        <Report />
        <Mansioni />
      </div>
    );
  }
}

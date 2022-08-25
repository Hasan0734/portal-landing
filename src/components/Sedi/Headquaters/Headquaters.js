import React, { Component } from "react";
import Card from "./Card/HeadCard";
import "./Headquaters.css";
export default class Headquaters extends Component {
  render() {
    return (
      <div className="head_area">
        <h3 className="title">SEDE PRINCIPALE</h3>
        <Card />
      </div>
    );
  }
}

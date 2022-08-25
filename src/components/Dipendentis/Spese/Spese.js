import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import NuovaSpese from "./NuovaSpesa/NuovaSpese";
import "./Spese.css";
import SpeseApprovate from "./SpeseApprovate/SpeseApprovate";
import SpeseDesc from "./SpeseDesc/SpeseDesc";
import SpeseRifiutate from "./SpeseRifiutate/SpeseRifiutate";
import SpeseSlider from "./SpeseSlider/SpeseSlider";

class Spese extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrigger: false,
    };
  }

  handleTrigger = () => {
    this.setState({ isTrigger: !this.state.isTrigger });
  };
  render() {
    const {
      match: {
        params: { tuttiName },
      },
    } = this.props;
    return (
      <>
        {this.state.isTrigger && (
          <NuovaSpese
            trigger={this.state.isTrigger}
            handleTrigger={this.handleTrigger}
          />
        )}
        <div className="spese_area">
          <div className="mt-5 d-flex justify-content-between">
            <div className="per_detail">
              <h3 className="name">{tuttiName}</h3>
              <div className="d-flex align-items-center gap-3">
                <h3 className="title mb-0">SPESE DA APPROVARE</h3>
                <div>
                  <button className="total">3</button>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => this.handleTrigger()} className="add_btn">
                <Plus /> Aggiungi spesa
              </button>
            </div>
          </div>

          <div className="carousel_with_desc mt-4">
            <div className="row">
              <SpeseSlider />
              <SpeseDesc />
            </div>
          </div>
          <SpeseApprovate />
          <SpeseRifiutate />
        </div>
      </>
    );
  }
}
export default withRouter(Spese);

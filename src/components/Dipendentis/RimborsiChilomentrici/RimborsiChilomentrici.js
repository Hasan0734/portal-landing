import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import AggiungiSpesa from "./AggiungiSpesa/AggiungiSpesa";
import RimborsiApprovati from "./RimborsiApprovati/RimborsiApprovati";
import './RimborsiChilomentrici.css'
import RimborsiDesc from "./RimborsiDesc/RimborsiDesc";
import RimborsiSlider from "./RimborsiSlider/RimborsiSlider";

class RimborsiChilomentrici extends Component {
  constructor (props) {
    super(props);
    this.state = {
      trigger: false
    }
  }

  handleTrigger = () => {
    this.setState({
      trigger: !this.state.trigger
    })
  }
  render() {
        const {
          match: {
            params: { tuttiName },
          },
        } = this.props;
    return (
      <>
        {this.state.trigger && (
          <AggiungiSpesa
            trigger={this.state.trigger}
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
              <RimborsiSlider />
              <RimborsiDesc />
            </div>
          </div>
          <RimborsiApprovati />
        </div>
      </>
    );
  }
}
export default withRouter(RimborsiChilomentrici)

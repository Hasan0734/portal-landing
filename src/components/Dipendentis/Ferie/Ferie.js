import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import AggiungiNuovo from "./AggiungiNuovo/AggiungiNuovo";
import './Ferie.css'
import FeriePermessi from "./FeriePermessi/FeriePermessi";
import FerieSlider from "./FerieSlider/FerieSlider";

class Ferie extends Component {


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
          <AggiungiNuovo
            trigger={this.state.isTrigger}
            handleTrigger={this.handleTrigger}
          />
        )}
        <div className="ferie_area">
          <div className="mt-5 d-flex justify-content-between">
            <div className="per_detail">
              <h3 className="name">{tuttiName}</h3>
              <div className="d-flex align-items-center gap-3">
                <h3 className="title mb-0">SPESE DA APPROVARE</h3>
                <div>
                  <button className="total">1</button>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => this.handleTrigger()} className="add_btn">
                <Plus /> Aggiungi spesa
              </button>
            </div>
          </div>

          <div className="carousel_with_desc mt-4 w-100">
            <FerieSlider />
          </div>
          <FeriePermessi />
        </div>
      </>
    );
  }
}


export default withRouter(Ferie)
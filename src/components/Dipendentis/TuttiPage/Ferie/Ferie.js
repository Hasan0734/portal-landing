import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import { TopologyIcon, WatchIcon } from "../../../../assets/svg/svg";
import AggiungiNuovo from "./AggiungiNuovo";
import FerieList from "./FerieList";
import { ferieData } from "./dummeData";
import FerieSlider from "./FerieSlider";

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
          {/* slider */}
          <div className="carousel_with_desc mt-4 w-100">
            <FerieSlider />
          </div>

          {/* <FeriePermessi /> */}
          <div className="ferie_permessi">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3 className="title">VISUALIZZA FERIE E PERMESSI </h3>
                <div>
                  <button className="total">{ferieData.length}</button>
                </div>
              </div>
              <div className="d-flex gap-3">
                <button className="spese_btn">
                  <WatchIcon /> Ultimi 30 giorni
                </button>
                <button className="spese_btn">
                  <TopologyIcon /> Tipologia{" "}
                </button>
              </div>
            </div>

            <div className="mt-5">
              <ul className="list-unstyled list_area">
                {/* header item */}
                <li className="list_item_header d-flex gap-6 py-3 px-3">
                  <span className="list_h_text">Tipologia</span>
                  <span className="list_h_text">Dal giorno</span>
                  <span className="list_h_text">Dal Giorno</span>
                  <span className="list_h_text">Dalle</span>
                  <span className="list_h_text">Alle</span>
                </li>

                {/* body item data*/}
                {ferieData.map((data, i) => (
                  <FerieList key={i} data={data} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Ferie);

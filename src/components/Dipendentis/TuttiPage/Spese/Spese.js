import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import NuovaSpese from "./NuovaSpese";
import SpeseSlider from "./SpeseSlider";
import { speseApprovate, speseRifiutate } from "./dummyData";
import { CategoryIcon, WatchIcon } from "../../../../assets/svg/svg";
import ApprovateList from "./ApprovateList";
import SpeseRifiutateList from "./SpeseRifiutateList";

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
              {/* spese description */}
              <div className="col-md-4">
                <form className="desc_area">
                  <div className="desc_content">
                    <h4 className="title">Descrizione</h4>
                    <p className="content">
                      Trasferta da Milano a Monza
                      <br />
                      per cliente xyz
                    </p>
                  </div>

                  <div className="mt-5">
                    <label className="label">Inserisci costo rimborsato</label>
                    <br />
                    <input className="input_field w-50 mt-1" type="text" />
                  </div>
                  <div className="mt-5 d-flex justify-content-end">
                    <button className="submit_btn">Approva</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* spese approvate */}
          <div className="spese_approvate_area">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3 className="title">SPESE APPROVATE</h3>
                <div>
                  <button className="total">{speseApprovate?.length}</button>
                </div>
              </div>
              <div className="d-flex gap-3">
                <button className="spese_btn">
                  <WatchIcon /> Ultimi 30 giorni{" "}
                </button>
                <button className="spese_btn">
                  <CategoryIcon /> Categoria{" "}
                </button>
              </div>
            </div>

            {speseApprovate?.length > 0 && (
              <div className="list_area mt-5">
                <ul className="list-unstyled ">
                  {speseApprovate?.map((dt, i) => (
                    <ApprovateList key={i} data={dt} />
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* spese rifiutate */}
          <div className="spese_rifiutate_area">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3 className="title">SPESE RIFIUTATE</h3>
                <div>
                  <button className="total">{speseRifiutate?.length}</button>
                </div>
              </div>
              {speseRifiutate?.length > 0 && (
                <div className="d-flex gap-3">
                  <button className="spese_btn">
                    <WatchIcon /> Ultimi 30 giorni{" "}
                  </button>
                  <button className="spese_btn">
                    <CategoryIcon /> Categoria{" "}
                  </button>
                </div>
              )}
            </div>

            {speseRifiutate?.length > 0 && (
              <div className="list_area mt-5">
                <ul className="list-unstyled ">
                  {speseRifiutate?.map((dt, i) => (
                    <SpeseRifiutateList key={i} data={dt} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Spese);

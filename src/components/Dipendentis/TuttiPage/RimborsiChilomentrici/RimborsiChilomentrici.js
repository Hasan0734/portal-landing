import React, { Component } from "react";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import { CategoryIcon, DownloadIcon, EuroIcon, WatchIcon } from "../../../../assets/svg/svg";
import AggiungiSpesa from "./AggiungiSpesa";
import image from "../../../../assets/receipt.png";
import RimborsiSlider from "./RimborsiSlider";
import { rimborsiApprovate } from "./dummyData";
import RimborsiApprovatiList from "./RimborsiApprovatiList";

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
              {/* <RimborsiDesc /> */}

              <div className="col-md-4">
                <form className="desc_area">
                  <div className="desc_content">
                    <h4 className="title">Descrizione</h4>
                    <p className="content">
                      Trasferta da Milano a Monza per cliente xyz
                    </p>
                  </div>

                  <div>
                    <div className="mt-5">
                      <label className="label mb-1">Anteprima allegato</label>
                      <br />
                      <div
                        className="border d-flex justify-content-between align-items-end p-2"
                        style={{ width: "250px", height: "250px" }}
                      >
                        <img src={image} alt="images" />
                        <a
                          href="#down"
                          download
                          className="bg-transparent border-0 outline-none"
                        >
                          <DownloadIcon />
                        </a>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center gap-2 mt-3"
                      style={{ width: "250px" }}
                    >
                      <button type="button" className="images_btn active_btn ">
                        1
                      </button>
                      <button type="button" className="images_btn ">
                        2
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 position-relative">
                    <label className="label">Inserisci costo rimborsato</label>
                    <br />
                    <input className="input_field w-25 mt-1" type="text" />
                    <span
                      className="position-absolute"
                      style={{ top: "40px", left: "87px" }}
                    >
                      <EuroIcon />
                    </span>
                  </div>
                  <div className="mt-5 d-flex justify-content-end">
                    <button className="submit_btn">Approva</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <RimborsiApprovati /> */}
          <div className="rimborsi_approvate_area">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3 className="title">RIMBORSI APPROVATI</h3>
                <div>
                  <button className="total">{rimborsiApprovate?.length}</button>
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

            {rimborsiApprovate?.length > 0 && (
              <div className="list_area mt-5">
                <ul className="list-unstyled ">
                  {rimborsiApprovate?.map((dt, i) => (
                    <RimborsiApprovatiList key={i} data={dt} />
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
export default withRouter(RimborsiChilomentrici)

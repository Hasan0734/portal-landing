import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { withRouter } from "react-router";
import { ChevronDown } from "../../../../../assets/svg/svg";
import Banner from "../../../../Banner/Banner";
import LeftSide from "../../../../LeftSide/LeftSide";
import "./TeamPfofileEdit.css";

class TeamProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sedeDropdown: false,
      resDropDwon: false,
      responsabile: "Seleziona",
      selectedSede: "Portal Café",
    };
  }

  handleSedeSelect = (e) => {
    this.setState({
      selectedSede: e,
      sedeDropdown: false,
    });
  };
  handleReSelect = (e) => {
    this.setState({
      responsabile: e,
      resDropDwon: false,
    });
  };
  render() {
    const { sedeDropdown, resDropDwon, selectedSede, responsabile } =
      this.state;
    return (
      <div className="layout">
        <Banner />
        <div className="d-flex w-100">
          {/* sidebar start  */}
          <div className="sidebar">
            <LeftSide />
          </div>
          {/* sidebar end  */}

          {/* main body section  start*/}
          <main className="main_body">
            {/* pass the children */}
            <div className="team_edit_new py-5">
              <h2 className="title">Crea un nuovo team</h2>

              <form className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <label className="label">Nome del Team</label>
                      <input className="input_box mt-1" type="text" />
                    </div>
                    <div className="mt-3">
                      <label className="label">Responsabile</label>
                      <div className="select_area position-relative">
                        <OutsideClickHandler
                          onOutsideClick={() => {
                            this.setState({ resDropDwon: false });
                          }}
                        >
                          <button
                            onClick={() =>
                              this.setState({
                                resDropDwon: !resDropDwon,
                              })
                            }
                            type="button"
                            className="custom_select d-flex justify-content-between"
                          >
                            {responsabile}{" "}
                            <span>
                              <ChevronDown />
                            </span>
                          </button>
                          {resDropDwon && (
                            <div className="position-absolute  option_area border">
                              <ul className="list-unstyled mb-0">
                                <li
                                  onClick={() =>
                                    this.handleReSelect("Seleziona")
                                  }
                                  className="custom_select border-bottom"
                                >
                                  Seleziona
                                </li>
                                <li
                                  onClick={() =>
                                    this.handleReSelect("Seleziona 2")
                                  }
                                  className="custom_select border-bottom"
                                >
                                  Seleziona 2
                                </li>
                              </ul>
                            </div>
                          )}
                        </OutsideClickHandler>
                      </div>
                    </div>
                    <div className="mt-3 ">
                      <label className="label">Sede Operativa</label>
                      <div className="select_area position-relative">
                        <OutsideClickHandler
                          onOutsideClick={() => {
                            this.setState({ sedeDropdown: false });
                          }}
                        >
                          <button
                            onClick={() =>
                              this.setState({
                                sedeDropdown: !sedeDropdown,
                              })
                            }
                            type="button"
                            className="custom_select d-flex justify-content-between"
                          >
                            {selectedSede}{" "}
                            <span>
                              <ChevronDown />
                            </span>
                          </button>
                          {sedeDropdown && (
                            <div className="position-absolute  option_area border">
                              <ul className="list-unstyled mb-0">
                                <li
                                  onClick={() =>
                                    this.handleSedeSelect("Portal Cafe")
                                  }
                                  className="custom_select border-bottom"
                                >
                                  Portal Cafe
                                </li>
                                <li
                                  onClick={() =>
                                    this.handleSedeSelect("Portal Cafe 1")
                                  }
                                  className="custom_select border-bottom"
                                >
                                  Portal Cafe 1
                                </li>
                              </ul>
                            </div>
                          )}
                        </OutsideClickHandler>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <h2 className="member_title">TUTTI I MEMBRI</h2>
                    <div className="member_area">
                      <button type="button" className="member px-4 m-1 py-1">
                        Sandra Sabia
                      </button>
                      <button type="button" className="member px-4 m-1 py-1">
                        Enrico Sella Nora
                      </button>
                    </div>
                    <div className="d-flex justify-content-center gap-1 mt-4">
                      <button className="form_btn cencel_btn">Annulla</button>
                      <button className="form_btn save_btn">Salva</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default withRouter(TeamProfileEdit);

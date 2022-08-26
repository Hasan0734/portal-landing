import React, { Component } from "react";
import Tabs from "../Tabs/Tabs";
import LeftSide from "../LeftSide/LeftSide";
import Banner from "../Banner/Banner";
import {
  AtmCardIcon,
  ChartIcon,
  ChevronDown,
  DesktopIcon,
  EditIcon,
  ExitIcon,
  ImageIcon,
  UserPlus,
} from "../../assets/svg/svg";
import { Plus } from "react-feather";

const tabs = [
  { title: "Generali", hash: "generali" },
  { title: "Pagamenti e Fatturazione", hash: "pagamenti-e-atturazione" },
];

export default class Impostazioni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "generali",
    };
  }

  handleActive = (name) => {
    this.setState({ isActive: name });
  };

  render() {
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
            <div className="impostazioni_area">
              <Tabs
                tabs={tabs}
                handleActive={this.handleActive}
                state={this.state}
              />

              {this.state.isActive === "generali" && (
                <div className="info_area">
                  {/* impostazioni form  */}
                  <form className="impostazioni_form_area">
                    <div className="d-flex justify-content-between mt-5 mb-4">
                      <h4 className="title">ACCOUNT MANAGER</h4>
                      <button className="edit_btn">
                        <EditIcon /> Modifica
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label className="label_text">Nome</label>
                        <br />
                        <input
                          className="input_box"
                          type="text"
                          value="Eleonora"
                          readOnly
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="label_text">Cognome</label>
                        <br />
                        <input
                          className="input_box"
                          type="text"
                          value="Galluzzo"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-4">
                        <label className="label_text">Email</label>
                        <br />
                        <a className="input_box" href="#mail">
                          sandra@getportal.ai
                        </a>
                      </div>
                      <div className="col-md-4">
                        <label className="label_text">Numero di telefono</label>
                        <br />
                        <input
                          className="input_box"
                          type="number"
                          value="366200000"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="label_text">Password</label>
                      <br />
                      <input
                        className="input_box"
                        type="password"
                        value="366200000"
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <a href="/cambia-password" className="label_link">
                        cambia password
                      </a>
                      <br />
                      <a href="/recupera-password" className="label_link">
                        recupera password
                      </a>
                    </div>
                  </form>
                  {/* report */}
                  <div className="report_area mt-4">
                    <h5 className="title mb-0">NOTIFICHE E REPORTS</h5>
                    <p className="subtitle">Imposta report automatici</p>

                    <form className="mt-4">
                      <div className="d-flex align-items-end gap-2 justify-content-between">
                        <div>
                          <label className="label_text">
                            Seleziona file xls
                          </label>
                          <br />
                          <button className="select_btn">
                            Timbrature <ChevronDown />
                          </button>
                        </div>
                        <div>
                          <h6 className="to_title">da inviare a </h6>
                        </div>
                        <div>
                          <label className="label_text">Email</label>
                          <br />
                          <input type="text" className="input_box" />
                        </div>
                        <div>
                          <h6 className="to_title">con cadenza</h6>
                        </div>
                        <div>
                          <label className="label_text">Seleziona</label>
                          <br />
                          <button className="select_btn">
                            Mesile <ChevronDown />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mansioni_area mt-5">
                    <h5 className="title mb-0">MANSIONIS</h5>

                    <div className="area">
                      <div className=" d-flex flex-wrap  gap-2">
                        <button className="btns">Designer</button>
                        <button className="btns">Cassiere</button>
                        <button className="btns">Visual Merchandise</button>
                        <button className="btns">Magazzinere</button>
                        <button className="btns">Portiere</button>
                        <button className="btns">Pulizie</button>
                        <button className="btns">Cassiere</button>
                        <button className="btns">Aiuto Cassa</button>
                      </div>
                      <button className="btns add mt-2">
                        <Plus size={18} /> Aggiungi altre
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* pagamenti - e - atturazione */}
              {this.state.isActive === "pagamenti-e-atturazione" && (
                <div className="pagamenti_area">
                  <div className="d-flex justify-content-end mt-5">
                    <button className="exit_btn">
                      <ExitIcon /> Esci
                    </button>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="file" className="title_text">
                      Hai 125 giorni di licenza restanti
                    </label>
                    <br />
                    <br />
                    <div class="progress">
                      <div
                        class="progress-bar progress_bar"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <p className="title_text mt-3">Compreso nel tuo piano</p>

                    <ul className="list-unstyled">
                      <li className="d-flex gap-3">
                        <button className="icon_btn">
                          <UserPlus />
                        </button>
                        <span className="title_text">30 Dipendenti</span>
                      </li>
                      <li className="d-flex gap-3 mt-4">
                        <button className="icon_btn">
                          <DesktopIcon />
                        </button>
                        <span className="title_text">2 Sessioni</span>
                      </li>
                    </ul>

                    <p className="title_text mt-3">Fatturazione e pagamento</p>

                    <ul className="list-unstyled ">
                      <li className="d-flex gap-3">
                        <span>
                          <AtmCardIcon />
                        </span>
                        <span className="title_text">
                          Visa - termina con ****9854
                        </span>
                      </li>
                      <li className="d-flex gap-4 mt-3 align-items-start">
                        <div>
                          <ChartIcon />
                        </div>
                        <div className="title_text">
                          <span> 120 €/Anno</span>
                          <div className="d-flex gap-5">
                            <span className="title_text">
                              {" "}
                              Il prossimo pagamento è previsto il 24/09/23
                            </span>
                            <a className="link" href="/link">
                              Cronologia fatturazione
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="title_text">Il tuo piano attuale</p>

                    <div className="premium_plan_card mt-4">
                      <p className="card_text text-center">PIANO PREMIUM</p>
                      <div className="img_area d-flex justify-content-center align-items-center">
                        <ImageIcon />
                      </div>
                      <div className="text-center mt-4">
                        <button className="card_btn">Cambia</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}

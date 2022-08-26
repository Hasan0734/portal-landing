import React, { Component } from "react";
import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";
import { ChevronDown, Home, Person, StarIcon } from "../../assets/svg/svg";
import CommonForm from "./CommonForm";
import { commonData, tuttiData } from "./commonData";
import CommonTableList from "./CommonTableList";

export default class Attività extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutti: true,
      sedeSpecifica: false,
      personeSpecifiche: false,
    };
  }

  handleActivities(type) {
    if (type === "tutti") {
      this.setState({
        tutti: !this.state.tutti,
        sedeSpecifica: false,
        personeSpecifiche: false,
      });
    }
    if (type === "sedeSpecifica") {
      this.setState({
        tutti: false,
        sedeSpecifica: !this.state.sedeSpecifica,
        personeSpecifiche: false,
      });
    }
    if (type === "personeSpecifiche") {
      this.setState({
        tutti: false,
        sedeSpecifica: false,
        personeSpecifiche: !this.state.personeSpecifiche,
      });
    }
  }

  render() {
    const { tutti, sedeSpecifica, personeSpecifiche } = this.state;
    return (
      <>
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
              <div className="attivita_area">
                <div>
                  <h4 className="title">Invia attività da svolgere via App</h4>
                  <p className="sub_title">
                    I dipendenti riceveranno una notifica e potranno segnalare{" "}
                    <br /> quando un attività è stata portata a termine
                  </p>
                </div>

                <div>
                  <label className="input_label">Assegna attività a:</label>
                  <div className="mt-3">
                    <label htmlFor="tutti" className="radio text">
                      <input
                        onClick={() => this.handleActivities("tutti")}
                        type="radio"
                        className="radio_input"
                        id="tutti"
                        name="assegna_attivita"
                        checked={tutti}
                      />
                      <div className="radio_radio"></div>
                      Tutti
                    </label>
                  </div>
                  <div>
                    <label htmlFor="sedeSpecifica" className="radio text">
                      <input
                        onClick={() => this.handleActivities("sedeSpecifica")}
                        type="radio"
                        className="radio_input"
                        id="sedeSpecifica"
                        name="assegna_attivita"
                      />
                      <div className="radio_radio"></div>
                      Sede specifica
                    </label>
                  </div>
                  <div>
                    <label htmlFor="personeSpecifiche" className="radio text">
                      <input
                        onClick={() =>
                          this.handleActivities("personeSpecifiche")
                        }
                        type="radio"
                        className="radio_input"
                        id="personeSpecifiche"
                        name="assegna_attivita"
                      />
                      <div className="radio_radio"></div>
                      Persone specifiche
                    </label>
                  </div>
                </div>
                {/* from */}

                {tutti && (
                  <div>
                    <CommonForm></CommonForm>

                    {/* table data ARCHIVIO  */}

                    <div className="attivita_table_area">
                      <h4 className="title">ARCHIVIO </h4>
                      <div className="d-flex justify-content-end gap-1">
                        <button className="btns rounded-start rounded-1">
                          <StarIcon /> Tutti
                        </button>
                        <button className="btns">
                          <Home /> <span className="mx-2">Sedi</span>{" "}
                          <ChevronDown />
                        </button>
                        <button className="btns rounded-end rounded-1">
                          <Person /> <span className="mx-2">Persone</span>
                          <ChevronDown />
                        </button>
                      </div>
                      {/* table data */}
                      <table className="w-100 attività_table mt-3 w-100">
                        <thead>
                          <tr>
                            <th className="rounded">Nome Attività</th>
                            <th>Inzio</th>
                            <th>Fine</th>
                            <th>Assegnato a</th>
                            <th>Stato</th>
                            <th>Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tuttiData.map((sede) => (
                            <CommonTableList
                              name={"tutti"}
                              key={sede.id}
                              sede={sede}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {sedeSpecifica && (
                  <div>
                    <CommonForm>
                      <div className="mb-2">
                        <label className="input_label">Seleziona</label>
                        <br />
                        <select className="seleziona">
                          <option>Portal Cafe</option>
                          <option>Portal Cafe</option>
                          <option>Portal Cafe</option>
                        </select>
                      </div>
                    </CommonForm>

                    {/* table data ARCHIVIO  */}

                    <div className="attivita_table_area">
                      <h4 className="title">ARCHIVIO </h4>
                      <div className="d-flex justify-content-end gap-1">
                        <button className="btns rounded-start rounded-1">
                          <StarIcon /> Tutti
                        </button>
                        <button className="btns">
                          <Home /> <span className="mx-2">Sedi</span>{" "}
                          <ChevronDown />
                        </button>
                        <button className="btns rounded-end rounded-1">
                          <Person /> <span className="mx-2">Persone</span>{" "}
                          <ChevronDown />
                        </button>
                      </div>
                      {/* table data */}
                      <table className="w-100 attività_table mt-3 w-100">
                        <thead>
                          <tr>
                            <th className="rounded">Nome Attività</th>
                            <th>Inzio</th>
                            <th>Fine</th>
                            <th>Assegnato a</th>
                            <th>Stato</th>
                            <th>Note</th>
                            <th className="rounded">Azioni</th>
                          </tr>
                        </thead>
                        <tbody>
                          {commonData.map((sede) => (
                            <CommonTableList
                              name={"sede"}
                              key={sede.id}
                              sede={sede}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {personeSpecifiche && (
                  <div>
                    <CommonForm></CommonForm>

                    {/* table data ARCHIVIO  */}

                    <div className="attivita_table_area">
                      <h4 className="title">ARCHIVIO </h4>
                      <div className="d-flex justify-content-end gap-1">
                        <button className="btns rounded-start rounded-1">
                          <StarIcon /> Tutti
                        </button>
                        <button className="btns">
                          <Home /> <span className="mx-2">Sedi</span>{" "}
                          <ChevronDown />
                        </button>
                        <button className="btns rounded-end rounded-1">
                          <Person /> <span className="mx-2">Persone</span>{" "}
                          <ChevronDown />
                        </button>
                      </div>
                      {/* table data */}
                      <table className="w-100 attività_table mt-3 w-100">
                        <thead>
                          <tr>
                            <th className="rounded">Nome Attività</th>
                            <th>Inzio</th>
                            <th>Fine</th>
                            <th>Assegnato a</th>
                            <th>Stato</th>
                            <th>Note</th>
                            <th className="rounded">Azioni</th>
                          </tr>
                        </thead>
                        <tbody>
                          {commonData.map((sede) => (
                            <CommonTableList
                              name={"persone"}
                              key={sede.id}
                              sede={sede}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

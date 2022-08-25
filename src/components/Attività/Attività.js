import React, { Component } from "react";
import PersoneSpecifiche from "./PersoneSpecifiche/PersoneSpecifiche";
import SedeSpecifica from "./SadeSpecifica/SedeSpecifica";
import Tutti from "./Tutti/Tutti";
import "./Attività.css";
import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";

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

                {tutti && <Tutti />}
                {sedeSpecifica && <SedeSpecifica />}
                {personeSpecifiche && <PersoneSpecifiche />}
              </div>
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import "./Registration.css";
import logo from "../../assets/logo.svg";
import { withRouter } from "react-router";
import AziendaERuoli from "./AziendaERuoli/AziendaERuoli";
import SediLavorative from "./SediLavorative/SediLavorative";
import Dipendenti from "./Dipendenti/Dipendenti";
import TuttoPronto from "./TuttoPronto/TuttoPronto";
import Stepper from "./Stepper/Stepper";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }
  handleNextStep = () => {
    if (this.state.position < 3) {
      this.setState({
        position: this.state.position + 1,
      });
    }
  };
  handlePrevStep = () => {
    if (this.state.position > 0) {
      this.setState({
        position: this.state.position - 1,
      });
    }
  };
  handleSubmit = () => {
    alert("Submit successfull");
    this.props.history.push("/dashboard");
  };

  Appear = () => {
    switch (this.state.position) {
      case 0:
        return <AziendaERuoli />;

      case 1:
        return <SediLavorative />;
      case 2:
        return <Dipendenti />;
      case 3:
        return <TuttoPronto />;
      default:
        return <></>;
    }
  };
  render() {
    return (
      <div className="regi_page">
        <nav className="regi_nav w-100">
          <img src={logo} alt="logo" />
        </nav>

        <div className="w-100 d-flex justify-content-center">
          <div className="stepper_area">
            <Stepper step={this.state.position} />

            <form>
              {this.Appear()}

              <div className="mt-2 d-flex justify-content-between p-3">
                {this.state.position > 0 && (
                  <button
                    type="button"
                    onClick={() => this.handlePrevStep()}
                    className="step_prevBtn"
                  >
                    Indietro
                  </button>
                )}
                <div className="d-flex justify-content-end w-100">
                  {this.state.position === 3 ? (
                    <button
                      type="button"
                      className="step_nextBtn"
                      onClick={() => this.handleSubmit()}
                    >
                      Salva
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="step_nextBtn"
                      onClick={() => this.handleNextStep()}
                    >
                      Prossimo Step
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Registration);

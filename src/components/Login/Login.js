import React, { Component } from "react";
import { withRouter } from "react-router";
import logo from "../../assets/logoNew.svg";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login_page py-5">
        <div className="d-flex justify-content-center">
          <img className="mt-4" src={logo} alt="logo here" />
        </div>
        <div className="login_area d-flex justify-content-center">
          <div className="login_card">
            <h1 className="title">Bentornato!</h1>
            <form className="mt-3 form">
              <div className="">
                <label className="label">
                  Mail <span className="star"> *</span>
                </label>
                <input className="input_box" type="text" />
              </div>
              <div className="">
                <label className="label">
                  Password <span className="star"> *</span>
                </label>
                <input className="input_box" type="text" />
              </div>
              <div className="mt-5">
                <button onClick={() => this.props.history.push('/dashboard')} className="login_btn w-100">Accedi</button>
              </div>
              <div className="text-center mt-3">
                <a className="forgote_pass" href="/forgate">
                  Hai dimenticato la password?
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="dont_account">
            Non hai un account?
            <a className="regi" href="/registration">
              {" "}
              Registrati{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

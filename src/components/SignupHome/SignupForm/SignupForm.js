import React, { Component } from 'react'
import { withRouter } from 'react-router';


import './SignupForm.css'
 class SignupForm extends Component {

   render() {
  const { history } = this.props;
    return (
      <form className="signup_form">
        <div className="d-flex justify-content-between">
          <div>
            <input
              placeholder="Nome*"
              className="input_box w-100"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Cognome*"
              className="input_box w-100"
              type="text"
            />
          </div>
        </div>
        <div className="mt-3">
          <input placeholder="Email di lavoro*" className="input_box w-100" />
        </div>
        <div className="mt-3 form-check d-flex align-items-center">
          <input className="me-2 form-check-input" type="checkbox" />
          <label className="label_text">
            Accetto{" "}
            <a className="link" href="/">
              termini e condizioni
            </a>
          </label>
        </div>
        <div className="text-center mt-3">
          <button
            onClick={() => history.push("/registration/form")}
            className="submit_btn"
          >
            Prova gratuita
          </button>
        </div>
        <div className="text-center mt-3">
          <p className="alredy_text">
            Hai gia un account?{" "}
            <a className="link" href="/">
              Accedi qui
            </a>
          </p>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);

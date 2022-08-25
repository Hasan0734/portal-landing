import React, { Component } from "react";
import "./SignupHome.css";
import iphone from "../../assets/iPhone-XR.png";
import logo from "../../assets/logoNew.svg";
import googleIcon from "../../assets/svg/google.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import SignupForm from "./SignupForm/SignupForm";
export default class SignupHome extends Component {
  render() {
    return (
      <div className="signup_page pt-5">
        <div>
          <div className="d-flex justify-content-center ">
            <img src={logo} alt="logo here" />
          </div>
          <div className="signup_area">
            <div className="row">
              <div className="col-md-5 image_area">
                <img className="w-75 image-fluid" src={iphone} alt="images" />
              </div>
              <div className="col-md-7 p-5">
                <div>
                  <h3 className="title">
                    Il nuovo badge digitale,
                    <br /> veloce e comodo.{" "}
                  </h3>
                  <p className="sub_title">
                    Registrati in pochi minuti, è gratis
                  </p>
                </div>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btns">
                    <img src={googleIcon} alt="google icon" /> Google
                  </button>
                  <button className="btns">
                    <img src={linkedin} alt="linkedin icon" /> Linkedin
                  </button>
                </div>

                <br />
                <hr />
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

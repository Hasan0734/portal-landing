import React, { Component } from 'react'
import logo from '../../../../assets/logo-outlined.svg'
import { MailIcon } from '../../../../assets/svg/svg'
import './Credenzial.css'

export default class CredenzialiGeoApp extends Component {
  render() {
    return (
        <div className="app_area d-flex justify-content-center text-center mt-2">
        <div className="m-4 px-2 py-3">
          <h3 className="badge_title">Digital Badge Sandra Sabia</h3>
          <div className="badge_qr ">
            <img className="w-50" src={logo} alt="qr code" />
          </div>
          <div className="text-center mt-5">
            <a className="common_btn main_btn" href="#mail"><MailIcon/> <span>Invia per email</span></a>
            <p className="sub_text mt-5">Riceverà le credenziali per entrare nell’app a sandra@getportal.ai</p>
          </div>
        </div>
      </div>
    )
  }
}

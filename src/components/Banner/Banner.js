import './Banner.css'

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner_area">
      <div className="content_area d-flex align-items-center justify-content-center">
        <h5 className="banner_text">
          Hai ancora 14 giorni di prova gratuita
        </h5>
        <button className="upgrade_btn">upgrade</button>
      </div>
    </div>
    )
  }
}


import React, { Component } from "react";
import {
  AtmCardIcon,
  ChartIcon,
  DesktopIcon,
  ExitIcon,
  ImageIcon,
  UserPlus,
} from "../../../assets/svg/svg";
import "./PagamentiFatturazione.css";

export default class PagamentiFatturazione extends Component {
  render() {
    return (
      <div className="pagamenti_area">
        <div className="d-flex justify-content-end mt-5">
          <button className="exit_btn"><ExitIcon/> Esci</button>
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
              <button className="icon_btn"><UserPlus/></button>
              <span className="title_text">30 Dipendenti</span>
            </li>
            <li className="d-flex gap-3 mt-4">
              <button className="icon_btn"><DesktopIcon/></button>
              <span className="title_text">2 Sessioni</span>
            </li>
          </ul>

          <p className="title_text mt-3">Fatturazione e pagamento</p>

          <ul className="list-unstyled ">
            <li className="d-flex gap-3">
              <span><AtmCardIcon/></span>
              <span className="title_text">Visa - termina con ****9854</span>
            </li>
            <li className="d-flex gap-4 mt-3 align-items-start">
              <div><ChartIcon/></div>
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
             <ImageIcon/>
            </div>
            <div className="text-center mt-4">
              <button className="card_btn">Cambia</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

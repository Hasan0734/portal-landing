import React, { Component } from "react";
import { ChevronDown, ChevronUp, Search } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import "../Timbrature.css";
import SearchBar from "../SearchBar/SearchBar";
import { Calendar2, IconExport } from "../../../assets/svg/svg";

export default class TimbratureFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ultimi: false,
    exportData: false,
      search: false
    };
  }

  render() {
    const { ultimi, exportData, search } = this.state;
    return (
      <div className="d-flex align-items-end gap-2 timbrature_filter">
        <div className="w-100 position-relative">
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ ultimi: false });
            }}
          >
            <button
              onClick={() => this.setState({ ultimi: !ultimi })}
              className="filter_btn d-flex gap-1 w-100
                align-items-center  justify-content-between"
            >
              <span className="mx-1">Ultimi 30 giorni</span>
              <span>{ultimi ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
            <div
              className={`position-absolute dropdown ${
                ultimi ? "d-block" : "d-none"
              }`}
            >
              <ul className="list-unstyled lists mb-0">
                <li>Luglio 2022</li>
                <li>Giugno 2022</li>
                <li>Maggio 2022</li>
                <li className="border border-bottom-0">Aprile 2022</li>
              </ul>
            </div>
          </OutsideClickHandler>
        </div>

        <div className="">
          <div className="date_title">Da</div>
          <button className="date_input d-flex align-items-center gap-3">
            <span>27.06.22</span>
            <Calendar2 />
          </button>
        </div>
        <div className="">
          <div className="date_title">A</div>
          <button className="date_input d-flex align-items-center gap-3">
            <span>27.06.22</span>
            <Calendar2 />
          </button>
        </div>
        {/* search */}
        <div className="w-100 position-relative">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        this.setState({ search: false });
                }}
                >
            <button
              onClick={() => this.setState({ search: !search })}
              className="filter_btn d-flex gap-1 w-100
                align-items-center"
            >
              <span>
                <Search />
              </span>
              <span className="mx-1">Cerca per nome</span>
            </button>
          </OutsideClickHandler>
          {search && <SearchBar />}
        </div>

        {/* export  */}
        <div className="w-100 position-relative">
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ exportData: false });
            }}
          >
            <button
              onClick={() => this.setState({ exportData: !exportData })}
              className="filter_btn d-flex 
                        gap-1 w-100 align-items-center justify-content-between"
            >
              <span className="export_icon ">
                <IconExport />
              </span>
              <span className="export_ttile mx-1">Esporta Timbrature</span>
              <span>
                <ChevronDown />
              </span>
            </button>
            <div
              className={`position-absolute dropdown ${
                exportData ? "d-block" : "d-none"
              }`}
            >
              <ul className="list-unstyled lists mb-0">
                <li>Luglio 2022</li>
                <li>Giugno 2022</li>
                <li>Maggio 2022</li>
                <li className="border border-bottom-0">Aprile 2022</li>
              </ul>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    );
  }
}

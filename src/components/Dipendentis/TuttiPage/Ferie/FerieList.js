import React, { Component } from "react";
export default class FerieList extends Component {
  render() {
    const { tipologia, _dalGiorno, dalGiorno_, dalle, alle } = this.props.data;

    return (
      <>
        <li className="list_item_body d-flex gap-6 border-bottom py-3 px-3">
          <span
            className={`${
              tipologia.toLowerCase() === "ferie"
                ? "feried_btn"
                : "permesso_btn"
            }  list_dt_text btns`}
          >
            {tipologia}
          </span>
          <span className="list_dt_text">{_dalGiorno}</span>
          <span className="list_dt_text">{dalGiorno_}</span>
          <span className="list_dt_text">{dalle}</span>
          <span className="list_dt_text">{alle}</span>
        </li>
      </>
    );
  }
}

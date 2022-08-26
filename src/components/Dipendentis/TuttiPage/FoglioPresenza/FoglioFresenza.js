import React, { Component } from "react";
import { tableData } from "./dummyData";
import Table from "./Table";
import { withRouter } from "react-router";

class FoglioFresenza extends Component {
  render() {
    const {
      match: {
        params: { tuttiName },
      },
    } = this.props;
    return (
      <div>
        {/* Table */}
        <div className="my-5">
          <h2 className="name_foglio">{tuttiName}</h2>
        </div>
        <hr className="border" />
        {tableData.map((dt, i) => (
          <Table key={dt.id} data={dt} />
        ))}
      </div>
    );
  }
}
export default withRouter(FoglioFresenza);

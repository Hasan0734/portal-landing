import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";
import Generali from "../Generali/Generali";
import "./Impostazioni.css";
import PagamentiFatturazione from "../PagamentiFatturazione/PagamentiFatturazione";
import LeftSide from "../../LeftSide/LeftSide";
import Banner from "../../Banner/Banner";

const tabs = [
  { title: "Generali", hash: "generali" },
  { title: "Pagamenti e Fatturazione", hash: "pagamenti-e-atturazione" },
];

export default class Impostazioni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "generali",
    };
  }

  handleActive = (name) => {
    this.setState({ isActive: name });
  };

  render() {
    return (
      <div className="layout">
        <Banner />
        <div className="d-flex w-100">
          {/* sidebar start  */}
          <div className="sidebar">
            <LeftSide />
          </div>
          {/* sidebar end  */}

          {/* main body section  start*/}

          <main className="main_body">
            {/* pass the children */}
            <div className="impostazioni_area">
              <Tabs
                tabs={tabs}
                handleActive={this.handleActive}
                state={this.state}
              />

              {this.state.isActive === "generali" && <Generali />}

              {this.state.isActive === "pagamenti-e-atturazione" && (
                <PagamentiFatturazione />
              )}
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}

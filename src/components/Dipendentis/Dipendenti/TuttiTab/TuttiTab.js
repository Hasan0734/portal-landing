import React, { Component } from "react";
import DipendentiProfilo from "../../../Dipendentis/Profilo/Profilo";
import FoglioFresenza from "../../../Dipendentis/FoglioPresenza/FoglioFresenza";
import StaticButton from "../../../StaticButton/StaticButton";
import SelectOption from "../../../SelectOption/SelectOption";
import BustaPaga from "../../../Dipendentis/BustaPaga/BustaPaga";
import Spese from "../../../Dipendentis/Spese/Spese";
import RimborsiChilomentrici from "../../../Dipendentis/RimborsiChilomentrici/RimborsiChilomentrici";
import Ferie from "../../../Dipendentis/Ferie/Ferie";
import Tabs from "../../../Tabs/Tabs";
import Banner from "../../../Banner/Banner";
import LeftSide from "../../../LeftSide/LeftSide";

const tabs = [
  { title: "Profilo", hash: "profilo" },
  { title: "Foglio Presenza", hash: "foglio-presenza" },
  { title: "Busta Paga", hash: "busta-paga" },
  { title: "Spese", hash: "spese" },
  { title: "Rimborso Chilometrico", hash: "rimborso-chilmetrico" },
  { title: "Ferie", hash: "ferie" },
];

export default class TuttiTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "profilo",
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
            <div className="dipendenti_team">
              {/* sidebar static button */}
              <StaticButton />

              <div>
                <SelectOption />

                <Tabs
                  tabs={tabs}
                  handleActive={this.handleActive}
                  state={this.state}
                />

                {this.state.isActive === "profilo" && <DipendentiProfilo />}
                {this.state.isActive === "foglio-presenza" && (
                  <FoglioFresenza />
                )}
                {this.state.isActive === "busta-paga" && <BustaPaga />}
                {this.state.isActive === "spese" && <Spese />}
                {this.state.isActive === "rimborso-chilmetrico" && (
                  <RimborsiChilomentrici />
                )}
                {this.state.isActive === "ferie" && <Ferie />}
              </div>
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}

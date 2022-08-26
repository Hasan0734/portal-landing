import React, { Component } from "react";
import DipendentiProfilo from "../Profilo/Profilo";
import FoglioFresenza from "../FoglioPresenza/FoglioFresenza";
import StaticButton from "../../StaticButton/StaticButton";
import SelectOption from "../../SelectOption/SelectOption";
import BustaPaga from "../BustaPaga/BustaPaga";
import RimborsiChilomentrici from "../RimborsiChilomentrici/RimborsiChilomentrici";
import Ferie from "../Ferie/Ferie";
import Tabs from "../../Tabs/Tabs";
import Banner from "../../Banner/Banner";
import LeftSide from "../../LeftSide/LeftSide";
import Spese from "./Spese/Spese";

const tabs = [
  { title: "Profilo", hash: "profilo" },
  { title: "Foglio Presenza", hash: "foglio-presenza" },
  { title: "Busta Paga", hash: "busta-paga" },
  { title: "Spese", hash: "spese" },
  { title: "Rimborso Chilometrico", hash: "rimborso-chilmetrico" },
  { title: "Ferie", hash: "ferie" },
];

export default class TuttiPage extends Component {
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

import React, { Component } from "react";
import "./Dipendenti.css";
import Banner from "../../Banner/Banner";
import LeftSide from "../../LeftSide/LeftSide";
// import Team from "./Team";
// import Tutti from "./Tutti";
import { Plus } from "react-feather";
import { tuttiTeamData } from "./TuttiTable/dummyData";
import { withRouter } from "react-router";
import TuttiTable from "./TuttiTable/TuttiTable";
import HomeTabs from "./HomeTabs/HomeTabs";
import SearchArea from "./SearchArea/SearchArea";
import TeamTable from "./TeamTable/TeamTable";

class Dipendenti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tutti",
    };
  }

  handleTab = (name) => {
    this.setState({
      activeTab: name,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
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

              {/* tutti */}
              {this.state.activeTab === "tutti" && (
                <div className="dipendenti">
                  <div>
                    <div className="d-flex align-items-center">
                      <h2 className="dipendenti_title mb-0">Dipendenti</h2>
                      <button className="dipendenti_number ms-2">
                        {tuttiTeamData.length}
                      </button>
                    </div>
                    <div className="mt-3 dipendenti_content d-flex justify-content-between">
                      <p className="dipendenti_text">
                        Puoi creare nuove schede dipendente e gestirli <br />{" "}
                        singolarmente o creare nuovi team
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            this.props.history.push(
                              "/dependenti/nuovo-dipendente"
                            )
                          }
                          className="add_button"
                        >
                          {" "}
                          <Plus strokeWidth={3} /> <span>Aggiungi nuovo</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <SearchArea />

                  <HomeTabs
                    activeTab={this.state.activeTab}
                    handleTab={this.handleTab}
                  />
                  <TuttiTable />
                </div>
              )}

              {/* team */}

              {this.state.activeTab === "team" && (
                <div className="dipendenti">
                  <div className="mb-5">
                    <div className="d-flex align-items-center">
                      <h2 className="dipendenti_title mb-0">Dipendenti</h2>
                    </div>
                    <div className="mt-3 dipendenti_content d-flex justify-content-between">
                      <p className="dipendenti_text">
                        Puoi creare nuove schede dipendente e gestirli <br />{" "}
                        singolarmente o creare nuovi team
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            this.props.history.push("/dependenti/new-team/add")
                          }
                          className="add_button"
                        >
                          {" "}
                          <Plus strokeWidth={3} /> <span>Aggiungi nuovo</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <HomeTabs
                    activeTab={this.state.activeTab}
                    handleTab={this.handleTab}
                  />
                  <TeamTable handleSelectMember={this.handleSelectMember} />
                </div>
              )}
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dipendenti);

import React, { Component } from "react";
import Banner from "../../Banner/Banner";
import LeftSide from "../../LeftSide/LeftSide";
import { Plus } from "react-feather";
import { withRouter } from "react-router";
import SearchArea from "./SearchArea/SearchArea";
import TuttiTableData from "./TuttiTableData";
import { teamData, tuttiTeamData } from "./dummyData";
import TeamTableData from "./TeamTableData";

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

              <div className="dipendenti">
                <div>
                  <div className="d-flex align-items-center">
                    <h2 className="dipendenti_title mb-0">Dipendenti</h2>
                    {this.state.activeTab === "tutti" && (
                      <button className="dipendenti_number ms-2">
                        {tuttiTeamData.length}
                      </button>
                    )}
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
                            (this.state.activeTab === "tutti" &&
                              "/dependenti/nuovo-dipendente") ||
                              (this.state.activeTab === "team" &&
                                "/dependenti/new-team/add")
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

                {this.state.activeTab === "tutti" && <SearchArea />}
                {/* home tabs */}
                <div className="home_tab_area mt-5">
                  <ul className="tabs d-flex gap-3 list-unstyled  w-100 mb-0">
                    <li className="tab_item">
                      <button
                        className={`tab_link ${
                          this.state.activeTab === "tutti" ? "tav_active" : ""
                        }`}
                        onClick={() => this.handleTab("tutti")}
                      >
                        Tutti
                      </button>
                    </li>
                    <li className="tab_item">
                      <button
                        className={`tab_link ${
                          this.state.activeTab === "team" ? "tav_active" : ""
                        }`}
                        onClick={() => this.handleTab("team")}
                      >
                        Team
                      </button>
                    </li>
                  </ul>
                </div>

                {this.state.activeTab === "tutti" && (
                  <div className="team_table_area mt-2">
                    <table className="team_table w-100">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Cognome</th>
                          <th>Mansione</th>
                          <th>Team</th>
                          <th>Contratto</th>
                          <th>Scadenza</th>
                          <th>Busta Paga Luglio</th>
                          <th>Azioni</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tuttiTeamData.map((data, i) => (
                          <TuttiTableData
                            handleSelectMember={this.props.handleSelectMember}
                            key={i}
                            data={data}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {this.state.activeTab === "team" && (
                  <div className="team_table_area mt-2">
                    <table className="team_table w-100">
                      <thead>
                        <tr>
                          <th>Nome Team</th>
                          <th>N. Dipendenti</th>
                          <th>Responsabile</th>
                          <th>Sede</th>
                          <th>Azioni</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamData.map((data, i) => (
                          <TeamTableData
                            handleSelectMember={this.props.handleSelectMember}
                            key={i}
                            data={data}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dipendenti);

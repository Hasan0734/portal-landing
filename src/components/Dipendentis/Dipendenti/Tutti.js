import React, { Component } from "react";
import HomeTabs from "../../Dipendentis/Dipendenti/HomeTabs/HomeTabs";
import SearchArea from "../../Dipendentis/Dipendenti/SearchArea/SearchArea";
import { tuttiTeamData } from "../../Dipendentis/Dipendenti/TuttiTable/dummyData";
import TuttiTable from "../../Dipendentis/Dipendenti/TuttiTable/TuttiTable";
import { Plus } from "react-feather";
import { withRouter } from "react-router";

 class Tutti extends Component {
  render() {
    return (
      <>
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
                    this.props.history.push("/dependenti/nuovo-dipendente")
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
            activeTab={this.props.activeTab}
            handleTab={this.props.handleTab}
          />

          <TuttiTable />
        </div>
      </>
    );
  }
}

export default withRouter(Tutti)
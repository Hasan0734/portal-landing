import React, { Component } from "react";
import { withRouter } from "react-router";
import { EditIcon } from "../../../../assets/svg/svg";
import Banner from "../../../Banner/Banner";
import LeftSide from "../../../LeftSide/LeftSide";
import StaticButton from "../../../StaticButton/StaticButton";
import "./TeamProfile.css";

class TeamProfile extends Component {
  render() {
    const {
      match: {
        params: { teamName },
      },
      history,
    } = this.props;

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
            <div className="team_profile">
              <div className="d-flex justify-content-between">
                {/* sidebar static button */}

                <StaticButton />
                <div>
                  <button
                    onClick={() =>
                      history.push(`/dependenti/team/${teamName}/edit`)
                    }
                    className="modific_btn px-3 py-1 d-flex gap-2 align-items-center"
                  >
                    <EditIcon /> Modifica
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between profile_area">
                <div>
                  <div>
                    <label className="label">Nome del Team</label>
                    <h4 className="title">Designers</h4>
                  </div>
                  <div>
                    <label className="label">Responsabile</label>
                    <h4 className="title">Alice Nacci</h4>
                  </div>
                  <div>
                    <label className="label">Sede Operativa</label>
                    <h4 className="title">Portal Office</h4>
                  </div>
                </div>
                <div>
                  <label className="member_label">VISUALIZZA I MEMBRI</label>
                  <div className="member_area p-2">
                    <button className="member m-1 px-3 py-1">
                      Sandra Sabia
                    </button>
                    <button className="member m-1 px-3 py-1">
                      Enrico Sella Nora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* main body section  end*/}
        </div>
      </div>
    );
  }
}
export default withRouter(TeamProfile);

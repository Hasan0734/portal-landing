import React, { Component } from "react";
import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";
import { EditIcon } from "../../assets/svg/svg";
import AlertCard from "./AlertCard";
import { Plus } from "react-feather";
import AddSede from "./AddSedi";
import EditModal from "./EditModal";
export default class Sedi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editSedi: false,
      addSedi: false,
    };
  }
  hanldeTrigger = () => {
    this.setState({
      editSedi: !this.state.editSedi,
    });
  };
  handleAddSedi = () => {
    this.setState({
      addSedi: !this.state.addSedi,
    });
  };
  render() {
        const { addSedi, editSedi } = this.state;
    return (
      <>
        {editSedi && (
          <EditModal trigger={editSedi} handleTrigger={this.hanldeTrigger} />
        )}
        {addSedi && (
          <AddSede trigger={addSedi} handleTrigger={this.handleAddSedi} />
        )}
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
              <div className="sedi_area">
                <div className="mt-4">
                  <h3 className="title">Sedi Operative</h3>
                  <p className="sub_title mt-2">
                    Imposta le sedi operative per poter pianificare gli <br />
                    orari più velocemente
                  </p>
                </div>
                {/* sede principale */}
                <div className="head_area">
                  <h3 className="title">SEDE PRINCIPALE</h3>

                  <div className="head_card">
                    <div className="card_body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="card_title mb-0">Portal Tech</h3>
                        <button
                          onClick={() => this.hanldeTrigger()}
                          className="card_edit_icon border-0 outline-none 
              bg-transparent"
                        >
                          <EditIcon />
                        </button>
                      </div>
                      <p className="card_text mb-0">
                        Via Benetto Accoliti 9, Firenze
                      </p>
                    </div>
                  </div>
                </div>
                {/* sede team */}
                <div className="sedi_team mt-4">
                  <h3 className="team_title">Team</h3>
                  <div className="sedi_team_table">
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>Nome Team</th>
                          <th>N. Dipendenti</th>
                          <th>Responsabile</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Designer</td>
                          <td>4</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Developer</td>
                          <td>6</td>
                          <td>Roberto Fazio</td>
                        </tr>
                        <tr>
                          <td>Service</td>
                          <td>2</td>
                          <td>Giorgia Lettini</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="perosne_area mt-4">
                  <h5 className="persone_title">Persone</h5>
                  <h6 className="persone_total">11</h6>
                </div>
                {/* altre sedi operative */}
                <div className="sedi_alert_area mt-5">
                  <h3 className="alert_ttile">ALTRE SEDI OPERATIVE</h3>
                  <div className="d-flex justify-content-end">
                    <button
                      onClick={() => this.handleAddSedi()}
                      className="add_btn"
                    >
                      <Plus /> Aggiungi spesa
                    </button>
                  </div>
                  <div className="row">
                    <AlertCard title={"Portal OFFICE"} />
                    <AlertCard title={"Portal OFFICE II"} />
                    <AlertCard title={"Portal Café"} />
                  </div>
                </div>

                <div className="perosne_area mt-4">
                  <h5 className="persone_title">Team</h5>
                  <h6 className="persone_title">Nessun team in questa sede</h6>
                </div>
                <div className="perosne_area mt-4">
                  <h5 className="persone_title">Persone</h5>
                  <h6 className="persone_total">11</h6>
                </div>
              </div>
            </main>
            {/* main body section  end*/}
          </div>
        </div>
      </>
    );
  }
}

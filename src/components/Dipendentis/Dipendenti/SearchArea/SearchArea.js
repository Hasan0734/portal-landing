import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { withRouter } from "react-router";
import { BagIcon, Search } from "../../../../assets/svg/svg";
import { memberList } from "./dummyData";
import "./SearchArea.css";



 class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="search_area mt-5">
        <div className="position-relative">
          <ul className="list-unstyled d-flex gap-2">
            <li className="position-relative">
              <OutsideClickHandler
                onOutsideClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                <a
                  onClick={() => this.handleSearch()}
                  className="text se_tab_button"
                  href="#search"
                >
                  <span>
                    <Search />
                  </span>
                  <span className="text ms-2">Cerca</span>
                </a>
                {this.state.isOpen && (
                  <div className="position-absolute mt-3">
                    <div className="form_area border">
                      <div className="p-2">
                        <input className="input_field w-100 p-1" type="text" />
                        <div className="mt-3">
                          <h4 className="title ">Nome/Mansione/Team</h4>
                        </div>
                      </div>
                      <ul className="table_data list-unstyled">
                        {memberList.map((member, i) => (
                          <li
                            onClick={() =>
                              this.props.history.push(`/dependenti/tutti/${member.name}`)
                            }
                            key={i}
                            className="d-flex justify-content-between border-top"
                          >
                            <span className="name ps-2">{member.name}</span>
                            <span className="profe">{member.profession}</span>
                            <span className="profe pe-2">
                              {member.responsibilities}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </OutsideClickHandler>
            </li>
            <li className="">
              <a className="text se_tab_button" href="/">
                <span>
                  <BagIcon />
                </span>
                <span className="text ms-2">Tutti i team</span>
              </a>
            </li>
            <li className="">
              <a className="text se_tab_button" href="/">
                <span>
                  <BagIcon />
                </span>
                <span className="text ms-2">Tutte le mansioni</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchArea)

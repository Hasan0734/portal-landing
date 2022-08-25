import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./LeftSide.css";
import { sidebars } from "./sidebarData";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class LeftSide extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };
  render() {
    return (
      <aside className="left_side_area">
        <div className="logo_area text-center mt-5">
          <a href="/">
            <img className="logo" width={100} src={logo} alt="portal logo" />
          </a>
        </div>

        <div className="left_side_content mt-4">
          {/* larger device */}
          <div className="left_side">
            {sidebars.map((data, i) => (
              <div key={i}>
                <ul className="list-unstyled">
                  <li className="button_tilte" href="">
                    {data.title}
                  </li>
                </ul>

                <ul className="list-unstyled">
                  {data.items.map((item, index) => (
                    <li key={index} className="nav_item ">
                      <NavLink
                        // className={`nav_link ${
                        //   item.url === location.pathname ? "nav_active" : ""
                        // }`}
                        to={item.url}
                        className="nav_link"
                        activeClassName="nav_active"
                      >
                        <span className={`me-2 nav_icon`}> {item.icon}</span>
                        <span className="nev_link_text">{item.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }
}

export default withRouter(LeftSide);

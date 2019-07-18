import React, { Component } from "react";
import logo from "../logo/logo.PNG";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-static-top m-b-0"
          style={{ padding: "0px" }}
        >
          <div className="navbar-header">
            {" "}
            <div className="top-left-part">
              <a className="logo" href="/">
                <span className="hidden-xs">
                  <img
                    src={logo}
                    alt="home"
                    style={{ width: "100%", height: "60px" }}
                  />
                </span>
              </a>
            </div>
            <ul className="nav navbar-top-links navbar-left m-l-20 hidden-xs">
              <li>
                <form role="search" className="app-search hidden-xs">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />{" "}
                  <a>
                    <i className="fa fa-search" />
                  </a>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

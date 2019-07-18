import React from "react";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="wrapper">
        <nav
          className="navbar navbar-default navbar-static-top m-b-0"
          style={{ padding: "0px" }}
        >
          <div className="navbar-header">
            {" "}
            <a
              className="navbar-toggle hidden-sm hidden-md hidden-lg "
              href="javascript:void(0)"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <i className="fa fa-bars" />
            </a>
            <div className="top-left-part">
              <a className="logo" href="index.html">
                <b>lo</b>
                <span className="hidden-xs">
                  <img src="../plugins/images/pixeladmin-text.png" alt="home" />
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
                  <a href>
                    <i className="fa fa-search" />
                  </a>
                </form>
              </li>
            </ul>
            <ul className="nav navbar-top-links navbar-right pull-right">
              <li>
                <a className="profile-pic" href="#">
                  {" "}
                  LOGo<b className="hidden-xs">Steave</b>{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse slimscrollsidebar">
            <ul className="nav" id="side-menu">
              <li style={{ padding: "10px 0 0" }}>
                <a href="index.html" className="waves-effect">
                  <i className="fa fa-clock-o fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="profile.html" className="waves-effect">
                  <i className="fa fa-user fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Profile</span>
                </a>
              </li>
              <li>
                <a href="basic-table.html" className="waves-effect">
                  <i className="fa fa-table fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Basic Table</span>
                </a>
              </li>
              <li>
                <a href="fontawesome.html" className="waves-effect">
                  <i className="fa fa-font fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Icons</span>
                </a>
              </li>
              <li>
                <a href="map-google.html" className="waves-effect">
                  <i className="fa fa-globe fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Google Map</span>
                </a>
              </li>
              <li>
                <a href="blank.html" className="waves-effect">
                  <i className="fa fa-columns fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Blank Page</span>
                </a>
              </li>
              <li>
                <a href="404.html" className="waves-effect">
                  <i className="fa fa-info-circle fa-fw" aria-hidden="true" />
                  <span className="hide-menu">Error 404</span>
                </a>
              </li>
            </ul>
            <div className="center p-20">
              <span className="hide-menu">
                <a
                  href="http://wrappixel.com/templates/pixeladmin/"
                  target="_blank"
                  className="btn btn-danger btn-block btn-rounded waves-effect waves-light"
                >
                  Upgrade to Pro
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;

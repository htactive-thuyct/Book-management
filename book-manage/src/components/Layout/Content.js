import React from "./node_modules/react";
import Book from "../Products/Book.js";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  {/* <li className="app-sidebar__heading">UI Tables</li> */}
                  <li>
                    <a href="/">
                      <i className="fa fa-table" />
                      Users
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-book" />
                      Books
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className="col-md-12">
                  <Book />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;

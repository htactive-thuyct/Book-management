import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteUser = id => {
    this.props.deleteUser(id);
  };

  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">LIST OF USER</h3>

                <NavLink to={{ pathname: "/addUser" }} className="link">
                  <button
                    id="buttonAdd"
                    type="button"
                    className="btn btn-success"
                  >
                    Add <i className="fa fa-plus" />
                  </button>
                </NavLink>

                <div className="containerTable">
                  {" "}
                  <table className="table">
                    <thead className="thead">
                      <tr>
                        <th>#</th>
                        <th>NAME </th>
                        <th>AGE </th>
                        <th>PHONE </th>
                        <th>CLASS </th>
                        <th>IMAGE </th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody id="categoryList">
                      {this.props.users.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.phone}</td>
                            <td>{item.class}</td>
                            <td>
                              <img
                                src={item.img}
                                style={{ width: "50px", height: "50px" }}
                                alt=""
                              />
                            </td>
                            <td>
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteUser(item.id)}
                              />
                              &ensp;
                              <NavLink to={`/updateUser/${item.id}`}>
                                <i className="fa fa-pencil" />
                              </NavLink>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

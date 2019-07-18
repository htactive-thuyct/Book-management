import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  deleteCategory = id => {
    this.props.deleteCategory(id);
  };

  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">LIST OF CATEGORY</h3>

                <NavLink to={{ pathname: "/addCategory" }} className="link">
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
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody id="categoryList">
                      {this.props.categories.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>

                            <td>
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteCategory(item.id)}
                              />
                              &ensp;
                              <NavLink to={`/updateCategory/${item.id}`}>
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

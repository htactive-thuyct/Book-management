import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class ProductList extends Component {
  deleteBook = id => {
    this.props.deleteBook(id);
  };
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">LIST OF USER</h3>

                <NavLink to={{ pathname: "/addBook" }} className="link">
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
                        <th>NAME PRODUCT</th>
                        <th>TYPE</th>
                        <th>QUANTITY</th>
                        <th>STATUS</th>
                        <th>IMAGE</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody id="productList">
                      {this.props.products.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.status}</td>
                            <td>
                              <img
                                src={item.image}
                                style={{ width: "50px", height: "50px" }}
                                alt=""
                              />
                            </td>
                            <td>
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteBook(item.id)}
                              />
                              &ensp;
                              <NavLink to={`/updateBook/${item.id}`}>
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

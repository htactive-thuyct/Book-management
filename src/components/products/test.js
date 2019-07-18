import React from "react";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    let { show } = this.state;
    return (
      <>
        <button
          onClick={this.handleShow}
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add Book <i className="fa fa-plus" />
        </button>

        <div
          className={`${show ? "modal fade show" : "modal fade"}`}
          style={{ display: `${show ? "block" : "none"}`, marginTop: "100px" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Book's information</h4>
                <button
                  type="button"
                  className="close"
                  onClick={this.handleHide}
                  data-dismiss="modal"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">ID Category</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's name"
                    name="name"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="quantity"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's status"
                    name="status"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="image"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.handleHide}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AddBook;
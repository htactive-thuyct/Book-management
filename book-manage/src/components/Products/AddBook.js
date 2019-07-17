import React from "./node_modules/react";
import { withFirebase } from "../firebase/context";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: []
    };
  }
  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  addBook = () => {
    this.handleUpload();
    setTimeout(this.handleHide, 2000);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = this.props.firebase.storage
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        this.props.firebase.storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.props.addBook({
              ...this.state,
              img: url
            });
          });
      }
    );
    console.log("object");
  };

  render() {
    const { name, quantity, img, id, status } = this.state;
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
          Add <i className="fa fa-plus" />
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
                  <label htmlFor="exampleInputPassword1">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="id"
                    defaultValue={id}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's name"
                    name="name"
                    defaultValue={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="quantity"
                    defaultValue={quantity}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's status"
                    name="status"
                    defaultValue={status}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="img"
                    defaultValue={img}
                    onChange={this.handleImage}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.addBook}
                >
                  Save
                </button>
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

export default withFirebase(AddBook);
// export default AddBook;

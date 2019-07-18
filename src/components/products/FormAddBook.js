import React, { Component } from "react";
import { withFirebase } from "../Firebase/context";

class FormAddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   show: false,
      data: []
    };
  }

  addBook = () => {
    this.handleUpload();
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
              image: url
            });
          });
      }
    );
  };

  render() {
    const { name, type, quantity, status, image } = this.state;
    //let { show } = this.state;
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">BOOK'S INFORMATION</h3>

                <div className="containerTable">
                  <form onSubmit={this.onSubmit} className="formAdd">
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
                      <label htmlFor="exampleInputPassword1">Type</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter book's type"
                        name="type"
                        defaultValue={type}
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
                        name="image"
                        defaultValue={image}
                        onChange={this.handleImage}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={this.addBook}
                    >
                      ADD
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(FormAddBook);

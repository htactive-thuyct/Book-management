import React, { Component } from "react";
import { withFirebase } from "../Firebase/context";

class FormAddBook extends Component {
  constructor(props) {
    super(props);
    console.log(props.categories);
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
    const { name, type, quantity, image, quantityRemain } = this.state;
    const { categories } = this.props;
    //let { show } = this.state;
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>{" "}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12"> </div>
          </div>
          <div className="white-box">
            <form className="form-horizontal form-material">
              <div className="form-group">
                <label className="col-md-12"> Name</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Cao Thi Thuy"
                    className="form-control form-control-line"
                    name="name"
                    defaultValue={name}
                    onChange={this.handleChange}
                  />{" "}
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-12">Type</label>
                <div className="col-sm-12">
                  <select
                    className="form-control form-control-line"
                    name="type"
                    defaultValue={type}
                    onChange={this.handleChange}
                  >
                    {categories.map((item, index) => (
                      <option key={index}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Quantity</label>
                <div className="col-md-12">
                  <input
                    type="number"
                    placeholder="100"
                    className="form-control form-control-line"
                    name="quantity"
                    defaultValue={quantity}
                    onChange={this.handleChange}
                  />{" "}
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Quantity Remain</label>
                <div className="col-md-12">
                  <input
                    type="number"
                    placeholder="10"
                    className="form-control form-control-line"
                    name="quantityRemain"
                    defaultValue={quantityRemain}
                    onChange={this.handleChange}
                  />{" "}
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Image</label>
                <div className="col-md-12">
                  <input
                    type="file"
                    className="form-control form-control-line"
                    name="image"
                    defaultValue={image}
                    onChange={this.handleImage}
                  />{" "}
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.addBook}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(FormAddBook);

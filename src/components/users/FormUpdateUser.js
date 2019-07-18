import React, { Component } from "react";
import { withFirebase } from "../Firebase/context";

class FormUpdateUser extends Component {
  constructor(props) {
    super(props);
    // console.log(props.users);
    const book_id = this.props.match.match.params.id;
    const books = this.props.users;
    let book = {};
    if (books.length > 0 && books) {
      book = books.find(item => item.id === String(book_id));
    }
    this.state = {
      value: book,
      data: []
    };
  }
  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      value: {
        ...prevState.value,
        [name]: value
      }
    }));
  };

  editUser = () => {
    this.handleUpload();
    //this.props.editUser(this.state.value.id, this.state.value);
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
            this.props.editUser({
              ...this.state.value.id,
              ...this.state.value,
              img: url
            });
          });
      }
    );
  };

  render() {
    //console.log(this.state.value);
    let user = this.state.value;
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">UPDATE CATEGORY</h3>

                <div className="containerTable">
                  <form onSubmit={this.onSubmit} className="formAdd">
                    <div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter book's quantity"
                          name="name"
                          defaultValue={user.name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">AGE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter book's name"
                          name="age"
                          defaultValue={user.age}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">PHONE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter book's quantity"
                          name="phone"
                          defaultValue={user.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">CLASS</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter book's status"
                          name="classes"
                          defaultValue={user.classes}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <img
                          width="60px"
                          src={user.img}
                          className="img-fluid"
                          alt=""
                        />
                        <label htmlFor="exampleInputPassword1">IMAGE</label>
                        <input
                          type="file"
                          className="form-control-file"
                          name="img"
                          // defaultValue={item.img}
                          onChange={this.handleImage}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.editUser}
                      >
                        UPDATE
                      </button>
                    </div>
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
export default withFirebase(FormUpdateUser);

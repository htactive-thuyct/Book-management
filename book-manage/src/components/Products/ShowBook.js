import React from "./node_modules/react";
import { withFirebase } from "../firebase/context";
class ShowBook extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      Books: []
    };
  }
  deleteBook = id => {
    this.props.deleteBook(id);
  };

  componentDidMount() {
    this.props.firebase.getBooks().on("value", snapshot => {
      const bookObject = snapshot.val();
      if (bookObject) {
        const objectList = Object.keys(bookObject).map(key => ({
          ...bookObject[key],
          id: key
        }));
        this.setState({
          Books: objectList
        });
      } else {
        this.setState({ Books: [] });
      }
    });
  }
  render() {
    const { Books } = this.state;
    return (
      <table style={{ marginTop: "60px" }} className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>
                  <img
                    src={item.img}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <i className="fa fa-trash" onClick={this.deleteBook} />
                  <i className="fa fa-pencil" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default withFirebase(ShowBook);

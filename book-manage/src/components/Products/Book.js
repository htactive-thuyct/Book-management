import React from "./node_modules/react";
import AddBook from "./AddBook.js";
import ShowBook from "./ShowBook.js";
import { withFirebase } from "../firebase/context";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: []
    };
  }

  addBook = book => {
    const { name, quantity, img, id, status } = book;
    this.props.firebase.addBooks().push({ name, quantity, img, id, status });
  };

  deleteBook = id => {
    this.props.firebase.deleteBook(id).remove();
  };

  render() {
    return (
      <div>
        <AddBook addBook={this.addBook} />
        <ShowBook deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default withFirebase(Book);

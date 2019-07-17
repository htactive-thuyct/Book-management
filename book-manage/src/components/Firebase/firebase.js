import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB84FbDwPkvlzszEVyU-hG0eGYYhkrbPp0",
  authDomain: "books-manage-460a6.firebaseapp.com",
  databaseURL: "https://books-manage-460a6.firebaseio.com",
  projectId: "books-manage-460a6",
  storageBucket: "books-manage-460a6.appspot.com",
  messagingSenderId: "706686380498",
  appId: "1:706686380498:web:c4d38e4ea9f155bc"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }
  // storage = Firebase.app().storage("gs://my-custom-bucket");
  getBooks = () => this.db.ref("Book");
  addBooks = () => this.db.ref("Book");

  // editCategories = index => this.db.ref(`Categories/${index}`);
}

export default Firebase;

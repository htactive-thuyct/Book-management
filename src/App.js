import React from "react";
import Header from "./components/layout/Header";
import LeftMenu from "./components/layout/LeftMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { withFirebase } from "./components/Firebase/context";

import "./App.css";

import ProductList from "./components/products/ProductList";
import FormAddBook from "./components/products/FormAddBook";

import CategoriesList from "./components/categories/CategoriesList";
import FormAddCategories from "./components/categories/FormAddCategories";
import FormUpdateCate from "./components/categories/FormUpdateCate";

import UserList from "./components/users/UserList";
import FormAddUser from "./components/users/FormAddUser";
import FormUpdateUser from "./components/users/FormUpdateUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      users: []
    };
  }

  getTableCall(table, index) {
    switch (table) {
      case "categories": {
        return this.props.firebase.getCategories(index);
      }
      case "products": {
        return this.props.firebase.books(index);
      }
      case "users": {
        return this.props.firebase.users(index);
      }
      default: {
        return "";
      }
    }
  }

  getData = table => {
    let tableCall = this.getTableCall(table);
    tableCall.on("value", snapshot => {
      const object = snapshot.val();
      if (object) {
        const objectList = Object.keys(object).map(key => ({
          ...object[key],
          id: key
        }));
        this.setState({
          [table]: objectList
        });
      } else {
        this.setState({
          [table]: []
        });
      }
    });
  };

  componentDidMount() {
    this.getData("categories");
    this.getData("products");
    this.getData("users");
  }

  addCategory = name => {
    this.props.firebase.getCategories().push({ name });
    this.setState({
      name: ""
    });
  };

  deleteCategory = index => {
    this.props.firebase.categories(index).remove();
  };

  editCategories = (index, data) => {
    this.props.firebase.categories(index).set({
      name: data
    });
  };

  addUser = user => {
    const { name, age, img, classes, phone } = user;
    this.props.firebase.users().push({ name, age, img, classes, phone });
  };

  deleteUser = index => {
    this.props.firebase.queryUsers(index).remove();
  };

  editUser = (index, data) => {
    const { name, age, img, classes, phone } = data;
    this.props.firebase.queryUsers(index).set({
      img: img,
      name: name,
      classes: classes,
      phone: phone,
      age: age
    });
  };

  addBook = book => {
    // console.log(book);
    const { name, type, quantity, status, image } = book;
    this.props.firebase.books().push({ name, type, quantity, status, image });
  };

  deleteBook = index => {
    this.props.firebase.queryBooks(index).remove();
  };

  editBook = (index, data) => {
    this.props.firebase.queryBooks(index).set({
      newUser: data
    });
  };

  render() {
    const { categories, products, users } = this.state;
    return (
      <Router>
        <Header />
        <div className="app-main">
          <LeftMenu />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route
              path="/users"
              component={() => (
                <UserList users={users} deleteUser={this.deleteUser} />
              )}
            />
            <Route
              path="/books"
              component={() => (
                <ProductList products={products} deleteBook={this.deleteBook} />
              )}
            />
            <Route
              path="/categories"
              component={() => (
                <CategoriesList
                  categories={categories}
                  deleteCategory={this.deleteCategory}
                />
              )}
            />
          </Switch>

          <Route
            path="/addBook"
            component={() => <FormAddBook addBook={this.addBook} />}
          />
          <Route
            path="/updateCategory/:id"
            component={match => (
              <FormUpdateCate
                categories={categories}
                editCategories={this.editCategories}
                match={match}
              />
            )}
          />
          <Route
            path="/addCategory"
            component={() => (
              <FormAddCategories addCategory={this.addCategory} />
            )}
          />

          <Route
            path="/addUser"
            component={() => <FormAddUser addUser={this.addUser} />}
          />
          <Route
            path="/updateUser/:id"
            component={match => (
              <FormUpdateUser
                users={users}
                editUser={this.editUser}
                match={match}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
import React from "react";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;

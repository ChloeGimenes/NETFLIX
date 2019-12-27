import React, { Component } from "react";
import "./App.css";
import { Header } from "./components";
import { Home } from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header badge={15} />
        <Home />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <FontAwesomeIcon icon={faCoffee} size="5x" />
        <h3>NETFLIX</h3>
        <FontAwesomeIcon icon={faHeart} size="5x" />
        <div className="header--badge">{this.props.badge}</div>
      </div>
    );
  }
}

export { Header };

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNumber } from '../actions/movies'
import FontAwesome from "react-fontawesome";
import "../css/Header.css";
import firebase from 'firebase';
import { NETFLIX_APP_LOGGED } from '../utils/helpers';


// import { ReactReduxContext } from "react-redux";
// import { movieReducer } from "../reducers/movies";

class HeaderComponent extends Component {


  componentDidMount() {
      this.props.getNumber();


  }

   refreshPage() {
    window.location.reload(false);
   }

    clearLocal() {
    window.location.reload(false);

      localStorage.clear();
  }
  



  render() {

    return (

      <div className="header">
        <div className="soft">
        <Link to={{ pathname : "/"}} >
        <FontAwesome className="header--movie" name='film' size="4x" />
        </Link>
        </div>

        <div className="soft" onClick={this.refreshPage} >
        <h3>FAKEFLIX</h3>
        </div>

        {/* <p>WELCOME {firebase.auth().currentUser.displayName}</p> */}
      
    <div className="header-right-corner">
        <div className="soft">
        <Link to={{ pathname:"/player"}} >
          <FontAwesome className="header--heart" name='heart' size="4x" />
        </Link>
        </div>
        <div className="header--badge">{this.props.badge}</div>
        
        <div className="soft" id="trash">
        <FontAwesome className="header--trash" onClick={this.clearLocal} name='ban' size="3x" />
        </div>
    </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      badge: state.movies.number
  }
}

// state = {
//   movies: {
//     movies : [],
//     number: 0,
//   }
// }

const mapDispatchToProps = dispatch => {
return {
  getNumber : () => dispatch(getNumber())
  }
}


const Header = connect (mapStateToProps, mapDispatchToProps)(HeaderComponent);

export { Header };

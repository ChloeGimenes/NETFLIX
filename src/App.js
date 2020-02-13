import React, { Component } from "react";
import "./App.css";
import { Header } from "./components";
import { Home } from './routes';

class App extends Component {
state = {
loading : false ,
movies : [
  {
    backdrop_path: './images/Fast_large.jpg',
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: './images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: './images/Fast_large.jpg',
    id: 475558,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: './images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: './images/Fast_large.jpg',
    id: 475559,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: './images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: './images/Fast_large.jpg',
    id: 475554,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: './images/Fast_small.jpg',
    title: "Joker"
  }
],

badge : 0, 
image : './images/Fast_small.jpg',
mTitle : 'Fast and Furious',
mDesc : 'lorem ipsum blablablablabla',
activePage : 0,
totalPages: 0,
searchText: '',
}


  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home 
        {...this.state}


        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { HeaderImg } from '../components';


const movies = [
  {
    backdrop_path: require("./n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"),
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: require('/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg'),
    title: "Joker"
  },
  {
    backdrop_path: require("/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"),
    id: 475558,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: require('/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg'),
    title: "Joker"
  },
  {
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    id: 475559,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: require('/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg'),
    title: "Joker"
  },
  {
    backdrop_path: require('/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'),
    id: 475554,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: require('../tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg'),
    title: "Joker"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div><HeaderImg 
      title="Fast an Furious"
       overview="Lorem Ipsum"
       imgSrc={require('../../public/images/Fast_large.jpg')}

    /></div>;
  }
}

export { Home };

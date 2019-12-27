import React, { Component } from 'react';
import { HeaderImg } from '../components';


const movies = [
  {
    backdrop_path: '../../images/Fast_large.jpg',
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: '../../images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: '../images/Fast_large.jpg',
    id: 475558,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: '../images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: '../images/Fast_large.jpg',
    id: 475559,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: '../images/Fast_small.jpg',
    title: "Joker"
  },
  {
    backdrop_path: '../images/Fast_large.jpg',
    id: 475554,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: '../images/Fast_.jpg',
    title: "Joker"
  }
];

class Home extends Component {
 
  render() {
    return <div><HeaderImg 
      title="Fast an Furious"
       overview="Lorem Ipsum"
       imgSrc='./images/Fast_large.jpg'

    /></div>;
  }
}

export { Home };

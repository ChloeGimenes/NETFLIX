import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import { Header } from "./components";
import { Home } from './routes';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';

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



async componentDidMount () {
  try {
const { data: { results, page, total_pages }} = await this.loadMovies();
console.log('res', results);
this.setState({
  movies: results,
  loading: false,
  activePage: page,
  totalPages: total_pages,
  image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
  mTitle: results[0].title,
  mDesc : results[0].overview,
})

  } catch (e) { 

  }
}

loadMore = async() => {
  try {
    this.setState({ loading : true})
    const { data: { results, page, total_pages }} = await this.loadMovies();
   console.log('res', results);
   this.setState({
  movies: [...this.state.movies, ...results],
  loading: false,
  activePage: page,
  totalPages: total_pages,
  image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
  mTitle: results[0].title,
  mDesc : results[0].overview,
})

  } catch (e) {
    console.log('error loading more movies', e)
  }
 // lancer une requête 
 console.log ('load more')
}


loadMovies = () => {
  const page = this.state.activePage + 1;
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
  return axios.get(url);
}

searchMovie = () => {
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
  return axios.get(url);
}

handleSearch = value => {

  try {
    this.setState({ loading : true, searchText: value, image: null}, async() => {
    const { data: { results, page, total_pages }} = await this.searchMovie();
    console.log('res', results);
    this.setState({
      movies: results,
      loading: false,
      activePage: page,
      totalPages: total_pages,
      image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
      mTitle: results[0].title,
      mDesc : results[0].overview,
    }) 
  })
} catch(e) {
  console.log('e', e)
 }
    
  console.log ('handleSearch', value)
}

  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home 
        {...this.state}
        onSearchClick={this.handleSearch}
        onButtonClick={this.loadMore}

        />
      </div>
    );
  }
}

export default App;

import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER} from './index' ;

export const addMovie = movie => {

    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
        movies = [...movies, movie]
    } else { 
        movies = [];
        movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: ADD_MOVIE,
        payload: movie, 
    }
}

export const removeMovie = movieId => {

    const oldMovies = JSON.parse(localStorage.getItem("movie"));
    const movies = oldMovies.filter(movie => movie.id !== movieId );
    localStorage.setItem('movies', JSON.stringify(movies));
    return {
        type: REMOVE_MOVIE,
        payload: movies
    }
}

export const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem("movie"));

    return {
        type: GET_MOVIES,
        payload: movies
    }


}

export const getNumber = () => {

    const movies = JSON.parse(localStorage.getItem("movie"));
  
    let number;
    if (movies) {
        number = movies.lenght;
    } else {
        number = 0 ;
    }
    return {
        type: GET_NUMBER,
        payload: number
    }


}
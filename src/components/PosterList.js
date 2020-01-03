import React, { Component } from 'react';
import { Poster } from './index';
import '../css/PosterList.css';



let wish;


class PosterList extends Component {

 
    render() {

        return ( 
            <div className="posterList">
                <h3 className="posterList--title"> NOUVEAUX FILMS</h3>
                <div className="posterList--grid">
                {this.props.movies.map(movie => {
                    const imgSrc = movie.poster_path;
                    wish = false
                    return (<Poster 
                        key={movie.id}
                        imgSrc={imgSrc}
                        hover={false}
                        wished={wish}
                        movie={movie}
                        mTitle={movie.title}
                        mDesc={movie.overview}
                        />)})}
                </div>
            </div>
        )
    }
}
    
    export { PosterList };
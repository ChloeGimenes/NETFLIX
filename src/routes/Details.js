import React, { Component } from 'react';
import axios from 'axios';

import { Spinner, HeaderDetails, ActorList} from '../components';
import {API_URL, API_KEY} from '../config';


    

class Details extends Component {
    
        
        state = { 

            loading: true,
            actors: [
        {
            name: 'Jules Kisioni',
        },
        {
            name: 'Hugo Robs',
        },
        {
            name: 'kate Hudson',
        },
        {
            name: 'Josh Lofy',
        }
    ],
   
    mTitle : 'Batman',
    mDesc: 'Voici la description du fil Batman',
    imgSrc: './images/Fast_large.jpg',
    runtime: '2h30',
    revenue: '$257849',
    status: 'Released',
    vote: ''

    }



async componentDidMount() {

    try {
        const movieId= this.props.match.params.id;
        const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language-fr`;

        const { data : {
            revenue, 
            runtime,
            title,
            overview,
            status,
            vote_average,
            poster_path,
        }} = await this.loadInfos(url);
        this.setState({ 
            revenue,
            runtime,
            mTitle: title,
            mDesc: overview,
            status,
            imgSrc: poster_path,
            vote: vote_average,
         

        }, async () => {

            const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language-fr`;

            const { data : { cast } } =  await this.loadInfos(url);
            this.setState({ actors : [...cast], loading: false}) ;

        })

        

    } catch(e) {
        console.log('e', e)
    }
}

loadInfos = url => axios.get(url);

    render() { 

        const { loading, actors, mDesc, mTitle, imgSrc, revenue, runtime, status, vote} = this.state;

        return (  
            <div className="App">
                {loading ?
                (
                    <Spinner />
                ) : (
                    <div>
                    <HeaderDetails 
                    mTitle={mTitle}
                    mDesc={mDesc}
                    imgSrc={imgSrc}
                    runtime={runtime}
                    revenue={revenue}
                    status={status}
                    vote={vote}
                    />
                    <ActorList actors={actors}/>
                    </div>
                )}
            </div>
        )
    }
}
 
export {Details};
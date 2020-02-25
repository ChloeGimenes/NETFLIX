import React, { Component } from 'react';

import { Spinner, HeaderDetails, ActorList} from '../components';


    

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
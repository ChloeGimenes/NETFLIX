import React, { Component } from 'react';

import { Spinner, HeaderDetails, ActorList} from '../components';

const actors = [
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
]

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="App">
                {this.props.loading ?
                (
                    <Spinner />
                ) : (
                    <div>
                    <HeaderDetails 
                    mTitle={"Batman"}
                    mDesc={"Voici la description du fil Batman"}
                    imgSrc={'./images/Fast_large.jpg'}
                    runtime={'2h30'}
                    revenue={'$257849'}
                    status={'Released'}
                    vote={''}
                    />
                    <ActorList actors={actors}/>
                    </div>
                )}
            </div>
        )
    }
}
 
export {Details};
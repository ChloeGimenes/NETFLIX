import React from 'react';
import '../css/Spinner.css'



const Spinner = () => {

    return ( 
       
        <div className="container-a">
        
        <span className="dot"></span>

        <div className="dots">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>

        )
}

export { Spinner };
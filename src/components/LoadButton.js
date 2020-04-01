import React, { Component } from 'react';
import { Spinner } from './index';
import '../css/LoadButton.css';



class LoadButton extends Component {
    render () {
        return ( 
            <>
            {this.props.loading ?
            
            (
                <Spinner
                />
             )
        :
    (  <div className="load">
        <div className="loadButton" onClick={this.props.onButtonClick}>
            <h3 className="loadButton--text">VOIR PLUS</h3>
        </div>
        </div>
     )}
     </>
         )
    }
}
 
export { LoadButton };
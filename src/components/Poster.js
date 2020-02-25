import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import '../css/Poster.css';

class Poster extends Component {
  
state = {
    hover: false,
    wished: false,
}



    render() {
        return (
            <div  
            
            className="poster">
            <Link to={{ pathname:`/${this.props.id}`}}>
            <img className="poster--img" src={this.props.imgSrc} alt="poster" />
            </Link>
            
            {this.state.hover ?
            ( 
            <div className="poster--overlay">
                <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                {this.props.wished ?
                ( 
                    <FontAwesome  onClick={this.remove} className="poster--icon" name="heart" size="3x" />
                ) : (
                    <FontAwesome onClick={this.add}className="poster--icon__not" name="heart-o" size="3x" />
                )
                }

                </div>

                ) : null }

            </div>
        )
    }
}

export { Poster };


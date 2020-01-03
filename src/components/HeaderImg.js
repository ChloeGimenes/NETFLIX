import React, { Component } from 'react';
import '../css/HeaderImg.css';


class HeaderImg extends Component {
render() {
    console.log(this.props.imgSrc)

    return (
        <div className="headerImg"
        style={{ 
            backgroundImage: `url(${this.props.imgSrc})`
        }}>
            <div className="headerImg--overlay">

                <h3 className="headerImg-overlay__title">{this.props.title}</h3>
                <p className="headerImg-overlay__desc">{this.props.overview}</p>
            </div>
        </div>
    )
}

}


export { HeaderImg };
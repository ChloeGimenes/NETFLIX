import React, { PureComponent } from 'react'


class Poster extends PureComponent {
  

    render() {
        return (
            <div className="poster">
            <img className="poster--img" src={this.props.imgSrc} alt="poster" />
            {this.props}

            </div>
        )
    }
}

export { Poster };


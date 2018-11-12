import React, { Component } from 'react';

class StaticStarRatingBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating
        }
    }

    displayStars(rating) {
        const stars = [];

        for(let i = 1; i <= 5; i++) {
            if(rating >= i)
                stars.push(<span key={i}>&#9733;</span>);
            else
                stars.push(<span key={i}>&#9734;</span>);
        }

        return (
            <div>{stars}</div>
        );
    }

    render() {
        const rating = this.state.rating;

        return (
            <div className="star-rating-box">
                {this.displayStars(rating)}{(this.props.displayNumber ? rating : '')}
            </div>
        );
    }
}

export default StaticStarRatingBox;
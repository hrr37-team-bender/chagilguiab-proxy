import React from 'react';

class Rating extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let rating = Math.round(this.props.rating);
    let stars = [];
    while (rating > 0) {
      stars.push(1);
      rating--;
    };
    while (stars.length < 5) {
      stars.push(0);
    }
    let emptyStar = <span className="unchecked">★</span>;
    let fullStar = <span className="checked">★</span>;


    return (
      <div className="rating">
        {stars.map((num) => {
          return num === 0 ? emptyStar : fullStar})}
          &nbsp;&nbsp;
        {this.props.rating}
      </div>
    )
  }

}

export default Rating;
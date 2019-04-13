import React from 'react';
import styles from '../css-modules/Features.css';

const Features = (props) => (
  <div className="features-div">
    <ul className="features-ul">
      {props.features.map((feature, idx) => {
        return <li key={idx}>{feature}</li>
      })}
    </ul>
  </div>
)

export default Features;
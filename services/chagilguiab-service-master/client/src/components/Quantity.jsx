import React from 'react';

const Quantity = (props) => (
  <div className="quantity">
    <button className="quant-btn" onClick={props.minus}><span className="quant-txt">-</span></button>
    <div className="quant-div">{` ${props.quantity} `}</div>
    <button className="quant-btn" onClick={props.plus}><span className="quant-txt">+</span></button>
  </div>
);

export default Quantity;
import React from 'react';
import Quantity from './Quantity.jsx';

const Cart = (props) => (
<div>
  <button onClick={props.onClick} className="btn"><i className="fas fa-shopping-cart"></i> Add To Cart</button>
</div>
);

export default Cart;
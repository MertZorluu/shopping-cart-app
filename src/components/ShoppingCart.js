import React from 'react';
import CreateCart from './CreateCart';
import '../styles/shoppingCart.css';
import { products } from '../products/data.js';

const ShoppingCart = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {products.map((product, index) => (
          <CreateCart data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;

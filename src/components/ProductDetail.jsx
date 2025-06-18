import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products/data';
import styles from '../styles/product-detail.css';
import { useNavigate } from 'react-router-dom';


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }
 
  return (
    <div className="product-detail">
      <div className="header-content">
        <h1>{product.name}</h1>
        <img src={product.frontSrc} alt={product.name} />
        <p>{product.details}</p>
      </div>
      <div className="product-description">
        <h2>Description</h2>
        <p>
          Add a touch of laid-back charm to your wardrobe with our Cropped Stay
          Groovy Off White T-shirt. Perfect for those who want to stay
          comfortable while still looking stylish. The relaxed fit and soft
          fabric make it a go-to for casual days. Whether paired with your
          favorite jeans or a skirt, this tee is a versatile piece you'll reach
          for again and again. Ideal for layering or wearing solo.
        </p>
      </div>
      <p>Price: ${product.price}</p>
      <p>Quantity available: {product.count}</p>

      <button className='cart-btn' onClick={()=>{navigate('/')}}>Back to Shopping</button>
    </div>
  );
};

export default ProductDetail;

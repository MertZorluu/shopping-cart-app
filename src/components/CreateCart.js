import React, { useState, useContext} from 'react';
import '../styles/createCart.css';
import { ShopContext } from '../context/ShopContext';
import '../styles/drawerBasket.css';
import { useNavigate } from 'react-router-dom';


const CreateCart = ({ data }) => {
  const [imageChange, setImageChange] = useState(data.frontSrc);
  const { basketList, setBasketList } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    const existingItemIndex = basketList.findIndex(
      (basketItem) => basketItem.id === data.id,
    );

    if (existingItemIndex !== -1) {
      const updatedBasketList = [...basketList];
      updatedBasketList[existingItemIndex].quantity += 1;
      setBasketList(updatedBasketList);
    } else {
      setBasketList([...basketList, { ...data, quantity: 1 }]);
    }
  };

  const navigateToDetail = () => {
    navigate(`/product/${data.id}`); 
  }

  return (
    <div className="container">
      <div className="cart-images" onClick={navigateToDetail}>
        <img
          src={imageChange}
          onMouseOver={() => {
            setImageChange(data.backSrc);
          }}
          onMouseLeave={() => {
            setImageChange(data.frontSrc);
          }}
        />
        <div className="free-shipping">Free Shipping</div>
      </div>

      <p className="product">{data.name}</p>
      <span className="divider"></span>
      <div className="cost-section">
        <p className="cost-option-1">
          <span className="dollar-sign">$</span>
          <span className="price">
            {Number(data.price.toString().split('.')[0]).toLocaleString(2)}
          </span>
          .{Number(data.price.toFixed(2).toString().split('.')[1])}
        </p>
        {data.count > 1 ? (
          <p className="cost-option-2"> 
            or {data.count} x
            <span>
              $
              {(data.price / data.count).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
        ) : (
          <p className='qweqwe'> </p>
        )}
      </div>
      <button className="cart-btn" onClick={handleAddToBasket}>
        Add to cart
      </button>
    </div>
  );
};

export default CreateCart;

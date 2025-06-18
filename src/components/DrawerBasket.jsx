import React, { useState, useContext, useEffect } from 'react';
import ShoppingCart from './ShoppingCart.js';
import SideBar from './SideBar.js';
import Header from './Header.js';
import '../styles/drawerBasket.css';
import icon from '../icons/icon.png';
import { ShopContext } from '../context/ShopContext.jsx';
import '../styles/createCart.css';

export const DrawerBasket = () => {
  const [basketCount, setBasketCount] = useState(0);
 
  const {
    basketList,
    setBasketList,
    totalPrice,
    setTotalPrice,
    isOpen,
    setIsOpen,
  } = useContext(ShopContext);

  const handleDeleteFromBasket = (index) => {
    setBasketList((basketList) => basketList.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setTotalPrice(
      basketList
        .reduce((total, { price, quantity }) => total + price * quantity, 0)
        .toFixed(2),
    );
    setBasketCount(
      basketList.reduce((total, { quantity }) => total + quantity, 0),
    );
  }, [basketList]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const incrementQuantity = (index) => {
    const updatedBasketList = [...basketList];
    updatedBasketList[index].quantity += 1;
    setBasketList(updatedBasketList);
  };

  const decrementQuantity = (index) => {
    const updatedBasketList = [...basketList];
    if (updatedBasketList[index].quantity > 1) {
      updatedBasketList[index].quantity -= 1;
      setBasketList(updatedBasketList);
    } else {
      setBasketList((basketlist) => basketlist.filter((_, i) => i !== index));
    }
  };

  const alertForPrice = basketList
    .reduce((total, { price }) => total + price, 0)
    .toFixed(2);
  const checkoutMsg = () => {
    alert(`It will do : ${'$' + alertForPrice}. You can use credit cart :)`);
  };

  return (
    <div>
      <section class="product-banner">
        <div class="banner-content">
          <h1>Exclusive Deals on Your Favorite Products!</h1>
          <p>
            Shop now and get up to 50% off on selected items. Limited time
            offer!
          </p>
        </div>
      </section>
      <div onClick={toggleDrawer}>
        <img className="icon" src={icon} />
        <span className="item-count">{basketCount}</span>
      </div>

      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="close-btn">
          <button onClick={toggleDrawer}>
            <span>X</span>
          </button>
        </div>
        <div>
          <div className="img-cart-section">
            <div className="icon-basket">
              <img src={icon} />
              <span>{basketCount}</span>
            </div>
            <p>Cart</p>
          </div>
          <div className="add-to-cart">
            {basketList.length > 0 ? (
              basketList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="divider-basket"></div>
                    <div className="basket-items">
                      <img src={item.frontSrc} alt={item.name} />
                      <div className="item-properties">
                        <p className="item-name">{item.name}</p>
                        <p>{item.details}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="basket-price">
                        <button
                          className="delete-items"
                          onClick={() => handleDeleteFromBasket(index)}
                        >
                          X
                        </button>
                        <p className="item-price">${item.price}</p>
                        <div>
                          <button
                            className="item-decrement"
                            onClick={() => decrementQuantity(index)}
                          >
                            -
                          </button>
                          <button
                            className="item-increment"
                            onClick={() => incrementQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-basket">
                Add some products in the cart :)
              </div>
            )}
          </div>
          <div className="total-cost-section">
            <div className="cost-section-basket">
              <span className="subtotal">SUBTOTAL</span>
              <span className="total-cost">$ {totalPrice}</span>
            </div>
            <button className="checkout-button" onClick={checkoutMsg}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper-containers">
        <SideBar />
        <div className="display-column">
          <Header />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default DrawerBasket;

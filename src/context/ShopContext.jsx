import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);
 
export const ShopContextProvider = (props) => {
  const [basketList, setBasketList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const contextValue = { basketList, setBasketList, totalPrice, setTotalPrice, isOpen, setIsOpen };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

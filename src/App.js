import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DrawerBasket from './components/DrawerBasket';
import CreateCart from './components/CreateCart'; 
import ProductDetail from './components/ProductDetail'; 
import './styles/app.css';  
import { ShopContextProvider } from './context/ShopContext';
 
function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<DrawerBasket />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;

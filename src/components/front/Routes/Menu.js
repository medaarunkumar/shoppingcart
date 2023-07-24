import React from 'react';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { Route, Routes } from 'react-router-dom';



const Menu= ({productItems, 
  cartItems, 
  handleAddProduct, 
  handleRemoveProduct,
  handleCartClearance})=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />}></Route>
      </Routes>
         
    </div>
  )
}

export default Menu;

//  creating and exporting a context to use  all product in the shopCategory pages such as men, women, and kids

import { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

//function for creating an empty cart. Empty cart is an object key : productId, value: Quantity of the product added in the cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  //useState variable for setCartItems
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //addToCart function - can add products in cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  //removeFromCart function - can remove products from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //getTotalAmount function - helps calculate tolal amount of cartItem
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) 
        {
          let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        )
          totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;
    }
  };

  const ContextValue = {
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

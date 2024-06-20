//  creating and exporting a context to use  all product in the shopCategory pages such as men, women, and kids

import { createContext } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const ContextValue = { all_products };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

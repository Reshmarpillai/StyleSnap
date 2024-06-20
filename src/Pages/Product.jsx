import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Components/Braedcrumbs/Breadcrumbs";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const { all_products } = useContext(ShopContext);

  //using useParams hook to change the URL path. ProductId hold the changing path.
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

import React from "react";
import ProductsList from "./productsList";

import "./style.scss";

const ProductsWrap = () => (
  <section className="products">
    <h1 className="products__titulo">últimos produtos</h1>
    <ProductsList />
  </section>
);

export default ProductsWrap;

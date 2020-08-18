import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStorage";
import Container from "@material-ui/core/Container";
import ProductItem from "./productItem";
import products from "../../data/products.json";

const ProductsList = () => {
  const { insertProductToCart, selectedItems } = useContext(GlobalContext);

  return (
    <Container className="products-item-wrap">
      {products.map((product) => {
        const { name, images, Value } = product;
        return (
          <ProductItem
            key={name}
            name={name}
            image={images[0].imageUrl}
            value={Value}
            handleClick={insertProductToCart}
            isSelected={selectedItems}
          />
        );
      })}
    </Container>
  );
};

export default ProductsList;

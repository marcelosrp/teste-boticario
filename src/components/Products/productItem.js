import React from "react";
import { PropTypes } from 'prop-types';
import { formatter } from "../../utils/utils";

const ProductItem = ({ name, image, value, handleClick, isSelected }) => {
  return (
    <div
      className={isSelected.includes(name) ? 'products-item-wrap__item selected' : 'products-item-wrap__item'}
      onClick={() => handleClick(`${value}`, name)}
    >
      <img width="200" src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-value">{formatter.format(`${value}`)}</p>
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ProductItem;

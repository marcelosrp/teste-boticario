import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productValue, setProductValue] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(null);

  const insertProductToCart = (value, name, image) => {
    const obj = {
      value,
      name,
      image,
    };

    setProductValue([...productValue, parseFloat(value)]);
    setProducts([...products, obj]);
    selectingProductItem(name);
  };

  const selectingProductItem = (name) => {
    const alreadySelected = selectedItems.findIndex((item) => item === name);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== name);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  useEffect(() => {
    const sum = productValue.reduce((a, b) => a + b, 0);
    setTotal(sum);
  }, [productValue]);

  return (
    <GlobalContext.Provider
      value={{ insertProductToCart, total, selectedItems, products }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

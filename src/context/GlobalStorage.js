import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [productValue, setProductValue] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(null);

  // Coloca o valor do produto carrinho e chama a função para deixar o produto selecionado após ao clique
  const insertProductToCart = (value, name) => {
    setProductValue([...productValue, parseFloat(value)]);

    selectingProductItem(name);
  };

  // Função que add em um array todos os produtos clicados para ativar a classe de selecionado
  const selectingProductItem = (name) => {
    const alreadySelected = selectedItems.findIndex((item) => item === name);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== name);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  // Efeito que é chamado sempre que o state do produto clicado sofre mudança e refaz a soma do valor total do carrinho
  useEffect(() => {
    const sum = productValue.reduce((a, b) => a + b, 0);
    setTotal(sum);
  }, [productValue]);

  return (
    <GlobalContext.Provider
      value={{ insertProductToCart, total, selectedItems }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

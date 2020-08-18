import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStorage";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = () => {
  const { total } = useContext(GlobalContext);

  return (
    <div className="header__cart">
      <ShoppingCartIcon />
      {total !== 0 && <p>R$ {parseFloat(total).toFixed(2)}</p>}
    </div>
  );
};

export default Cart;

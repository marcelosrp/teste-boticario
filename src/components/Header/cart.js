import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalStorage";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = () => {
  const { total } = useContext(GlobalContext);

  return (
    <NavLink to="/cart" exact className="header__cart">
      <ShoppingCartIcon />
      {total !== 0 && <p>R$ {parseFloat(total).toFixed(2)}</p>}
    </NavLink>
  );
};

export default Cart;

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import carticon from '../assets/shopping_cart_white.svg';

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    // <Link to={'/cart'} style={{ display: total > 0 ? 'block' : 'none' }}>
    <Link to={'/cart'}>
      <div id="cart-widget">
        <img src={carticon} alt="imagen de carrito" />
        <span style={{ color: '#EB008B' }}> {total}</span>
      </div>
    </Link>
  );
};

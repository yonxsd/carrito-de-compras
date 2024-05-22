import React from 'react'
import '../css/carr.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/CartSlice';

const Carrito = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <ul className="carrito-lista">
        {items.map((item, index) => (
          <li key={index} className="carrito-item">
            <div className="carrito-item-info">
              
              <span className="carrito-item-name">{item.name}</span>
              <span className="carrito-item-price">{item.price}€</span>
            </div>
            <button className="carrito-item-remove" onClick={() => handleRemoveItem(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button className="carrito-clear" onClick={handleClearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Carrito

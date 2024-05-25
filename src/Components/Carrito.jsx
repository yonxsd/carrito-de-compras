import React from 'react'
import '../css/carr.css' // Importacion de estilos
import { useSelector, useDispatch } from 'react-redux';// Importa hooks de react-redux para interactuar con el estado global de Redux.
import { removeItem, clearCart } from '../features/cart/CartSlice';// Importa las acciones para eliminar un ítem y vaciar el carrito desde el slice del carrito.
import {  Link } from 'react-router-dom';// Importa componentes de react-router-dom para definir rutas y enlaces

const Carrito = () => {
    
  // Accede a los items del carrito desde el estado global de Redux
  const items = useSelector(state => state.cart.items);

  // Obtiene la función dispatch para enviar acciones al store de Redux
  const dispatch = useDispatch();

  // Función para manejar la eliminación de un ítem del carrito
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  
  // Función para manejar el vaciado del carrito
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calcula el precio total de los productos en el carrito
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    
  // Calcula el número total de productos en el carrito
  const itemCount = items.length;

  // Calcula el IVA del subtotal
  const iva = subtotal * 0.15;
  
  // Define el costo de envío
  const shippingCost = 10;

 // Calcula el total final sumando el subtotal, el IVA y el costo de envío
 const total = subtotal + iva + shippingCost;

  return (
    <div>
      {/* Contenedor principal del carrito */}
      <div className="carrito-container">
        {/*texto de produc..... */}
       <h2>Productos agregados</h2>
        <ul className="carrito-lista">
          {items.map((item, index) => (
            <li key={index} className="carrito-item">
              {/*img de los productos */}
               <img src={item.img} alt="" className='imgx'/>
              <div className="carrito-item-info">
                {/* Nombre y precio del producto */}
                <span className="carrito-item-name">{item.name}</span>
                <span className="carrito-item-price">${item.price}</span>
              </div>
              {/* Botón para eliminar el producto */}
              <button className="carrito-item-remove" onClick={() => handleRemoveItem(item)}><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
            </li>
          ))}
        </ul>
        {/* Botón para vaciar el carrito */}
        <button className="carrito-clear" onClick={handleClearCart}>Vaciar Carrito</button>
      </div>
      
      {/* Contenedor para mostrar el total de los productos */}
      <div className='total'>
        <h2>Resumen del Pedido</h2>
        <h3>Subtotal ({itemCount} productos): ${subtotal.toFixed(2)}</h3>
        <h3>IVA (15%): ${iva.toFixed(2)}</h3>
        <h3>Envío: ${shippingCost.toFixed(2)}</h3>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      <div className='regresar'>
        <button class="cta">
          <Link to="/" className='li'><span class="hover-underline-animation"> Regresar </span></Link>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>

      </div>
    
    </div>
  )
}

export default Carrito

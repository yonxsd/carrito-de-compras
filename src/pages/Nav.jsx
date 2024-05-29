import React from 'react'
import { useSelector } from 'react-redux';// Importa el hook useSelector de react-redux para acceder al estado de Redux
import car from '../img/carro-de-la-carretilla.png' // Importa la imagen del icono del carrito de compras
import logo from '../img/Blue Black Modern Simple Design Hotel and Resort Logo - Logos.png'
import { Route, Routes, Link } from 'react-router-dom';// Importa componentes de react-router-dom para definir rutas y enlaces
// Importa los componentes Carrito e Inicio que serán utilizados en las rutas
import Carrito from '../Components/Carrito';
import Inicio from '../Components/Inicio';
//importando el estilo de Nav
import '../css/Nav.css'

const Nav = () => {
  // Accede a los items del carrito desde el estado global de Redux
  const items = useSelector(state => state.cart.items);
  // Calcula el número total de productos en el carrito
  const itemCount = items.length;

  return (
    <div>
      {/*a qui se muestra lo qeu es el Nav y el carrito de compras */}
      
      <nav className='nav'> 
        
        <ul>
         <li>
          <Link to='/Carrito' className='cart-link'>
             <div className='cart-container'>
               <img src={logo} alt=""  className='logo'/>
                <img src={car} alt="carr" className='car'/>
                {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
             </div>
          </Link>
         </li>
        </ul>
       </nav>
       {/*react-rauter se utiliso para la navegacion entre el carrito  y los productos */}
       <Routes>
         <Route path='/' element={<Inicio />}/>
         <Route path='/Carrito' element={<Carrito />}/>
       </Routes>
    </div>
  )
}

export default Nav

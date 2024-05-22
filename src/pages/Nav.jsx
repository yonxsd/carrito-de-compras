import React from 'react'
import { useSelector } from 'react-redux';
import car from '../img/carro-de-la-carretilla.png'
import { Route, Routes, Link } from 'react-router-dom';
import Carrito from '../Components/Carrito';
import Inicio from '../Components/Inicio';
import '../css/Nav.css'

const Nav = () => {
  const items = useSelector(state => state.cart.items);
  const itemCount = items.length;

  return (
    <div>
      <nav className='nav'> 
        <ul>
         <li>
          <Link to='/Carrito'>
            <img src={car} alt="carr" className='car'/>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
         </li>
        </ul>
       </nav>
       <Routes>
         <Route path='/' element={<Inicio />}/>
         <Route path='/Carrito' element={<Carrito />}/>
       </Routes>
    </div>
  )
}

export default Nav

import React from 'react'
import "../css/Inicio.css"
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import Carrito from './Carrito';

const Inicio = () => {
   const dispatch = useDispatch();

  const products1 = [
    {
      id: 1,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 100
    },{
      id: 2,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 200
    },
    {
      id: 3,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 200
    },
    // Agrega más productos aquí si lo deseas
   ];
   const products2 = [
    {
      id: 4,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 400
    },{
      id: 5,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 500
    },
    {
      id: 6,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 600
    },
    // Agrega más productos aquí si lo deseas
   ];

   const handleAddItem = (product) => {
    dispatch(addItem(product));
   };
  return (
    <div>
       
      <div className='Inic'>
         {products1.map((product) => (
            <div className='inicop' key={product.id}>
              <img src={product.img} alt={product.name} />
              <h1>{product.name}</h1>
              <h2>{product.description}</h2>
              <button
               className='but'
               onClick={() => handleAddItem(product)}
              >
                Agregar
              </button>
           </div>
         ))}
        
      </div>  
      <div className='Inic'>
        {products2.map((product) => (
          <div className='inicop' key={product.id}>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <button
              className='but'
              onClick={() => handleAddItem(product)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inicio

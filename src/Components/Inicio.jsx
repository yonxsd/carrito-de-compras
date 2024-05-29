import React from 'react'
import "../css/Inicio.css"
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { Toaster, toast } from 'sonner';

const Inicio = () => {
  // Hook useDispatch para despachar acciones a Redux
  const dispatch = useDispatch();
 
  //lista de productos 1
  const products1 = [
    {
      id: 1,
      name: 'Amazon Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 100
    },{
      id: 2,
      name: 'Amazon audifonos',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://i.blogs.es/b6123e/airpods-pro-2-analisis-applesfera-026/1366_2000.jpeg',
      price: 200
    },
    {
      id: 3,
      name: 'Amazon batidora de pasteleria',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg',
      price: 500
    },
   ];
   //lista de productos 2
   const products2 = [
    {
      id: 4,
      name: 'mercado Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 400
    },{
      id: 5,
      name: 'libre Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 500
    },
    {
      id: 6,
      name: ' Echo (3rd generation)',
      description: 'Smart speaker with Alexa, Charcoal Fabric',
      img: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      price: 600
    },
  ];
  //manejadora para agregar productos al carrito  
  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
       {/*Rendirisar la primera lista de productos */}
      <div className='Inic'>
         {products1.map((product) => (
            <div className='inicop' key={product.id}>
              <img src={product.img} alt={product.name} />
              <h1>{product.name}</h1>
              <h2>{product.description}</h2>
              <button
               className='but'
               onClick={() => handleAddItem(product) }
              >
                
                <Toaster position="top-right" richColors/>
                <span  onClick={() => toast.success(product.name)} >Agregar</span>
              </button>
              
           </div>
         ))}
        
      </div>  

      {/*Rendirisar la segunda lista de productos */}
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
              
              <span  onClick={() => toast.success(product.name)} position="top-right"  richColors>Agregar</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inicio


// Importa createSlice de Redux Toolkit para crear el slice de estado.
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del carrito, una lista vacía de items.
const initialState = {
  items: []
};

const cartSlice = createSlice({
  // Nombre del slice
  name: 'cart',
  // Estado inicial del slice
  initialState,

  reducers: {
    //Agrega un item al carrito. state : estado actual de carrito , action: despachaque contiene el nuevo item en action.payload
    addItem: (state, action) => {
     // Buscar el ítem en el carrito
     const existingItem = state.items.find(item => item.id === action.payload.id);
     if (existingItem) {
       // Si el ítem ya existe, incrementar la cantidad
       existingItem.quantity += 1;
     } else {
       // Si el ítem no existe, agregarlo con cantidad 1
       state.items.push({ ...action.payload, quantity: 1 });
     }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    // borrar los item del acarrito
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); 
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Exporta las acciones generadas por createSlice
export const { addItem,incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;
// Exporta el reductor del slice del carrito
export default cartSlice.reducer;

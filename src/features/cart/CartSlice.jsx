
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
      state.items.push(action.payload);
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
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// Exporta el reductor del slice del carrito
export default cartSlice.reducer;

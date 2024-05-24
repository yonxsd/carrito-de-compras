import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import cartReducer from '../features/cart/CartSlice';

/**
 * Configuración de persistencia
 * - key: Clave principal para el almacenamiento persistente.
 * - storage: Motor de almacenamiento, en este caso localStorage.
 */
const persistConfig = {
  key: 'root',
  storage,
};
/**
 * Combina los reductores en un reductor raíz
 * - cart: Reducer del carrito envuelto con persistencia.
 */
const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
});


/**
 * Configuración del store de Redux
 * - reducer: El reductor raíz combinado.
 */
const store = configureStore({
  reducer: rootReducer,
});

/**
 * Exporta el persistor para controlar la persistencia del store
 */
export const persistor = persistStore(store);

// Exporta el store configurado.
export default store;
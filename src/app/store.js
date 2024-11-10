import { configureStore } from '@reduxjs/toolkit'
import cartReducer from  '../features/cartSlice'
import productReducer from  '../features/productSlice'
import uiReducer from  '../features/uiSlice'
import { loadState, saveState } from '../utils/localStorage';
const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    product:productReducer,
    ui:uiReducer
  },
  preloadedState, // Utiliza el estado precargado si existe
})
// Suscribe el almacenamiento en localStorage al cambio del estado
store.subscribe(() => {
  saveState(store.getState());
});
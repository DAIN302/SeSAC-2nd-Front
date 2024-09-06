import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSliceTemp';
import loginReducer from './loginSlice';
import navigationReducer from './navigationSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    navigation: navigationReducer,
  },
});

export default store;

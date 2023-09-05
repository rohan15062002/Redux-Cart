import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Cartslice";
import ProductSlice from './ProductSlice';

const store = configureStore({
    reducer: {
        // key value pair---any name can be given

        cart:cartReducer,
        product:ProductSlice
    }
  })

  export default store;
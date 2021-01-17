import {configureStore} from '@reduxjs/toolkit';


import carsReducer from './ducks/cars';
import cartReducer from './ducks/cart';

export default configureStore({
    reducer:{
        cars:carsReducer,
        cart:cartReducer
    }
})


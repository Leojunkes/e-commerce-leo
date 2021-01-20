import {configureStore} from '@reduxjs/toolkit';


import carsReducer from './ducks/cars';
import cartReducer from './ducks/cart';
import authReducer from './ducks/auth/index';

export default configureStore({
    reducer:{
        cars:carsReducer,
        cart:cartReducer,
        auth:authReducer

    }
})


import {configureStore} from '@reduxjs/toolkit';


import carsReducer from './ducks/cars';

export default configureStore({
    reducer:{
        cars:carsReducer
    }
})


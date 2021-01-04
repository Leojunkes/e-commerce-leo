import {createStore, combineReducers} from 'redux';

import carsreducer from './cars/index';

const rootreducers = combineReducers({
    cars:carsreducer
})

export default createStore(rootreducers)
import {createStore, combineReducers} from 'redux';

import reducer from '../cars/index';

const rootreducers = combineReducers({
    cars:reducer
});

export default createStore(rootreducers);
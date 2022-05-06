import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './types/reducer/places.reducer';

const rootReducer = combineReducers({
    places: placesReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './slices/appSlices';

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
});

export default store;

// import {configureStore, combineReducers,applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

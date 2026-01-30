import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/dataSlice.js';
const store=configureStore({
    reducer:{
        search: searchReducer
    }
});

export default store;

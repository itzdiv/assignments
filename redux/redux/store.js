import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter.js';
const store = configureStore({
reducer:{
counter: counterReducer
}
})

export default store;
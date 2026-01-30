import { createSlice } from "@reduxjs/toolkit";

 
 const counter = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increase: (state,actions) =>{
            const amount = Number(actions.payload) || 0;
            if(state.value + amount<=1000){
               state.value += amount;
            }
            
        },
        decrease: (state,actions) =>{
            const amount = Number(actions.payload) || 0;
            if(state.value - amount >=0){
                state.value -= amount;
            }
        }


    }

 })

 export const {increase,decrease} = counter.actions;
 export default counter.reducer
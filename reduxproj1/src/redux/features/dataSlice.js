import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTabs:'Gifs',
        loading:false,
        error:'',
        result:[]
    },
    reducers:{
        setQuery(state,actions){
            state.query=actions.payload
        },
        setActiveTabs(state,actions){
            state.activeTabs=actions.payload
        },
        setLoading(state,actions){
            state.loading=true;
            state.error=null;
        },
        setError(state,actions){
            state.error=actions.payload
            state.loading=false
        },
        setResult(state,actions){
            state.result=actions.payload;
            state.loading=false;
            state.error=null;
        },
        
    }
})

export const {setError,setActiveTabs,setLoading,setQuery,setResult}=searchSlice.actions;
export default searchSlice.reducer;
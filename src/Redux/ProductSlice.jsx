import {createSlice} from '@reduxjs/toolkit'

export const STATUSES=Object.freeze({
    SUCCESS:'SUCCESS',
    LOADING:'LOAIDNG',
    ERROR:'ERROR'
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },
    reducers:{
      setProducts(state,action){
       state.data=action.payload;
      },

      setStatus(state,action){
        state.status=action.payload;
      }
    }
})

export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer;

//Call APi using  Middleware

//alaways async function is passed their no other function is passed

export function fetchProduct(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res=await fetch("https://fakestoreapi.com/products");
            const data=await res.json();
            dispatch(setProducts(data)) ; 
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}
import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    products: [],
    currentIndex: 0,

 }
    export const Slider = createSlice({
        name: 'product',
        initialState,
        reducers:{
            setProductData: (state,action) =>{
                state.products = action.payload;
            },
            setCurrentIndex:(state,action) =>{
                state.currentIndex = action.payload;
            },
            setnextProduct:(state) =>{
        state.currentIndex =  (state.currentIndex + 1) % state.products.length;
            },
            setPrevious:(state) =>{
                state.currentIndex = (state.currentIndex -1) % state.products.length;
            }

                                    
        }

    })

    export const {setProductData,setCurrentIndex,setnextProduct,setPrevious} = Slider.actions;
    const slidereducer = Slider.reducer
    export default slidereducer